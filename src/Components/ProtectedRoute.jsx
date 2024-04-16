import React, { useContext, useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../helpers/UserContext";

const URL = import.meta.env.VITE_BASE_URL;

const ProtectedRoute = () => {
  const { user, isAuthenticated, setIsAuthenticated, setUser } = useUser();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    const checkAuth = async () => {
      try {
        const response = await fetch(`${URL}/api/auth/check-auth`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.ok) {
          const data = await response.json();
          setIsAuthenticated(data.isAuthenticated);
          setUser(data.user);
        } else {
          setIsAuthenticated(false);
          setUser(null);
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        setIsAuthenticated(false);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    if (token) {
      checkAuth();
    } else {
      setIsAuthenticated(false);
      setUser(null);
      setIsLoading(false);
    }
  }, [setIsAuthenticated, setUser]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
