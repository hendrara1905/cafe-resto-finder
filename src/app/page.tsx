"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const data = [
  {
    id: 1,
    name: "Kopi Nako Kuningan",
    city: "Kuningan",
    category: "Kafe",
    image: "/images/kopi-nako.jpg",
    ig: "https://www.instagram.com/reel/CI6PYXJDhHk/",
  },
  {
    id: 2,
    name: "Sambel Hejo Majalengka",
    city: "Majalengka",
    category: "Resto",
    image: "/images/sambel-hejo.jpg",
    ig: "https://www.instagram.com/reel/CI6PYXJDhHl/",
  },
  {
    id: 3,
    name: "Warung Kopi Klasik",
    city: "Kuningan",
    category: "Kafe",
    image: "/images/kopi-klasik.jpg",
    ig: "https://www.instagram.com/reel/CI6PYXJDhHm/",
  },
];

const cities = ["Kuningan", "Majalengka"];

export default function Home() {
  const [selectedCity, setSelectedCity] = useState("Kuningan");
  const router = useRouter();

  const filteredData = data.filter((item) => item.city === selectedCity);

  const handleCardClick = (id: number) => {
    router.push(`/detail/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow p-4 text-center text-2xl font-semibold">
        Resto & Cafe Finder
      </header>

      <div className="p-4">
        {/* Tabs */}
        <div className="flex space-x-2 mb-4">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-4 py-2 rounded-full border ${
                selectedCity === city
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition"
              onClick={() => handleCardClick(item.id)}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-500">
                  {item.city} • {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { data };
