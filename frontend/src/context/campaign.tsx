import React, { createContext, useContext, useState } from "react";

// Define the context type
interface CampaignContextType {
  showModal: any;
  setShowModal: (value: any) => void;
}

// Create the Campaign context
const CampaignContext = createContext<CampaignContextType | undefined>(
  undefined
);

// Create a provider component
export const CampaignProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [showModal, setShowModal] = useState<any>(null);

  return (
    <CampaignContext.Provider value={{ setShowModal, showModal }}>
      {children}
    </CampaignContext.Provider>
  );
};

export const useCampaign = () => {
  const context = useContext(CampaignContext);
  if (context === undefined) {
    throw new Error("useCampaign must be used within a CampaignProvider");
  }
  return context;
};
