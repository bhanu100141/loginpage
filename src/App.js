import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage";
import DashboardPage from "./components/DashboardPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/dashboardpage" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
