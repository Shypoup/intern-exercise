"use client";
import { useEffect, useState } from "react";

export default function CommentsClient() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/comments")
      .then((res) => res.json())
      .then((data) => {
        setComments(data.comments);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-500 py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">User Comments</h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading comments...</p>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="mb-2">
                <span className="text-lg font-semibold text-blue-600">
                  {comment.user.username}
                </span>
                <span className="ml-2 text-gray-400 text-sm">#{comment.id}</span>
              </div>
              <p className="text-gray-700">{comment.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
