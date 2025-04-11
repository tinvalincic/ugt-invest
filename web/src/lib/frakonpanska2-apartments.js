import { calculateSurfaces } from "./util";

const katovi = {
  0: "Prizemlje",
  1: "Prvi kat",
  2: "Drugi kat",
  Uvučeni: "Uvučeni kat",
};
const orijentacije = {
  0: "Jednostrana / JZ",
  1: "Dvostrana / SI-JZ",
  2: "Dvostrana / JZ-SI",
  3: "Jednostrana / J",
  4: "Dvostrana / J-S",
  5: "Jednostrana / Z",
  6: "Dvostrana / I-Z",
  7: "Jednostrana / I",
  8: "Trostrana / S-I-Z",
};
let count = 0;
function createApartment(kat, ulaz, orijentacija, sold) {
  // const re = /Spavaća soba\s+(\d+)(?!\.\d)/g;
  // regex that matches "Spavaća soba" followed by one digit only (not followed by a dot and another digit)
  const re = /Spavaća soba\s*(\d{0,1})(?!\d|\.\d)/g;
  let str = apStrings[count++];
  str = str
    .replaceAll("m2", "")
    .replaceAll(",", ".")
    .replaceAll(re, "Spavaća-soba-$1")
    .replaceAll("Natkriveni balkon", "Natkriveni-balkon")
    .replaceAll("Natkrivena terasa", "Natkrivena-terasa")
    .replaceAll("  ", " ");
  const prostorije = str
    .split("\n")
    .filter(Boolean)
    .slice(1)
    .map((line) => {
      const [broj, naziv, povrsina, koeficijent, obracunska] = line.split(" ");
      return {
        broj,
        naziv: naziv.replaceAll("-", " "),
        povrsina: parseFloat(povrsina),
        koeficijent,
        obracunska: parseFloat(obracunska),
      };
    });
  return {
    naziv: `S-${count}`,
    katText: katovi[kat],
    kat,
    ulaz,
    prostorije,
    sobe: prostorije.filter((p) => p.naziv.includes("Spavaća")).length,
    orijentacija: orijentacije[orijentacija],
    sold,
  };
}

