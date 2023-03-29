import "tailwindcss/tailwind.css";
import "@/styles/styles.css";
import Script from "next/script";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900;1000&display=swap"
        rel="stylesheet"
      ></link>
      <Script
        src="https://kit.fontawesome.com/2c36e9b7b1.js"
        strategy="beforeInteractive"
      />
      <Component {...pageProps} />
    </>
  );
};

export default App;
