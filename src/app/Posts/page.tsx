"use client";
import { useEffect, useState } from "react";

export default function PostsClient() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-200 py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Blog Posts</h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading posts...</p>
      ) : (
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {posts.map((post) => (
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

              {/* ✅ Access reactions.likes and reactions.dislikes individually */}
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
