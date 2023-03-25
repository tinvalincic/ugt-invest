import styles from "./form.module.css";
import { classnames } from "@/lib/util";

async function postData(data = {}) {
  const response = await fetch("/contact-form-handler.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return response.json();
}

const Input = ({ type, placeholder, pattern, name }) => {
  const handleInvalid = ({ target }) => {
    target.setCustomValidity("Molimo Vas da ispravno popunite ovo polje");
  };
  const resetValidity = ({ target }) => target.setCustomValidity("");
  return (
    <input
      type={type}
      required
      placeholder={placeholder}
      onInvalid={handleInvalid}
      onInput={resetValidity}
      pattern={pattern}
      name={name}
    />
  );
};

export function Form({ apartment }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    if (apartment) data.apartment = apartment;
    const response = await postData(data);
    console.log(response);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={classnames(styles.gridGroup)}>
        <Input name="name" type="text" placeholder="Ime i prezime" />
        <Input
          name="email"
          type="text"
          placeholder="E-mail"
          pattern="^[a-zA-Z0-9+._%\-+]{1,256}@[a-zA-Z0-9][a-zA-Z0-9-]{0,64}(\.[a-zA-Z0-9][a-zA-Z0-9-]{0,25})+$"
        />
        <Input name="phone" type="text" placeholder="Telefon" />
      </div>
      <div className={styles.formGroup}>
        <textarea name="message" placeholder="Napišite poruku" rows={10} />
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
