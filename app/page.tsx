"use client";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import MovieList, { Movie } from "./components/MovieList";
import Searchbar from "./components/Searchbar";

export default function Home() {

  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch("https://ghibliapi.vercel.app/films");
      const data = await response.json();
      setMovies(data);
    };
    fetchMovies();
  }, []);

  const PAGE_SIZE = 10;
  const [page, setPage] = useState(1);

  const [search, setSearch] = useState("");

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  return (
    <div>
      <Header />
      <h1>List of Movies</h1>
      <Searchbar value={search} onChange={handleSearch} placeholder="Search for a movie" />
      <MovieList movies={movies} />
    </div>
  );
}
