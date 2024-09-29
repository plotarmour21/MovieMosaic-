import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

interface MovieDetailsProps {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  genres: { id: number; name: string }[];
}

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetailsProps | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
      const BASE_URL = "https://api.themoviedb.org/3";
      const endpoint = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;

      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg rounded-lg overflow-hidden"
    >
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {movie.release_date}
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {movie.title}
          </a>
          <p className="mt-2 text-gray-500">{movie.overview}</p>
          <div className="mt-4">
            <span className="text-gray-500">Rating: </span>
            <span className="font-bold">{movie.vote_average.toFixed(1)}</span>
          </div>
          <div className="mt-2">
            <span className="text-gray-500">Genres: </span>
            <span className="font-bold">
              {movie.genres.map((genre) => genre.name).join(", ")}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
