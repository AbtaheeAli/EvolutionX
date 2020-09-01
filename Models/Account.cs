using System.ComponentModel.DataAnnotations;

namespace EvolutionX.Models
{
    public class Account
    {

        public int Id { get; set; }

        public int UserId { get; set; }

        public string AccountName { get; set; }

        public string AccountEmail { get; set; }

        [Required]
        public string ApiKey { get; set; }

        [Required]
        public string XboxProfileUserId { get; set; }
    }
}
