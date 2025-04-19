export const classnames = (...args) => {
  return args
    .map((a) => {
      if (typeof a === "string") return a;
      if (typeof a === "object") {
        return Object.entries(a)
          .filter(([key, value]) => value)
          .map(([key]) => key)
          .join(" ");
      }
    })
    .join(" ");
};

export function getApartment(apartments, apartmentName) {
  if (!apartmentName) return null;
  return apartments.find(
    (apartment) => apartment.naziv === apartmentName.toUpperCase()
  );
}

export function calculateSurfaces(apartments) {
  apartments.forEach((apartment) => {
    const sum = (key) =>
      apartment.prostorije.reduce((acc, curr) => acc + curr[key], 0).toFixed(2);

    apartment.povrsina = +sum("povrsina");
    apartment.obracunska = +sum("obracunska");
  });
}

let apartments = {};
export function getApartments() {
  return apartments;
}

let initialized = false;
const callbacks = [];

export async function initApartments(refresh) {
  if (initialized) {
    if (Object.keys(apartments).length) {
      refresh();
      return;
    }
    callbacks.push(refresh);
    return;
  }
  initialized = true;
  try {
    const response = await fetch("https://ugt-invest.hr/apartments.php", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    apartments = await response.json();
    refresh();
    callbacks.forEach((callback) => callback());
  } catch (error) {}
}

export function isApartmentSold(building, apartment) {
  return !!+apartments?.[building]?.[apartment];
}

export const buildings = {
  1: "Frankopanska 2",
  2: "Križevci",
};

export const loginMessages = {
  1: "Unesite podatke za prijavu",
  2: "Pogrešno korisničko ime",
  3: "no_session_id",
  4: "Pogrešna lozinka",
};

export async function checkSessionId(onChecked) {
  const sessionId = localStorage.getItem("sessionId");
  if (!sessionId) {
    onChecked(false);
    return;
  }
  try {
    const response = await fetch("https://ugt-invest.hr/login.php", {
      method: "POST",
      body: JSON.stringify({ sessionId }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const res = await response.json();
    onChecked(!!res.success);
  } catch (error) {
    onChecked(false);
  }
}

export async function toggleApartment(building, apartment, callback) {
  const sessionId = localStorage.getItem("sessionId");
  if (!sessionId) {
    return;
  }
  const isSold = apartments[building][apartment];
  const sold = !!+isSold ? "0" : "1";
  try {
    const response = await fetch(
      "https://ugt-invest.hr/update-apartments.php",
      {
        method: "POST",
        body: JSON.stringify({ sessionId, building, apartment, sold }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const res = await response.json();
    if (!res.success) {
      throw new Error("Failed to update apartment");
    }
    apartments[building][apartment] = sold;
    callback();
  } catch (error) {
    return false;
  }
}
