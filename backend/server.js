const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Dummy user data
const user = {
  name: "Gautam",
  referralCode: "gautam2025",
  totalDonations: 7500,
  rewards: ["Certificate of Appreciation", "Gift Voucher", "Internship Offer"]
};

// Dummy leaderboard data
const leaderboard = [
  { name: "Gautam", donations: 7500 },
  { name: "Ananya", donations: 6200 },
  { name: "Rahul", donations: 5400 },
  { name: "Sneha", donations: 4900 }
];

// Routes
app.get("/api/user", (req, res) => {
  res.json(user);
});

app.get("/api/leaderboard", (req, res) => {
  res.json(leaderboard);
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
