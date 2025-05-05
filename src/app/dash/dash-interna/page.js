"use client";
import React from "react";
import Head from "next/head";
import DashInternoMain from "@/components/dash/DashInternoMain";
import { TurmaProvider } from "@/context/TurmaContext"; // ajuste o caminho conforme necessário

export default function DashInterna() {
  return (
    <>
      <Head>
        <title>Dashboard Interno</title>
        <meta name="description" content="Dashboard Interno" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ✅ Envolvendo com o Provider */}
      <TurmaProvider>
        <DashInternoMain />
      </TurmaProvider>
    </>
  );
}
