using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Emit;
using System.Text;
using System.Threading.Tasks;
using Traveluxe.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Traveluxe.Infrastructure.Data
{
    public class TraveluxeDbContext : DbContext
    {
        public TraveluxeDbContext(DbContextOptions<TraveluxeDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Trip> Trips { get; set; }
        public DbSet<Expense> Expenses { get; set; }

     

    }
}
