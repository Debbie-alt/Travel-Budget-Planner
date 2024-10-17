'use client'
import Navbar from "@/components/Navbar";
import BudgetPlannerForm from "@/components/BudgetForm";
import Footer from "@/components/Footer";

export default function BudgetPage (){
      return (
            <div className='w-full bg-gray-300  space-y-12  '>
                  <Navbar/>
                  <BudgetPlannerForm/>
                  <Footer/>
            </div>
      )
}