'use client'

import { CheckIcon, RefreshCwIcon } from "lucide-react"
import Button from "../button";
import Container from "../container";
import Header from "../header";
import { Roboto } from "next/font/google";
import { useState } from "react";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const MultifactorAuthenticationCode = () => {
    const [firstNumberCode, setFirstNumberCode] = useState("")
    const [secondNumberCode, setSecondNumberCode] = useState("")
    const [thirdNumberCode, setThirdNumberCode] = useState("")
    const [fourthNumberCode, setFourthNumberCode] = useState("")
    const [fifthNumberCode, setFifthNumberCode] = useState("")
    const [sixthNumberCode, setSixthNumberCode] = useState("")

    return (
        <Container>
            <Header />
            <main className="flex w-full justify-center pb-12">
                <div className="flex items-center flex-col gap-y-10">
                    <h1 className={`font-bold text-[20px] ${roboto.className}`}>VERIFIQUE O SEU EMAIL</h1>

                    <div className="flex flex-col gap-y-5 items-center">
                        <p className={`font-light text-[14px] ${roboto.className}`}>
                            Enviamos um código de 6 dígitos para <i className="font-medium">seuemail@fatec.sp.gov.br!</i>
                        </p>

                        <p className={`font-light text-[14px] ${roboto.className}`}>
                            Digite o código abaixo para confirmar sua identidade e proteger sua conta.
                        </p>
                    </div>

                    <div className="flex gap-x-2.5 items-center">
                        <input
                            value={firstNumberCode}
                            onChange={(e) => {
                                const newValue = e.target.value;
                                if (/^\d*$/.test(newValue)) {
                                    setFirstNumberCode(newValue)
                                }
                            }}
                            type="text"
                            className="w-[50px] h-[50px] border-[#6B7280] focus:border-[#0A74EE] border-solid border-3 rounded-[10px] text-center font-bold text-xl"
                            maxLength={1}
                        />

                        <input
                            value={secondNumberCode}
                            onChange={(e) => {
                                const newValue = e.target.value;
                                if (/^\d*$/.test(newValue)) {
                                    setSecondNumberCode(newValue)
                                }
                            }}
                            type="text"
                            className="w-[50px] h-[50px] border-[#6B7280] focus:border-[#0A74EE] border-solid border-3 rounded-[10px] text-center font-bold text-xl"
                            maxLength={1}
                        />

                        <input
                            value={thirdNumberCode}
                            onChange={(e) => {
                                const newValue = e.target.value;
                                if (/^\d*$/.test(newValue)) {
                                    setThirdNumberCode(newValue)
                                }
                            }}
                            type="text"
                            className="w-[50px] h-[50px] border-[#6B7280] focus:border-[#0A74EE] border-solid border-3 rounded-[10px] text-center font-bold text-xl"
                            maxLength={1}
                        />

                        <input
                            value={fourthNumberCode}
                            onChange={(e) => {
                                const newValue = e.target.value;
                                if (/^\d*$/.test(newValue)) {
                                    setFourthNumberCode(newValue)
                                }
                            }}
                            type="text"
                            className="w-[50px] h-[50px] border-[#6B7280] focus:border-[#0A74EE] border-solid border-3 rounded-[10px] text-center font-bold text-xl"
                            maxLength={1}
                        />
                        
                        <input
                            value={fifthNumberCode}
                            onChange={(e) => {
                                const newValue = e.target.value;
                                if (/^\d*$/.test(newValue)) {
                                    setFifthNumberCode(newValue)
                                }
                            }}
                            type="text"
                            className="w-[50px] h-[50px] border-[#6B7280] focus:border-[#0A74EE] border-solid border-3 rounded-[10px] text-center font-bold text-xl"
                            maxLength={1}
                        />

                        <input
                            value={sixthNumberCode}
                            onChange={(e) => {
                                const newValue = e.target.value;
                                if (/^\d*$/.test(newValue)) {
                                    setSixthNumberCode(newValue)
                                }
                            }}
                            type="text"
                            className="w-[50px] h-[50px] border-[#6B7280] focus:border-[#0A74EE] border-solid border-3 rounded-[10px] text-center font-bold text-xl"
                            maxLength={1}
                        />
                    </div>

                    <div className="flex flex-col gap-y-5 items-center">
                        <h3 className={`font-medium text-[14px] ${roboto.className}`}>
                            Não recebeu seu código?
                        </h3>

                        <p className={`font-light text-[14px] ${roboto.className}`}>
                            Aguarde alguns segundos e tente novamente ou clique em "Reenviar código".
                        </p>
                    </div>

                    <div className="flex items-center gap-x-4">
                        <Button
                            cor = "verde"
                            texto = "Confirmar"
                            icon = {CheckIcon}
                            onClick = {
                                () => {
                                    console.log("Confirmar");
                                }
                            }
                        />

                        <Button
                            cor = "azul"
                            texto = "Reenviar código"
                            icon = {RefreshCwIcon}
                            onClick = {
                                () => {
                                    console.log("Reenviar");
                                }
                            }
                        />
                    </div>

                    <p className={`font-medium text-[14px] ${roboto.className}`}>
                        O endereço de e-mail está incorreto?
                    </p>

                    <p className={`font-medium text-[14px] text-[#1E90FF] ${roboto.className}`}>
                        Corrigir endereço de e-mail
                    </p>
                </div>
            </main>
        </Container>
    );
};

export default MultifactorAuthenticationCode;