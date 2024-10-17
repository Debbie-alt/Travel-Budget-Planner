import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { FaHeart } from "react-icons/fa"; // Import the heart icon from react-icons

export default function Home() {
  return (
    <div className="bg-[url('/jet.jpg')] bg-cover bg-center p-0 h-screen flex flex-col justify-between">
       <Navbar/>
     
      {/* Hero Section */}
      <div className="flex-grow flex flex-col items-center justify-center text-center">
        <h2 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
          Plan Your Perfect Trip
        </h2>
        <p className="text-lg text-white max-w-lg mx-auto drop-shadow-md">
          Estimate travel costs, manage your budget, and enjoy a stress-free
          vacation. Let’s help you make the most out of your travel experience.
        </p>
        <button className="mt-8 bg-green-700 text-white py-2 px-6 rounded-full hover:bg-green-600 shadow-md">
          Get Started
        </button>
      </div>

      <Footer />
    </div>
  );
}
