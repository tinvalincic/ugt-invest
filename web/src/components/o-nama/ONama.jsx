import { LayoutDetail } from "@/components/layout/layout-detail";
import Link from "next/link";
import styles from "./ONama.module.css";

export function ONama() {
  return (
    <LayoutDetail
      title="UGT Invest - izgradnja stanova Bjelovar"
      desc="Dugogodišnja obiteljska tradicija izgradnje stambenih i poslovnih objekata"
      pageTitle="UGT Invest - izgradnja stanova Bjelovar"
    >
      <div className={styles.container}>
        <Link href="/stanogradnja-bjelovar">
          <h3 className="subtitle">
            Dugogodišnje iskustvo kvalitetne stanogradnje
          </h3>
        </Link>
        <p>
          UGT Invest d.o.o. bavi se{" "}
          <Link href="/izgradnja-stanova-bjelovar">izgradnjom</Link> stambenih i
          poslovnih objekata diljem Hrvatske. Naša obiteljska tradicija duga je
          već više od 20 godina, a od tada smo uspješno realizirali više od 30
          projekata na lokacijama diljem Hrvatske.
          <br />
          <br />
          Ponosni smo što smo tijekom godina stekli povjerenje više od 300
          zadovoljnih kupaca, a naša predanost kvaliteti i profesionalnosti
          izgradnje uvijek se odražava u njihovom zadovoljstvu i preporukama
          koje šire svojim poznanicima. UGT Invest d.o.o. nudi visokokvalitetne{" "}
          <Link href="/prodaja-nekretnina-bjelovar">
            stambene i poslovne prostore
          </Link>
          . Gradnja stanova u Bjelovaru jedna je od naših glavnih specijalnosti,
          te smo ponosni što smo svojim projektima obogatili i{" "}
          <Link href="/prodaja-kuca-bjelovar"> uljepšali grad</Link>. Naši
          stanovi u Bjelovaru su moderni, funkcionalni, a istovremeno
          prilagođeni svakom pojedinom kupcu. U našoj ponudi se nalaze različiti
          tipovi stanova kako bi svatko pronašao nešto za sebe. Uz
          visokokvalitetnu gradnju, UGT Invest d.o.o. pruža i konkurentne
          cijene. Novogradnja stanova u Bjelovaru koju nudimo, idealna je
          prilika za sve one koji traže moderno i kvalitetno stambeno rješenje u
          našem gradu. Kontaktirajte nas i uvjerite se u našu kvalitetu i
          predanost u{" "}
          <Link href="/projektiranje-stambenih-zgrada">gradnji</Link> stambenih
          i poslovnih objekata.
        </p>
      </div>
    </LayoutDetail>
  );
}
