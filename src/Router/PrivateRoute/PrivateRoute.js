import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contex/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <h1 className="text-5xl">Loading</h1>;
  }
  if (user) {
    return children;
  }
  return (
    <div>
      <Navigate state={{ from: location }} replace to="/login"></Navigate>
    </div>
  );
};

export default PrivateRoute;
