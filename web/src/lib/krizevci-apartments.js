import { calculateSurfaces } from "./util";

const katovi = {
  0: "Prizemlje",
  1: "Prvi kat",
  Uvučeni: "Uvučeni kat",
};
let count = 0;
function createApartment(kat, sold) {
  const re = /soba\s*(\d{0,1})(?!\d|\.\d)/g;
  let str = apStrings[count++];
  str = str
    .replaceAll("m2", "")
    .replaceAll(",", ".")
    .replaceAll(re, "Spavaća-soba-$1")
    .replaceAll("boravak i blagovanje", "Boravak-i-blagovanje")
    .replaceAll("nenatkr. balkon", "Nenatkriveni-balkon")
    .replaceAll("nenatkr. terasa", "Nenatkrivena-terasa")
    .replaceAll("natkr. terasa", "Natkrivena-terasa")
    .replaceAll("  ", " ");
  const prostorije = str
    .split("\n")
    .filter(Boolean)
    .map((line) => {
      const [broj, naziv, povrsina, obracunska] = line.split(" ");
      return {
        broj,
        naziv: naziv.replaceAll("-", " "),
        povrsina: parseFloat(povrsina),
        obracunska: parseFloat(obracunska),
      };
    });
  return {
    naziv: `S-${count}`,
    katText: katovi[kat],
    kat,
    prostorije,
    sobe: prostorije.filter((p) => p.naziv.includes("soba")).length,
    sold,
  };
}

