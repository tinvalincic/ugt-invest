function createApartmentParser() {
  function copyToClipboard(str) {
    str = JSON.stringify(str);
    const el = document.createElement("textarea");
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    console.log("kopirano");
  }

  function parseString(str) {
    let strs = str
      .split(" ")
      .filter((v) => v !== "m²")
      .map((v) => v.replace(",", "."))
      .map((v) => {
        let num = parseFloat(v);
        return isNaN(num) ? v : num;
      });

    strs.forEach((v, i) => {
      let prev = strs[i - 1];
      if (
        !prev ||
        typeof v !== "string" ||
        typeof prev !== "string" ||
        prev?.startsWith("E") ||
        v.startsWith("E")
      ) {
        return;
      }
      let count = 1;
      while (strs[i - count] === "ignore") count++;
      strs[i - count] += ` ${v}`;
      strs[i] = "ignore";
    });
    strs = strs.filter((v) => v !== "ignore");
    return strs;
  }

  function run(str) {
    let count = 0;
    const keys = ["broj", "naziv", "povrsina", "obloga", "obracunska"];
    const content = parseString(str);
    const prostorije = content.reduce((acc, v, i) => {
      if (i % 5 === 0 && i !== 0) count++;
      if (!acc[count]) acc[count] = {};
      const key = keys[i - count * 5];
      acc[count][key] = v;
      return acc;
    }, []);

    const [etaza, naziv] = prostorije[0].broj.split(".");
    const [, kat] = etaza.split("E");
    let sobe = prostorije.reduce((acc, v) => {
      if (v.naziv.includes("soba")) acc++;
      return acc;
    }, 0);
    if (prostorije.find((p) => p.naziv.includes("Dnevni boravak"))) {
      sobe += 0.5;
    }

    const apartment = {
      naziv,
      katText: kat + ". kat",
      kat: Number(kat),
      sobe,
      prostorije,
    };

    copyToClipboard(apartment);
  }
  return run;
}
