import { useRouter } from "next/router";
import { LayoutDetail } from "@/components/layout/layout-detail";
import styles from "@/styles/Frankopanska.module.css";
import { ImageGallery } from "@/components/image-gallery/ImageGallery";
import Image from "next/image";
import { getApartment } from "@/lib/const";
import { classnames } from "@/lib/util";
import { Form } from "@/components/form";

const M2 = () => (
  <>
    &nbsp;m<sup>2</sup>
  </>
);

function createProperty(icon, label, value) {
  return { icon, label, value };
}

export default function Stan() {
  const router = useRouter();
  const { stan } = router.query;
  const apartment = getApartment(stan);
  const nazivLowerCase = apartment?.naziv.toLowerCase();

  const properties = [
    createProperty("etaza", "Etaža", apartment?.katText),
    createProperty("sobe", "Broj soba", apartment?.sobe),
    createProperty("povrsina", "Površina", apartment?.povrsina),
    createProperty("useljivo", "Useljivo", "svibanj 2023"),
    createProperty("dostupno", "Dostupno", apartment?.sold ? "NE" : "DA"),
  ];
  if (!apartment) return null;
  return (
    <LayoutDetail
      title={`Projekt Frankopanska - Stan ${apartment?.naziv}`}
      desc="Projekt Frankopanska"
      pageTitle={`Stan ${apartment?.naziv}`}
    >
      <section className={styles.apartmentDetails}>
        <div className={styles.grid}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Broj prostorije</th>
                <th>Naziv</th>
                <th>Površina</th>
                <th>Podna obloga</th>
                <th>Obračunska površina</th>
              </tr>
            </thead>
            <tbody>
              {apartment?.prostorije.map((prostorija) => (
                <tr key={prostorija.broj}>
                  <td>{prostorija.broj}</td>
                  <td>{prostorija.naziv}</td>
                  <td>
                    {prostorija.povrsina}
                    <M2 />
                  </td>
                  <td>{prostorija.obloga}</td>
                  <td>
                    {prostorija.obracunska}
                    <M2 />
                  </td>
                </tr>
              ))}
              <tr className={styles.suma}>
                <td colSpan={2}>Ukupno</td>
                <td>
                  {apartment?.povrsina}
                  <M2 />
                </td>
                <td></td>
                <td>
                  {apartment?.obracunska}
                  <M2 />
                </td>
              </tr>
            </tbody>
          </table>
          <div className={styles.properties}>
            {properties.map((property) => (
              <div key={property.icon} className={styles.property}>
                <div className={styles.iconWrapper}>
                  <Image
                    src={`/ico-${property.icon}.png`}
                    alt="Projekt Frankopanska - stanovi"
                    // width={60}
                    // height={60}
                    fill
                  />
                </div>
                <div>
                  <div className={styles.propertyLabel}>{property.label}</div>
                  <div className={styles.propertyValue}>{property.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h3 className="subtitle">Tlocrti</h3>
        <ImageGallery
          slides={[
            nazivLowerCase,
            `${nazivLowerCase}-komplet`,
            `zgrada-${apartment?.katText?.replace(/ /g, "")}`,
          ].map((img) => (
            <Image
              key={img}
              src={`/projekt-frankopanska/tlocrti/${img}.png`}
              alt="Projekt Frankopanska - stanovi"
              width={720}
              height={480}
            />
          ))}
          slidesPerView={3}
          loop={false}
        />
        <div className={styles.kontakt}>
          <h3 className={classnames("subtitle", styles.subtitle)}>
            Pošaljite upit za stan: {apartment.naziv}
          </h3>
          <div className={styles.formWrap}>
            <Form apartment={apartment.naziv} />
          </div>
        </div>
      </section>
    </LayoutDetail>
  );
}
