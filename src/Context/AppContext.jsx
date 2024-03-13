import { createContext, useState, useEffect } from "react"

export const AppContext = createContext()

export default function AppContextProvider({ children }) {
  const [showEntryAnimation, setShowEntryAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEntryAnimation(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [showEntryAnimation]);


  const value = {
    showEntryAnimation,
    setShowEntryAnimation
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}
