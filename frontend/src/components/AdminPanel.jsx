import React, { useState } from "react";
import { Button } from "flowbite-react";
import file from "../images/file.png";
import { useNavigate } from "react-router-dom";
import AddRecord from "./AddRecord";
import DisplayRecord from "./DisplayRecord";
import DeleteRecord from "./DeleteRecord";
import UpdateRecord from "./UpdateRecord";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("add");
  const navigate = useNavigate();

  const renderPanel = () => {
    switch (activeTab) {
      case "add":
        return <AddRecord />;
      case "delete":
        return <DeleteRecord />;
      case "display":
        return <DisplayRecord />;
      case "update":
        return <UpdateRecord />;
      case "certificate":
        return <div className="p-4">Certificate Student Record</div>;
      case "logout":
        localStorage.removeItem("isAdminLoggedIn");
        window.location.href = "/login";
        return null;
      default:
        return <div className="p-4">Select an option</div>;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    navigate("/login");
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white p-6 flex flex-col items-start space-y-6">
        <div className="text-2xl font-bold mb-8">
          <img
            src={file}
            alt="Site Logo"
            className="w-15 h-15 inline-block mr-2 rounded-full"
          />
          Friend's Vision
        </div>
        <Button
          onClick={() => setActiveTab("add")}
          className="w-full hover:cursor-pointer hover:bg-gray-600 aria-[current=true]:bg-gray-600 outline-none focus:outline-none focus:ring-0"
          aria-current={activeTab === "add" ? "true" : "false"}
        >
          Add Student Record
        </Button>
        <Button
          onClick={() => setActiveTab("delete")}
          className="w-full hover:cursor-pointer hover:bg-gray-600 aria-[current=true]:bg-gray-600 outline-none focus:outline-none focus:ring-0"
          aria-current={activeTab === "delete" ? "true" : "false"}
        >
          Delete Student Record
        </Button>
        <Button
          onClick={() => setActiveTab("display")}
          className="w-full hover:cursor-pointer hover:bg-gray-600 aria-[current=true]:bg-gray-600 outline-none focus:outline-none focus:ring-0"
          aria-current={activeTab === "display" ? "true" : "false"}
        >
          Display Student Record
        </Button>
        <Button
          onClick={() => setActiveTab("update")}
          className="w-full hover:cursor-pointer hover:bg-gray-600 aria-[current=true]:bg-gray-600 outline-none focus:outline-none focus:ring-0"
          aria-current={activeTab === "update" ? "true" : "false"}
        >
          Update Student Record
        </Button>
        <Button
          onClick={() => setActiveTab("certificate")}
          className="w-full hover:cursor-pointer hover:bg-gray-600 aria-[current=true]:bg-gray-600 outline-none focus:outline-none focus:ring-0"
          aria-current={activeTab === "certificate" ? "true" : "false"}
        >
          Generate Certificate
        </Button>
        <Button
          color="failure"
          onClick={() => handleLogout()}
          className="w-full hover:cursor-pointer hover:bg-gray-500 focus:outline-none focus:ring-0"
        >
          Logout
        </Button>
      </div>

      {/* Right Panel */}
      <div className="w-3/4 bg-white p-6 overflow-y-auto">{renderPanel()}</div>
    </div>
  );
};

export default AdminPanel;
