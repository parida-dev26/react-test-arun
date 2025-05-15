import React from "react";

function UserCard({ post }) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card p-3">
        <h5>{post.title}</h5>
        <p>
          <strong>ID:</strong> {post.id}
        </p>
        <p>Phone: {post.body}</p>
      </div>
    </div>
  );
}

export default UserCard;
