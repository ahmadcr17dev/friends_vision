import React, { useState } from "react";
import { Button } from "flowbite-react";
import file from "../images/file.png";
import { useNavigate } from "react-router-dom";
import AddRecord from "./AddRecord";
import DisplayRecord from "./DisplayRecord";
import DeleteRecord from "./DeleteRecord";
import UpdateRecord from "./UpdateRecord";
import { HiMenuAlt2, HiX } from "react-icons/hi";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("add");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false); // Close mobile menu when a tab is selected
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Mobile Menu Button */}
      <div className="lg:hidden flex justify-between items-center bg-gray-800 text-white p-4">
        <div className="flex items-center">
          <img
            src={file}
            alt="Site Logo"
            className="w-10 h-10 inline-block mr-2 rounded-full"
          />
          <span className="text-xl font-bold">Friend's Vision</span>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white focus:outline-none"
        >
          {mobileMenuOpen ? (
            <HiX className="w-6 h-6" />
          ) : (
            <HiMenuAlt2 className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          mobileMenuOpen ? "block" : "hidden"
        } lg:block w-full lg:w-64 bg-gray-800 text-white p-4 lg:p-6 flex flex-col`}
      >
        <div className="hidden lg:block text-2xl font-bold mb-8">
          <img
            src={file}
            alt="Site Logo"
            className="w-15 h-15 inline-block mr-2 rounded-full"
          />
          Friend's Vision
        </div>
        <div className="space-y-4">
          <Button
            onClick={() => handleTabChange("add")}
            className="w-full hover:cursor-pointer hover:bg-gray-600 aria-[current=true]:bg-gray-600 outline-none focus:outline-none focus:ring-0"
            aria-current={activeTab === "add" ? "true" : "false"}
          >
            Add Student Record
          </Button>
          <Button
            onClick={() => handleTabChange("delete")}
            className="w-full hover:cursor-pointer hover:bg-gray-600 aria-[current=true]:bg-gray-600 outline-none focus:outline-none focus:ring-0"
            aria-current={activeTab === "delete" ? "true" : "false"}
          >
            Delete Student Record
          </Button>
          <Button
            onClick={() => handleTabChange("display")}
            className="w-full hover:cursor-pointer hover:bg-gray-600 aria-[current=true]:bg-gray-600 outline-none focus:outline-none focus:ring-0"
            aria-current={activeTab === "display" ? "true" : "false"}
          >
            Display Student Record
          </Button>
          <Button
            onClick={() => handleTabChange("update")}
            className="w-full hover:cursor-pointer hover:bg-gray-600 aria-[current=true]:bg-gray-600 outline-none focus:outline-none focus:ring-0"
            aria-current={activeTab === "update" ? "true" : "false"}
          >
            Update Student Record
          </Button>
          <Button
            onClick={() => handleTabChange("certificate")}
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
      </div>

      {/* Right Panel */}
      <div className="flex-1 bg-white p-4 lg:p-6 overflow-y-auto">
        {renderPanel()}
      </div>
    </div>
  );
};

export default AdminPanel;