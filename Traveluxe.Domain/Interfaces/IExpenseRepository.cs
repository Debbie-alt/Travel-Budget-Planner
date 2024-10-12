using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Traveluxe.Domain.Entities;

namespace Traveluxe.Domain.Interfaces
{
    public interface IExpenseRepository
    {
        Task<Expense> GetExpenseByIdAsync(int id);
        Task<IEnumerable<Expense>> GetAllExpensesAsync();
        Task AddExpenseAsync(Expense expense);
        Task UpdateExpenseAsync(Expense expense);
        Task DeleteExpenseAsync(int id);
    }
}
