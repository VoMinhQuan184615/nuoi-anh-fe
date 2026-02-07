import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./features/dashboard/pages/Dashboard";
import LoginPage from "./features/login/pages/LoginPage";
import { Toaster } from "./components/ui/sonner";
import NotYetPage from "./features/notyet/pages/NotYetPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/#" element={<NotYetPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
