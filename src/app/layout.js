import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";
import SliderBg from "./components/BackgroundSlider";
// import SimpleSlider from "./components/Slider";

const montserrat = Montserrat({
  weight: ["100", "700"],
  subsets: ["latin"],
});
export const metadata = {
  title: "nexjs project",
  description: "Generated by create next app",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <header>
          <Header />
        </header>
        {/* <nav><SliderSimple /></nav> */}
        <nav>
          <SliderBg />
        </nav>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}

