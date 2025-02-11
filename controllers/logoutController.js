import { Session } from "express-session";
import express from "express";


const deslogear = async (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ message: "Error destroying session" });
        }

        // Start a new session
        // req.session.regenerate((err) => {
        //     if (err) {
        //         return res.status(500).json({ message: "Error regenerating session" });
        //     }

        res.redirect("/home")

        // });
    });
};

export {deslogear}