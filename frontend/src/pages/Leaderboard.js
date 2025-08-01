import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://your-service-name.onrender.com/api/user")
      .then((res) => res.json())
      .then((data) => setLeaders(data));
  }, []);

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
        width: "500px",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
        textAlign: "center",
        color: "#fff",
        transition: "0.4s ease-in-out",
      }}
        onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 0 20px #ee6470, 0 0 40px #ee6470"}
        onMouseLeave={(e) => e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.3)"}
      >
        <h1 style={{ color: "#ee6470" }}>Leaderboard 🏆</h1>

        <div style={{
          width: "100%",
          borderTop: "2px solid #ee6470",
          marginTop: "15px",
          paddingTop: "10px",
        }}>
          <h2>Top Performers</h2>
        </div>

        <table style={{
          margin: "20px auto",
          width: "100%",
          borderCollapse: "collapse",
          color: "#fff",
        }}>
          <thead>
            <tr style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
              <th style={{ border: "1px solid #ee6470", padding: "10px" }}>Rank</th>
              <th style={{ border: "1px solid #ee6470", padding: "10px" }}>Name</th>
              <th style={{ border: "1px solid #ee6470", padding: "10px" }}>Donations</th>
            </tr>
          </thead>
          <tbody>
            {leaders.map((leader, i) => (
              <tr key={i} style={{
                backgroundColor: i % 2 === 0 ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.05)",
                transition: "0.3s",
              }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 0 15px #ee6470"}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = "none"}
              >
                <td style={{ border: "1px solid #ee6470", padding: "10px" }}>{i + 1}</td>
                <td style={{ border: "1px solid #ee6470", padding: "10px" }}>{leader.name}</td>
                <td style={{ border: "1px solid #ee6470", padding: "10px" }}>₹{leader.donations}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          onClick={() => navigate("/dashboard")}
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
          Back to Dashboard 🔙
        </button>
      </div>
    </div>
  );
}

export default Leaderboard;
