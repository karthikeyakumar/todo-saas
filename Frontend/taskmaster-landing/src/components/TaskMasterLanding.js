import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import TaskDetails from "./TaskDetails";

const TaskMasterLanding = () => {
    const [activeView, setActiveView] = useState("myDay"); // Tracks the selected tab
    const [selectedTask, setSelectedTask] = useState(null);

    const tasks = {
        myDay: [
            { name: "Connect your calendar", description: "Integrate your calendar for better task management." },
            { name: "Watch My Day tutorial", description: "Learn how to use the My Day feature effectively." },
        ],
        allTasks: [
            { name: "Create your first task", description: "Start organizing your tasks today." },
            { name: "Add me to My Day", description: "Set tasks for your day-to-day schedule." },
        ],
        calendar: [
            { name: "Plan your week", description: "Schedule tasks for the upcoming week." },
        ],
        shared: [
            { name: "Collaborate with team", description: "Share tasks with your team for effective collaboration." },
        ],
    };

    return (
        <div className="min-h-screen flex bg-gray-100">
            {/* Sidebar */}
            <Sidebar activeView={activeView} setActiveView={setActiveView} />

            {/* Main Content */}
            <div className="flex-1 flex">
                <div className="w-2/3">
                    <Dashboard
                        tasks={tasks[activeView] || []} // Dynamically load tasks based on the active view
                        selectTask={setSelectedTask}
                    />
                </div>
                <div className="w-1/3 bg-gray-50 p-4">
                    <TaskDetails task={selectedTask} />
                </div>
            </div>
        </div>
    );
};

export default TaskMasterLanding;
