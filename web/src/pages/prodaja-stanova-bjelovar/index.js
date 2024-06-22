import styles from "@/styles/Frankopanska.module.css";
import {
  Frankopanska2ImageGallery,
  ImageGallery,
} from "@/components/image-gallery/ImageGallery";
import Image from "next/image";
import { frankopanska2Apartments } from "@/lib/frakonpanska2-apartments";
import { classnames } from "@/lib/util";
import { Projekt } from "@/components/projekt";

const ContentLeft = () => (
  <>
    <p>
      Predstavljamo vam naš novi projekt višestambene zgrade u strogom centru
      Bjelovara na jedinstvenoj lokaciji, projekt Frankopanska 2! Zgrada se
      sastoji od 40 stanova na 4 etaže veličine od 37 m2 do 92 m2 te se nalazi u
      samom centru grada, u blizini škole i vrtića.
      <br />
      <br />
      Zgrada će imati lift, grijanje će biti putem dizalica topline, a stanovi
      će imati raznolike prednosti - od natkrivenih balkona i terasa do velikih
      vrtova. Zgrada je počela sa izgradnjom u lipnju 2024.
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
      <li>fasada: stiropor/vuna</li>
      <li>grijanje putem dizalica topline</li>
      <li>ugrađena klima u svakoj stambenoj jedinici</li>
      <li>keramika: izbor kupca između više modela i dimenzija</li>
      <li>parket (hrastov, troslojni) / vinil</li>
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
        "situacija",
        "lokacija",
        "prizemlje",
        "1.kat",
        "2.kat",
        "uvuceni-kat",
      ].map((img) => (
        <Image
          key={img}
          src={`/projekt-frankopanska2/tlocrti/zgrada-${img}.png`}
          alt="Projekt Frankopanska 2 - stanovi"
          width={720}
          height={480}
        />
      ))}
    />
  </>
);

export default function ProjektFrankopanska2() {
  return (
    <Projekt
      title="Projekt Frankopanska 2"
      desc="Višestambena zgrada u strogom centru Bjelovara na jedinstvenoj lokaciji"
      pageTitle="Projekt Frankopanska 2"
      ContentLeft={ContentLeft}
      mapId="608934"
      ProjectImageGallery={Frankopanska2ImageGallery}
      apartments={frankopanska2Apartments}
      publicUrl="projekt-frankopanska2"
      url="prodaja-stanova-bjelovar"
      AdditionalContent={AdditionalContent}
      appExtension="png"
      povrsinaKey="obracunska"
      videoUrl="/projekt-frankopanska2/video.mp4"
      videoPoster="/projekt-frankopanska2/video-poster.jpg"
    />
  );
}
