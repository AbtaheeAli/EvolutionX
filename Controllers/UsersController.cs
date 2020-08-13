using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EvolutionX.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.JsonPatch;

namespace EvolutionX.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public UsersController(DatabaseContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult<User>> PostUser(User user)
        {
            var alreadyHaveUserWithTheEmail = _context.Users.Any(existingUser => existingUser.Email.ToLower() == user.Email.ToLower());
            if (alreadyHaveUserWithTheEmail)
            {
                // Make a custom error response
                var response = new
                {
                    status = 400,
                    errors = new List<string>() { "This account already exists!" }
                };

                return BadRequest(response);
            }
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUser", new { id = user.Id }, user);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(int id, User user)
        {
            var userFromDB = await _context.Users.FirstOrDefaultAsync(x => x.Id == id);

            if (id != userFromDB.Id)
            {
                return BadRequest();
            }

            userFromDB.UserName = user.UserName;
            userFromDB.Email = user.Email;
            userFromDB.ApiKey = user.ApiKey;
            userFromDB.XboxProfileUserId = user.XboxProfileUserId;

            _context.Entry(userFromDB).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(user);
        }


        [HttpDelete("{id}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            if (user.Id != GetCurrentUserId())
            {
                return NotFound();
            }
            _context.Users.Remove(user);

            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserExists(int id)
        {
            return _context.Users.Any(user => user.Id == id);
        }

        private int GetCurrentUserId()
        {
            return int.Parse(User.Claims.FirstOrDefault(claim => claim.Type == "Id").Value);
        }
    }
}
