import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import Pagination from "../components/Pagination";

const POSTS_PER_PAGE = 6;

function Dashboard() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Failed to fetch posts:", error));
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLast = currentPage * POSTS_PER_PAGE;
  const indexOfFirst = indexOfLast - POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(indexOfFirst, indexOfLast);

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
        {currentPosts.map((post) => (
          <UserCard key={post.id} post={post} />
        ))}
      </div>
      <Pagination
        totalUsers={filteredPosts.length}
        usersPerPage={POSTS_PER_PAGE}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}

export default Dashboard;
