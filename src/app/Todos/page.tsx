"use client";
import { useEffect, useState } from "react";

export default function TodosClient() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch todos
  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data.todos);
        setLoading(false);
      });
  }, []);

  // Function to toggle completion
  const toggleCompletion = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed } // Toggle the completed state
          : todo
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-400 py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">To-Do List</h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading todos...</p>
      ) : (
        <div className="max-w-3xl mx-auto">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className={`bg-white p-4 mb-4 rounded-lg shadow-md ${
                todo.completed ? "border-l-4 border-green-500" : "border-l-4 border-red-500"
              }`}
            >
              <div className="flex justify-between items-center">
                <p
                  className={`text-xl ${
                    todo.completed ? "text-green-500 line-through" : "text-gray-800"
                  }`}
                >
                  {todo.todo}
                </p>
                <span
                  className={`text-xs py-1 px-3 rounded-full ${
                    todo.completed ? "bg-green-200 text-green-600" : "bg-red-200 text-red-600"
                  }`}
                >
                  {todo.completed ? "Completed" : "Pending"}
                </span>
                <button
                  onClick={() => toggleCompletion(todo.id)}
                  className="ml-4 px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                  {todo.completed ? "Mark as Pending" : "Mark as Completed"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
