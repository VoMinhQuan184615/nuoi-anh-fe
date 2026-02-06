import { Heart } from "lucide-react";

export default function ChildCard({ name, location, description, image }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative h-56 md:h-64 bg-gradient-to-r from-blue-400 to-blue-600 overflow-hidden">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-300 to-blue-500">
            <span className="text-white text-lg">Ảnh</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-sm text-gray-500 mb-3">{location}</p>
        <p className="text-sm text-gray-700 mb-6">{description}</p>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition font-semibold text-base">
          <Heart size={20} />
          Giúp đỡ
        </button>
      </div>
    </div>
  );
}
