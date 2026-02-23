const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// NOTE: @ in password must be encoded as %40
const MONGO_URI = "mongodb+srv://subham404:Subham%402007@cluster0.mlvcb0f.mongodb.net/goldenfields?appName=Cluster0";

mongoose.connect(MONGO_URI)
    .then(() => console.log("MongoDB connected successfully"))
    .catch(err => console.error("MongoDB connection error:", err.message));

const userSchema = new mongoose.Schema({
    uid: { type: String, required: true, unique: true },
    role: { type: String, enum: ["farmer", "buyer"], required: true },
    name: String,
    mobile: String,
    email: String,
    state: String,
    company: String,
    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

// Save / upsert user role on login or register
app.post("/saveUser", async (req, res) => {
    try {
        const { uid, role, name, mobile, email, state, company } = req.body;
        if (!uid || !role) return res.status(400).json({ error: "uid and role are required" });

        const user = await User.findOneAndUpdate(
            { uid },
            { uid, role, name, mobile, email, state, company },
            { upsert: true, new: true }
        );
        res.json({ message: "User saved", user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// Get user by uid
app.get("/getUser/:uid", async (req, res) => {
    try {
        const user = await User.findOne({ uid: req.params.uid });
        if (!user) return res.status(404).json({ error: "User not found" });
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Health check
app.get("/", (req, res) => res.json({ status: "GoldenFields API running" }));

app.listen(5000, () => console.log("Server running on http://localhost:5000"));