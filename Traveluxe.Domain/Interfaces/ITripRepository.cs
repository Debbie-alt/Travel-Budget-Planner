using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Traveluxe.Domain.Entities;

namespace Traveluxe.Domain.Interfaces
{
    public interface ITripRepository
    {
        Task<Trip> GetTripByIdAsync(int id);
        Task<IEnumerable<Trip>> GetAllTripsAsync();
        Task AddTripAsync(Trip trip);
        Task UpdateTripAsync(Trip trip);
        Task DeleteTripAsync(int id);
    }
}
