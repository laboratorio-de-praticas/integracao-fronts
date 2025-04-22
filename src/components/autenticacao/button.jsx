import { Roboto } from "next/font/google";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const Button = ({
    cor,
    texto,
    hasIcon = true,
    icon: Icon,
    onClick = () => {}
}) => {
    let backgroundColor = ""

    switch (cor) {
        case "verde":
            backgroundColor = "bg-[#3ACF1F]"
            break;
        case "vermelho":
            backgroundColor = "bg-[#D32719]"
            break;
        case "azul":
            backgroundColor = "bg-[#4C7EFF]"
            break;
        case "azul escuro":
            backgroundColor = "bg-[#005C6D]"
            break;
    }

    return (
        <button 
            onClick={onClick} 
            className={`flex items-center ${backgroundColor} py-2 px-3 rounded-full gap-x-2`}
        >
            {hasIcon && (
                <Icon color="white" size={24} />
            )}
            <span className={`text-white font-bold text-lg ${roboto.className}`}>
                {texto} 
            </span>
        </button>
    );
};

export default Button;