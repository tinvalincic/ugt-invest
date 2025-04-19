import { LayoutDetail } from "@/components/layout/layout-detail";
import styles from "@/styles/Frankopanska.module.css";
import Image from "next/image";
import Link from "next/link";
import { classnames } from "@/lib/util";
import { useSoldApartments } from "@/lib/hooks";

export function Projekt({
  title,
  desc,
  pageTitle,
  ContentLeft,
  mapId,
  ProjectImageGallery,
  apartments,
  publicUrl,
  url,
  AdditionalContent,
  appExtension,
  povrsinaKey = "povrsina",
  videoUrl,
  videoPoster,
}) {
  const [count] = useSoldApartments();
  return (
    <LayoutDetail title={title} desc={desc} pageTitle={pageTitle}>
      <section className={styles.oProjektu}>
        <h3 className="subtitle">O projektu</h3>
        <div className={styles.oProjektuContent}>
          <div>
            <ContentLeft />
          </div>
          <div>
            <iframe
              src={`https://snazzymaps.com/embed/${mapId}`}
              width="100%"
              height="500px"
              key="map"
              className={styles.map}
            ></iframe>
          </div>
        </div>
      </section>
      {!!videoUrl && (
        <video
          className={styles.video}
          width="1920"
          height="1080"
          controls
          poster={videoPoster}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <h3 className="subtitle">Galerija</h3>
      <ProjectImageGallery />
      {!!apartments?.length && (
        <section className={styles.stanovi} key={count}>
          <h3 className="subtitle">Stanovi</h3>
          <div className={styles.stanoviContainer}>
            {apartments.map((apartment) => {
              console.log(apartment.naziv, apartment.sold());
              return (
                <Apartment
                  naziv={apartment.naziv}
                  sold={apartment.sold()}
                  sobe={apartment.sobe}
                  kat={apartment.kat}
                  povrsina={apartment[povrsinaKey]}
                  key={apartment.naziv}
                  publicUrl={publicUrl}
                  appExtension={appExtension}
                  url={url}
                  title={title}
                />
              );
            })}
          </div>
        </section>
      )}
      {!!AdditionalContent && <AdditionalContent />}
    </LayoutDetail>
  );
}

const Apartment = ({
  naziv,
  sold,
  sobe,
  kat,
  povrsina,
  publicUrl,
  appExtension,
  url,
  title,
}) => {
  return (
    <Link
      href={`/${url}/cijena/${naziv.toLowerCase()}`}
      className={classnames(styles.card, sold ? styles.sold : "")}
      key={naziv}
    >
      <div className={styles.cardImage}>
        <Image
          src={`/${publicUrl}/tlocrti/${naziv.toLowerCase()}.${appExtension}`}
          alt={`${title} - ${sobe} sobni stan, ${kat}`}
          fill
        />
      </div>
      <div className={styles.cardContent}>
        <h3>
          {naziv}
          {!!sold && <small> (prodano)</small>}
        </h3>
      </div>
      <div className={styles.cardData}>
        {[
          ["Kat", kat],
          ["Broj soba", sobe],
          ["Površina", povrsina],
        ].map(([text, value], key) => (
          <div className={styles.cardDataItem} key={text}>
            <div
              className={classnames(styles.cardDataValue, {
                [styles.uvuceniKat]: key === 0 && typeof value === "string",
              })}
            >
              {value}
            </div>
            <div className={styles.cardDataText}>{text}</div>
          </div>
        ))}
      </div>
      <div className={classnames("btn-primary", styles.btnVise)}>
        Saznaj više
      </div>
    </Link>
  );
};
