import styles from "@/styles/Frankopanska.module.css";
import {
  FrankopanskaImageGallery,
  ImageGallery,
} from "@/components/image-gallery/ImageGallery";
import Image from "next/image";
import { apartments } from "@/lib/const";
import { classnames } from "@/lib/util";
import { Projekt } from "@/components/projekt";

const ContentLeft = () => (
  <>
    <p>
      Predstavljamo vam naš novi projekt višestambene zgrade u strogom centru
      Bjelovara na jedinstvenoj lokaciji, projekt Frankopanska! Zgrada se
      sastoji od 24 stana na 4 etaže veličine od 48 do 80 m2 te se nalazi u
      samom centru grada, u blizini škole i vrtića. Unatoč poziciji u centru
      grada, zgrada se nalazi u izdvojenom dijelu, ne nalazi se na glavnoj
      prometnici te će biti okružena zelenilom. Zgrada će imati lift, svaki stan
      će imati lođu i svoje parkirno mjesto, a zgrada će biti useljiva u svibnju
      2024. godine.
      <br />
      <br />
      Za plaćanje unaprijed odobravamo popust!
      <br />
    </p>
    <h4 className={classnames("subtitle", styles.subtitle)}>
      Specifikacije zgrade
    </h4>
    <ul>
      <li>armirano betonska konstrukcija</li>
      <li>pregrade izvedene u suhoj gradnji, KNAUF</li>
      <li>vanjska stolarija: plastika</li>
      <li>fasada: vuna 15 cm</li>
      <li>grijanje putem dizalica topline</li>
      <li>ugrađena klima u svakoj stambenoj jedinici</li>
      <li>keramika: izbor kupca između više modela i dimenzija</li>
      <li>parket: hrastov, troslojni</li>
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
  </>
);

export default function ProjektFrankopanska() {
  return (
    <Projekt
      title="Projekt Frankopanska"
      desc="Višestambena zgrada u strogom centru Bjelovara na jedinstvenoj lokaciji"
      pageTitle="Projekt Frankopanska"
      ContentLeft={ContentLeft}
      mapId="470995"
      ProjectImageGallery={FrankopanskaImageGallery}
      apartments={apartments}
      publicUrl="projekt-frankopanska"
      url="prodaja-stanova-bjelovar"
      AdditionalContent={AdditionalContent}
      appExtension="png"
    />
  );
}
