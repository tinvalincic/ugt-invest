import styles from "./form.module.css";
import { classnames } from "@/lib/util";

export function Form({ apartment }) {
  return (
    <form className={styles.form}>
      <div className={classnames(styles.gridGroup)}>
        <input type="text" placeholder="Ime i prezime" />
        <input type="text" placeholder="E-mail" />
        <input type="text" placeholder="Telefon" />
      </div>
      <div className={styles.formGroup}>
        <textarea placeholder="Napišite poruku" rows={10} />
      </div>
      <button
        type="submit"
        className={classnames("btn-primary", styles.btnSalji)}
      >
        Pošalji
      </button>
    </form>
  );
}
