import React from 'react';
import { FaHeart } from 'react-icons/fa'; 

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-4 text-center">
      <p>&copy; {new Date().getFullYear()} Travel Budget Planner. All rights reserved.</p>
      <p className="mt-2 flex justify-center items-center space-x-1">
        <span>Coded with</span>
        <FaHeart /> 
        <span className='mx-2'>by Fayemi Funmilayo and Ali Adedbambo Faisal</span>
      </p>
    </footer>
  );
};

export default Footer;
