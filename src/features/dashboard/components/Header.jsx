import { Menu, X, Bell, LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(!!loggedIn);
  }, []);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="w-full px-0">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">NUÔI ANH</h1>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex gap-8">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition text-sm"
            >
              Trang chủ
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition text-sm"
            >
              Về chúng tôi
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition text-sm"
            >
              Các em cần giúp đỡ
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition text-sm"
            >
              Liên hệ
            </a>
          </nav>

          {/* Right Side - Icons & CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Bell Icon */}
            <button className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition">
              <Bell size={20} />
            </button>

            {/* Buttons */}
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="px-6 py-2 text-red-600 border-2 border-red-600 rounded-lg hover:bg-red-50 transition font-medium text-sm flex items-center gap-2"
              >
                <LogOut size={16} />
                Đăng xuất
              </button>
            ) : (
              <button
                onClick={handleLogin}
                className="px-6 py-2 text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition font-medium text-sm"
              >
                Đăng nhập
              </button>
            )}
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-sm">
              Tình nguyện
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg"
            >
              Trang chủ
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg"
            >
              Về chúng tôi
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg"
            >
              Các em cần giúp đỡ
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg"
            >
              Liên hệ
            </a>
            <div className="pt-2 border-t space-y-2">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition text-left flex items-center gap-2"
                >
                  <LogOut size={16} />
                  Đăng xuất
                </button>
              ) : (
                <button
                  onClick={handleLogin}
                  className="w-full px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition text-left"
                >
                  Đăng nhập
                </button>
              )}
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Tình nguyện
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
