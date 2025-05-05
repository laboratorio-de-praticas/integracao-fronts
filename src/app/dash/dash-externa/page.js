'use client'; // Necessário para usar hooks do React, como useContext

import Head from "next/head";
import { TurmaProvider } from "@/context/TurmaContext";

export default function DashExterna() {
  return (
    <TurmaProvider>
      <>
        <Head>
          <title>Dash Externa</title>
          <meta name="description" content="Descrição da sua aplicação" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <main>
          <h1>DashExterna</h1>
        </main>
      </>
    </TurmaProvider>
  );
}
