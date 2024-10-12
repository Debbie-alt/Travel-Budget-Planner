using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Traveluxe.Domain.Entities
{
    public class Trip
    {
        public int Id { get; set; }
        public string Destination { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public decimal Budget { get; set; }
        public int UserId { get; set; } 
        public User User { get; set; }
    }
}
