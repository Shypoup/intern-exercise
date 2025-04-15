"use client";

import { useEffect, useState } from "react";

const TestComponent = ({ name, age }: { name: string; age: number }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    try {
      fetch("https://dummyjson.com/recipes")
        .then((response) => response.json())
        .then((data) => {
          setData(data.recipes);
          console.log(data);
        })
        .catch((error) => console.error("Error fetching data:", error));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);
  return (
    <div className="text-black">
      <h1>Hello from test component</h1>
      <p> This is a test component</p>
      {name ? <p>My name is {name}</p> : <p>No name provided</p>}
      {age ? <p>My age is {age}</p> : <p>No age provided</p>}
      {data &&
        data.length > 0 &&
        data.map((item: any) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.cuisine}</p>
            <p>{item.userId}</p>
          </div>
        ))}
    </div>
  );
};

export default TestComponent;
