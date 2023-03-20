import { Layout } from "@/components/layout";
import "@/styles/globals.css";
import "keen-slider/keen-slider.min.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
