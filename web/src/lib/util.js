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
