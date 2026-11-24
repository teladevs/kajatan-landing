// Data peta diambil dari desain "Panduan Kendaraan VVIP" (VVIP.dc.html).
// Semua koordinat dalam ruang artboard 720 x 1080.
// Peta asli 2380 x 2714 diskalakan seragam (720 / 2380) lalu dipusatkan vertikal.

export const PLANE = { w: 720, h: 1080 };
export const OX = 0;
export const OY = 0;
export const VIEWBOX = "0 0 720 1080";
// Faktor skala dari peta asli 2380 x 2714 ke artboard 720 x 1080.
export const SCALE = 720 / 2380;

// Lempeng tanah kampus (koordinat SVG)
export const TILE = [
  [719.909, 340.003],
  [328.81, 950.521],
  [0.212, 739.997],
  [391.311, 129.509],
];
export const TILE_POINTS = TILE.map((p) => p.join(",")).join(" ");

// Tepi lempeng: cincin bertumpuk (hanya garis tepi, bagian dalam transparan → hemat memori).
// Bidang sejajar tanah, jadi aman untuk pengurutan 3D browser.
export const SLAB_RINGS = [
  { z: -12.706, c: "#7f8c79" },
  { z: -10.891, c: "#aab5a1" },
  { z: -9.076, c: "#b4bfab" },
  { z: -7.261, c: "#aab5a1" },
  { z: -5.445, c: "#b4bfab" },
  { z: -3.63, c: "#aab5a1" },
  { z: -1.815, c: "#b4bfab" },
];

// Rute VVIP persis seperti di desain (koordinat SVG)
export const ROUTE_D =
  "M248.824,825.265L229.16,772.022L217.54,756.191L212.724,755.946L178.037,754.176C178.037,754.176 145.059,751.453 142.484,720.914C139.91,690.374 165.633,681.268 165.633,681.268L194.421,676.379L258.822,675.717L292.538,675.439L301.008,676.134Q306.151,677.345 307.059,686.42";
// Jalur animasi = rute + masuk ke petak parkir (sejajar mobil yang sudah parkir)
export const ANIM_D =
  "M248.824,825.265L229.16,772.022L217.54,756.191L212.724,755.946L178.037,754.176C178.037,754.176 145.059,751.453 142.484,720.914C139.91,690.374 165.633,681.268 165.633,681.268L194.421,676.379L258.822,675.717L292.538,675.439L301.008,676.134Q306.151,677.345 307.059,686.42L307.24,690.655";

// Titik batas langkah (koordinat SVG), dicari panjang terdekatnya saat runtime
export const ANCHORS = {
  a1: [217.54, 756.191], // akhir langkah 1 (selepas gerbang)
  a2: [165.633, 681.268], // akhir langkah 2 (selesai memutar)
  drop: [270.756, 675.65], // titik berhenti di bawah kanopi drop off
};
export const DWELL_SECONDS = 3.2;

export const STEPS = [
  { title: "Gerbang Masuk", text: "Masuk lewat Gerbang Masuk." },
  {
    title: "Putar di samping Parkir Pegawai",
    text: "Ikuti jalan memutar di samping Parkir Pegawai.",
  },
  {
    title: "Depan Gedung Utama",
    text: "Lurus menyusuri depan Gedung Utama menuju Auditorium.",
  },
  {
    title: "Drop Off Lobby Auditorium",
    text: "Berhenti di Drop Off Lobby Auditorium. Tamu turun dan masuk lewat Pintu Lobby.",
    stop: true,
  },
  {
    title: "Parkir VVIP",
    text: "Kendaraan lanjut ke Parkir VVIP di seberang lobby.",
  },
];

// Preset kamera per langkah: rz = putaran, rx = kemiringan, k = zoom relatif terhadap tampilan rute penuh
export const CAM_STEPS = [
  { rz: -22, rx: 54, k: 1.75 },
  { rz: -50, rx: 52, k: 1.7 },
  { rz: -30, rx: 54, k: 1.75 },
  { rz: -12, rx: 46, k: 2.7 },
  { rz: -38, rx: 54, k: 2 },
];
export const CAM_OVERVIEW = { rz: -30, rx: 54, k: 1 };
export const CAM_DONE = { rz: -30, rx: 54, k: 1.6 };
// Kotak rute untuk tampilan menyeluruh (plane)
export const OVERVIEW_BOX = {
  x0: 133.109,
  y0: 661.916,
  x1: 335.798,
  y1: 828.303,
};

