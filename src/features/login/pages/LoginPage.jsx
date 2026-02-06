import { useNavigate } from "react-router-dom";
import { LoginForm } from "../components/login-form";
import { useEffect } from "react";

export default function LoginPage() {
  const navigate = useNavigate();

  // Check if already logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white py-8">
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}
