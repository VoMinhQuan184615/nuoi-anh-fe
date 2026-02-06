import { Heart, Users, Gift, Zap } from "lucide-react";
import { Header, StatCard, ChildCard } from "../components";
import dashboardImage from "../../../assets/dashboard-image.webp";

export default function Dashboard() {
  const stats = [
    {
      icon: Heart,
      label: "Các em đã giúp đỡ",
      value: "15,000+",
      increment: "500 lần giúp",
      color: "blue",
    },
    {
      icon: Gift,
      label: "Nguồn lực phân phát",
      value: "2.5M+",
      increment: "850 triệu",
      color: "green",
    },
    {
      icon: Users,
      label: "Tình nguyện viên",
      value: "12",
      increment: "3 lần nữa",
      color: "purple",
    },
    {
      icon: Zap,
      label: "Hoạt động",
      value: "8,400",
      increment: "240 hoạt động",
      color: "orange",
    },
  ];

  const children = [
    {
      name: "H'NHI",
      location: "Tây Giang, Quảng Nam",
      description: "Cô bé lớp 3 có hoàn cảnh khó khăn cần sự giúp đỡ",
      image: dashboardImage,
    },
    {
      name: "A Lảng",
      location: "Sơn La",
      description:
        "Em nhỏ tuổi cần được chăm sóc và hỗ trợ một phần chi phí sống",
      image: dashboardImage,
    },
    {
      name: "Hoa Mai",
      location: "Lâm Đồng",
      description: "Ánh sáng đến với những trẻ em đặc biệt cần được yêu thương",
      image: dashboardImage,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section
        className="bg-cover bg-center text-white py-16 md:py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${dashboardImage})`,
        }}
      >
        <div className="max-w-6xl mx-auto px-2 sm:px-3 lg:px-4">
          <div className="max-w-2xl">
            <p className="text-sm md:text-base mb-2 opacity-90">THÁNG 2 2024</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Một tương lai tươi sáng cho trẻ em Việt Nam
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Mỗi đứa trẻ xứng đáng được yêu thương, giáo dục và có cơ hội phát
              triển tối đa tiềm năng của mình
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
              Bắt đầu giúp đỡ
            </button>
            <button className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition">
              Tìm hiểu thêm
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sự mệnh của chúng tôi
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Chúng tôi sứ mệnh là hỗ trợ giáo dục và chăm sóc các trẻ em có
              hoàn cảnh khó khăn. Mỗi lần giúp đỡ là một bước tiến trên con
              đường sáng tạo tương lai tươi sáng.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Children Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-2 sm:px-3 lg:px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Các em cần hỗ trợ
            </h2>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 font-semibold text-sm md:text-base"
            >
              Xem tất cả →
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {children.slice(0, 2).map((child, index) => (
              <ChildCard key={index} {...child} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-2 sm:px-3 lg:px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hãy cùng chúng tôi thay đổi cuộc sống
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Mỗi đóng góp nhỏ của bạn sẽ tạo nên sự thay đổi lớn trong cuộc sống
            của các trẻ em
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            Tình nguyện ngay
          </button>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-2 sm:px-3 lg:px-4">
          <div className="flex items-center gap-4">
            <Users size={32} className="text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="text-lg md:text-2xl font-bold text-gray-900">
                Minh bạch & Tin cậy
              </h3>
              <p className="text-gray-600 text-sm">
                Cam kết 100% dịch vụ được cấp phát đến các em cần giúp đỡ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-2 sm:px-3 lg:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">NuôiAnh</h3>
              <p className="text-gray-400">
                Giúp đỡ các trẻ em có hoàn cảnh khó khăn ở Việt Nam
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Về chúng tôi</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Sứ mệnh
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Đội ngũ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Tin tức
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Liên hệ</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Trợ giúp
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Pháp lý</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Chính sách riêng tư
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Điều khoản dịch vụ
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 NuôiAnh. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
