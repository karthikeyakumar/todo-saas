import React from "react";

const Dashboard = ({ tasks, selectTask }) => {
    return (
        <div className="p-4 flex flex-col">
            <div className="bg-white shadow rounded-lg p-6 mb-4">
                <h2 className="text-xl font-bold mb-4">Today</h2>
                {tasks.map((task, index) => (
                    <div
                        key={index}
                        onClick={() => selectTask(task)}
                        className="flex items-center justify-between p-2 hover:bg-gray-100 rounded cursor-pointer"
                    >
                        <span>{task.name}</span>
                    </div>
                ))}
            </div>
            <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Upcoming</h2>
                {tasks.map((task, index) => (
                    <div
                        key={index}
                        onClick={() => selectTask(task)}
                        className="flex items-center justify-between p-2 hover:bg-gray-100 rounded cursor-pointer"
                    >
                        <span>{task.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
