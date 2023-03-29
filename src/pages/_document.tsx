import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="">
      <Head>
        <title className="">CatGPT</title>
        <meta name="description" content="A virtual pet assistant." />
        <link rel="icon" type="image/png" href="/images/cat-face.png" />
        {/* <!-- Primary Meta Tags --> */}
        <title>CatGPT - A Virtual Assistant Pet.</title>
        <meta name="title" content="CatGPT - A Virtual Assistant Pet." />
        <meta
          name="description"
          content="I am a helpful and curious cat who loves to assist with any query you may have. I am here to provide you with the purrfect answers."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://catgpt.guru" />
        <meta property="og:title" content="CatGPT - A Virtual Assistant Pet." />
        <meta
          property="og:description"
          content="I am a helpful and curious cat who loves to assist with any query you may have. I am here to provide you with the purrfect answers. "
        />
        <meta
          property="og:image"
          content="https://catgpt.guru/images/preview.jpeg"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://catgpt.guru" />
        <meta
          property="twitter:title"
          content="CatGPT - A Virtual Assistant Pet."
        />
        <meta
          property="twitter:description"
          content="I am a helpful and curious cat who loves to assist with any query you may have. I am here to provide you with the purrfect answers. "
        />
        <meta
          property="twitter:image"
          content="https://catgpt.guru/images/preview.jpeg"
        ></meta>
        <body className="">
          <Main />
          <NextScript />
        </body>
      </Head>
    </Html>
  );
}
