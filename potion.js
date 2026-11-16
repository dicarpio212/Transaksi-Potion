// Untuk konten (petualang)

const potion = {
  user: "Petualang",

  saldo: 2300,

  _potionList: [
    {
      nama: "Healing Spell",
      gambar: "spell/Healing_Spell_info.jpg",
      harga: 150,
      stok: 12,
      deskripsi:
        "Membuat cincin penyembuhan untuk memulihkan kesehatan pasukan Anda di medan perang.",
      tipe_spell: "Elixir Spell",
      ts: "E",
      jenis_spell: "Buff",
      js: "B",
    },
    {
      nama: "Lightning Spell",
      gambar: "spell/Lightning_Spell_info.jpg",
      harga: 60,
      stok: 20,
      deskripsi:
        "Menjatuhkan petir dari langit untuk merusak dan melumpuhkan pertahanan serta pasukan musuh.",
      tipe_spell: "Elixir Spell",
      ts: "E",
      jenis_spell: "Damage",
      js: "D",
    },
    {
      nama: "Rage Spell",
      gambar: "spell/Rage_Spell_info.jpg",
      harga: 200,
      stok: 8,
      deskripsi:
        "Membuat lingkaran kemarahan yang meningkatkan kecepatan dan daya rusak pasukan Anda secara signifikan.",
      tipe_spell: "Elixir Spell",
      ts: "E",
      jenis_spell: "Buff",
      js: "B",
    },
    {
      nama: "Jump Spell",
      gambar: "spell/Jump_Spell_info.jpg",
      harga: 180,
      stok: 10,
      deskripsi:
        "Membuat jalur khusus yang memungkinkan pasukan Anda melompati tembok pertahanan musuh dengan mudah.",
      tipe_spell: "Elixir Spell",
      ts: "E",
      jenis_spell: "Buff",
      js: "B",
    },
    {
      nama: "Poison Spell",
      gambar: "spell/Poison_Spell_info.jpg",
      harga: 95,
      stok: 15,
      deskripsi:
        "Mengeluarkan awan beracun yang memperlambat dan mengurangi kesehatan pasukan bertahan milik musuh.",
      tipe_spell: "Dark Elixir Spell",
      ts: "DE",
      jenis_spell: "Crowd Control",
      js: "CC",
    },
    {
      nama: "Earthquake Spell",
      gambar: "spell/Earthquake_Spell_info.jpg",
      harga: 125,
      stok: 73,
      deskripsi:
        "Mengguncang tanah untuk merusak bangunan dan menghancurkan tembok pertahanan musuh dengan cepat.",
      tipe_spell: "Dark Elixir Spell",
      ts: "DE",
      jenis_spell: "Damage",
      js: "D",
    },
    {
      nama: "Invisibility Spell",
      gambar: "spell/Invisibility_Spell_info.jpg",
      harga: 220,
      stok: 0,
      deskripsi:
        "Membuat pasukan dan bangunan di dalam area menjadi tidak terlihat untuk sementara waktu.",
      tipe_spell: "Elixir Spell",
      ts: "E",
      jenis_spell: "Buff",
      js: "B",
    },
    {
      nama: "Overgrowth Spell",
      gambar: "spell/Overgrowth_Spell_info.jpg",
      harga: 240,
      stok: 0,
      deskripsi:
        "Menumbuhkan akar raksasa untuk membekukan dan menyembunyikan bangunan pertahanan musuh sementara.",
      tipe_spell: "Elixir Spell",
      ts: "E",
      jenis_spell: "Crowd Control",
      js: "CC",
    },
    {
      nama: "Freeze Spell",
      gambar: "spell/Freeze_Spell_info.jpg",
      harga: 130,
      stok: 14,
      deskripsi:
        "Membekukan pertahanan dan pasukan musuh untuk sementara waktu agar tidak bisa menyerang.",
      tipe_spell: "Elixir Spell",
      ts: "E",
      jenis_spell: "Crowd Control",
      js: "CC",
    },
  ].sort((a, b) => a.nama.localeCompare(b.nama)),

  get potionList() {
    let potionList = this._potionList.filter((potion) => potion.stok > 0);
    return potionList;
  },

  tambahSaldo(saldo) {
    this.saldo += saldo;
  },

  fungsiFilter(option) {
    let daftarPotion = [...this.potionList];
    let prioritas = [];

    switch (option) {
      case "default":
        tampilkanPotion(daftarPotion);
        break;
      case "termurah":
        daftarPotion.sort((a, b) => a.harga - b.harga);
        stokPotionInventory = this.buatFilter(daftarPotion, "harga", "");
        break;
      case "termahal":
        daftarPotion.sort((a, b) => b.harga - a.harga);
        stokPotionInventory = this.buatFilter(daftarPotion, "harga", "");
        break;
      case "terbanyak":
        daftarPotion.sort((a, b) => b.stok - a.stok);
        stokPotionInventory = this.buatFilter(daftarPotion, "stok", "x ");
        break;
      case "tersedikit":
        daftarPotion.sort((a, b) => a.stok - b.stok);
        stokPotionInventory = this.buatFilter(daftarPotion, "stok", "x ");
        break;
      case "buff":
        prioritas = ["B", "CC", "D"];
        daftarPotion.sort(
          (a, b) => prioritas.indexOf(a.js) - prioritas.indexOf(b.js),
        );
        stokPotionInventory = this.buatFilter(daftarPotion, "js", "");
        break;
      case "damage":
        prioritas = ["D", "B", "CC"];
        daftarPotion.sort(
          (a, b) => prioritas.indexOf(a.js) - prioritas.indexOf(b.js),
        );
        stokPotionInventory = this.buatFilter(daftarPotion, "js", "");
        break;
      case "crowdControl":
        prioritas = ["CC", "B", "D"];
        daftarPotion.sort(
          (a, b) => prioritas.indexOf(a.js) - prioritas.indexOf(b.js),
        );
        stokPotionInventory = this.buatFilter(daftarPotion, "js", "");
        break;
      case "darkElixir":
        prioritas = ["DE", "E"];
        daftarPotion.sort(
          (a, b) => prioritas.indexOf(a.ts) - prioritas.indexOf(b.ts),
        );
        stokPotionInventory = this.buatFilter(daftarPotion, "ts", "");
        break;
      case "elixir":
        prioritas = ["E", "DE"];
        daftarPotion.sort(
          (a, b) => prioritas.indexOf(a.ts) - prioritas.indexOf(b.ts),
        );
        stokPotionInventory = this.buatFilter(daftarPotion, "ts", "");
        break;
    }
  },

  buatFilter(daftarPotion, nah, pendamping) {
    tampilkanPotion(daftarPotion);
    stokPotionInventory = document.querySelectorAll(
      "section#Home .kartu .stokPotionInventory span",
    );
    stokPotionInventory.forEach(
      (harga, index) =>
        (harga.textContent = `${pendamping}${daftarPotion[index][nah]}`),
    );
  },

  cariPotion(search) {
    const daftarPotion = this.potionList.filter((pot) =>
      pot.nama.toLowerCase().includes(search.toLowerCase()),
    );
    tampilkanPotion(daftarPotion);
  },
};

