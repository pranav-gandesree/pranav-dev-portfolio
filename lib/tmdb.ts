// lib/tmdb.ts
import { ITMDBData } from './interface';

const TMDB_ACCESS_TOKEN = process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN;
const TMDB_ACCOUNT_ID = process.env.NEXT_PUBLIC_TMDB_ACCOUNT_ID;

const options: RequestInit = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
  },
};

async function fetchData(url: string): Promise<ITMDBData[]> {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Error while fetching TMDB data: ' + response.statusText);
    }
    const data = await response.json();
    return (data?.results ?? data?.items) as ITMDBData[];
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function fetchTMDBData(): Promise<ITMDBData[]> {
  try {
    const recentRatedMovies = await fetchData(
      `https://api.themoviedb.org/3/account/${TMDB_ACCOUNT_ID}/rated/movies?sort_by=created_at.desc`
    );

    const recentRatedTvShows = await fetchData(
      `https://api.themoviedb.org/3/account/${TMDB_ACCOUNT_ID}/rated/tv?sort_by=created_at.desc`
    );

    const watchingData = await fetchData(`https://api.themoviedb.org/3/list/8261150`);

    return [...watchingData.reverse(), ...recentRatedMovies.slice(0, 3), ...recentRatedTvShows.slice(0, 3)];
  } catch (error) {
    console.error(error);
    throw error;
  }
}

