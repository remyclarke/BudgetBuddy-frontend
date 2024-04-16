import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const storedUserData = localStorage.getItem("user");
      return storedUserData ? JSON.parse(storedUserData) : null;
    } catch (error) {
      console.error("Error parsing user data:", error);
      return null;
    }
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Update the localStorage when user or authentication status changes
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      setIsAuthenticated(true);
    } else {
      localStorage.removeItem("user");
      setIsAuthenticated(false);
    }
  }, [user]);

  return (
    <UserContext.Provider
      value={{ user, setUser, isAuthenticated, setIsAuthenticated }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
