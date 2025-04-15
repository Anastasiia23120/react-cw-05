// import { use } from "react";
// import { Navigate } from "react-router-dom";
// import { useUser } from "../context/UserContext"; // Використовуємо контекст

// export const Dashboard = () => {
//   const { isLoggedIn } = useUser();

//   if (!isLoggedIn) {
//     return <Navigate to="/login" replace />;
//   }
//   return <h1>Ласкаво просимо в особистий кабінет</h1>;
// };

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export const Dashboard = () => {
  const { isLoggedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  return <h1>Ласкаво просимо в особистий кабінет</h1>;
};
