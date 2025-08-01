import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/user")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  if (!user) {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        color: "#fff",
      }}>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}>
      <div style={{
        backdropFilter: "blur(12px)",
        background: "rgba(255, 255, 255, 0.15)",
        border: "2px solid #ee6470",
        borderRadius: "15px",
        padding: "30px",
        width: "400px",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
        textAlign: "center",
        color: "#fff",
        transition: "0.4s ease-in-out",
      }}
        onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 0 20px #ee6470, 0 0 40px #ee6470"}
        onMouseLeave={(e) => e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.3)"}
      >
        <h1 style={{ color: "#ee6470" }}>Welcome, {user.name} 🎉</h1>
        <p>Referral Code: <b>{user.referralCode}</b></p>
        <p>Total Donations: <b>₹{user.totalDonations}</b></p>

        <div style={{
          width: "100%",
          borderTop: "2px solid #ee6470",
          marginTop: "15px",
          paddingTop: "10px",
        }}>
          <h2>Rewards</h2>
        </div>

        <ul style={{ listStyleType: "none", padding: 0 }}>
          {user.rewards.map((reward, index) => (
            <li key={index}>{reward}</li>
          ))}
        </ul>

        <button
          onClick={() => navigate("/leaderboard")}
          style={{
            marginTop: "20px",
            padding: "12px",
            width: "100%",
            background: "rgba(255, 255, 255, 0.3)",
            border: "none",
            borderRadius: "8px",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) => {
            e.target.style.background = "#0a46aa";
            e.target.style.boxShadow = "0 0 15px #0a46aa";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "rgba(255, 255, 255, 0.3)";
            e.target.style.boxShadow = "none";
          }}
        >
          View Leaderboard 🏆
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
