import styles from "@/styles/Frankopanska.module.css";
import {
  KrizevciImageGallery,
  ImageGallery,
} from "@/components/image-gallery/ImageGallery";
import Image from "next/image";
import { krizevciApartments } from "@/lib/krizevci-apartments";
import { classnames, getApartments } from "@/lib/util";
import { Projekt } from "@/components/projekt";

const ContentLeft = () => (
  <>
    <p>
      Predstavljamo vam Projekt Križevci, moderan stambeni projekt smješten na
      atraktivnoj lokaciji u gradu Križevcima. Ova višestambena zgrada nudi spoj
      suvremene arhitekture, energetske učinkovitosti i funkcionalnog životnog
      prostora, idealnog za obitelji, parove i pojedince koji žele kvalitetan
      život u urbanom okruženju.
      <br />
      <br />
      Zgrada će sadržavati prostranu garažu i spremišta na prodaju, čime se
      osigurava dodatna praktičnost i sigurnost za stanare. Useljenje je
      planirano krajem 2026. godine.
      <br />
      <br />
      Za plaćanje unaprijed odobravamo popust!
      <br />
    </p>
    <h4 className={classnames("subtitle", styles.subtitle)}>
      Što Projekt Križevci nudi?
    </h4>
    <p>
      Zgrada će imati 17 stanova raspoređenih na 3 etaže, u veličinama od 35 m²
      do 152 m², kako bi zadovoljila različite životne stilove i potrebe. Svi
      stanovi bit će pažljivo projektirani kako bi osigurali maksimalnu
      iskoristivost prostora i visoku razinu udobnosti.
    </p>
    <h4 className={classnames("subtitle", styles.subtitle)}>
      Specifikacije zgrade
    </h4>
    <ul>
      <li>armirano betonska konstrukcija</li>
      <li>pregrade izvedene u suhoj gradnji, KNAUF</li>
      <li>vanjska stolarija: plastika + komarnici</li>
      <li>fasada: stiropor/vuna</li>
      <li>grijanje: podno putem dizalica topline</li>
      <li>ugrađena klima u svakoj stambenoj jedinici</li>
      <li>keramika: izbor kupca između više modela i dimenzija</li>
      <li>parket (hrastov, troslojni)</li>
      <li>protuprovalna vrata u stanove (sigurnosna brava)</li>
      <li>ugrađeno dizalo (lift)</li>
      <li>energetski certifikat A+</li>
    </ul>
    <h4 className={classnames("subtitle", styles.subtitle)}>
      Posebna pogodnost za kupce
    </h4>
    <p>
      Za kupce koji se odluče na <strong>plaćanje unaprijed</strong>, odobravamo{" "}
      <strong>poseban popust!</strong>
    </p>
  </>
);

const AdditionalContent = () => (
  <>
    <h3 className="subtitle">Tlocrti</h3>
    <ImageGallery
      slides={["podrum", "prizemlje"].map((img) => (
        <Image
          key={img}
          src={`/projekt-krizevci/tlocrti/zgrada-${img}.png`}
          alt="Projekt Križevci - stanovi"
          width={720}
          height={480}
        />
      ))}
    />
  </>
);

export default function ProjektFrankopanska2() {
  const getEntities = (apartments, keys) => {
    if (!apartments?.[2]) return {};
    return Object.entries(apartments[2]).reduce((acc, [key, value]) => {
      if (!keys.some((k) => key.startsWith(k))) return acc;
      acc[key] = value;
      return acc;
    }, {});
  };

  const getGarages = (apartments) =>
    getEntities(apartments, ["PGM", "GM", "PM"]);
  const getStorages = (apartments) => getEntities(apartments, ["S"]);

  return (
    <Projekt
      title="Projekt Križevci"
      desc="Višestambena zgrada u strogom centru Križevaca"
      pageTitle="Projekt Križevci - Novi standard stanovanja"
      ContentLeft={ContentLeft}
      mapId="700710"
      ProjectImageGallery={KrizevciImageGallery}
      apartments={krizevciApartments}
      publicUrl="projekt-krizevci"
      url="prodaja-stanova-krizevci"
      AdditionalContent={AdditionalContent}
      appExtension="png"
      povrsinaKey="obracunska"
      getGarages={getGarages}
      getStorages={getStorages}
    />
  );
}
