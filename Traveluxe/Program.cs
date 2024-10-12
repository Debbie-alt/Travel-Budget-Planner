using Traveluxe.Domain.Interfaces;
using Traveluxe.Infrastructure.Data;
using Traveluxe.Infrastructure.Repositories;
using Microsoft.EntityFrameworkCore;
using Traveluxe.Infrastructure.Data;
using Traveluxe.Domain.Interfaces;
using Traveluxe.Infrastructure.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();



// Configure DbContext
/*builder.Services.AddDbContext<TraveluxeDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));*/
/*
builder.Services.AddDbContext<TraveluxeDbContext>(options =>
    options.UseSqlite("traveluxe.db", b => b.MigrationsAssembly("Traveluxe"));*/

builder.Services.AddDbContext<TraveluxeDbContext>(options =>
options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"),
b => b.MigrationsAssembly("Traveluxe")
));


// Register repositories
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<ITripRepository, TripRepository>();
builder.Services.AddScoped<IExpenseRepository, ExpenseRepository>();






var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
