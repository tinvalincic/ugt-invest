import {
  buildings,
  checkSessionId,
  classnames,
  getApartments,
  isApartmentSold,
  loginMessages,
  toggleApartment,
} from "@/lib/util";
import { useEffect, useState } from "react";
import styles from "./admin.module.css";
import { useSoldApartments } from "@/lib/hooks";

const useIsLoggedIn = () => {
  const [loggedIn, setIsLoggedIn] = useState(false);
  const [initialized, setIsInitialized] = useState(false);
  useEffect(() => {
    checkSessionId((isLoggedIn) => {
      setIsInitialized(true);
      setIsLoggedIn(isLoggedIn);
    });
  }, []);
  return {
    loggedIn,
    initialized,
  };
};

export default function Admin() {
  const { loggedIn, initialized } = useIsLoggedIn();
  if (!initialized) return null;
  if (!loggedIn) {
    return <LoginForm />;
  }
  return <Content />;
}

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://ugt-invest.hr/login.php", {
        method: "POST",
        body: JSON.stringify({ user: username, password }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Nešto je pošlo po krivu.");
      }
      const data = await response.json();
      if (!data.success) {
        setError(loginMessages[data.error]);
      } else {
        localStorage.setItem("sessionId", data.user.sessionId);
        window.location.reload();
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Prijava</h1>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Login"}
        </button>
        {error && <div className={styles.errorMessage}>{error}</div>}
      </form>
    </div>
  );
};

const Content = () => {
  const [count, setCount] = useSoldApartments();
  const apartments = getApartments();

  const onButtonClick = (building, apartment, sold) => {
    if (apartments[building][apartment] === sold) {
      return;
    }
    toggleApartment(building, apartment, () => {
      setCount((prev) => prev + 1);
    });
  };

  return (
    <div key={count}>
      <div className={styles.header}>
        <button
          className={styles.logoutButton}
          onClick={() => {
            localStorage.removeItem("sessionId");
            window.location.reload();
          }}
        >
          Odjava
        </button>
      </div>
      {Object.entries(apartments).map(([building, apartments]) => (
        <div key={building}>
          <h2 className={styles.buildingTitle}>{buildings[building]}</h2>
          <div className={styles.apartmentsList}>
            {Object.keys(apartments).map((apartment) => (
              <div key={apartment} className={styles.apartmentItem}>
                <span>S-{apartment}</span>
                <button
                  className={classnames(styles.apartmentButton, {
                    [styles.active]: !isApartmentSold(building, apartment),
                  })}
                  onClick={() => onButtonClick(building, apartment, "0")}
                >
                  Dostupno
                </button>
                <button
                  className={classnames(styles.apartmentButton, {
                    [styles.active]: isApartmentSold(building, apartment),
                  })}
                  onClick={() => onButtonClick(building, apartment, "1")}
                >
                  Prodano
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