// Buat Nampilin Kartu
const inventory = document.querySelector("section#Home .inventory");

const tampilkanPotion = (daftarPotion) => {
  inventory.innerHTML = "";
  daftarPotion.forEach((potion) => {
    const kartuPotion = document.createElement("div");
    kartuPotion.classList.add("kartu");
    kartuPotion.dataset.nama = potion.nama;

    kartuPotion.innerHTML = `
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-info"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          <div class="gambarPotionInventory">
            <img
              src=${potion.gambar}
              alt=""
            />
          </div>
          <div class="stokPotionInventory"><span>x ${potion.stok}</span></div>
    `;
    inventory.append(kartuPotion);
  });
};

tampilkanPotion(potion.potionList);

// bagian navbar
const navbar = document.querySelector("#navBar");
const user = navbar.querySelector(".user");
const hamburger = navbar.querySelector(".user svg");
const img = navbar.querySelector(".user img");
const h1 = navbar.querySelector(".user h1");

const wadahButton = document.querySelector("#navBar .buttons");
const button = wadahButton.querySelectorAll("button");
const buttonh1 = wadahButton.querySelectorAll("button h1");
const buttonsvg = wadahButton.querySelectorAll("button svg");
const tampilanHome = document.querySelector("section#Home");

const header = document.querySelector("header");

hamburger.addEventListener("click", function () {
  navbar.classList.toggle("fit");
  hamburger.classList.toggle("fit");
  user.classList.toggle("fit");
  h1.classList.toggle("fit");
  img.classList.toggle("fit");
  button.forEach((but) => but.classList.toggle("fit"));
  header.classList.toggle("fit");
  tampilanHome.classList.toggle("fit");

  if (navbar.classList.contains("fit") !== true) {
    setTimeout(() => {
      buttonh1.forEach((but) => but.classList.remove("fit"));
    }, 100);
  } else {
    buttonh1.forEach((but) => but.classList.add("fit"));
  }
});

button.forEach((but, index) =>
  but.addEventListener("click", function () {
    button.forEach((bun) => bun.classList.remove("active"));
    buttonh1.forEach((bun) => bun.classList.remove("active"));
    buttonsvg.forEach((bun) => bun.classList.remove("active"));

    but.classList.add("active");
    buttonh1[index].classList.add("active");
    buttonsvg[index].classList.add("active");

    setTimeout(() => {
      buttonh1[index].classList.remove("active");
    }, 200);
  }),
);

