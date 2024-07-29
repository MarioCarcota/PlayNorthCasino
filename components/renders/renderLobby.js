"use client";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { TransitionLink } from "../utils/TransitionLink";
import { motion, AnimatePresence } from "framer-motion";
import { AlertOctagon, Search } from "lucide-react";

export default function RenderLobbyGames() {
  const [categories, setCategories] = useState([]);
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    fetchCategories();
    fetchGames();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchCategories = async () => {
    const res = await fetch("/api/categories");
    const data = await res.json();
    setCategories(data);
  };

  const fetchGames = async () => {
    setLoading(true);
    const res = await fetch(
      `/api/games?search=${search}&pageNumber=${pageNumber}&pageSize=${pageSize}`
    );
    const data = await res.json();
    if (pageNumber === 1) {
      setGames(data.items);
    } else {
      setGames((prevGames) => [...prevGames, ...data.items]);
    }
    setHasMore(data.items.length === pageSize);
    setLoading(false);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPageNumber(1);
  };

  useEffect(() => {
    fetchGames();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const [skeletonCount, setSkeletonCount] = useState(24); // Default to 24

  useEffect(() => {
    const updateSkeletonCount = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setSkeletonCount(24); // xl: 6 columns * 4 rows
      } else if (width >= 1024) {
        setSkeletonCount(20); // lg: 5 columns * 4 rows
      } else if (width >= 768) {
        setSkeletonCount(16); // md: 4 columns * 4 rows
      } else {
        setSkeletonCount(8); // sm and xs: 2 columns * 4 rows
      }
    };

    // Update skeleton count on mount and on window resize
    updateSkeletonCount();
    window.addEventListener("resize", updateSkeletonCount);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", updateSkeletonCount);
  }, []);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
      !loading &&
      hasMore
    ) {
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    }
  }, [loading, hasMore]);

  useEffect(() => {
    if (pageNumber > 1) {
      fetchGames();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  console.log(categories);
  return (
    <div className="w-full h-full">
      <div className="flex md:flex-row flex-col gap-6 justify-between p-2 mb-4 mt-2">
        <h1 className="text-3xl text-text font-bold">Our Games</h1>

        <div className="relative mb-4 w-full max-w-md">
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Search the best games"
            className={`w-full py-2 px-4 pr-10 bg-transparent text-white placeholder-white/50 border-b-2 transition-all duration-300 outline-none ${
              isFocused
                ? "border-accentBlue"
                : "border-white/50 hover:border-white/75"
            }`}
          />
          <Search
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
              isFocused ? "text-white" : "text-white/50"
            }`}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 w-full">
        <AnimatePresence>
          {loading && games.length === 0 ? (
            Array.from({ length: skeletonCount }).map((_, index) => (
              <motion.div
                key={`skeleton-${index}`}
                className=""
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="animate-pulse bg-gray-100/40 rounded-lg aspect-square w-full"></div>
              </motion.div>
            ))
          ) : games.length === 0 && !loading ? (
            <motion.div
              className="col-span-full justify-center items-center flex gap-4 mt-10 text-3xl text-center text-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <AlertOctagon size={40} />
              No games found!
            </motion.div>
          ) : (
            games.map((game, index) => (
              <motion.div
                key={`${game.slug}-${index}`}
                className=""
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <TransitionLink href={game.slug}>
                  <div className="text-text  rounded-lg shadow-md flex flex-col items-center relative group">
                    <div className="relative w-full aspect-square mb-2 overflow-hidden rounded-md">
                      <Image
                        width={1000}
                        height={1000}
                        src={game.image.small.src}
                        alt={game.gameText}
                        className="rounded-md transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-opacity duration-300 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                        <p className="text-text text-center font-bold mb-4">
                          {game.gameText}
                        </p>
                        <button className="text-sm bg-accentBlue hover:font-bold hover:bg-accentBlue/90 text-darkBlue font-medium py-2 px-4 rounded transition duration-300">
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                </TransitionLink>
              </motion.div>
            ))
          )}
          {loading &&
            games.length > 0 &&
            Array.from({ length: skeletonCount }).map((_, index) => (
              <motion.div
                key={`skeleton-loading-${index}`}
                className="p-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="animate-pulse bg-gray-100/40 rounded-lg aspect-square w-full"></div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
