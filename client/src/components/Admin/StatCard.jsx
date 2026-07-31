const StatCard = ({
  title,
  value,
  icon,
}) => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <div className="mb-3">{icon}</div>

      <h3 className="text-slate-500">
        {title}
      </h3>

      <p className="mt-2 text-3xl font-bold">
        {value}
      </p>
    </div>
  );
};

export default StatCard;