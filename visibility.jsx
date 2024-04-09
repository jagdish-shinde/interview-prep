import React, { createContext, useContext, useState } from 'react';

// Step 1: Create a Context
const SharedStateContext = createContext();

// Step 2: Create a provider component to wrap your app
const SharedStateProvider = ({ children }) => {
  const [sharedState, setSharedState] = useState(initialState); // initial state can be any initial value you want

  // Function to update the shared state
  const updateSharedState = (newState) => {
    setSharedState(newState);
  };

  return (
    <SharedStateContext.Provider value={{ sharedState, updateSharedState }}>
      {children}
    </SharedStateContext.Provider>
  );
};