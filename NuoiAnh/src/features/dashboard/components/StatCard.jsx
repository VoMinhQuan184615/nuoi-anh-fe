export default function StatCard({
  icon: Icon,
  label,
  value,
  increment,
  color = "blue",
}) {
  const colorClasses = {
    blue: { icon: "text-blue-600", bg: "bg-blue-100" },
    green: { icon: "text-green-600", bg: "bg-green-100" },
    purple: { icon: "text-purple-600", bg: "bg-purple-100" },
    orange: { icon: "text-orange-600", bg: "bg-orange-100" },
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div
        className={`${colorClasses[color].bg} w-12 h-12 rounded-full flex items-center justify-center mb-4`}
      >
        {Icon && <Icon size={28} className={colorClasses[color].icon} />}
      </div>
      <p className="text-4xl font-bold text-gray-900 mb-2">{value}</p>
      <p className="text-sm text-gray-600 mb-3">{label}</p>
      {increment && (
        <p className="text-xs text-green-600 font-medium">↑ {increment}</p>
      )}
    </div>
  );
}
