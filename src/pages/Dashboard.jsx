import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import Pagination from "../components/Pagination";

const USERS_PER_PAGE = 6;

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLast = currentPage * USERS_PER_PAGE;
  const indexOfFirst = indexOfLast - USERS_PER_PAGE;
  const currentUsers = filteredUsers.slice(indexOfFirst, indexOfLast);

  return (
    <>
      <input
        type="text"
        className="form-control my-3"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1);
        }}
      />
      <div className="row">
        {currentUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      <Pagination
        totalUsers={filteredUsers.length}
        usersPerPage={USERS_PER_PAGE}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}

export default Dashboard;
