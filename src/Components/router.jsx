import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./Super-Admin/AdminLayout";
import TeleLayout from "./TeleCaller/TeleLayout";

import AdminDashboard from "./Super-Admin/AdminDashboard";
import TeleDashboard from "./TeleCaller/TeleCallerDashboard";
import Leads from "./TeleCaller/Leads";
import AddLeads from "./TeleCaller/AddLead";

const AppRouter = () => (
    <Router>
        <Routes>

            {/* SUPER ADMIN ROUTES */}
            <Route path="/" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="dashboard" element={<AdminDashboard />} />
                {/* more admin pages */}
            </Route>

            {/* TELECALLER ROUTES */}
            <Route path="/tele-caller" element={<TeleLayout />}>
                <Route index element={<TeleDashboard />} />
                <Route path="dashboard" element={<TeleDashboard />} />
                <Route path="follow-up" element={<Leads />} />
                <Route path="add-leads" element={<AddLeads />} />
                {/* more telecaller pages */}
            </Route>

        </Routes>
    </Router>
);

export default AppRouter;
