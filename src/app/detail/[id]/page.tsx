"use client";

import { useParams } from "next/navigation";
import { data } from "@/data/places";
import Image from "next/image";

export default function DetailPage() {
  const { id } = useParams();
  const resto = data.find((item) => item.id === Number(id));

  if (!resto) {
    return <div className="p-4">Tempat tidak ditemukan.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow p-4 text-center text-2xl font-semibold">
        Detail Tempat: {resto.name}
      </header>

      <div className="p-4 max-w-2xl mx-auto space-y-6">
        {/* Gambar utama */}
        <div className="relative w-full h-64">
          <Image
            src={resto.image}
            alt={resto.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Informasi */}
        <div>
          <h2 className="text-2xl font-bold">{resto.name}</h2>
          <p className="text-gray-600">
            {resto.city} • {resto.category}
          </p>
        </div>

        {/* Embed IG Video */}
        <div className="aspect-w-9 aspect-h-16">
          <iframe
            src={`https://www.instagram.com/reel/${resto.ig
              .split("/reel/")[1]
              ?.replace("/", "")}/embed`}
            className="w-full h-[400px] rounded-lg"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        <div className="text-sm text-gray-500">
          Review dari influencer di IG:{" "}
          <a
            href={resto.ig}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Lihat di Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
