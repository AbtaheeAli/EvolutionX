using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EvolutionX.Models;

namespace EvolutionX.Controllers
{
    // All of these routes will be at the base URL:     /api/Accounts
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case AccountsController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public AccountsController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Accounts
        //
        // Returns a list of all Accounts
        //
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Account>>> GetAccounts()
        {
            // Uses the database context in `_context` to request all of the Accounts and
            // return them as a JSON array.
            return await _context.Accounts.ToListAsync();
        }

        // GET: api/Accounts/5
        //
        // Fetches and returns a specific account by finding it by id. The id is specified in the
        // URL. In the sample URL above it is the `5`.  The "{id}" in the [HttpGet("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpGet("{id}")]
        public async Task<ActionResult<Account>> GetAccount(int id)
        {
            // Find the account in the database using `FindAsync` to look it up by id
            var account = await _context.Accounts.FindAsync(id);

            // If we didn't find anything, we receive a `null` in return
            if (account == null)
            {
                // Return a `404` response to the client indicating we could not find a account with this id
                return NotFound();
            }

            //  Return the account as a JSON object.
            return account;
        }

        // PUT: api/Accounts/5
        //
        // Update an individual account with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpPut("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        // In addition the `body` of the request is parsed and then made available to us as a Account
        // variable named account. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Account POCO class. This represents the
        // new values for the record.
        //
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAccount(int id, Account account)
        {
            // If the ID in the URL does not match the ID in the supplied request body, return a bad request
            if (id != account.Id)
            {
                return BadRequest();
            }

            // Tell the database to consider everything in account to be _updated_ values. When
            // the save happens the database will _replace_ the values in the database with the ones from account
            _context.Entry(account).State = EntityState.Modified;

            try
            {
                // Try to save these changes.
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Ooops, looks like there was an error, so check to see if the record we were
                // updating no longer exists.
                if (!AccountExists(id))
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
            // return Ok(account)
            //
            return NoContent();
        }

        // POST: api/Accounts
        //
        // Creates a new account in the database.
        //
        // The `body` of the request is parsed and then made available to us as a Account
        // variable named account. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Account POCO class. This represents the
        // new values for the record.
        //
        [HttpPost]
        public async Task<ActionResult<Account>> PostAccount(Account account)
        {
            // Indicate to the database context we want to add this new record
            _context.Accounts.Add(account);
            await _context.SaveChangesAsync();

            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetAccount", new { id = account.Id }, account);
        }

        // DELETE: api/Accounts/5
        //
        // Deletes an individual account with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpDelete("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAccount(int id)
        {
            // Find this account by looking for the specific id
            var account = await _context.Accounts.FindAsync(id);
            if (account == null)
            {
                // There wasn't a account with that id so return a `404` not found
                return NotFound();
            }

            // Tell the database we want to remove this record
            _context.Accounts.Remove(account);

            // Tell the database to perform the deletion
            await _context.SaveChangesAsync();

            // return NoContent to indicate the update was done. Alternatively you can use the
            // following to send back a copy of the deleted data.
            //
            // return Ok(account)
            //
            return NoContent();
        }

        // Private helper method that looks up an existing account by the supplied id
        private bool AccountExists(int id)
        {
            return _context.Accounts.Any(account => account.Id == id);
        }
    }
}
