import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import BrandLogoPage from "@/pages/BrandLogoPage";
import ConsultationDataPage from "@/pages/ConsultationDataPage";
import { useState } from "react";
import { AuthContext } from '@/contexts/authContext';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout }}
    >
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/brand" element={<BrandLogoPage />} />
         <Route path="/consultation-data" element={<ConsultationDataPage />} />
         <Route path="/other" element={<div className="text-center text-xl">Other Page - Coming Soon</div>} />
      </Routes>
    </AuthContext.Provider>
  );
}
