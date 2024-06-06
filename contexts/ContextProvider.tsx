"use client";

import React, { createContext, useContext, useState } from "react";

interface CounterContextType {
  openG: boolean;
  openNav: boolean;
  Toggle: (prop: boolean) => void;
  openNavHandler: (prop: boolean) => void;
  // decrement: () => void;
}

const StateContext = createContext<CounterContextType | undefined>(undefined);

export const StateProvider = ({ children }: { children: React.ReactNode }) => {
  const [openG, setOpenG] = useState(true);
  const [openNav, setOpenNav] = useState(false);

  const Toggle = (prop: boolean) => setOpenG(prop);
  const openNavHandler = (prop: boolean) => setOpenNav(prop);

  // const decrement = () => setCounter(counter - 1);

  return (
    <StateContext.Provider value={{ openG, Toggle, openNav, openNavHandler }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStatee = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};
