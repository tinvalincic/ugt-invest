import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { classnames } from "@/lib/util";
import { FrankopanskaImageGallery } from "@/components/image-gallery/ImageGallery";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.main}>
        <section className={styles.banner}>
          <div className={styles.bannerBackground} />
          <div className={styles.bannerContent}>
            <h1 className={styles.bannerTitle}>UGT Invest</h1>
            <p className={styles.bannerDescription}>
              Dugogodišnje iskustvo u gradnji stambenih i poslovnih objekata
            </p>
            <Link
              href="/prodaja-stanova-bjelovar"
              className={classnames("btn-primary", styles.bannerButton)}
            >
              Pogledajte aktualnu ponudu
            </Link>
          </div>
        </section>
        <section className={classnames(styles.about, styles.frankopanska)}>
          <div
            className={classnames(
              "container",
              "container-wide",
              styles.aboutContainer
            )}
          >
            <h2
              className={classnames(
                styles.aboutTitle,
                styles.frankopanskaTitle
              )}
            >
              Projekt Frankopanska
            </h2>
            <p className={styles.aboutDescription}>
              Predstavljamo vam naš novi projekt višestambene zgrade u strogom
              centru Bjelovara na jedinstvenoj lokaciji, projekt Frankopanska!
              Zgrada se sastoji od 24 stana na 4 etaže veličine od 48 do 80 m2
              te se nalazi u samom centru grada, u blizini škole i vrtića.
              <br />
              <br />
              Zgrada će imati lift, grijanje će biti putem dizalica topline, a
              svaki stan će imati lođu i svoje parkirno mjesto. Zgrada će biti
              useljiva u svibnju 2024. godine.
            </p>
          </div>
          <div className={styles.gallery}>
            <FrankopanskaImageGallery />
          </div>
          <div className={styles.btnContainer}>
            <Link
              href="/projekt-frankopanska"
              className={classnames("btn-primary", styles.bannerButton)}
            >
              Saznajte više
            </Link>
          </div>
        </section>
        <section className={styles.about}>
          <div
            className={classnames(
              "container",
              "container-wide",
              styles.aboutContainer
            )}
          >
            <h2 className={styles.aboutTitle}>Tko smo?</h2>
            <p className={styles.aboutDescription}>
              UGT Invest d.o.o. bavi se izgradnjom stambenih i poslovnih
              objekata diljem Hrvatske. Naša obiteljska tradicija duga je već
              više od 20 godina, a od tada smo uspješno realizirali više od 30
              projekata na lokacijama diljem Hrvatske. Ponosni smo što smo
              tijekom godina stekli povjerenje više od 300 zadovoljnih kupaca, a
              naša predanost kvaliteti i profesionalnosti izgradnje uvijek se
              odražava u njihovom zadovoljstvu i preporukama koje šire svojim
              poznanicima. UGT Invest d.o.o. nudi visokokvalitetne stambene i
              poslovne prostore . Gradnja stanova u Bjelovaru jedna je od naših
              glavnih specijalnosti, te smo ponosni što smo svojim projektima
              obogatili i uljepšali grad.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
