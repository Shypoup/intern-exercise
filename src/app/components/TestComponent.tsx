// app/components/TestComponent.tsx or pages/test.tsx
"use client";

import { useEffect, useState } from "react";

type Recipe = {
  id: number;
  name: string;
  cuisine: string;
  userId: number;
};

export default function TestComponent() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRecipes = async () => {
    try {
      const res = await fetch("https://dummyjson.com/recipes");
      const data = await res.json();
      setRecipes(data.recipes);
    } catch (err: any) {
      console.error("API error:", err);
      setError("Failed to load data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className="text-black p-6">
      <h1 className="text-xl font-bold mb-4">Recipes</h1>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="grid grid-cols-2 gap-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="border p-4 rounded">
            <h2 className="font-semibold">{recipe.name}</h2>
            <p>Cuisine: {recipe.cuisine}</p>
            <p>User ID: {recipe.userId}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
