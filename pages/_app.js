import "../styles/globals.css";
import Footer from "../src/Components/Footer";
import Header from "../src/Components/Header";
import { Poppins, Roboto } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "500", "700"],
});

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className={roboto.className}>
        <Header />
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