export const POIS = [
  {
    id: "drop",
    name: "Drop Off Lobby Auditorium",
    note: "Berkanopi, tepat di depan Pintu Lobby",
    x: 270.756,
    y: 674.017,
    k: 2.6,
    rz: -16,
    rx: 48,
    icon: "drop",
  },
  {
    id: "parkir",
    name: "Parkir VVIP",
    note: "Di seberang Auditorium, bergaris tepi warna jalur",
    x: 287.395,
    y: 699.731,
    k: 2.1,
    rz: -34,
    rx: 54,
    icon: "p",
  },
  {
    id: "timur",
    name: "Pintu Masuk Timur",
    note: "Akses kedua ke Auditorium",
    x: 353.95,
    y: 652.84,
    k: 1.9,
    rz: -40,
    rx: 52,
    icon: "door",
  },
];

// ── Bangunan & benda 3D (plane) ───────────────────────────────
const CAR = {
  white: ["#f8f9fa", "#cbcccd", "#a3a4a5"],
  red: ["#e03131", "#b72828", "#932020"],
  blue: ["#1c7ed6", "#1667af", "#12538d"],
  dark: ["#495057", "#3b4147", "#303439"],
  silver: ["#ced4da", "#a8adb2", "#878b8f"],
};
const car = (x, y, color, vertical = false) =>
  vertical
    ? { x, y, w: 4.84, h: 9.681, d: 3.328, c: CAR[color] }
    : { x, y, w: 10.286, h: 4.84, d: 3.328, c: CAR[color] };
const toilet = (x, y, rot) => ({
  x,
  y,
  w: 4.235,
  h: 4.235,
  d: 4.84,
  c: ["#7fc147", "#689e3a", "#537f2e"],
  rot,
});

export const BOXES = [
  {
    id: "auditorium",
    x: 232.034,
    y: 577.664,
    w: 77.445,
    h: 93.782,
    d: 39.328,
    c: ["#3a4f9f", "#2f4082", "#263468"],
    win: true,
  },
  {
    id: "annex",
    x: 309.479,
    y: 629.697,
    w: 13.008,
    h: 12.706,
    d: 10.891,
    c: ["#3a4f9f", "#2f4082", "#263468"],
  },
  {
    id: "utama",
    x: 86.824,
    y: 640.286,
    w: 124.941,
    h: 31.16,
    d: 24.202,
    c: ["#93d5ec", "#78aec1", "#618c9b"],
    win: true,
  },
  {
    id: "maritim",
    x: 177.277,
    y: 638.773,
    w: 39.933,
    h: 22.992,
    d: 31.462,
    c: ["#1771b7", "#125c96", "#0f4a78"],
    win: true,
  },
  {
    x: 261.681,
    y: 674.924,
    w: 1.815,
    h: 1.815,
    d: 13.311,
    c: ["#dee2e6", "#b6b9bc", "#929597"],
  },
  {
    x: 278.017,
    y: 674.924,
    w: 1.815,
    h: 1.815,
    d: 13.311,
    c: ["#dee2e6", "#b6b9bc", "#929597"],
  },
  {
    id: "canopy",
    x: 259.866,
    y: 670.084,
    w: 21.782,
    h: 7.866,
    d: 1.815,
    z: 13.311,
    c: ["#f8f9fa", "#cbcccd", "#a3a4a5"],
  },
  toilet(317.345, 607.916),
  toilet(317.345, 612.756),
  toilet(317.345, 617.597),
  toilet(317.345, 622.437),
  toilet(322.79, 643.674, -38.62),
  toilet(325.815, 647.455, -38.62),
  toilet(328.84, 651.237, -38.62),
  toilet(331.866, 655.018, -38.62),

  //Car Parking Pegawai
  car(88.336, 691.261, "red", true),
  car(95.899, 693.076, "blue", true),
  car(88.336, 720.908, "dark", true),
  car(95.899, 720.908, "silver", true),
  {
    x: 416.571,
    y: 625.613,
    w: 30.252,
    h: 7.866,
    d: 8.471,
    c: ["#f1f3f5", "#c5c7c8", "#9fa0a1"],
  },
  {
    x: 416.571,
    y: 637.714,
    w: 30.252,
    h: 7.866,
    d: 8.471,
    c: ["#4dabf7", "#3f8cca", "#3270a3"],
  },
  {
    x: 395.395,
    y: 675.529,
    w: 30.252,
    h: 7.866,
    d: 8.471,
    c: ["#f1f3f5", "#c5c7c8", "#9fa0a1"],
  },
  {
    x: 401.445,
    y: 690.655,
    w: 30.252,
    h: 7.866,
    d: 8.471,
    c: ["#4dabf7", "#3f8cca", "#3270a3"],
  },
];

