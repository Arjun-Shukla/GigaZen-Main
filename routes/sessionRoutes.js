const express = require("express");
const router = express.Router();

const {
    startSession,
    getServerStatus
} = require("../controllers/sessionController");

const authMiddleware = require("../middlewares/auth.middleware");

// Start session
router.post("/start", authMiddleware, startSession);

// Check status
router.get("/status", getServerStatus);

module.exports = router;