import React, { useState } from 'react';
import { allCountries } from '@/app/countries';

const BudgetPlannerForm: React.FC = () => {
  const [destination, setDestination] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [flightCost, setFlightCost] = useState<number>(0);
  const [accommodationCost, setAccommodationCost] = useState<number>(0);
  const [foodCost, setFoodCost] = useState<number>(0);
  const [activitiesCost, setActivitiesCost] = useState<number>(0);
  const [totalBudget, setTotalBudget] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const total = flightCost + accommodationCost + foodCost + activitiesCost;
    setTotalBudget(total);
  };

  return (
    <div className=" w-[80%] lg:max-w-[50vw] mx-auto p-6 border rounded-md shadow-md bg-gray-100 py-16" >
      <h2 className="text-xl font-semibold mb-4 text-green-700">Travel Budget Planner</h2>
      <form onSubmit={handleSubmit} className=''>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Destination:</label>
            <select  
            className="w-full border border-gray-300 rounded-lg px-2 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
               { allCountries.map((country, index)=>(
                <option key={index} value={country.name}>{country.name}</option>
               ))

               }
            </select>
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Travel Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-2 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Travel End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Flight Cost:</label>
          <input
            type="text"
            value={flightCost}
            onChange={(e) => setFlightCost(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Accommodation Cost:</label>
          <input
            type="text"
            value={accommodationCost}
            onChange={(e) => setAccommodationCost(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Food Cost:</label>
          <input
            type="text"
            value={foodCost}
            onChange={(e) => setFoodCost(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Activities Cost:</label>
          <input
            type="number"
            value={activitiesCost}
            onChange={(e) => setActivitiesCost(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white rounded-full px-4 py-3 hover:bg-green-700 transition-colors">
          Calculate Total Budget
        </button>
      </form>

      {totalBudget !== null && (
        <div className="mt-4 bg-green-100 border border-green-300 rounded-full p-3">
          <h3 className="font-semibold text-green-800">Your Total Estimated Budget is ${totalBudget}</h3>
        </div>
      )}
    </div>
  );
};

export default BudgetPlannerForm;
