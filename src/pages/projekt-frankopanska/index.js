import { LayoutDetail } from "@/components/layout/layout-detail";
import styles from "@/styles/Frankopanska.module.css";
import {
  FrankopanskaImageGallery,
  ImageGallery,
} from "@/components/image-gallery/ImageGallery";
import Image from "next/image";
import { apartments } from "@/lib/const";
import Link from "next/link";
import { classnames } from "@/lib/util";

export default function ProjektFrankopanska() {
  return (
    <LayoutDetail
      title="Projekt Frankopanska"
      desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      pageTitle="Projekt Frankopanska"
    >
      <section className={styles.oProjektu}>
        <h3 className={styles.subtitle}>O projektu</h3>
        <div className={styles.oProjektuContent}>
          <div>
            <p>
              Predstavljamo vam naš novi projekt višestambene zgrade u strogom
              centru Bjelovara, “Projekt Frankopanska”. Zgrada se sastoji od 24
              stana na 4 etaže veličine od 48 do 80 m2 te se nalazi u samoj
              blizine škole i vrtića! Zgrada će imati lift, svaki stan će imati
              lođu i svoje parkirno mjesto, a zgrada će biti useljiva krajem
              2023. godine.
            </p>
            <h4 className={styles.subtitle}>Specifikacije zgrade</h4>
            <ul>
              <li>armirano betonska konstrukcija</li>
              <li>pregrade izvedene u suhoj gradnji, KNAUF</li>
              <li>vanjska stolarija drvo/aluminij</li>
              <li>fasada vuna/stiropor 15 cm, ROFIX</li>
              <li>grijanje putem dizalica topline</li>
              <li>
                unutarnje jedinica klima sustava u svakoj prostoriji (vanjska
                jedinica na krovu ili prizemlju ovisno o katu na kojem je stan).
              </li>
              <li>sanitarije, GROHE, LAUFEN ili sl.</li>
              <li>keramika; izbor kupca između više modela i dimenzija</li>
              <li>parket Galeković, hrastovi, troslojni</li>
              <li>protuprovalna vrata u stanove (sigurnosna brava)</li>
              <li>sobna vrata od medijapana, sa futer štokom od punog drva</li>
              <li>energetski certifikat A+</li>
            </ul>
          </div>
          <div>
            <iframe
              src="https://snazzymaps.com/embed/470995"
              width="100%"
              height="500px"
              key="map"
              className={styles.map}
            ></iframe>
          </div>
        </div>
      </section>
      <h3 className={styles.subtitle}>Galerija</h3>
      <FrankopanskaImageGallery />
      <section className={styles.stanovi}>
        <h3 className={styles.subtitle}>Stanovi</h3>
        <div className={styles.stanoviContainer}>
          {apartments.map((apartment) => (
            <Link
              href={`/projekt-frankopanska/cijena/${apartment.naziv.toLowerCase()}`}
              className={styles.card}
              key={apartment.naziv}
            >
              <div className={styles.cardImage}>
                <Image
                  src={`/projekt-frankopanska/tlocrti/${apartment.naziv.toLowerCase()}.png`}
                  alt={`Projekt Frankopanska - ${apartment.sobe} sobni stan, ${apartment.kat}`}
                  fill
                />
              </div>
              <div className={styles.cardContent}>
                <h3>{apartment.naziv}</h3>
              </div>
              <div className={styles.cardData}>
                {[
                  ["Kat", apartment.kat],
                  ["Broj soba", apartment.sobe],
                  ["Površina", apartment.povrsina],
                ].map(([text, value]) => (
                  <div className={styles.cardDataItem} key={text}>
                    <div className={styles.cardDataValue}>{value}</div>
                    <div className={styles.cardDataText}>{text}</div>
                  </div>
                ))}
              </div>
              <div className={classnames("btn-primary", styles.btnVise)}>
                Saznaj više
              </div>
            </Link>
          ))}
        </div>
      </section>
      <h3 className={styles.subtitle}>Tlocrti</h3>
      <ImageGallery
        slides={["situacija", "prizemlje", "1.kat", "2.kat", "3.kat"].map(
          (img) => (
            <Image
              key={img}
              src={`/projekt-frankopanska/tlocrti/zgrada-${img}.png`}
              alt="Projekt Frankopanska - stanovi"
              width={720}
              height={480}
            />
          )
        )}
      />
    </LayoutDetail>
  );
}
