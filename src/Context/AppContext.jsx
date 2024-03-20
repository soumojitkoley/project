import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [showEntryAnimation, setShowEntryAnimation] = useState(true);
  const [navOpen, setNavOpen] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const isHomePage = location.pathname === '/';
    setShowEntryAnimation(isHomePage);
    window.scrollTo(0, 0);
    return () => clearTimeout(5000);
  }, [location]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEntryAnimation(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [showEntryAnimation]);

  const value = {
    showEntryAnimation,
    setShowEntryAnimation,
    navOpen,
    setNavOpen
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}
