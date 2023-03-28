import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="">
      <Head>
        <title className="">CatGPT</title>
        <meta name="description" content="A virtual pet assistant." />
        <link rel="icon" type="image/png" href="/images/cat-face.png"/>
        <body className="">
          <Main />
          <NextScript />
        </body>
      </Head>
    </Html>
  );
}
