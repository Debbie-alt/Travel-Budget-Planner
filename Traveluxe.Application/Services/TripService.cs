using System.Collections.Generic;
using System.Threading.Tasks;
using Traveluxe.Domain.Entities;
using Traveluxe.Domain.Interfaces;

namespace Traveluxe.Application.Services
{
    public class TripService
    {
        private readonly ITripRepository _tripRepository;

        public TripService(ITripRepository tripRepository)
        {
            _tripRepository = tripRepository;
        }

        public async Task<Trip> GetTripByIdAsync(int id)
        {
            return await _tripRepository.GetTripByIdAsync(id);
        }

        public async Task<IEnumerable<Trip>> GetAllTripsAsync()
        {
            return await _tripRepository.GetAllTripsAsync();
        }

        public async Task AddTripAsync(Trip trip)
        {
            await _tripRepository.AddTripAsync(trip);
        }

        public async Task UpdateTripAsync(Trip trip)
        {
            await _tripRepository.UpdateTripAsync(trip);
        }

        public async Task DeleteTripAsync(int id)
        {
            await _tripRepository.DeleteTripAsync(id);
        }
    }
}
