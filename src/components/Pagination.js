import React from "react";

function Pagination({ totalUsers, usersPerPage, setCurrentPage, currentPage }) {
  const totalPages = Math.ceil(totalUsers / usersPerPage);

  if (totalPages <= 1) return null;

  return (
    <nav>
      <ul className="pagination">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <li
            key={page}
            className={`page-item ${currentPage === page ? "active" : ""}`}
          >
            <button onClick={() => setCurrentPage(page)} className="page-link">
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
