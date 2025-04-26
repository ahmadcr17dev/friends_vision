import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PopularCourses from "./components/PopularCourses";
import Support from "./components/Support";
import UpcomingCourses from "./components/UpcomingCourses";
import Footer from "./components/Footer";
import Courses from "./components/Courses";
import "flowbite-react";
import About from "./components/About";
import AdmissionForm from "./components/AdmissionForm";
import PreviewTemplate from "./components/PreviewTemplate";
import Login from "./components/Login";
import AdminPanel from "./components/AdminPanel";
import PrivateRoute from "./components/PrivateRoute";
import Verification from './components/Verification';

const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const isAdminPanel = location.pathname === "/adminpanel"; // 👈 Check current route

  return (
    <>
      {!isAdminPanel && <Navbar />} {/* Hide Navbar on /adminpanel */}
      {loading ? (
        <div className="flex justify-center items-center h-screen w-full">
          <ThreeDots
            visible={true}
            height="70"
            width="60"
            color="#a46ede"
            radius="9"
            ariaLabel="three-dots-loading"
          />
        </div>
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <PopularCourses />
                <Support />
                <UpcomingCourses />
              </>
            }
          />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/admission" element={<AdmissionForm />} />
          <Route path="/previewtemplate" element={<PreviewTemplate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verification" element={<Verification/>} />
          <Route
            path="/adminpanel"
            element={
              <PrivateRoute>
                <AdminPanel />
              </PrivateRoute>
            }
          />
        </Routes>
      )}
      {!isAdminPanel && <Footer />} {/* Hide Footer on /adminpanel */}
    </>
  );
};

export default App;
