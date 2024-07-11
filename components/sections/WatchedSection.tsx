// components/WatchedContent.tsx
'use client'

import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard";

const TMDB_API_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_ACCESS_TOKEN = process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN;
const TMDB_ACCOUNT_ID = process.env.NEXT_PUBLIC_TMDB_ACCOUNT_ID;

interface Movie {
  id: number;
  title?: string;
  name?: string;
  poster_path: string;
  rating?: number;
}

const WatchedContent: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${TMDB_API_BASE_URL}/account/${TMDB_ACCOUNT_ID}/rated/movies?sort_by=created_at.desc`, {
          headers: {
            Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        setError("Failed to fetch data");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Recently Watched Movies and Series</h2>
        {error && <p className="text-red-500">{error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchedContent;
