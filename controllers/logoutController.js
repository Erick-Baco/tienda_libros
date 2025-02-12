import { Session } from "express-session";
import express from "express";

const deslogear = async (req, res) => {
    if (!req.session) {
        console.error("No active session found");
        return res.redirect("/");
    }

    // Regenerate the session BEFORE destroying it
    req.session.regenerate((err) => {
        if (err) {
            console.error("Error regenerating session:", err);
            return res.status(500).json({ message: "Error regenerating session. Try again." });
        }

        console.log("New session created before logout");

        // Now safely destroy the session
        req.session.destroy((err) => {
            if (err) {
                console.error("Error destroying session:", err);
                return res.status(500).json({ message: "Error closing session. Try again." });
            }

            // Ensure cookie is removed
            res.clearCookie("connect.sid", { path: "/" });

            console.log("Session destroyed successfully");
            return res.redirect("/");
        });
    });
};




export {deslogear}