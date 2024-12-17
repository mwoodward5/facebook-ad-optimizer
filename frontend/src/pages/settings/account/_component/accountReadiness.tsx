import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router";

const AccountReadiness: React.FC = () => {
  const completedSteps = [
    { label: "Email", completed: true },
    { label: "Phone number", completed: true },
  ];

  const stepsToComplete = [
    {
      title: "Something’s missing?",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sed et nulla blandit eget a morbi turpis dolor.",
    },
    {
      title: "Something’s missing?",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sed et nulla blandit eget a morbi turpis dolor.",
    },
    {
      title: "Something’s missing?",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sed et nulla blandit eget a morbi turpis dolor.",
    },
  ];

  return (
    <div className=" max-w-xl">
      {/* Title */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-medium">Account Readiness</h2>
      </div>

      <p className="mb-4">Your account is 50% ready</p>

      <p className="text-xs text-right mb-4">50% Ready</p>
      {/* Progress Bar */}
      <div className="relative w-full h-2 bg-gray-700 rounded-full mb-6">
        <div
          className="absolute top-0 left-0 h-full bg-orange-500 rounded-full"
          style={{ width: "50%" }}
        ></div>
      </div>

      {/* Completed Steps */}
      <div className="mb-6 border-y border-[#252525] py-4">
        {completedSteps.map((step, index) => (
          <div key={index} className="flex items-center gap-2 mb-2">
            <FaCheckCircle className="text-green-500 text-lg" />
            <span>{step.label}</span>
          </div>
        ))}
      </div>

      {/* Steps to Complete */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Steps to complete:</h3>
        {stepsToComplete.map((step, index) => (
          <div
            key={index}
            className="border-b border-[#252525] pt-4 pb-4 last:border-b flex items-center justify-between"
          >
            <div>
              <h4 className="font-semibold">{step.title}</h4>
              <p className="text-gray-400 text-sm mb-2">{step.description}</p>
            </div>
            <Link
              to="#"
              className="text-orange-500 font-semibold hover:text-orange-600 whitespace-nowrap"
            >
              Complete now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountReadiness;
