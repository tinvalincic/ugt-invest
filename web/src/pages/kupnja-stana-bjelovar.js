import { Form } from "@/components/form";
import { LayoutDetail } from "@/components/layout/layout-detail";
import { classnames } from "@/lib/util";
import styles from "@/styles/Kontakt.module.css";

export default function Kontakt() {
  return (
    <LayoutDetail
      title="UGT Invest - kupnja stana Bjelovar"
      desc="Obratite nam se sa sigurnošću"
      pageTitle="Kontakt"
    >
      <div className={classnames(styles.container, "kontakt")}>
        <div>
          <h3 className={classnames("subtitle", styles.subtitle)}>
            UGT Invest
          </h3>
          <div className={styles.dataGrid}>
            <div className={styles.label}>Adresa:</div>
            <div className={styles.value}>Cvjetna 29, Bjelovar</div>
            <div className={styles.label}>Mobitel:</div>
            <div className={styles.value}>+385 99 2543 204</div>
            <div className={styles.label}>e-mail:</div>
            <div className={styles.value}>prodaja@ugt-invest.hr</div>
            <div className={styles.label}>OIB:</div>
            <div className={styles.value}>49490079293</div>
            <div className={styles.label}>MB:</div>
            <div className={styles.value}>04809874</div>
            <div className={styles.label}>Direktor:</div>
            <div className={styles.value}>Zoran Matić</div>
          </div>
        </div>
        {/* <div>
          <Form />
        </div> */}
      </div>
    </LayoutDetail>
  );
}
