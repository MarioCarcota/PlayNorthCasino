// export const metadata = {
//   title: "Play North Casino Online | 1000 spins free | Casino Malta",
//   description:
//     "Play North Casino Online and get 1000 spins free | The biggest Casino in Malta",
// };

// export default function Home() {
//   return (
//     <main className="flex max-w-screen-2xl mx-auto min-h-screen flex-col items-center justify-between p-3 lg:p-6"></main>
//   );
// }

// app/page.tsx
"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  useEffect(() => {
    fetchCategories();
    fetchGames();
  }, []);

  const fetchCategories = async () => {
    const res = await fetch("/api/categories");
    const data = await res.json();
    console.log(data);
    setCategories(data);
  };

  const fetchGames = async () => {
    const res = await fetch(
      `/api/games?search=${search}&pageNumber=${pageNumber}&pageSize=${pageSize}`
    );
    const data = await res.json();
    console.log(data);

    setGames(data);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchGames();
  };

  return (
    <div>
      <h1>Casino Games</h1>

      <h2>Categories</h2>
      {/* <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul> */}

      <h2>Games</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search games"
        />
        <button type="submit">Search</button>
      </form>
      {/* <ul>
        {games.map((game, index) => (
          <li key={index}>{game.name}</li>
        ))}
      </ul> */}
    </div>
  );
}
