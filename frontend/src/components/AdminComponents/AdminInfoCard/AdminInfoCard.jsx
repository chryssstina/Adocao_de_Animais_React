import "./AdminInfoCard.css";

function AdminInfoCard({ id, title, text, icon }) {
  return (
    <div className="col-lg-5 p-4 card rounded-3 border-1 admin-animated-card" id={id}>
      <div className="admin-card row m-0">
        <div className="card-icon col-1 custom-card-icon text-center justify-content-center align-items-start d-flex">
          <i className={`bi ${icon} custom-icon custom-icon-admin-info-card`}></i>
        </div>
        <div className="card-content col-11 text-start">
          <h5 className="card-title mb-3">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default AdminInfoCard;
