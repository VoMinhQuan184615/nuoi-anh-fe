import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">NuôiAnh</h1>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex gap-8">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Trang chủ
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Về chúng tôi
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Các em cần giúp đỡ
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Liên hệ
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex gap-4">
            <button className="px-6 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
              Đăng nhập
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
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
              <button className="w-full px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition text-left">
                Đăng nhập
              </button>
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
