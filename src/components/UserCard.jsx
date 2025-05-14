import React from "react";

function UserCard({ user }) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card p-3">
        <h5>{user.name}</h5>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
      </div>
    </div>
  );
}

export default UserCard;
