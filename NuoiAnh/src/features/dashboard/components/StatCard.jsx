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
    <div className="flex items-start gap-4">
      <div
        className={`p-3 rounded-full ${colorClasses[color].bg} flex-shrink-0`}
      >
        {Icon && <Icon size={32} className={colorClasses[color].icon} />}
      </div>
      <div>
        <p className="text-sm text-gray-600 mb-2">{label}</p>
        <p className="text-3xl font-bold text-gray-900 mb-1">{value}</p>
        {increment && <p className="text-xs text-gray-600">↑ {increment}</p>}
      </div>
    </div>
  );
}
