import "./UserStatsCard.css";

function UserStatsCard({ value, label, color }) {
  return (
    <div className="card shadow-sm border-0 rounded-3 col-md-3 col-sm-6 mb-3">
      <div className="card-body text-center py-3">
        <h4 className={`fw-bold mb-1 text-${color}`}>{value}</h4>
        <p className="mb-0 text-muted">{label}</p>
      </div>
    </div>
  );
}

export default UserStatsCard;
