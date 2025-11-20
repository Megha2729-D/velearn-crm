import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import AdminLayout from "./Super-Admin/AdminLayout";
import TeleLayout from "./TeleCaller/TeleLayout";
import LoginPage from "./LoginPage";
import AdminDashboard from "./Super-Admin/AdminDashboard";
import TeleDashboard from "./TeleCaller/TeleCallerDashboard";
import Leads from "./TeleCaller/Leads";
import AddLeads from "./TeleCaller/AddLead";

const AppRouter = () => {
    const [auth, setAuth] = useState(localStorage.getItem("auth") === "true");

    useEffect(() => {
        const handleStorage = () => setAuth(localStorage.getItem("auth") === "true");
        window.addEventListener("storage", handleStorage);
        return () => window.removeEventListener("storage", handleStorage);
    }, []);

    return (
        <Router>
            <Routes>
                {/* Public route */}
                <Route path="/login" element={<LoginPage setAuth={setAuth} />} />

                {/* Admin routes */}
                <Route
                    path="/"
                    element={auth ? <AdminLayout /> : <Navigate to="/login" />}
                >
                    <Route index element={<AdminDashboard />} />
                    <Route path="dashboard" element={<AdminDashboard />} />
                </Route>

                {/* Telecaller routes */}
                <Route
                    path="/tele-caller"
                    element={auth ? <TeleLayout /> : <Navigate to="/login" />}
                >
                    <Route index element={<TeleDashboard />} />
                    <Route path="dashboard" element={<TeleDashboard />} />
                    <Route path="follow-up" element={<Leads />} />
                    <Route path="add-leads" element={<AddLeads />} />
                </Route>

                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
