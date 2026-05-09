import styles from "@/styles/Frankopanska.module.css";
import {
  Frankopanska3ImageGallery,
  FrankopanskaImageGallery,
  ImageGallery,
} from "@/components/image-gallery/ImageGallery";
import Image from "next/image";
import { classnames } from "@/lib/util";
import { Projekt } from "@/components/projekt";
import { frankopanska3Apartments } from "@/lib/frankopanska3-apartments";

const ContentLeft = () => (
  <>
    <p>
      Projekt višestambene zgrade u strogom centru Bjelovara na jedinstvenoj
      lokaciji, projekt Frankopanska 3! Zgrada se sastoji od 17 stanova na 4
      etaže veličine od 40 do 90 m2 te se nalazi u samom centru grada, u blizini
      škole i vrtića. Unatoč poziciji u centru grada, zgrada se nalazi u
      izdvojenom dijelu, ne nalazi se na glavnoj prometnici te je okružena
      zelenilom. Svaki stan će imati vlastito spremište te parkirno mjesto.
      <br />
      <br />
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
      <li>keramika</li>
      <li>parket (hrastov)</li>
      <li>protuprovalna vrata u stanove (sigurnosna brava)</li>
      <li>ugrađeno dizalo (lift)</li>
      <li>energetski certifikat A+</li>
    </ul>
  </>
);

const AdditionalContent = () => (
  <>
    <h3 className="subtitle">Tlocrti</h3>
    <ImageGallery
      slides={[
        "prizemlje",
        "1.kat",
        "2.kat",
        "uvuceni-kat",
        "garazna-mjesta",
        "podrum",
      ].map((img) => (
        <Image
          key={img}
          src={`/projekt-frankopanska3/tlocrti/zgrada-${img}.png`}
          alt="Projekt Frankopanska - stanovi"
          width={720}
          height={480}
        />
      ))}
    />
  </>
);

export default function ProjektFrankopanska() {
  return (
    <Projekt
      title="Projekt Frankopanska 3"
      desc="Višestambena zgrada u strogom centru Bjelovara na jedinstvenoj lokaciji"
      pageTitle="Projekt Frankopanska 3"
      ContentLeft={ContentLeft}
      mapId="470995"
      ProjectImageGallery={Frankopanska3ImageGallery}
      apartments={frankopanska3Apartments}
      publicUrl="projekt-frankopanska3"
      url="projekt-frankopanska3"
      AdditionalContent={AdditionalContent}
      appExtension="png"
    />
  );
}
