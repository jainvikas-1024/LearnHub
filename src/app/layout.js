import { Asul } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
const asul = Asul({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "LearnHub",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={asul.className}>
        <div className="container">
          <header>
            <Navbar />
          </header>
          <div className="wrapper">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
