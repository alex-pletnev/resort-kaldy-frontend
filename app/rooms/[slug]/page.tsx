import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ROOMS } from "@/lib/rooms";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RoomDetail from "@/components/rooms/RoomDetail";
import RelatedRooms from "@/components/rooms/RelatedRooms";

export function generateStaticParams() {
  return ROOMS.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const room = ROOMS.find((r) => r.slug === slug);
  if (!room) return { title: "Номер не найден" };
  return {
    title: `${room.name} — База отдыха Калды.ру`,
    description: room.description.length > 155
      ? room.description.slice(0, room.description.lastIndexOf(" ", 155)) + "…"
      : room.description,
  };
}

export default async function RoomPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const room = ROOMS.find((r) => r.slug === slug);
  if (!room) notFound();

  return (
    <>
      <Navbar />
      <RoomDetail room={room} />
      <RelatedRooms currentSlug={room.slug} />
      <Footer />
    </>
  );
}
