'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { motion } from "framer-motion";

const TMDB_IMAGE_PREFIX = "https://image.tmdb.org/t/p/w780";

interface Movie {
  id: number;
  title?: string;
  name?: string;
  poster_path?: string;
  rating?: number;
}

const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoaded = () => {
    setLoading(false);
  };

  return (
    <motion.div className="relative dark:bg-darkSecondary shadow-md p-3 rounded-3xl group transition-[opacity,transform] duration-500">
      <div className="relative h-64 overflow-hidden shadow-lg w-44 -mt-7 rounded-2xl">
        {loading && (
          <>
            <div
              className="absolute inset-0 flex items-center justify-center bg-neutral-700"
              style={{
                zIndex: 1,
              }}
            ></div>
            <span
              className="h-full w-full absolute inset-0 left-full"
              style={{
                zIndex: 2,
                background:
                  "linear-gradient(90deg, transparent, #ffffff50, transparent)",
                animation: "loadingAnimation 1.5s linear infinite",
              }}
            ></span>
          </>
        )}
        <Image
          className="object-cover transition-transform rounded-2xl lg:group-hover:scale-105"
          src={TMDB_IMAGE_PREFIX + movie.poster_path}
          alt={(movie.title ?? movie.name) as string}
          width={600}
          height={720}
          style={{ height: "100%" }}
          onLoadingComplete={handleImageLoaded}
        />
      </div>

      <div className="flex flex-col gap-2 mt-2 mb-1">
        <MovieWatchedStatus rating={movie.rating} />
        <p className="text-sm font-medium -z-1 line-clamp-1" title={movie.title ?? movie.name}>
          {movie.title ?? movie.name}
        </p>
      </div>
    </motion.div>
  );
};

const MovieWatchedStatus: React.FC<{ rating?: number }> = ({ rating }) => {
  return (
    <div className="flex items-center justify-between text-xs">
      {rating ? (
        <>
          <p className="px-4 py-0.5 rounded-full bg-green-400/40 text-green-800 dark:text-green-300">
            Watched
          </p>
          <div className="flex items-center gap-1 font-medium">
            <AiFillStar className="w-4 h-4" />
            <p>{rating}/10</p>
          </div>
        </>
      ) : (
        <p className="relative px-4 py-0.5 rounded-full bg-yellow-300/70 dark:bg-yellow-300 text-yellow-700 animate-pulse">
          Watching
        </p>
      )}
    </div>
  );
};

export default MovieCard;
