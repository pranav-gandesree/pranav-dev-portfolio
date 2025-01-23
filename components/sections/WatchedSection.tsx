import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const series = [
  {
    title: "Suits",
    image:
      "https://i.pinimg.com/236x/8c/88/88/8c888877f8b6195c5abd7b349169ad1e.jpg",
  },
  {
    title: "Vampire Diaries",
    image:
      "https://imgs.search.brave.com/fiVmW9yRobPO9e2yWQsstxjPq-_js_JzV09JeXJp7Wc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pcnMu/d3d3Lndhcm5lcmJy/b3MuY29tL2tleWFy/dC1qcGVnL3R2L21l/ZGlhL2Jyb3dzZXIv/dGhlX3ZhbXBpcmVf/ZGlhcmllc19jb21w/bGV0ZV9zZXJpZXNf/a2V5X2FydC5qcGc",
  },
  {
    title: "The Blacklist",
    image:
      "https://imgs.search.brave.com/SG1CErbfuiJitwRqPDwPn13_ni3_SriMPWQxKVoCC_U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg5LzQx/L2VlLzg5NDFlZTYy/NWNhZmYzMWE2YmU1/MTg4MjY5ZWZhYTEy/LmpwZw",
  },
  {
    title: "The Originals",
    image:
      "https://imgs.search.brave.com/RVXpZhvbZIpu3N_DAN93D9035ONDUGhC9yhaF6NSVZk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kNWQ1/eWVqcmJhOWxvLmNs/b3VkZnJvbnQubmV0/L2tleWFydC1qcGVn/L3R2L21lZGlhL2Jy/b3dzZXIvb3JpZ2lu/YWxzX3MxczNfdl9k/ZF9rYV90dF8yMDAw/eDMwMDBfMzAwZHBp/X2VuXzhhZjQ5ZDIu/anBlZw",
  },
];

function SeriesList() {
  return (
    <div className="min-h-screen bg-black py-12">
      <h2 className="text-3xl font-extrabold text-white text-start mb-12">
        Series I Love and Would Recommend You to Watch
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {series.map((show) => (
          <Card
            key={show.title}
            className=" shadow-md rounded-lg overflow-hidden"
          >
            <div className="relative h-[24rem] w-full sm:h-[18rem]">
              <Image
                className="object-cover"
                src={show.image}
                alt={show.title}
                layout="fill"
                objectFit="cover"
            
              />
            </div>
            {/* <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-white">{show.title}</h2>
            </div> */}
          </Card>
        ))}
      </div>
    </div>
  );
}

export default SeriesList;
