'use client'
import React from "react";
import SpHeader from "../../../components/vitrine/header";
import Footer from "../../../components/vitrine/footer";
import ListEventos from "../../../components/vitrine/list";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SpHeader />
      <main className="flex-1 flex justify-center items-start w-full px-4">
        <ListEventos />
      </main>
      <Footer />
    </div>
  );
}
