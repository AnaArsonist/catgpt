import "tailwindcss/tailwind.css";
import "@/styles/styles.css";
import Script from "next/script";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Script
        src="https://kit.fontawesome.com/2c36e9b7b1.js"
        strategy="beforeInteractive"
      />
      <Component {...pageProps} />
    </>
  );
};

export default App;
