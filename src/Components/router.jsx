import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./Super-Admin/dashboard";
import AppFooter from "./Super-Admin/AppFooter";
import AppHeader from "./Super-Admin/AppHeader";
import AppSidebar from "./Super-Admin/AppSidebar";

const AppRouter = () => (
    <Router>
        <AppSidebar />
        <div className="wrapper d-flex flex-column min-vh-100">
            <AppHeader />
            <div className="body flex-grow-1 px-4">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                </Routes>
            </div>
            <AppFooter />
        </div>
    </Router>
);


export default AppRouter;
// <div>
//   <AppSidebar />
//   <div className="wrapper d-flex flex-column min-vh-100">
//     <AppHeader />
//     <div className="body flex-grow-1">
//       <AppContent />
//     </div>
//     <AppFooter />
//   </div>
// </div>
