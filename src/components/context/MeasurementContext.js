import React, { createContext, useState, useContext } from "react";
import { jobData as initialJobData } from "../utils/data/initial_value";

// Context
const MeasurementContext = createContext();

// Provider
export const MeasurementProvider = ({ children }) => {
  const [measurement, setMeasurement] = useState(initialJobData);

  return (
    <MeasurementContext.Provider value={{ measurement, setMeasurement }}>
      {children}
    </MeasurementContext.Provider>
  );
};

// Custom hook for easy usage
export const useMeasurement = () => useContext(MeasurementContext);
