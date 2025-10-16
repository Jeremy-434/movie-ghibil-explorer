"use client";

import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

export interface Movie {
  id: string;
  title: string;
  description: string;
  image: string;
  rating: number;
  releaseDate: string;
  director: string;
  producer: string;
}

export default function MovieList({ movies }: { movies: Movie[] }) {

  return (
    <div className="flex flex-row flex-wrap gap-4 items-center justify-center">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}