const apStrings = [
  `1 ulaz 3,56 m2 3,56 m2
2 boravak i blagovanje 20,66 m2 20,66 m2
3 kuhinja 6,48 m2 6,48 m2
4 kupaonica 4,28 m2 4,28 m2
5 soba1 9,14 m2 9,14 m2
6 hodnik 1,20 m2 1,20 m2
7 soba2 8,87 m2 8,87 m2
8 loggia 2,70 m2 2,03 m2`,
  `1 ulaz 3,79 m2 3,79 m2
2 kuhinja 5,52 m2 5,52 m2
3 boravak i blagovanje 13,80 m2 13,80 m2
4 kupaonica 3,57 m2 3,57 m2
5 soba 9,17 m2 9,17 m2
6 loggia 2,70 m2 2,03 m2`,
  `1 ulaz 4,72 m2 4,72 m2
2 kupaonica 4,33 m2 4,33 m2
3 boravak i blagovanje 18,88 m2 18,88 m2
4 kuhinja 5,73 m2 5,73 m2
5 soba 1 11,41 m2 11,41 m2
6 soba 2 8,94 m2 8,94 m2
7 loggia 2,70 m2 2,03 m2`,
  ` ulaz 3,83 m2 3,83 m2
2 kupaonica 3,40 m2 3,40 m2
3 kuhinja 5,56 m2 5,56 m2
4 boravak i blagovanje 13,28 m2 13,28 m2
5 soba 9,10 m2 9,10 m2
6 loggia 2,86 m2 1,43 m2`,
  `1 ulaz 3,68 m2 3,68 m2
2 kupaonica 5,48 m2 5,48 m2
3 wc 2,13 m2 2,13 m2
4 boravak i blagovanje 24,54 m2 24,54 m2
5 kuhinja 6,89 m2 6,89 m2
6 izba 1,53 m2 1,53 m2
7 soba 1 11,14 m2 11,14 m2
8 soba 2 9,72 m2 9,72 m2
9 loggia 2,70 m2 2,03 m2`,
  `1 ulaz 3,89 m2 3,89 m2
2 kupaonica 3,79 m2 3,79 m2
3 kuhinja 5,13 m2 5,13 m2
4 boravak i blagovanje 12,68 m2 12,68 m2
5 soba 8,19 m2 8,19 m2
6 loggia 2,70 m2 2,03 m2`,
  `1 ulaz 3,56 m2 3,56 m2
2 boravak i blagovanje 20,66 m2 20,66 m2
3 kuhinja 6,48 m2 6,48 m2
4 kupaonica 4,28 m2 4,28 m2
5 soba1 9,14 m2 9,14 m2
6 hodnik 1,20 m2 1,20 m2
7 soba2 8,87 m2 8,87 m2
8 loggia 3,44 m2 2,58 m2
9 nenatkr. balkon 0,73 m2 0,18 m2`,
  `1 ulaz 3,28 m2 3,28 m2
2 wc 2,06 m2 2,06 m2
3 boravak i blagovanje 25,04 m2 25,04 m2
4 kuhinja 6,40 m2 6,40 m2
5 gospodarstvo 2,22 m2 2,22 m2
6 hodnik 2,50 m2 2,50 m2
7 kupaonica 5,09 m2 5,09 m2
8 soba 1 10,80 m2 10,80 m2
9 soba 2 9,31 m2 9,31 m2
10 loggia 3,58 m2 2,69 m2`,
  `1 ulaz 4,23 m2 4,23 m2
2 kupaonica 4,27 m2 4,27 m2
3 kuhinja 4,92 m2 4,92 m2
4 boravak i blagovanje 13,26 m2 13,26 m2
5 soba 10,30 m2 10,30 m2
6 loggia 2,72 m2 1,36 m2`,
  `1 ulaz 4,86 m2 4,86 m2
2 kupaonica 4,48 m2 4,48 m2
3 soba 9,69 m2 9,69 m2
4 boravak i blagovanje 19,85 m2 19,85 m2
5 kuhinja 5,10 m2 5,10 m2
6 gospodarstvo 1,84 m2 1,84 m2
7 loggia 3,44 m2 2,58 m2
8 nenatkr. balkon 0,73 m2 0,18 m2`,
  `1 ulaz 3,11 m2 3,11 m2
2 wc 1,70 m2 1,70 m2
3 boravak i blagovanje 21,76 m2 21,76 m2
4 kuhinja 5,79 m2 5,79 m2
5 gospodarstvo 2,08 m2 2,08 m2
6 hodnik 2,37 m2 2,37 m2
7 kupaonica 3,74 m2 3,74 m2
8 soba 1 9,94 m2 9,94 m2
9 soba 2 8,90 m2 8,90 m2
10 loggia 3,44 m2 2,58 m2
11 nenatkr. balkon 0,73 m2 0,18 m2`,
  `1 ulaz 3,42 m2 3,42 m2
2 kupaonica 3,44 m2 3,44 m2
3 boravak i blagovanje 19,24 m2 19,24 m2
4 kuhinja 5,85 m2 5,85 m2
5 gospodarstvo 2,05 m2 2,05 m2
6 soba 9,99 m2 9,99 m2
7 loggia 3,44 m2 2,58 m2
8 nenatkr. balkon 0,73 m2 0,18 m2`,
  `1 ulaz 3,68 m2 3,68 m2
2 kupaonica 5,48 m2 5,48 m2
3 wc 2,13 m2 2,13 m2
4 boravak i blagovanje 24,54 m2 24,54 m2
5 kuhinja 6,89 m2 6,89 m2
6 izba 1,53 m2 1,53 m2
7 soba 1 11,14 m2 11,14 m2
8 soba 2 9,72 m2 9,72 m2
9 loggia 3,44 m2 2,58 m2
10 nenatkr. balkon 0,73 m2 0,18 m2`,
  `1 ulaz 3,83 m2 3,83 m2
2 kupaonica 3,40 m2 3,40 m2
3 kuhinja 5,56 m2 5,56 m2
4 boravak i blagovanje 13,28 m2 13,28 m2
5 soba 9,10 m2 9,10 m2
6 loggia 2,86 m2 1,43 m2`,
  `1 ulaz 8,08 m2 8,08 m2
2 predprostor 2,75 m2 2,75 m2
3 wc 2,63 m2 2,63 m2
4 kupaonica 6,84 m2 6,84 m2
5 soba 1 11,53 m2 11,53 m2
6 soba 2 10,86 m2 10,86 m2
7 soba 3 8,78 m2 8,78 m2
8 boravak i blagovanje 27,15 m2 27,15 m2
9 kuhinja 6,03 m2 6,03 m2
10 izba 2,12 m2 2,12 m2
11 natkr. terasa 11,75 m2 5,88 m2
12 nenatkr. terasa 29,25 m2 7,31 m2`,
  `1 ulaz 5,77 m2 5,77 m2
2 wc 1,90 m2 1,90 m2
3 boravak i blagovanje 26,60 m2 26,60 m2
4 kuhinja 6,53 m2 6,53 m2
5 gospodarstvo 2,58 m2 2,58 m2
6 hodnik 4,45 m2 4,45 m2
7 kupaonica 3,57 m2 3,57 m2
8 soba 1 10,02 m2 10,02 m2
9 soba 2 11,85 m2 11,85 m2
10 soba 3 8,95 m2 8,95 m2
11 natkr. terasa 6,43 m2 3,22 m2
12 nenatkr. terasa 32,87 m2 8,22 m2`,
  `1 ulaz 9,35 m2 9,35 m2
2 wc 3,01 m2 3,01 m2
3 gospodarstvo 5,96 m2 5,96 m2
4 boravak i blagovanje 39,81 m2 39,81 m2
5 kuhinja 11,69 m2 11,69 m2
6 hodnik 4,68 m2 4,68 m2
7 kupaonica 1 4,44 m2 4,44 m2
8 soba 1 14,32 m2 14,32 m2
9 garderoba 9,63 m2 9,63 m2
10 kupaonica 2 4,98 m2 4,98 m2
11 soba 2 13,85 m2 13,85 m2
12 soba 3 9,08 m2 9,08 m2
13 loggia 10,63 m2 5,32 m2
14 nenatkr. terasa 64,68 m2 16,17 m2`,
];
const parameters = [
  [0], // S-1
  [0], // S-2
  [0], // S-3
  [0], // S-4
  [0], // S-5
  [0], // S-6
  [1], // S-7
  [1], // S-8
  [1], // S-9
  [1], // S-10
  [1], // S-11
  [1], // S-12
  [1], // S-13
  [1], // S-14
  ["Uvučeni"], // S-15
  ["Uvučeni"], // S-16
  ["Uvučeni", true], // S-17
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

export const krizevciApartments = apartments;
