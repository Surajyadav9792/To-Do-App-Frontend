import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {

  const navigate = useNavigate();

  useEffect(() => {

    const logoutUser = async () => {

      await fetch("http://localhost:3200/user/logout", {
        method: "POST",
        credentials: "include"
      });

      navigate("/login");
    };

    logoutUser();

  },[]);

  return <h2>Logging out...</h2>;
}