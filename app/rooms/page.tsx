import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RoomsCatalog from "@/components/rooms/RoomsCatalog";

export const metadata: Metadata = {
  title: "Номера и коттеджи — Калды.ру",
  description:
    "Выберите подходящий вариант размещения на берегу озера Калды. Коттеджи, корпус, домики — от 1 900 ₽ в сутки.",
};

export default function RoomsPage() {
  return (
    <>
      <Navbar />
      <RoomsCatalog />
      <Footer />
    </>
  );
}
