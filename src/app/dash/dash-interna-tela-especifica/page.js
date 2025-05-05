// src/app/dash/dash-interna-tela-especifica/page.js

'use client';

import Layout from "@/layout/Layout";
import Head from "next/head";
import DashInternoCard from "@/components/dash/DashInternaTelaCard/DashInternaTelaCard";
import { TurmaProvider } from "@/context/TurmaContext"; // ✅ certifique-se que está importando isso corretamente

function DashInterna() {
  return (
    <>
      <Head>
        <title>Dash Interna</title>
        <meta name="description" content="Descrição da sua aplicação" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <TurmaProvider>
        <DashInternoCard />
      </TurmaProvider>
    </>
  );
}

export default DashInterna;
