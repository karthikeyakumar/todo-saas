import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faList, faSun, faUsers, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useLogout } from "../utils/auth.js";

const Sidebar = ({ activeView, setActiveView }) => {
    const menuItems = [
        { id: "myDay", name: "My Day", icon: faSun },
        { id: "allTasks", name: "All Tasks", icon: faList },
        { id: "calendar", name: "Calendar", icon: faCalendar },
        { id: "shared", name: "Shared", icon: faUsers },
    ];

    return (
        <div className="w-64 bg-gray-800 text-white flex flex-col p-4">
            {/* Logo Section */}
            <div className="mb-8 flex items-center justify-center">
                <img src="/images/app.png" alt="Logo" className="w-16 h-16 rounded-full shadow-lg" />
            </div>

            {/* Navigation Menu */}
            <nav className="space-y-4">
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveView(item.id)}
                        className={`w-full flex items-center p-3 rounded-md text-left ${
                            activeView === item.id ? "bg-gray-700" : "hover:bg-gray-700"
                        }`}
                    >
                        <FontAwesomeIcon icon={item.icon} className="mr-3" />
                        {item.name}
                    </button>
                ))}

                {/* Logout Button */}
                <button
                    onClick={useLogout}
                    className="w-full flex items-center p-3 rounded-md text-left hover:bg-red-600 bg-gray-800"
                >
                    <FontAwesomeIcon icon={faSignOut} className="mr-3" />
                    Logout
                </button>
            </nav>
        </div>
    );
};

export default Sidebar;
