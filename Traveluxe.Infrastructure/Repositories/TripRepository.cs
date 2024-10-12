using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Traveluxe.Domain.Entities;
using Traveluxe.Domain.Interfaces;
using Traveluxe.Infrastructure.Data;

namespace Traveluxe.Infrastructure.Repositories
{
    public class TripRepository : ITripRepository
    {
        private readonly TraveluxeDbContext _context;

        public TripRepository(TraveluxeDbContext context)
        {
            _context = context;
        }

        public async Task<Trip> GetTripByIdAsync(int id)
        {
            return await _context.Trips.Include(t => t.User).FirstOrDefaultAsync(t => t.Id == id);
        }

        public async Task<IEnumerable<Trip>> GetAllTripsAsync()
        {
            return await _context.Trips.Include(t => t.User).ToListAsync();
        }

        public async Task AddTripAsync(Trip trip)
        {
            await _context.Trips.AddAsync(trip);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateTripAsync(Trip trip)
        {
            _context.Trips.Update(trip);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteTripAsync(int id)
        {
            var trip = await GetTripByIdAsync(id);
            if (trip != null)
            {
                _context.Trips.Remove(trip);
                await _context.SaveChangesAsync();
            }
        }
    }
}
