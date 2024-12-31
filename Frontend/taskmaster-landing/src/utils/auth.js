import {jwtDecode} from "jwt-decode";

export const isAuthenticated = () => {
    const token = localStorage.getItem("authToken");
    if (!token) return false;

    try {
        const { exp } = jwtDecode(token);
        if (Date.now() >= exp * 1000) {
            localStorage.removeItem("authToken");
            return false;
        }
        return true;
    } catch (error) {
        return false;
    }
};

export const logout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/login";
};
