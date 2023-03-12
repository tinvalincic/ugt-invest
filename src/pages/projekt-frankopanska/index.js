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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Integer malesuada nunc vel risus commodo viverra maecenas
              accumsan. Eu turpis egestas pretium aenean. Non consectetur a erat
              nam at. Fermentum leo vel orci porta non pulvinar.
              <br />
              <br />
              Placerat duis ultricies lacus sed turpis tincidunt id aliquet.
              Nulla facilisi etiam dignissim diam quis enim lobortis
              scelerisque. Tincidunt vitae semper quis lectus. Auctor eu augue
              ut lectus arcu bibendum at varius. Commodo viverra maecenas
              accumsan lacus vel facilisis volutpat est velit. Fermentum iaculis
              eu non diam. Lectus quam id leo in vitae turpis massa. Facilisi
              nullam vehicula ipsum a arcu cursus vitae congue. Leo vel
              fringilla est ullamcorper eget nulla facilisi etiam dignissim.
              <br />
              <br />
              Pellentesque nec nam aliquam sem et tortor consequat id porta.
              Pharetra et ultrices neque ornare. Scelerisque purus semper eget
              duis at tellus at. At augue eget arcu dictum. In fermentum posuere
              urna nec tincidunt.
            </p>
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
