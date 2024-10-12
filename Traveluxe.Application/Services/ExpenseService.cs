using System.Collections.Generic;
using System.Threading.Tasks;
using Traveluxe.Domain.Entities;
using Traveluxe.Domain.Interfaces;

namespace Traveluxe.Application.Services
{
    public class ExpenseService
    {
        private readonly IExpenseRepository _expenseRepository;

        public ExpenseService(IExpenseRepository expenseRepository)
        {
            _expenseRepository = expenseRepository;
        }

        public async Task<Expense> GetExpenseByIdAsync(int id)
        {
            return await _expenseRepository.GetExpenseByIdAsync(id);
        }

        public async Task<IEnumerable<Expense>> GetAllExpensesAsync()
        {
            return await _expenseRepository.GetAllExpensesAsync();
        }

        public async Task AddExpenseAsync(Expense expense)
        {
            await _expenseRepository.AddExpenseAsync(expense);
        }

        public async Task UpdateExpenseAsync(Expense expense)
        {
            await _expenseRepository.UpdateExpenseAsync(expense);
        }

        public async Task DeleteExpenseAsync(int id)
        {
            await _expenseRepository.DeleteExpenseAsync(id);
        }
    }
}
