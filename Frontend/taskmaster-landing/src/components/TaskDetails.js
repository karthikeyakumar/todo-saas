import React from "react";

const TaskDetails = ({ task }) => {
    if (!task) return <div className="p-4">Select a task to view details</div>;

    return (
        <div className="p-4 bg-white shadow rounded-lg">
            <h2 className="text-xl font-bold mb-2">{task.name}</h2>
            <p className="text-gray-600 mb-4">{task.description}</p>
            <div className="flex space-x-2">
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Mark as Complete
                </button>
                <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                    Delete Task
                </button>
            </div>
        </div>
    );
};

export default TaskDetails;
