import { LayoutDetail } from "@/components/layout/layout-detail";
import styles from "@/styles/Frankopanska.module.css";
import Image from "next/image";
import Link from "next/link";
import { classnames } from "@/lib/util";

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
        <section className={styles.stanovi}>
          <h3 className="subtitle">Stanovi</h3>
          <div className={styles.stanoviContainer}>
            {apartments.map((apartment) => (
              <Link
                href={`/${url}/cijena/${apartment.naziv.toLowerCase()}`}
                className={classnames(
                  styles.card,
                  apartment.sold ? styles.sold : ""
                )}
                key={apartment.naziv}
              >
                <div className={styles.cardImage}>
                  <Image
                    src={`/${publicUrl}/tlocrti/${apartment.naziv.toLowerCase()}.${appExtension}`}
                    alt={`${title} - ${apartment.sobe} sobni stan, ${apartment.kat}`}
                    fill
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3>
                    {apartment.naziv}
                    {!!apartment.sold && <small> (prodano)</small>}
                  </h3>
                </div>
                <div className={styles.cardData}>
                  {[
                    ["Kat", apartment.kat],
                    ["Broj soba", apartment.sobe],
                    ["Površina", apartment[povrsinaKey]],
                  ].map(([text, value], key) => (
                    <div className={styles.cardDataItem} key={text}>
                      <div
                        className={classnames(styles.cardDataValue, {
                          [styles.uvuceniKat]:
                            key === 0 && typeof value === "string",
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
            ))}
          </div>
        </section>
      )}
      {!!AdditionalContent && <AdditionalContent />}
    </LayoutDetail>
  );
}
