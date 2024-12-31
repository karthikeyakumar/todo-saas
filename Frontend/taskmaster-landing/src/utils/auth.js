import {jwtDecode} from "jwt-decode"; // Import jwtDecode
import { useNavigate } from "react-router-dom";

// Helper function to get the token from storage
const getToken = () => {
    return localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
};

// Helper function to remove the token from storage
const removeToken = () => {
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");
};

// Check if the user is authenticated
export const isAuthenticated = () => {
    const token = getToken();
    if (!token) return false;

    try {
        const { exp } = jwtDecode(token);
        if (Date.now() >= exp * 1000) {
            removeToken(); // Remove expired token
            return false;
        }
        return true;
    } catch (error) {
        console.error("Token decoding failed", error);
        return false;
    }
};

// Custom hook to handle logout functionality
export const useLogout = () => {
    const navigate = useNavigate();

    const logout = () => {
        removeToken(); // Remove token from both storages
        navigate("/login"); // Redirect to login page
    };

    return logout;
};

// Utility to save token to localStorage or sessionStorage
export const saveToken = (token, rememberMe = false) => {
    if (rememberMe) {
        localStorage.setItem("authToken", token); // Save to localStorage
    } else {
        sessionStorage.setItem("authToken", token); // Save to sessionStorage
    }
};
