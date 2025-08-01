import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy login (no backend auth needed)
    navigate("/dashboard");
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}>
      <div
        style={{
          backdropFilter: "blur(12px)",
          background: "rgba(255, 255, 255, 0.15)",
          border: "2px solid #ee6470",
          borderRadius: "15px",
          padding: "30px",
          width: "350px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
          textAlign: "center",
          color: "#fff",
          transition: "0.4s ease-in-out",
        }}
      >
        <h1 style={{ marginBottom: "20px", color: "#ee6470" }}>
          Intern Portal 🔑
        </h1>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "2px solid transparent",
              outline: "none",
              background: "rgba(255, 255, 255, 0.2)",
              color: "#fff",
              fontSize: "14px",
              transition: "0.3s",
            }}
            onFocus={(e) => {
              e.target.style.border = "2px solid #ee6470";
              e.target.style.boxShadow = "0 0 12px #ee6470";
            }}
            onBlur={(e) => {
              e.target.style.border = "2px solid transparent";
              e.target.style.boxShadow = "none";
            }}
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "2px solid transparent",
              outline: "none",
              background: "rgba(255, 255, 255, 0.2)",
              color: "#fff",
              fontSize: "14px",
              transition: "0.3s",
            }}
            onFocus={(e) => {
              e.target.style.border = "2px solid #ee6470";
              e.target.style.boxShadow = "0 0 12px #ee6470";
            }}
            onBlur={(e) => {
              e.target.style.border = "2px solid transparent";
              e.target.style.boxShadow = "none";
            }}
          />
          <button
            type="submit"
            style={{
              padding: "12px",
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
            Login 🚀
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
