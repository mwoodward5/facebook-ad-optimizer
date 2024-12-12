import React, { useState } from "react";
import Tabs from "./_component/tabs";
import Goal from "./_component/goal";
import Design from "./_component/design";
import Budget from "./_component/budget";
import { useNavigate } from "react-router";

const AdsCreation: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };
  const handlePrevious = () => {
    setStep(step - 1);
  };

  const renderForm = () => {
    switch (step) {
      case 1:
        return <Goal next={handleNext} />;
      case 2:
        return <Design previous={handlePrevious} next={handleNext} />;
      case 3:
        return <Budget previous={handlePrevious} />;

      default:
        break;
    }
  };

  return (
    <div className="max-w-5xl mx-auto bg-[#191817] border border-[#252525] rounded-3xl md:mt-8 p-4 md:p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-medium">Create Campaign</h1>
        <button
          onClick={() => navigate("/ad-creation/ai")}
          className="text-primary underline"
        >
          Select from AI-generated ads
        </button>
      </div>

      <Tabs step={step} />

      {renderForm()}
    </div>
  );
};

export default AdsCreation;
