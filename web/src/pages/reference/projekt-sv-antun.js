import styles from "@/styles/Frankopanska.module.css";
import { SvAntunImageGallery } from "@/components/image-gallery/ImageGallery";
import { classnames } from "@/lib/util";
import { Projekt } from "@/components/projekt";

const ContentLeft = () => (
  <>
    <p>
      Ekskluzivna stambena zgrada s najvišim standardima kvalitete uključuje 19
      stanova (40-80m2) u strogom centru grada Bjelovara. Osim jedinstvene
      lokacije, velike prednosti su blizina škole, vrtića, tržnice, trgovine,
      knjižnice, parka, bolnice te ostalih popratnih sadržaja. Svaki stan ima i
      svoje parkirno mjesto.
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

export default function ProjektSvetiAntun() {
  return (
    <Projekt
      title="Projekt Sv. Antun"
      desc="Ekskluzivna stambena zgrada u strogom centru Bjelovara"
      pageTitle="Projekt Sv. Antun"
      ContentLeft={ContentLeft}
      mapId="473454"
      ProjectImageGallery={SvAntunImageGallery}
    />
  );
}
