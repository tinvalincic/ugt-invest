import { LayoutDetail } from "@/components/layout/layout-detail";
import { classnames } from "@/lib/util";
import styles from "@/styles/Reference.module.css";
import Image from "next/image";
import Link from "next/link";

const reference = {
  aktualno: [
    [
      "Projekt Frankopanska 2",
      "Bjelovar",
      "projekt-frankopanska2/1.jpg",
      "prodaja-stanova-bjelovar",
      1920,
      1080,
    ],
    [
      "Projekt Križevci",
      "Križevci",
      "projekt-krizevci/1.png",
      "prodaja-stanova-krizevci",
      1920,
      1080,
    ],
  ],
  arhiva: [
    [
      "Projekt Frankopanska",
      "Bjelovar",
      "projekt-frankopanska/1.jpg",
      "projekt-frankopanska",
      1920,
      1080,
    ],
    [
      "Projekt Sv. Antun",
      "Bjelovar",
      "projekt-sv-antun/1.jpeg",
      "reference/projekt-sv-antun",
      1024,
      768,
    ],
  ],
};

const ReferenceContent = ({ reference, title }) => (
  <>
    <h3 className={classnames("subtitle", styles.globalSubtitle)}>{title}</h3>
    <div className={styles.container}>
      {reference.map(([title, subtitle, image, url, width, height]) => (
        <Link href={url} key={url}>
          <div className={styles.referenca}>
            <div className={styles.imageWrap}>
              <Image
                src={`/${image}`}
                alt={title}
                width={width}
                height={height}
              />
            </div>
            <h3 className={classnames("subtitle", styles.title)}>{title}</h3>
            <h4 className={styles.subtitle}>{subtitle}</h4>
          </div>
        </Link>
      ))}
    </div>
  </>
);

export default function Reference() {
  return (
    <LayoutDetail
      title="UGT Invest - novogradnja Bjelovar"
      desc="Više od 30 projekata sa više od 300 zadovoljnih kupaca"
      pageTitle="Reference"
    >
      <ReferenceContent
        reference={reference.aktualno}
        title="Aktualna ponuda"
      />
      <ReferenceContent
        reference={reference.arhiva}
        title="Završeni projekti"
      />
    </LayoutDetail>
  );
}
