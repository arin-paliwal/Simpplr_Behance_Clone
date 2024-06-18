/* eslint-disable react/prop-types */
import  { createContext, useContext, useState } from "react";

const AppContext = createContext(undefined);

export function AppProvider({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        sidebarOpen,
        setSidebarOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAppState() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppState must be used within an AppProvider");
  }
  return context;
}