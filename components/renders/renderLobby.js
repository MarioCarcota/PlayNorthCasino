"use client";
import { useState, useEffect } from "react";

export default function RenderLobbyGames() {
  const [categories, setCategories] = useState([]);
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  useEffect(() => {
    fetchCategories();
    fetchGames();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <>
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
    </>
  );
}
