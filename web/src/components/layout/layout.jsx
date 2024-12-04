import { Navigation } from "../navigation";
import Head from "next/head";
import classes from "./layout.module.css";
import Image from "next/image";
import { classnames } from "@/lib/util";
import { GoogleTagManager } from '@next/third-parties/google'

const Dot = () => <>&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;</>;

const Footer = () => (
  <footer className={classnames(classes.footer)}>
    <div className={classes.footerContainer}>
      <div className={classes.footerLogo}>
        <Image
          src="/logo.png?v=1"
          alt="UGT Invest"
          width={110}
          height={43}
          // width={100}
          // height={100}
          // layout="fixed"
        />
      </div>
      <div className={classes.footerContact}>
        <strong>Telefon:</strong>{" "}
        <span className={classes.yellow}>+385 99 2543 204</span>
        <Dot />
        <strong>Email:</strong>{" "}
        <a href="mailto:prodaja@ugt-invest.hr">prodaja@ugt-invest.hr</a>
      </div>
    </div>
  </footer>
);

export const Layout = ({ children, activeElement }) => {
  return (
    <>
      <Head>
        <title>UGT Invest</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navigation activeElement={activeElement} />
      <main className={classes.main}>{children}</main>
      <GoogleTagManager gtmId="GTM-WQN67PWS" />
      <Footer />
    </>
  );
};
