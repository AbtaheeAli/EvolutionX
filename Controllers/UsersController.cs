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

            // If the ID in the URL does not match the ID in the supplied request body, return a bad request
            if (id != userFromDB.Id)
            {
                return BadRequest();
            }

            userFromDB.UserName = user.UserName;
            userFromDB.Email = user.Email;
            userFromDB.ApiKey = user.ApiKey;
            userFromDB.XboxProfileUserId = user.XboxProfileUserId;

            // Tell the database to consider everything in user to be _updated_ values. When
            // the save happens the database will _replace_ the values in the database with the ones from user
            _context.Entry(userFromDB).State = EntityState.Modified;

            try
            {
                // Try to save these changes.
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Ooops, looks like there was an error, so check to see if the record we were
                // updating no longer exists.
                if (!UserExists(id))
                {
                    // If the record we tried to update was already deleted by someone else,
                    // return a `404` not found
                    return NotFound();
                }
                else
                {
                    // Otherwise throw the error back, which will cause the request to fail
                    // and generate an error to the client.
                    throw;
                }
            }

            // return NoContent to indicate the update was done. Alternatively you can use the
            // following to send back a copy of the updated data.
            //
            return Ok(user);
            //
            //return NoContent();
        }

        [HttpPatch("{id}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<ActionResult> Patch(int id, [FromBody] JsonPatchDocument<User> patchDoc)
        {
            if (patchDoc == null)
            {
                return BadRequest();
            }

            var userFromDB = await _context.Users.FirstOrDefaultAsync(x => x.Id == id);

            if (userFromDB == null)
            {
                return NotFound();
            }

            patchDoc.ApplyTo(userFromDB, ModelState);

            var isValid = TryValidateModel(userFromDB);

            if (!isValid)
            {
                return BadRequest(ModelState);
            }

            await _context.SaveChangesAsync();

            return NoContent();
        }


        [HttpDelete("{id}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> DeleteUser(int id)
        {
            // Find this user by looking for the specific id
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                // There wasn't a user with that id so return a `404` not found
                return NotFound();
            }

            if (user.Id != GetCurrentUserId())
            {
                return NotFound();
            }
            // Tell the database we want to remove this record
            _context.Users.Remove(user);

            // Tell the database to perform the deletion
            await _context.SaveChangesAsync();

            // return NoContent to indicate the update was done. Alternatively you can use the
            // following to send back a copy of the deleted data.
            //
            // return Ok(user)
            //
            return NoContent();
        }


        // Private helper method that looks up an existing user by the supplied id
        private bool UserExists(int id)
        {
            return _context.Users.Any(user => user.Id == id);
        }

        private int GetCurrentUserId()
        {
            // Get the User Id from the claim and then parse it as an integer.
            return int.Parse(User.Claims.FirstOrDefault(claim => claim.Type == "Id").Value);
        }
    }
}
