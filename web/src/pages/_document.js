import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-ES68P27RRS"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-ES68P27RRS');
            `,
          }}
        />
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
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico?v=1" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
