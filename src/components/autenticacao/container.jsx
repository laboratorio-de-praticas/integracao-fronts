import { Roboto } from "next/font/google";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const Container = ({ children }) => {
    return (
        <div className={`flex max-w-screen min-h-screen flex-col`}>
            {children}
        </div>
    );
};

export default Container;