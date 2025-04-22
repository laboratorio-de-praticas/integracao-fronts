'use client'

import { LockKeyholeIcon, CheckIcon, XIcon } from "lucide-react"
import { Roboto } from "next/font/google";
import Button from "../button";
import Header from "../header";
import Container from "../container";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const MultifactorAuthentication = () => {
    return (
        <>
            <Container>
                <Header />
                <main className="flex w-full justify-center pb-12">
                    <div className="flex items-center flex-col gap-y-10">
                        <LockKeyholeIcon color="black" size={100} />

                        <h1 className={`font-bold text-[22px] ${roboto.className}`}>Mantenha sua conta ainda mais segura!</h1>

                        <div className="flex flex-col gap-y-3 max-w-96">
                            <p className={`text-justify font-light text-sm ${roboto.className}`}>
                                A autenticação em dois fatores (2FA) adiciona uma camada extra de proteção à sua conta. 
                                Mesmo que sua senha seja comprometida, somente você poderá acessar o sistema, garantindo mais segurança para seus dados.
                            </p>
                            <p className={`text-justify font-light text-sm ${roboto.className}`}>
                                Ativar essa opção ajuda a proteger sua identidade e evita acessos não autorizados. 
                                Recomendamos fortemente que você habilite o 2FA para uma experiência mais segura.
                            </p>
                            <h3 className={`font-medium text-sm ${roboto.className}`}>Deseja ativar a autenticação em dois fatores agora?</h3>
                        </div>

                        <div className="flex items-center gap-x-4">
                            <Button
                                cor = "verde"
                                texto = "Sim, ativar agora"
                                icon = {CheckIcon}
                                onClick = {
                                    () => {
                                        console.log("Sim");
                                    }
                                }
                            />

                            <Button
                                cor = "vermelho"
                                texto = "Não, ativar depois"
                                icon = {XIcon}
                                onClick = {
                                    () => {
                                        console.log("Não");
                                    }
                                }
                            />
                        </div>
                    </div>
                </main>
            </Container>
        </>
    )
};

export default MultifactorAuthentication;