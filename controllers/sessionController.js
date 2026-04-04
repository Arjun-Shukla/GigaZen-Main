const serverState = require("../config/serverState");

const startSession = async (req, res) => {
    try {
        const userId = req.user.id;

        if (serverState.isBusy) {
            return res.status(400).json({
                message: "Server is currently in use"
            });
        }

        // Start session
        serverState.isBusy = true;
        serverState.currentUser = userId;

        const sessionDuration = 10000; 

        serverState.sessionEndTime = Date.now() + sessionDuration;

        // Auto release after time
        setTimeout(() => {
            serverState.isBusy = false;
            serverState.currentUser = null;
            serverState.sessionEndTime = null;

            console.log("Session ended automatically");
        }, sessionDuration);

        return res.json({
            message: "Session started successfully",
            ip: "192.168.31.66",
            instructions: "Open Moonlight and connect using this IP"
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};


const getServerStatus = (req, res) => {
    res.json({
        isBusy: serverState.isBusy,
        currentUser: serverState.currentUser,
        sessionEndTime: serverState.sessionEndTime
    });
};

module.exports = {
    startSession,
    getServerStatus
};