const apStrings = [
  `Broj Ime prostorije Površina Koeficijent Obračunska površina
1 Ulaz 3,07 m2 1,00 3,07 m2
2 Kupaonica 3,71 m2 1,00 3,71 m2
3 Kh/Db 19,99 m2 1,00 19,99 m2
4 Spavaća soba 10,46 m2 1,00 10,46 m2`,
  `Broj Ime prostorije Površina Koeficijent Obračunska površina
1 Kh/Db 26,42 m2 1,00 26,42 m2
2 Kupaonica 4,22 m2 1,00 4,22 m2
3 Hodnik 2,80 m2 1,00 2,80 m2
4 Spavaća soba 10,84 m2 1,00 10,84 m2
5 Terasa 5,58 m2 0,25 1,40 m2
6 Vrt 14,68 m2 0,10 1,47 m2`,
  `Broj Ime prostorije Površina Koeficijent Obračunska površina
1 Ulaz 3,03 m2 1,00 3,03 m2
2 Kupaonica 4,42 m2 1,00 4,42 m2
3 Spavaća soba 11,48 m2 1,00 11,48 m2
4 Kh/Db/Bl 25,29 m2 1,00 25,29 m2`,
  `Broj Ime prostorije Površina Koeficijent Obračunska površina
1 Ulaz 3,07 m2 1,00 3,07 m2
2 Kh/Db/Bl 19,99 m2 1,00 19,99 m2
3 Kupaonica 3,71 m2 1,00 3,71 m2
4 Spavaća soba 10,46 m2 1,00 10,46 m2
5 Lođa 4,81 m2 0,75 3,61 m2`,
  `Broj Ime prostorije Površina Koeficijent Obračunska površina
1 Ulaz 7,56 m2 1,00 7,56 m2
2 Kupaonica 3,92 m2 1,00 3,92 m2
3 Spremište 2,57 m2 1,00 2,57 m2
4 Spavaća soba 1 13,17 m2 1,00 13,17 m2
5 Spavaća soba 2 11,55 m2 1,00 11,55 m2
6 Kh/Db/Bl 28,24 m2 1,00 28,24 m2
7 Lođa 4,65 m2 0,75 3,49 m2`,
  `Broj Ime prostorije Površina Koeficijent Obračunska površina
1 Ulaz 10,09 m2 1,00 10,09 m2
2 Wc 2,15 m2 1,00 2,15 m2
3 Kh/Db/Bl 33,57 m2 1,00 33,57 m2
4 Spavaća soba 1 10,73 m2 1,00 10,73 m2
5 Spavaća soba 2 10,40 m2 1,00 10,40 m2
6 Spavaća soba 3 10,18 m2 1,00 10,18 m2
7 Hodnik 3,12 m2 1,00 3,12 m2
8 Kupaonica 3,89 m2 1,00 3,89 m2
9 Lođa 6,41 m2 0,75 4,81 m2`,
  `Broj Ime prostorije Površina Koeficijent Obračunska površina
1 Ulaz 3,03 m2 1,00 3,03 m2
2 Kupaonica 4,42 m2 1,00 4,42 m2
3 Spavaća soba 11,48 m2 1,00 11,48 m2
4 Kh/Db/Bl 25,29 m2 1,00 25,29 m2`,
  `Broj Ime prostorije Površina Koeficijent Obračunska površina
1 Ulaz 3,07 m2 1,00 3,07 m2
2 Kh/Db/Bl 19,96 m2 1,00 19,96 m2
3 Spavaća soba 10,46 m2 1,00 10,46 m2
4 Kupaonica 3,71 m2 1,00 3,71 m2
5 Balkon 6,03 m2 0,25 1,51 m2`,
  `Broj Ime prostorije Površina Koeficijent Obračunska površina
1 Ulaz 7,56 m2 1,00 7,56 m2
2 Kupaonica 3,92 m2 1,00 3,92 m2
3 Spremište 2,60 m2 1,00 2,60 m2
4 Spavaća soba 1 13,17 m2 1,00 13,17 m2
5 Spavaća soba 2 11,55 m2 1,00 11,55 m2
6 Kh/Db/Bl 28,24 m2 1,00 28,24 m2
7 Lođa 4,73 m2 0,75 3,55 m2`,
  `Broj Ime prostorije Površina Koeficijent Obračunska površina
1 Ulaz 10,09 m2 1,00 10,09 m2
2 Wc 2,15 m2 1,00 2,15 m2
3 Kh/Db/Bl 33,53 m2 1,00 33,53 m2
4 Spavaća soba 1 10,73 m2 1,00 10,73 m2
5 Spavaća soba 2 10,40 m2 1,00 10,40 m2
6 Spavaća soba 3 10,18 m2 1,00 10,18 m2
7 Hodnik 3,12 m2 1,00 3,12 m2
8 Kupaonica 3,89 m2 1,00 3,89 m2
9 Lođa 6,50 m2 0,75 4,88 m2`,
  `Broj Ime prostorije Površina Koeficijent Obračunska površina
1 Ulaz 3,03 m2 1,00 3,03 m2
2 Kupaonica 4,42 m2 1,00 4,42 m2
3 Spavaća soba 11,48 m2 1,00 11,48 m2
4 Kh/Db/Bl 25,29 m2 1,00 25,29 m2
5 Lođa 4,85 m2 0,75 3,64 m2`,
  `Broj Ime prostorije Površina Koeficijent Obračunska površina
1 Ulaz 3,07 m2 1,00 3,07 m2
2 Kh/Db/Bl 19,96 m2 1,00 19,96 m2
3 Spavaća soba 10,46 m2 1,00 10,46 m2
4 Kupaonica 3,71 m2 1,00 3,71 m2`,
  `Broj Ime prostorije Površina Koeficijent Obračunska površina
1 Ulaz 6,45 m2 1,00 6,45 m2
2 Kupaonica 3,66 m2 1,00 3,66 m2
3 Spavaća soba 11,24 m2 1,00 11,24 m2
4 Kh/Db/Bl 26,73 m2 1,00 26,73 m2`,
  `Broj Ime prostorije Površina Koeficijent Obračunska površina
1 Ulaz 4,43 m2 1,00 4,43 m2
2 Kh/Db 27,57 m2 1,00 27,57 m2
3 Spavaća soba 1 9,26 m2 1,00 9,26 m2
4 Spavaća soba 2 13,63 m2 1,00 13,63 m2
5 Hodnik 4,17 m2 1,00 4,17 m2
6 Kupaonica 4,65 m2 1,00 4,65 m2
7 Natkrivena terasa 6,83 m2 0,50 3,42 m2
8 Vrt 74,02 m2 0,10 7,40 m2`,
  `Broj Ime prostorije Površina Koeficijent Obračunska površina
1 Ulaz 3,53 m2 1,00 3,53 m2
2 Kh/Db/Bl 25,19 m2 1,00 25,19 m2
3 Hodnik 1,64 m2 1,00 1,64 m2
4 Kupaonica 3,68 m2 1,00 3,68 m2
5 Spavaća soba 9,98 m2 1,00 9,98 m2
6 Vrt 8,76 m2 0,10 0,88 m2`,
  `Broj Ime prostorije Površina Koeficijent Obračunska površina
1 Ulaz 5,79 m2 1,00 5,79 m2
2 Kupaonica 4,29 m2 1,00 4,29 m2
3 Spavaća soba 1 12,39 m2 1,00 12,39 m2
4 Spavaća soba 2 12,42 m2 1,00 12,42 m2
5 Kh/Db/Bl 31,74 m2 1,00 31,74 m2
6 Lođa 5,29 m2 0,75 3,97 m2
7 Vrt 41,57 m2 0,10 4,16 m2`,
  `Broj Ime prostorije Površina Koeficijent Obračunska površina
1 Ulaz 5,79 m2 1,00 5,79 m2
2 Kupaonica 4,29 m2 1,00 4,29 m2
3 Kh/Db/Bl 31,74 m2 1,00 31,74 m2
4 Spavaća soba 1 12,39 m2 1,00 12,39 m2
5 Spavaća soba 2 12,42 m2 1,00 12,42 m2
6 Natkriveni balkon 6,53 m2 0,50 3,27 m2`,
  `Broj Ime prostorije Površina Koeficijent Obračunska površina
1 Ulaz 3,54 m2 1,00 3,54 m2
2 Kh/Db/Bl 33,60 m2 1,00 33,60 m2
3 Hodnik 1,64 m2 1,00 1,64 m2
4 Kupaonica 3,68 m2 1,00 3,68 m2
5 Spavaća soba 9,97 m2 1,00 9,97 m2
6 Lođa 4,85 m2 0,75 3,64 m2`,
  `Broj Ime prostorije Površina Koeficijent Obračunska površina
1 Ulaz 4,43 m2 1,00 4,43 m2
2 Kh/Db/Bl 27,57 m2 1,00 27,57 m2
3 Hodnik 4,17 m2 1,00 4,17 m2
4 Kupaonica 4,65 m2 1,00 4,65 m2
5 Spavaća soba 1 9,26 m2 1,00 9,26 m2
6 Spavaća soba 2 13,63 m2 1,00 13,63 m2
7 Lođa 5,42 m2 0,75 4,07 m2`,
  `Broj Ime prostorije Površina Koeficijent Obračunska površina
1 Ulaz 6,57 m2 1,00 6,57 m2
2 Kupaonica 3,66 m2 1,00 3,66 m2
3 Kh/Db/Bl 26,68 m2 1,00 26,68 m2
4 Spavaća soba 11,11 m2 1,00 11,11 m2
5 Lođa 4,90 m2 0,75 3,68 m2`,
  `Broj Ime prostorije Površina Koeficijent Obračunska površina
1 Ulaz 5,79 m2 1,00 5,79 m2
2 Kupaonica 4,29 m2 1,00 4,29 m2
3 Kh/Db/Bl 31,66 m2 1,00 31,66 m2
4 Spavaća soba 1 12,39 m2 1,00 12,39 m2
5 Spavaća soba 2 12,42 m2 1,00 12,42 m2
6 Lođa 5,30 m2 0,75 3,98 m2`,
  `Broj Ime prostorije Površina Koeficijent Obračunska površina
1 Ulaz 3,54 m2 1,00 3,54 m2
2 Kh/Db/Bl 33,60 m2 1,00 33,60 m2
3 Hodnik 1,64 m2 1,00 1,64 m2
4 Kupaonica 3,68 m2 1,00 3,68 m2
5 Spavaća soba 9,97 m2 1,00 9,97 m2
6 Balkon 6,03 m2 0,25 1,51 m2`,
  `Broj Ime prostorije Površina Koeficijent Obračunska površina
1 Ulaz 4,39 m2 1,00 4,39 m2
2 Kh/Db/Bl 27,57 m2 1,00 27,57 m2
3 Hodnik 4,17 m2 1,00 4,17 m2
4 Kupaonica 4,65 m2 1,00 4,65 m2
5 Spavaća soba 1 9,26 m2 1,00 9,26 m2
6 Spavaća soba 2 13,63 m2 1,00 13,63 m2
7 Natkriveni balkon 6,03 m2 0,50 3,02 m2`,
  `Broj Ime prostorije Površina Koeficijent Obračunska površina
1 Ulaz 6,57 m2 1,00 6,57 m2
2 Kupaonica 3,66 m2 1,00 3,66 m2
3 Kh/Db/Bl 26,65 m2 1,00 26,65 m2
4 Spavaća soba 11,11 m2 1,00 11,11 m2
5 Balkon 6,03 m2 0,25 1,51 m2`,
  `Broj Ime prostorije Površina Koeficijent Obračunska površina
1 Ulaz 5,79 m2 1,00 5,79 m2
2 Kupaonica 4,29 m2 1,00 4,29 m2
3 Kh/Db/Bl 31,66 m2 1,00 31,66 m2
4 Spavaća soba 1 12,39 m2 1,00 12,39 m2
5 Spavaća soba 2 12,42 m2 1,00 12,42 m2
6 Balkon 6,53 m2 0,25 1,63 m2`,
  `Broj Ime prostorije Površina Koeficijent Obračunska površina
1 Ulaz 3,54 m2 1,00 3,54 m2
2 Kh/Db/Bl 33,60 m2 1,00 33,60 m2
3 Hodnik 1,64 m2 1,00 1,64 m2
4 Kupaonica 3,68 m2 1,00 3,68 m2
5 Spavaća soba 9,97 m2 1,00 9,97 m2
6 Lođa 4,88 m2 0,75 3,66 m2`,
  `Broj Ime prostorije Površina Koeficijent Obračunska površina
1 Ulaz 4,39 m2 1,00 4,39 m2
2 Kh/Db/Bl 27,57 m2 1,00 27,57 m2
3 Hodnik 4,17 m2 1,00 4,17 m2
4 Kupaonica 4,65 m2 1,00 4,65 m2
5 Spavaća soba 1 9,26 m2 1,00 9,26 m2
6 Spavaća soba 2 13,63 m2 1,00 13,63 m2
7 Lođa 5,43 m2 0,75 4,07 m2`,
  `Broj Ime prostorije Površina Koeficijent Obračunska površina
1 Ulaz 6,57 m2 1,00 6,57 m2
2 Kupaonica 3,66 m2 1,00 3,66 m2
3 Kh/Db/Bl 26,65 m2 1,00 26,65 m2
4 Spavaća soba 11,12 m2 1,00 11,12 m2`,
  `Broj Ime prostorije Površina Koeficijent Obračunska površina
1 Ulaz 7,19 m2 1,00 7,19 m2
2 Kupaonica 3,09 m2 1,00 3,09 m2
3 Spavaća soba 12,74 m2 1,00 12,74 m2
4 Kh/Db/Bl 21,42 m2 1,00 21,42 m2
5 Vrt 16,15 m2 0,10 1,62 m2`,
  `Broj Ime prostorije Površina Koeficijent Obračunska površina
1 Ulaz 5,72 m2 1,00 5,72 m2
2 Vrt 58,11 m2 0,10 5,81 m2
3 Hodnik 4,68 m2 1,00 4,68 m2
4 Wc 2,97 m2 1,00 2,97 m2
5 Kupaonica 3,85 m2 1,00 3,85 m2
6 Spavaća soba 1 12,45 m2 1,00 12,45 m2
7 Spavaća soba 2 8,97 m2 1,00 8,97 m2
8 Spavaća soba 3 12,47 m2 1,00 12,47 m2
9 Kh/Db/Bl 31,81 m2 1,00 31,81 m2
10 Natkrivena terasa 7,60 m2 0,50 3,80 m2`,
  `Broj Ime prostorije Površina Koeficijent Obračunska površina
1 Ulaz 5,73 m2 1,00 5,73 m2
2 Kupaonica 3,09 m2 1,00 3,09 m2
3 Spavaća soba 12,28 m2 1,00 12,28 m2
4 Kh/Db/Bl 21,33 m2 1,00 21,33 m2
5 Natkrivena terasa 7,62 m2 0,50 3,81 m2
6 Vrt 33,62 m2 0,10 3,36 m2`,
  `Broj Ime prostorije Površina Koeficijent Obračunska površina
1 Ulaz 5,73 m2 1,00 5,73 m2
2 Kupaonica 4,38 m2 1,00 4,38 m2
3 Kh/Db/Bl 30,96 m2 1,00 30,96 m2
4 Spavaća soba 1 12,28 m2 1,00 12,28 m2
5 Spavaća soba 2 12,42 m2 1,00 12,42 m2
6 Lođa 5,61 m2 0,75 4,21 m2`,
  `Broj Ime prostorije Površina Koeficijent Obračunska površina
1 Kh/Db/Bl 31,48 m2 1,00 31,48 m2
2 Hodnik 1,48 m2 1,00 1,48 m2
3 Spavaća soba 10,07 m2 1,00 10,07 m2
4 Kupaonica 3,82 m2 1,00 3,82 m2
5 Lođa 4,81 m2 0,75 3,61 m2`,
  `Broj Ime prostorije Površina Koeficijent Obračunska površina
1 Ulaz 5,72 m2 1,00 5,72 m2
2 Kupaonica 4,41 m2 1,00 4,41 m2
3 Kh/Db/Bl 31,78 m2 1,00 31,78 m2
4 Spavaća soba 1 12,45 m2 1,00 12,45 m2
5 Spavaća soba 2 12,42 m2 1,00 12,42 m2
6 Lođa 5,61 m2 0,75 4,21 m2`,
  `Broj Ime prostorije Površina Koeficijent Obračunska površina
1 Ulaz 5,73 m2 1,00 5,73 m2
2 Kupaonica 4,38 m2 1,00 4,38 m2
3 Kh/Db/Bl 30,96 m2 1,00 30,96 m2
4 Spavaća soba 1 12,28 m2 1,00 12,28 m2
5 Spavaća soba 2 12,42 m2 1,00 12,42 m2
6 Natkriveni balkon 6,82 m2 0,50 3,41 m2`,
  `Broj Ime prostorije Površina Koeficijent Obračunska površina
1 Kh/Db/Bl 31,48 m2 1,00 31,48 m2
2 Hodnik 1,48 m2 1,00 1,48 m2
3 Spavaća soba 10,07 m2 1,00 10,07 m2
4 Kupaonica 3,82 m2 1,00 3,82 m2
5 Balkon 6,03 m2 0,25 1,51 m2`,
  `Broj Ime prostorije Površina Koeficijent Obračunska površina
1 Ulaz 5,72 m2 1,00 5,72 m2
2 Kupaonica 4,41 m2 1,00 4,41 m2
3 Kh/Db/Bl 31,71 m2 1,00 31,71 m2
4 Spavaća soba 1 12,45 m2 1,00 12,45 m2
5 Spavaća soba 2 12,44 m2 1,00 12,44 m2
6 Natkriveni balkon 6,85 m2 0,50 3,43 m2
7 Lođa 4,81 m2 0,75 3,61 m2`,
  `Broj Ime prostorije Površina Koeficijent Obračunska površina
1 Ulaz 5,73 m2 1,00 5,73 m2
2 Kupaonica 4,38 m2 1,00 4,38 m2
3 Kh/Db/Bl 30,96 m2 1,00 30,96 m2
4 Spavaća soba 1 12,28 m2 1,00 12,28 m2
5 Spavaća soba 2 12,42 m2 1,00 12,42 m2
6 Lođa 5,76 m2 0,75 4,32 m2`,
  `Broj Ime prostorije Površina Koeficijent Obračunska površina
1 Kh/Db/Bl 31,48 m2 1,00 31,48 m2
2 Hodnik 1,48 m2 1,00 1,48 m2
3 Spavaća soba 10,07 m2 1,00 10,07 m2
4 Kupaonica 3,82 m2 1,00 3,82 m2
5 Lođa 4,92 m2 0,75 3,69 m2`,
  `Broj Ime prostorije Površina Koeficijent Obračunska površina
1 Ulaz 5,72 m2 1,00 5,72 m2
2 Kupaonica 4,41 m2 1,00 4,41 m2
3 Kh/Db/Bl 31,71 m2 1,00 31,71 m2
4 Spavaća soba 1 12,45 m2 1,00 12,45 m2
5 Spavaća soba 2 12,42 m2 1,00 12,42 m2
6 Lođa 5,74 m2 0,75 4,31 m2
7 Balkon 6,03 m2 0,25 1,51 m2`,
];
const parameters = [
  [0, "A", 0, true], // S-1
  [0, "A", 1], // S-2
  [1, "A", 2, true], // S-3
  [1, "A", 0, true], // S-4
  [1, "A", 3], // S-5
  [1, "A", 4, true], // S-6
  [2, "A", 2, true], // S-7
  [2, "A", 0, true], // S-8
  [2, "A", 3], // S-9
  [2, "A", 4, true], // S-10
  ["Uvučeni", "A", 2, true], // S-11
  ["Uvučeni", "A", 0, true], // S-12
  [0, "B", 0], // S-13
  [0, "B", 2], // S-14
  [0, "B", 5, true], // S-15
  [0, "B", 6, true], // S-16
  [1, "B", 6], // S-17
  [1, "B", 5, true], // S-18
  [1, "B", 2, true], // S-19
  [1, "B", 2, true], // S-20
  [2, "B", 6], // S-21
  [2, "B", 5, true], // S-22
  [2, "B", 2, true], // S-23
  [2, "B", 0, true], // S-24
  ["Uvučeni", "B", 6], // S-25
  ["Uvučeni", "B", 5, true], // S-26
  ["Uvučeni", "B", 2], // S-27
  ["Uvučeni", "B", 0, true], // S-28
  [0, "C", 5], // S-29
  [0, "C", 7], // S-30
  [0, "C", 7, true], // S-31
  [1, "C", 8, true], // S-32
  [1, "C", 5, true], // S-33
  [1, "C", 6, true], // S-34
  [2, "C", 8, true], // S-35
  [2, "C", 5, true], // S-36
  [2, "C", 6, true], // S-37
  ["Uvučeni", "C", 8, true], // S-38
  ["Uvučeni", "C", 5, true], // S-39
  ["Uvučeni", "C", 6, true], // S-40
];
const apartments = parameters.map((params) => createApartment(...params));

calculateSurfaces(apartments);

const minAndMax = apartments.reduce(
  (acc, app) => {
    const povrsina = app.obracunska;
    if (povrsina < acc.min) acc.min = povrsina;
    if (povrsina > acc.max) acc.max = povrsina;
    return acc;
  },
  { min: 1000, max: 0 }
);

export const frankopanska2Apartments = apartments;
