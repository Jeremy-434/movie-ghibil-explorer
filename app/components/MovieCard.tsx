import Image from "next/image";
import { Movie } from "./MovieList";

export default function MovieCard({ movie }: { movie: Movie }) {

  console.log("movie", movie);

  return (
    <div className="flex flex-col items-center justify-center bg-input-background">
      <div>
        <img src={movie.image} alt={movie.title} width={100} height={100} />
      </div>
      <div>
        <h1 className="text-2xl font-bold">{movie.title}</h1>
        <div className="flex flex-row gap-2">
          <p>{movie.releaseDate}</p>
          <p>{movie.director}</p>
        </div>
      </div>
    </div>
  );
}