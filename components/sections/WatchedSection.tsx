// // components/WatchedContent.tsx
// 'use client'

// import React, { useEffect, useState } from "react";
// import MovieCard from "../MovieCard";

// const TMDB_API_BASE_URL = "https://api.themoviedb.org/3";
// const TMDB_ACCESS_TOKEN = process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN;
// const TMDB_ACCOUNT_ID = process.env.NEXT_PUBLIC_TMDB_ACCOUNT_ID;

// interface Movie {
//   id: number;
//   title?: string;
//   name?: string;
//   poster_path: string;
//   rating?: number;
// }

// const WatchedContent: React.FC = () => {
//   const [movies, setMovies] = useState<Movie[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`${TMDB_API_BASE_URL}/account/${TMDB_ACCOUNT_ID}/rated/movies?sort_by=created_at.desc`, {
//           headers: {
//             Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
//             "Content-Type": "application/json",
//           },
//         });

//         if (!response.ok) {
//           throw new Error(`Error: ${response.statusText}`);
//         }

//         const data = await response.json();
//         setMovies(data.results);
//       } catch (error) {
//         setError("Failed to fetch data");
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="space-y-8">
//       <div>
//         <h2 className="text-2xl font-bold text-gray-800 mb-4">Recently Watched Movies and Series</h2>
//         {error && <p className="text-red-500">{error}</p>}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {movies.map((movie) => (
//             <MovieCard key={movie.id} movie={movie} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WatchedContent;
































// components/SeriesList.js
import React from 'react';
import { Card } from '@/components/ui/card';


const series = [
  { title: 'Suits', image: "https://www.imdb.com/title/tt1632701/mediaviewer/rm2076613889" },
  { title: 'Vampire Diaries', image: 'https://m.media-amazon.com/images/I/71Z2T5cA3NL._AC_SY679_.jpg' },
  { title: 'Game of Thrones', image: 'https://m.media-amazon.com/images/I/91ASDzNwD5L._AC_SY679_.jpg' },
  { title: 'The Blacklist', image: 'https://m.media-amazon.com/images/I/71HrT8Fb2RL._AC_SY679_.jpg' },
  { title: 'The Originals', image: 'https://m.media-amazon.com/images/I/91vGdVDrXcL._AC_SY679_.jpg' }
];
function SeriesList() {
    return (
        <div className="min-h-screen bg-black py-12 ">
            <h1 className="text-3xl font-extrabold text-white text-start mb-12">
                Series I Love and Would Recommend You to Watch
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {series.map((show) => (
                    <Card key={show.title} className="bg-gray-800 shadow-md rounded-lg overflow-hidden">
                        <img className="w-full h-60 object-cover" src={show.image} alt={show.title} />
                        <div className="p-4 text-center">
                            <h2 className="text-lg font-semibold text-white">{show.title}</h2>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default SeriesList;
