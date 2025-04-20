"use client";
import { useEffect, useState } from "react";

export default function QuotesClient() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data.quotes);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-200 py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Inspiring Quotes</h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading quotes...</p>
      ) : (
        <div className="grid gap-6 max-w-4xl mx-auto grid-cols-1 sm:grid-cols-2">
          {quotes.map((quote) => (
            <div
              key={quote.id}
              className="bg-grey-500 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500"
            >
              <p className="text-gray-700 italic mb-4">"{quote.quote}"</p>
              <p className="text-sm text-gray-500 text-right">— {quote.author}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

