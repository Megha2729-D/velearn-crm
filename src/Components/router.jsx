import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginPage from "./LoginPage";

// layout
import AdminLayout from "./Super-Admin/AdminLayout";
import TeleLayout from "./TeleCaller/TeleLayout";
import CounsellorLayout from "./Counsellor/CounsellorLayout";

// super-admin
import AdminDashboard from "./Super-Admin/AdminDashboard";

// tele-caller
import TeleDashboard from "./TeleCaller/TeleCallerDashboard";
import TeleLeads from "./TeleCaller/Leads";
import AddTeleLeads from "./TeleCaller/AddLead";

// counsellor
import CounsellorDashboard from "./Counsellor/CounsellorDashboard";
import CounsellorLeads from "./Counsellor/Leads";
import CounsellorAddLeads from "./Counsellor/AddLead";

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
                    <Route path="follow-up" element={<TeleLeads />} />
                    <Route path="add-leads" element={<AddTeleLeads />} />
                </Route>

                {/* Counsellor routes */}
                <Route
                    path="/counsellor"
                    element={auth ? <CounsellorLayout /> : <Navigate to="/login" />}
                >
                    <Route index element={<CounsellorDashboard />} />
                    <Route path="dashboard" element={<CounsellorDashboard />} />
                    <Route path="leads" element={<CounsellorLeads />} />
                    <Route path="add-leads" element={<CounsellorAddLeads />} />
                </Route>

                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
