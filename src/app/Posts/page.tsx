"use client";
import { useEffect, useState } from "react";

export default function PostsClient() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]); // Filtered results
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); // For input box

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts);
        setFilteredPosts(data.posts);
        setLoading(false);
      });
  }, []);

  // Handle search filtering
  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    setSearchTerm(keyword);

    const filtered = posts.filter((post) => {
      const title = post.title?.toLowerCase() || "";
      const body = post.body?.toLowerCase() || "";
      const tags = post.tags?.join(" ").toLowerCase() || "";

      return (
        title.includes(keyword) ||
        body.includes(keyword) ||
        tags.includes(keyword)
      );
    });

    setFilteredPosts(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-200 py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-6">Blog Posts</h1>

      {/* 🔍 Search box */}
      <div className="max-w-2xl mx-auto mb-8">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search posts by title, body, or tags..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading posts...</p>
      ) : filteredPosts.length === 0 ? (
        <p className="text-center text-red-500">No posts found.</p>
      ) : (
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-green-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-sm text-gray-600 mb-2 line-clamp-3">
                {post.body}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <p className="mt-3 text-xs text-gray-400">
                👍 {post.reactions.likes} | 👎 {post.reactions.dislikes}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

