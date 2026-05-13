import React from "react";
import {signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Dashboard() {

   const user = useSelector((state) => state.user);

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate("/auth");

        } catch (error) {
            console.log(error);

        }
    };
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <div>
      <h1>Welcome {user?.name}</h1>
      <h2>Credit: {user?.credit}</h2>
    </div>

      <button 
        onClick={handleLogout}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "black",
          color: "white",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;