import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { classnames } from "@/lib/util";
import {
  Frankopanska2ImageGallery,
  FrankopanskaImageGallery,
  KrizevciImageGallery,
} from "@/components/image-gallery/ImageGallery";
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
              href="/novogradnja-bjelovar"
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
              Projekt Frankopanska 2
            </h2>
            <p className={styles.aboutDescription}>
              Predstavljamo vam naš novi projekt višestambene zgrade u strogom
              centru Bjelovara na jedinstvenoj lokaciji, projekt Frankopanska 2!
              Zgrada se sastoji od 40 stanova na 4 etaže veličine od 37 m2 do 92
              m2 te se nalazi u samom centru grada, u blizini škole i vrtića.
              <br />
              <br />
              Zgrada će imati lift, grijanje će biti putem dizalica topline, a
              stanovi će imati raznolike prednosti - od natkrivenih balkona i
              terasa do velikih vrtova. Zgrada je počela sa izgradnjom u lipnju
              2024.
            </p>
          </div>
          <div className={styles.gallery}>
            <Frankopanska2ImageGallery />
          </div>
          <div className={styles.btnContainer}>
            <Link
              href="/prodaja-stanova-bjelovar"
              className={classnames("btn-primary", styles.bannerButton)}
            >
              Saznajte više
            </Link>
          </div>
        </section>
        <section className={classnames(styles.about, styles.frankopanska2)}>
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
              Projekt Križevci
            </h2>
            <p className={styles.aboutDescription}>
              Predstavljamo vam Projekt Križevci – modernu stambenu zgradu s 17
              stanova na tri etaže, smještenu na atraktivnoj lokaciji u
              Križevcima. Stanovi veličine od 35 m² do 152 m² pažljivo su
              projektirani kako bi osigurali udobnost, funkcionalnost i
              energetsku učinkovitost (A+ certifikat), idealni za obitelji,
              parove i pojedince. Useljenje je planirano krajem 2026. godine.
              <br />
              <br />
              Zgrada će imati dizalo, garažu i spremišta na prodaju, grijanje
              putem dizalica topline, klimatizaciju te protuprovalna vrata.
              Kupci mogu birati između više modela keramike i podnih obloga
              (parket ili vinil). Za plaćanje unaprijed odobravamo popust!
            </p>
          </div>
          <div className={styles.gallery}>
            <KrizevciImageGallery />
          </div>
          <div className={styles.btnContainer}>
            <Link
              href="/prodaja-stanova-krizevci"
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
