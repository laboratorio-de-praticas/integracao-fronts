"use client"

import { BiDownload } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GeneratePdf } from "./generatePdf";


const statusColors = {
    Ativo: "bg-[#a4d69a]",
    Em_Preparo: "bg-[#b2acee]",
    Em_Contagem: "bg-[#ffaf54]",
    Finalizado: "bg-[#acacac]",
};

export default function ListEventos() {
    const VITRINE_BE_HOST = process.env.NEXT_PUBLIC_VITRINE_BE;
    const [eventos, setEventos] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    function formatStatus(status) {
        return status.replace(/_/g, ' ');
    }

    const router = useRouter();

    useEffect(() => {
        localStorage.setItem(
            "token",
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
        );
        const token = localStorage.getItem("token");

        if (!token) {
            return router.push("/login");
        }
        fetch(`${VITRINE_BE_HOST}/v1/vitrine/eventos-externos`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => {
                if (!res.ok) throw new Error("Erro na requisição");
                return res.json();
            })
            .then((data) => {
                setEventos(data)
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));

    }, []);


    return (

        <div className="overflow-x-auto  w-full mx-auto p-10 pb-30" style={{ maxWidth: "1400px" }}>
            <h1 className="GE-TITLE text-[2rem] font-bold mb-2 mt-10">Eventos | Gerador de QRcode</h1>
            <hr className="border-t-2 border-gray-200 mb-4" />
            <div className="overflow-x-auto bg-white max-w-full rounded-2xl shadow-2xl mx-auto mt-15">
                <table className="min-w-full text-md text-left">
                    <thead className="text-gray-600">
                        <tr>
                            <th colSpan={5} className="text-left text-xl font-semibold text-[#005c69] px-4 py-4 bg-white">
                                Registro de Eventos
                            </th>
                        </tr>
                        <tr className="GE-TITLE">
                            <th className="py-2 px-4">Eventos</th>
                            <th className="py-2 px-4">Data do Evento</th>
                            <th className="py-2 px-4">Projetos Apresentados</th>
                            <th className="py-2 px-4">Status</th>
                            <th className="py-2 px-4"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {eventos.map((evento, index) => (
                            <tr key={evento.id_evento || index} className="border-t border-gray-200">
                                <td className="py-3 px-4 flex items-center gap-2">
                                    {evento.nome_evento}
                                </td>
                                <td className="py-3 px-4">{new Date(evento.data_inicio).toLocaleDateString("pt-BR")}</td>
                                <td className="py-3 px-4">{evento.projetosEventos?.length ?? 0}</td>
                                <td className="py-3 px-4">
                                    <span className={`inline-block w-32 text-center px-3 py-1 rounded-sm text-xs text-white font-semibold ${statusColors[evento.status_evento]}`}>
                                        {formatStatus(evento.status_evento)}
                                    </span>
                                </td>
                                <td className="py-3 px-4">
                                    <button
                                        className="text-gray-500 hover:text-gray-700" onClick={() => GeneratePdf(evento.nome_evento, evento.projetosEventos)}>
                                        <BiDownload size={25} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {eventos.length === 0 && (
                    <div className="mt-8 text-center text-gray-500 italic text-[1.4rem] leading-[1.3] m-0 pb-4 3xl:text-[2.9rem]">
                        Não há eventos disponíveis no momento.
                    </div>
                )}
            </div>
            {error && (
                <div className="text-red-500 text-center mt-4 font-semibold">
                    Ocorreu um erro ao carregar os eventos: {error}
                </div>
            )}

            {loading && (
                <div className="text-center py-6 text-gray-400 italic">
                    Carregando eventos...
                </div>
            )}
        </div>


    );
}
