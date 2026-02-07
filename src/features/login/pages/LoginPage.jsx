import { useNavigate } from "react-router-dom";
import { LoginForm } from "../components/login-form";
import { useEffect } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

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
    <div className="relative flex items-center justify-center min-h-screen bg-black py-8 overflow-hidden">
      <BackgroundBeams />
      <div className="relative z-10">
        <LoginForm onLogin={handleLogin} />
      </div>
    </div>
  );
}