h1.textContent = potion.user;

// fitur header
const saldo = header.querySelector(".saldo span");
saldo.textContent = potion.saldo;

// Fitur search dan saldo (click)
header.addEventListener("click", function (e) {
  const inputSaldo = e.target.closest(".saldo .tambahSaldo");
  const search = header.querySelector(".search input");
  const searchIcon = e.target.closest(".search .searchIcon");

  // Fitur saldo
  if (inputSaldo) {
    potion.tambahSaldo(300);
    saldo.textContent = potion.saldo;
  }

  // Fitur search
  if (searchIcon) {
    search.classList.add("active");
    search.focus();
  }
});

document.addEventListener("click", function (e) {
  // Untuk search dan searchIcon
  const search = header.querySelector(".search input");
  const searchIcon = header.querySelector(".search .searchIcon");

  if (!searchIcon.contains(e.target) && !search.contains(e.target)) {
    search.classList.remove("active");
    search.blur();
  }
});

header.addEventListener("input", function (e) {
  const search = e.target.closest(".search input");

  potion.cariPotion(search.value);
});

// content (info section)
const buttonInfo = document.querySelectorAll(
  "section#Home .inventory .kartu svg",
);

// toggle fungsi
const infoSection = document.querySelector("section#infoSection");
const tampilanPotion = infoSection.querySelector(".tampilanPotion");
const tutupInfoSection = tampilanPotion.querySelector(".tutupTampilanPotion");
const infoPotion = tampilanPotion.querySelector(".infoPotion");
const cardInfo = infoPotion.querySelector(".cardInfo");
const cardTampilInfo = cardInfo.querySelectorAll(".cardTampilanInfo");

const deskripsiInfoPotion = tampilanPotion.querySelector(
  ".infoPotion .deskripsiInfoPotion",
);

tampilanPotion.addEventListener("click", function (e) {
  // fungsi dari closest = memusatkan elemen yg diklik, lalu mencari targetnya sampai ke induk
  const tutupInfoSection = e.target.closest(".tutupTampilanPotion");
  if (tutupInfoSection) {
    setTimeout(() => {
      infoSection.classList.remove("active");
      cardTampilInfo.forEach((info) => info.classList.remove("active"));
      deskripsiInfoPotion.classList.remove("active");
      infoPotion.classList.remove("active");
    }, 60);
  }

  const iconDeskripsiInfoPotion = e.target.closest(".iconDeskripsiInfoPotion");
  if (iconDeskripsiInfoPotion) {
    infoPotion.classList.toggle("active");
    setTimeout(() => {
      cardTampilInfo.forEach((info) => info.classList.toggle("active"));
      deskripsiInfoPotion.classList.toggle("active");
    }, 120);
  }
});

// Infomasi Potion Section Info
const judulPotion = tampilanPotion.querySelector(".judulPotion");
const gambarPotion = tampilanPotion.querySelector(".gambarPotion img");
const stokPotion = cardInfo.querySelector(".stokPotion span");
const hargaPotion = cardInfo.querySelector(".hargaPotion span");
const jenisPotion = cardInfo.querySelector(".jenisPotion span");
const tipePotion = cardInfo.querySelector(".tipePotion span");
const deskripsiPotion = deskripsiInfoPotion.querySelector(".deskripsiPotion");

inventory.addEventListener("click", function (e) {
  const buttonInfo = e.target.closest(".kartu svg");
  if (!buttonInfo) return;
  infoSection.classList.add("active");
  const kartu = buttonInfo.closest(".kartu");
  // ambil berdasarkan dataset dari 'nama' di fungsi sebelumnya
  const listPotion = potion.potionList.find(
    (item) => item.nama === kartu.dataset.nama,
  );
  // Tampilkan informasi potion
  judulPotion.textContent = listPotion.nama;
  gambarPotion.src = listPotion.gambar;
  gambarPotion.alt = listPotion.nama;
  stokPotion.textContent = listPotion.stok;
  hargaPotion.textContent = listPotion.harga;
  jenisPotion.textContent = listPotion.jenis_spell;
  tipePotion.textContent = listPotion.tipe_spell;
  deskripsiPotion.textContent = listPotion.deskripsi;
});

// Pemakaian fitur sortir
const filterPotion = tampilanHome.querySelector("#filterPotion");
let stokPotionInventory;

filterPotion.addEventListener("change", function () {
  potion.fungsiFilter(filterPotion.value);
});

// document.addEventListener("click", function (e) {
//   console.log(e.target);
// });
