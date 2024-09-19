
import React from 'react';
import { Card } from '@/components/ui/card';
import Image from 'next/image';


const series = [
  { title: 'Suits', image: "https://www.gettyimages.com/photos/suits-television-show" },
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
                        <Image className="w-full h-60 object-cover" src={show.image} alt={show.title} />
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
