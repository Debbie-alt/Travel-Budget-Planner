using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Traveluxe.Domain.Entities;
using Traveluxe.Domain.Interfaces;
using Traveluxe.Infrastructure.Data;

namespace Traveluxe.Infrastructure.Repositories
{
    public class ExpenseRepository : IExpenseRepository
    {
        private readonly TraveluxeDbContext _context;

        public ExpenseRepository(TraveluxeDbContext context)
        {
            _context = context;
        }

        public async Task<Expense> GetExpenseByIdAsync(int id)
        {
            return await _context.Expenses.Include(e => e.Trip).FirstOrDefaultAsync(e => e.Id == id);
        }

        public async Task<IEnumerable<Expense>> GetAllExpensesAsync()
        {
            return await _context.Expenses.Include(e => e.Trip).ToListAsync();
        }

        public async Task AddExpenseAsync(Expense expense)
        {
            await _context.Expenses.AddAsync(expense);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateExpenseAsync(Expense expense)
        {
            _context.Expenses.Update(expense);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteExpenseAsync(int id)
        {
            var expense = await GetExpenseByIdAsync(id);
            if (expense != null)
            {
                _context.Expenses.Remove(expense);
                await _context.SaveChangesAsync();
            }
        }
    }
}
