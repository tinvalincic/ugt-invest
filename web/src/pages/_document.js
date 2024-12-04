import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="UGT Invest d.o.o. - izgradnja i prodaja stambenih i poslovnih objekata u Bjelovaru. Moderni, funkcionalni stanovi na atraktivnim lokacijama visokokvalitetne gradnje."
        />
        <meta
          property="og:title"
          content="UGT Invest - prodaja stanova Bjelovar"
        />
        <meta
          property="og:image"
          content="https://ugt-invest.hr/og-image.png"
        />
        <meta
          property="og:description"
          content="UGT Invest d.o.o. - izgradnja i prodaja stambenih i poslovnih objekata u Bjelovaru. Moderni, funkcionalni stanovi na atraktivnim lokacijama visokokvalitetne gradnje."
        />
        <meta property="og:url" content="https://ugt-invest.hr" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=1" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
