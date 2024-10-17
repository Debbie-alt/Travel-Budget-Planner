import React from 'react';
import { FaPlane, FaHotel, FaUtensils, FaMapMarkedAlt } from 'react-icons/fa'; // Import icons for features

const Features: React.FC = () => {
  return (
    <section className="bg-white py-12 h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8 font-serif italic ">
          Key Features of Traveluxe
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          <div className="text-center p-6 bg-gray-200 shadow-md rounded-lg hover:shadow-lg transition">
            <FaPlane />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Flight Cost Estimation</h3>
            <p className="text-gray-600">
              Easily calculate and manage your flight costs for stress-free bookings.
            </p>
          </div>

          <div className="text-center p-6 bg-green-200  shadow-lg rounded-lg hover:shadow-lg transition">
            <FaHotel  />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Accommodation Planning</h3>
            <p className="text-gray-600">
              Plan and budget your stay with flexible accommodation options.
            </p>
          </div>

          <div className="text-center p-6 bg-green-200 shadow-md rounded-lg hover:shadow-lg transition">
            <FaUtensils  />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Food Expense Tracking</h3>
            <p className="text-gray-600">
              Keep track of daily food expenses with ease during your trip.
            </p>
          </div>

          <div className="text-center p-6 bg-gray-200 shadow-md rounded-lg hover:shadow-lg transition">
            <FaMapMarkedAlt />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Activity Budgeting</h3>
            <p className="text-gray-600">
              Plan your activities and manage their costs efficiently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features