// Bentuk lengkung bertumpuk (Tenda Konsumsi & Gerbang Masuk)
export const EXTRUSIONS = [
  {
    left: 348.504,
    top: 575.697,
    w: 68.067,
    h: 87.731,
    viewBox: "348.504 575.697 68.067 87.731",
    d: "M360.605,590.057c0.072,-0.003 5.86,-0.202 13.841,2.586c9.903,3.46 16.212,9.852 18.752,18.999c2.735,9.851 1.328,18.996 -4.183,27.183c-4.656,6.916 -5.418,5.686 -8.444,8.408l-4.235,2.42l3.025,12.101l2.288,-0.28c3.657,-1.732 11.437,-7.028 17.404,-15.892c7.47,-11.096 9.477,-23.952 5.805,-37.178c-3.651,-13.147 -12.93,-22.597 -26.835,-27.328c-10.056,-3.421 -11.367,-3.423 -20.745,-2.818l3.328,11.798Z",
    layers: [0, 1.21, 2.42, 3.63, 4.84, 6.05, 7.261],
    side: "#cf8614",
    cap: "#fbbd4c",
    height: 8.168,
  },
  {
    left: 203.294,
    top: 747.529,
    w: 37.815,
    h: 27.832,
    viewBox: "203.294 747.529 37.815 27.832",
    d: "M211.899,772.971c-0.012,-0.027 -0.945,-2.156 -1.029,-5.569c-0.105,-4.235 1.473,-7.583 4.688,-9.952c3.463,-2.551 7.261,-3.447 11.289,-2.661c3.403,0.664 3.032,1.14 4.548,1.846l1.576,1.205l4.304,-3.009l-0.448,-0.811c-1.22,-1.096 -4.449,-3.178 -8.81,-4.029c-5.46,-1.065 -10.803,0.183 -15.453,3.608c-4.622,3.405 -6.961,8.338 -6.764,14.264c0.143,4.286 0.335,4.775 1.958,8.183l4.14,-3.075Z",
    layers: [0, 1.21, 2.42, 3.63, 4.84, 6.05, 7.261],
    side: "#1b1745",
    cap: "#4a42a8",
    height: 8.471,
  },
];

export const TREES = [
  [141.277, 554.521],
  [180.605, 533.345],
  [165.479, 587.798],
  [207.832, 563.597],
  [437.748, 720.908],
  [458.924, 696.706],
];

// Label melayang. pri 1 = selalu tampil, pri 2 = disembunyikan saat peta jauh
export const LABELS = [
  {
    kind: "park",
    text: "Parkir Keluarga Wisudawan",
    x: 480.101,
    y: 406.286,
    z: 0,
    stem: 80,
    bg: "#fdcf6b",
    pri: 2,
  },
  {
    kind: "park",
    text: "Parkir Bus",
    x: 431.697,
    y: 654.353,
    z: 0,
    stem: 70,
    bg: "#f6f082",
    pri: 2,
  },
  {
    kind: "park",
    text: "Parkir Pegawai",
    x: 101.95,
    y: 748.134,
    z: 0,
    stem: 90,
    bg: "#a6e3d7",
    pri: 1,
  },
  {
    kind: "pill",
    text: "Auditorium",
    x: 270.756,
    y: 624.403,
    z: 39.328,
    stem: 40,
    dot: "#3a4f9f",
    pri: 1,
  },
  {
    kind: "pill",
    text: "Pintu Masuk Timur",
    x: 328.235,
    y: 608.37,
    z: 10.891,
    stem: 40,
    dot: "#3a4f9f",
    align: "left",
    pri: 1,
  },
  {
    kind: "pill",
    text: "Toilet",
    x: 319.462,
    y: 617.143,
    z: 4.84,
    stem: 100,
    dot: "#7fc147",
    align: "right",
    pri: 2,
  },
  {
    kind: "pill",
    text: "Tenda Konsumsi",
    x: 398.42,
    y: 602.924,
    z: 8.168,
    stem: 60,
    dot: "#f9b237",
    pri: 2,
  },
  {
    kind: "pill",
    text: "Gedung Utama",
    x: 149.294,
    y: 655.714,
    z: 24.202,
    stem: 40,
    dot: "#93d5ec",
    pri: 1,
  },
  {
    kind: "pill",
    text: "Ruang Maritim",
    x: 197.244,
    y: 650.118,
    z: 31.462,
    stem: 70,
    dot: "#1771b7",
    pri: 2,
  },
  {
    kind: "dark",
    text: "Gerbang Masuk",
    x: 221.445,
    y: 763.261,
    z: 8.471,
    stem: 50,
    pri: 1,
  },
  {
    kind: "arrow",
    text: "Arah Parkir Bus 2",
    x: 95.899,
    y: 772.336,
    z: 0,
    stem: 24,
    pri: 2,
  },
];

// Penanda langkah di peta (langkah 4 = stiker di atap Auditorium, langkah 5 = label Parkir VVIP)
export const MARKERS = [
  { step: 0, x: 241.412, y: 805.613, stem: 30 },
  { step: 1, x: 148.84, y: 702.756, stem: 30 },
  { step: 2, x: 216.908, y: 676.134, stem: 30 },
];
export const VVIP_LABEL = { step: 4, x: 286.487, y: 702.756, stem: 50 };
