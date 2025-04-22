import Image from "next/image";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});
const Header = () => {
    return (
        <header className={`flex flex-col ${nunito.variable}`}>
            <div className="flex items-center justify-between border-b-1 border-[#DADADA]">
                <div className="h-[98px] w-[409px] bg-[#000000] rounded-tr-full rounded-br-full">
                    <Image
                        alt="Logo do Governo"
                        src="autenticacao/governo-sp-logo.svg"
                        width={215}
                        height={98}
                        className="ml-3.5"
                    />
                </div>

                <div className="flex items-center gap-x-3.5 pr-9">
                    <div className="flex items-center gap-x-[5px]">
                        <Image
                            alt="Logo Flickr"
                            src="autenticacao/flickr.svg"
                            width={30}
                            height={30}
                        />

                        <Image
                            alt="Logo Linkedin"
                            src="autenticacao/linkedin.svg"
                            width={30}
                            height={30}
                        />

                        <Image
                            alt="Logo TikTok"
                            src="autenticacao/tiktok.svg"
                            width={30}
                            height={30}
                        />

                        <Image
                            alt="Logo Youtube"
                            src="autenticacao/youtube.svg"
                            width={30}
                            height={30}
                        />

                        <Image
                            alt="Logo Twitter"
                            src="autenticacao/twitter.svg"
                            width={30}
                            height={30}
                        />

                        <Image
                            alt="Logo Instagram"
                            src="autenticacao/istagram.svg"
                            width={30}
                            height={30}
                        />

                        <Image
                            alt="Logo Facebook"
                            src="autenticacao/facebook.svg"
                            width={30}
                            height={30}
                        />                    
                    </div>
                    <span className={`text-base font-normal text-[#666666] ${nunito.className}`}>
                        /governosp
                    </span>
                </div>
            </div>
            <div className="flex items-center gap-x-10">
                <Image
                    alt="Logo da Fatec"
                    src="autenticacao/fatec-registro-logo.svg"
                    width={200}
                    height={130}
                    className=""
                />

                <Image
                    alt="Logo do Centro Paula Souza"
                    src="autenticacao/centro-paula-souza-logo.svg"
                    width={122}
                    height={130}
                    className="" 
                />
            </div>
        </header>
    )
};

export default Header;