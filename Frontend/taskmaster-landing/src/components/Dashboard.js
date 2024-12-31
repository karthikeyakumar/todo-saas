import React, { useEffect } from "react";
import { isAuthenticated, logout } from "../utils/auth";

const Dashboard = () => {
    useEffect(() => {
        if (!isAuthenticated()) {
            alert("Session expired. Please login again.");
            window.location.href = "/login";
        }
    }, []);

    return (
        <div>
            <h2>Dashboard</h2>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Dashboard;
