import "../styles/globals.css";
import "../public/assets/vendor/bootstrap/css/bootstrap.min.css";
import "../public/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../public/assets/vendor/boxicons/css/boxicons.min.css";
import "../public/assets/vendor/glightbox/css/glightbox.min.css";
import "../public/assets/vendor/remixicon/remixicon.css";
import "../public/assets/vendor/swiper/swiper-bundle.min.css";
import Head from "next/head";
import about from "../Data/About";
import { LanguageProvider } from "../context/LanguageContext";

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content={about.longBio.de} />
        <meta
          name="keywords"
          content="Felix Günther, IT-Systemadministrator, Wirtschaftsinformatik, Leipzig, Portfolio"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <title>Felix Günther</title>
      </Head>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;
