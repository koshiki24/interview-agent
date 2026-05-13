import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { motion } from "motion/react";

function Pricing() {
  const navigate = useNavigate()
  const [selectedPlan, setSelectedPlan] = useState("free");

  const plans = [
    {
      id: "free",
      name: "Free",
      price: "₹0",
      credits: 100,
      description: "Perfect for beginners starting interview preparations.",
      features: [
        "100 AI Interview Credits",
        "Basic Performance Report",
        "Voice Interview Access",
        "Limited History Tracking",
      ],
      default: true,
    },
    {
      id: "basic",
      name: "Starter Pack",
      price: "₹100",
      credits: 150,
      description: "Great for focused practice and skills improvement.",
      features: [
        "150 AI Interview Credits",
        "Detailed Feedback",
        "Performance Analytics",
        "Full Interview History",
      ],
    },
    {
      id: "pro",
      name: "Pro Pack",
      price: "₹500",
      credits: 650,
      description: "Best value for serious job preparation.",
      features: [
        "650 AI Interview Credits",
        "Advanced AI Feedback",
        "Skill Trend Analysis",
        "Priority AI Processing",
      ],
      badge: "Best Value",
    },
  ];
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50'>
      <div className='max-w-6xl mx-auto mb-14 flex items-start gap-4'>
        <button onClick={()=>navigate("/")} className='mt-5 p-3 rounded-full bg-white shadow hover:shadow-md transition'>
          <FaArrowLeft className='text-gray-600'/>
        </button>

        <div className='text-center w-full'>
          <h1 className='text-4xl font-bold text-gray-800 mt-5'>
            Choose Your Plan
          </h1>
          <p className='text-gray-500 mt-3 text-lg'>
            Flexible pricing to match your interview preparation goals.
          </p>
        </div>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>

        {plans.map((plan)=>{
          const isSelected = selectedPlan === plan.id

          return (
            <motion.div
            key={plan.id}
            whileHover={!plan.default && {scale: 1.05}}
            onClick={()=>!plan.default && setSelectedPlan(plan.id)}
            
            className={`relative rounded-3xl p-8 transition-all duration-300 border
              ${
                isSelected
                ? "border-emerald-600 shadow-2xl bg-white"
                : "border-gray-200 bg-white shadow-md"
              }
              ${plan.default ? "cursor-default" : "cursor-pointer"}
              `}
              >

              </motion.div>
          )
        })}
      </div>

    </div>
  )
}

export default Pricing;
