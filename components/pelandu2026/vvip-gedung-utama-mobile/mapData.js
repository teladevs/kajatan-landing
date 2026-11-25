// Data peta diambil dari desain "Panduan Kendaraan VVIP" (VVIP.dc.html).
// Koordinat SVG = koordinat desain asli (rute, tile, ANCHORS); ke plane lewat (svg + OX/OY) * SCALE.
// Koordinat "plane" = piksel bidang peta 710 x 1080; data bangunan/label/titik di bawah sudah diskalakan.

export const SCALE = 710 / 2380; // desain 2380 px → lebar 710 px (skala seragam)
export const PLANE = { w: 710, h: 1080 };
export const OX = 267;
export const OY = 255;
// viewBox SVG memuat seluruh desain; tinggi diperpanjang ke bawah agar sesuai 710 x 1080
export const VIEWBOX = `-267 -255 2380 ${PLANE.h / SCALE}`;

// Lempeng tanah kampus (koordinat SVG)
export const TILE = [
  [2112.7, 440.9],
  [819.9, 2459.0],
  [-266.3, 1763.1],
  [1026.5, -254.9],
];
export const TILE_POINTS = TILE.map((p) => p.join(",")).join(" ");

// Tepi lempeng: cincin bertumpuk (hanya garis tepi, bagian dalam transparan → hemat memori).
// Bidang sejajar tanah, jadi aman untuk pengurutan 3D browser.
export const SLAB_RINGS = [
  { z: -42, c: "#7f8c79" },
  { z: -36, c: "#aab5a1" },
  { z: -30, c: "#b4bfab" },
  { z: -24, c: "#aab5a1" },
  { z: -18, c: "#b4bfab" },
  { z: -12, c: "#aab5a1" },
  { z: -6, c: "#b4bfab" },
];

// Rute VVIP persis seperti di desain (koordinat SVG)
export const ROUTE_D =
  "M555.5,2044.96 L490.5,1868.96 L452.09,1816.63 L436.17,1815.82 L321.51,1809.97 C321.51,1809.97 212.5,1800.97 203.99,1700.02 C195.48,1599.07 280.51,1568.97 280.51,1568.97 L375.67,1552.81 L588.55,1550.62 L700,1549.7 L728,1552 Q745,1556 748,1586";
// Jalur animasi = rute + masuk ke petak parkir (sejajar mobil yang sudah parkir)
export const ANIM_D = ROUTE_D + " L748.6,1600";

// Titik batas langkah (koordinat SVG), dicari panjang terdekatnya saat runtime
export const ANCHORS = {
  a1: [452.09, 1816.63], // akhir langkah 1 (selepas gerbang)
  a2: [280.51, 1568.97], // akhir langkah 2 (selesai memutar)
  drop: [400, 1552.5], // titik berhenti di bawah kanopi drop off (depan Gedung Utama)
};
export const DWELL_SECONDS = 3.2;

export const STEPS = [
  { title: "Gerbang Masuk", text: "Masuk lewat Gerbang Masuk." },
  {
    title: "Putar di samping Parkir Pegawai",
    text: "Ikuti jalan memutar di samping Parkir Pegawai.",
  },
  {
    title: "Drop Off Gedung Utama",
    text: "Berhenti di Drop Off Gedung Utama. Tamu turun dan masuk lewat pintu Gedung Utama.",
    stop: true,
  },
  { title: "Parkir VVIP", text: "Kendaraan lanjut ke Parkir VVIP." },
];

// Preset kamera per langkah: rz = putaran, rx = kemiringan, k = zoom relatif terhadap tampilan rute penuh
export const CAM_STEPS = [
  { rz: -22, rx: 54, k: 1.75 },
  { rz: -50, rx: 52, k: 1.7 },
  { rz: -12, rx: 46, k: 2.7 },
  { rz: -38, rx: 54, k: 2.0 },
];
export const CAM_OVERVIEW = { rz: -30, rx: 54, k: 1 };
export const CAM_DONE = { rz: -30, rx: 54, k: 1.6 };
// Kotak rute untuk tampilan menyeluruh (plane)
const RAW_OVERVIEW_BOX = { x0: 440, y0: 1760, x1: 1110, y1: 2310 };

const RAW_POIS = [
  {
    id: "drop",
    name: "Drop Off Gedung Utama",
    note: "Berkanopi, tepat di depan pintu Gedung Utama",
    x: 667,
    y: 1800,
    k: 2.6,
    rz: -16,
    rx: 48,
    icon: "drop",
  },
  {
    id: "parkir",
    name: "Parkir VVIP",
    note: "Di seberang Auditorium, bergaris tepi warna jalur",
    x: 950,
    y: 1885,
    k: 2.1,
    rz: -34,
    rx: 54,
    icon: "p",
  },
  {
    id: "timur",
    name: "Pintu Masuk Timur",
    note: "Akses kedua ke Auditorium",
    x: 1170,
    y: 1730,
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
    ? { x, y, w: 16, h: 32, d: 11, c: CAR[color] }
    : { x, y, w: 34, h: 16, d: 11, c: CAR[color] };
const toilet = (x, y, rot) => ({
  x,
  y,
  w: 14,
  h: 14,
  d: 16,
  c: ["#7fc147", "#689e3a", "#537f2e"],
  rot,
});

const RAW_BOXES = [
  {
    id: "sport",
    x: 833,
    y: 793.5,
    w: 393,
    h: 306,
    d: 110,
    c: ["#c9a3c0", "#a4859d", "#846b7e"],
    win: true,
  },
  {
    id: "klinik",
    x: 782,
    y: 1212.5,
    w: 131,
    h: 270,
    d: 70,
    c: ["#00a99d", "#008a80", "#006f67"],
    win: true,
  },
  {
    id: "auditorium",
    x: 767,
    y: 1481.5,
    w: 256,
    h: 310,
    d: 130,
    c: ["#3a4f9f", "#2f4082", "#263468"],
    win: true,
  },
  {
    id: "annex",
    x: 1023,
    y: 1653.5,
    w: 43,
    h: 42,
    d: 36,
    c: ["#3a4f9f", "#2f4082", "#263468"],
  },
  {
    id: "utama",
    x: 287,
    y: 1688.5,
    w: 413,
    h: 103,
    d: 80,
    c: ["#93d5ec", "#78aec1", "#618c9b"],
    win: true,
  },
  {
    id: "maritim",
    x: 586,
    y: 1683.5,
    w: 132,
    h: 76,
    d: 104,
    c: ["#1771b7", "#125c96", "#0f4a78"],
    win: true,
  },
  // Kanopi drop off
  { x: 637, y: 1803, w: 6, h: 6, d: 44, c: ["#dee2e6", "#b6b9bc", "#929597"] },
  { x: 691, y: 1803, w: 6, h: 6, d: 44, c: ["#dee2e6", "#b6b9bc", "#929597"] },
  {
    id: "canopy",
    x: 631,
    y: 1787,
    w: 72,
    h: 26,
    d: 6,
    z: 44,
    c: ["#f8f9fa", "#cbcccd", "#a3a4a5"],
  },
  // Toilet
  toilet(1049, 1581.5),
  toilet(1049, 1597.5),
  toilet(1049, 1613.5),
  toilet(1049, 1629.5),
  toilet(1067, 1699.7, -38.62),
  toilet(1077, 1712.2, -38.62),
  toilet(1087, 1724.7, -38.62),
  toilet(1097, 1737.2, -38.62),
  // Parkir Keluarga Wisudawan
  car(1386, 695, "white"),
  car(1386, 735, "red"),
  car(1386, 815, "blue"),
  car(1386, 895, "dark"),
  car(1386, 935, "silver"),
  car(1386, 1015, "white"),
  car(1753, 685, "red"),
  car(1753, 765, "blue"),
  car(1753, 805, "dark"),
  car(1753, 885, "silver"),
  car(1753, 965, "white"),
  car(1753, 1045, "red"),
  car(1753, 1125, "blue"),
  // Parkir VVIP (mobil yang sudah parkir)
  car(807, 1845, "dark", true),
  car(847, 1847, "silver", true),
  car(1087, 1859, "white", true),
  // Parkir Pegawai
  car(292, 1857, "red", true),
  car(317, 1863, "blue", true),
  car(292, 1955, "dark", true),
  car(317, 1955, "silver", true),
  // Bus
  {
    x: 1377,
    y: 1640,
    w: 100,
    h: 26,
    d: 28,
    c: ["#f1f3f5", "#c5c7c8", "#9fa0a1"],
  },
  {
    x: 1377,
    y: 1680,
    w: 100,
    h: 26,
    d: 28,
    c: ["#4dabf7", "#3f8cca", "#3270a3"],
  },
  {
    x: 1307,
    y: 1805,
    w: 100,
    h: 26,
    d: 28,
    c: ["#f1f3f5", "#c5c7c8", "#9fa0a1"],
  },
  {
    x: 1327,
    y: 1855,
    w: 100,
    h: 26,
    d: 28,
    c: ["#4dabf7", "#3f8cca", "#3270a3"],
  },
];

// Bentuk lengkung bertumpuk (Tenda Konsumsi & Gerbang Masuk)
const RAW_EXTRUSIONS = [
  {
    left: 1152,
    top: 1475,
    w: 225,
    h: 290,
    viewBox: "885 1220 225 290",
    d: "M925,1267.4646c.2393-.0088,19.3691-.668,45.7524,8.5498,32.7354,11.4385,53.5903,32.5674,61.9854,62.8018,9.042,32.5625,4.3901,62.7939-13.8271,89.8545-15.3901,22.8604-17.9106,18.7939-27.9106,27.7939l-14,8,10,40,7.5615-.9248c12.0874-5.7256,37.8062-23.2324,57.5303-52.5312,24.6929-36.6787,31.3281-79.1758,19.188-122.8955-12.0679-43.459-42.7417-74.6953-88.7056-90.333-33.2397-11.3086-37.5742-11.3154-68.5742-9.3154l11,39Z",
    layers: [0, 4, 8, 12, 16, 20, 24],
    side: "#cf8614",
    cap: "#fbbd4c",
    height: 27,
  },
  {
    left: 672,
    top: 2043,
    w: 125,
    h: 92,
    viewBox: "405 1788 125 92",
    d: "M433.4441,1872.0997c-.0388-.088-3.1237-7.1274-3.4027-18.4092-.3456-13.9982,4.868-25.0664,15.497-32.8972,11.4473-8.4341,24.0026-11.3936,37.317-8.7961,11.2479,2.1945,10.0239,3.7672,15.0344,6.1024l5.2088,3.984,14.2255-9.9471-1.4801-2.6793c-4.0334-3.6232-14.7056-10.5054-29.1213-13.3178-18.047-3.5209-35.7103.6035-51.08,11.9275-15.278,11.2565-23.0089,27.5605-22.3575,47.1497.4711,14.1663,1.1088,15.7856,6.4736,27.0484l13.6852-10.1651Z",
    layers: [0, 4, 8, 12, 16, 20, 24],
    side: "#1b1745",
    cap: "#4a42a8",
    height: 28,
  },
];

const RAW_TREES = [
  [1472, 675],
  [1702, 675],
  [1472, 815],
  [1702, 815],
  [1472, 1055],
  [1702, 1055],
  [1472, 1195],
  [1702, 1195],
  [1587, 1265],
  [1587, 585],
  [467, 1405],
  [597, 1335],
  [547, 1515],
  [687, 1435],
  [967, 705],
  [1117, 685],
  [1267, 735],
  [1447, 1955],
  [1517, 1875],
];

// Label melayang. pri 1 = selalu tampil, pri 2 = disembunyikan saat peta jauh
const RAW_LABELS = [
  {
    kind: "park",
    text: "Parkir Keluarga Wisudawan",
    x: 1587,
    y: 915,
    z: 0,
    stem: 80,
    bg: "#fdcf6b",
    pri: 2,
  },
  {
    kind: "park",
    text: "Parkir Bus",
    x: 1427,
    y: 1735,
    z: 0,
    stem: 70,
    bg: "#f6f082",
    pri: 2,
  },
  {
    kind: "park",
    text: "Parkir Pegawai",
    x: 337,
    y: 2045,
    z: 0,
    stem: 90,
    bg: "#a6e3d7",
    pri: 1,
  },
  {
    kind: "pill",
    text: "Sport Hall",
    x: 1029.5,
    y: 946,
    z: 110,
    stem: 40,
    dot: "#c9a3c0",
    pri: 2,
  },
  {
    kind: "pill",
    text: "Klinik",
    x: 847.5,
    y: 1347,
    z: 70,
    stem: 40,
    dot: "#00a99d",
    pri: 2,
  },
  {
    kind: "pill",
    text: "Auditorium",
    x: 895,
    y: 1636,
    z: 130,
    stem: 40,
    dot: "#3a4f9f",
    pri: 1,
  },
  {
    kind: "pill",
    text: "Pintu Masuk Timur",
    x: 1085,
    y: 1583,
    z: 36,
    stem: 40,
    dot: "#3a4f9f",
    align: "left",
    pri: 1,
  },
  {
    kind: "pill",
    text: "Toilet",
    x: 1056,
    y: 1612,
    z: 16,
    stem: 100,
    dot: "#7fc147",
    align: "right",
    pri: 2,
  },
  {
    kind: "pill",
    text: "Tenda Konsumsi",
    x: 1317,
    y: 1565,
    z: 27,
    stem: 60,
    dot: "#f9b237",
    pri: 2,
  },
  {
    kind: "pill",
    text: "Gedung Utama",
    x: 323.5,
    y: 17.5,
    z: 80,
    stem: 40,
    dot: "#93d5ec",
    pri: 1,
  },
  {
    kind: "pill",
    text: "Ruang Maritim",
    x: 652,
    y: 1721,
    z: 104,
    stem: 70,
    dot: "#1771b7",
    pri: 2,
  },
  {
    kind: "dark",
    text: "Gerbang Masuk",
    x: 732,
    y: 2095,
    z: 28,
    stem: 50,
    pri: 1,
  },
  {
    kind: "arrow",
    text: "Arah Parkir Bus 2",
    x: 317,
    y: 2125,
    z: 0,
    stem: 24,
    pri: 2,
  },
];

// Penanda langkah di peta (langkah 4 = stiker di atap Auditorium, langkah 5 = label Parkir VVIP)
const RAW_MARKERS = [
  { step: 0, x: 798, y: 2235, stem: 30 },
  { step: 1, x: 492, y: 1895, stem: 30 },
  { step: 2, x: 667, y: 1835, stem: 30 },
];
const RAW_VVIP_LABEL = { step: 3, x: 947, y: 1895, stem: 50 };


// ── Skala ke resolusi baru (710 x 1080) ───────────────────────
// Posisi & ukuran 3D diskalakan; "stem" (tinggi tangkai label di layar) dan zoom k tidak.
const f = (v) => +(v * SCALE).toFixed(3);
export const OVERVIEW_BOX = {
  x0: f(RAW_OVERVIEW_BOX.x0),
  y0: f(RAW_OVERVIEW_BOX.y0),
  x1: f(RAW_OVERVIEW_BOX.x1),
  y1: f(RAW_OVERVIEW_BOX.y1),
};
export const POIS = RAW_POIS.map((o) => ({ ...o, x: f(o.x), y: f(o.y) }));
export const BOXES = RAW_BOXES.map((b) => ({
  ...b,
  x: f(b.x),
  y: f(b.y),
  w: f(b.w),
  h: f(b.h),
  d: f(b.d),
  ...(b.z ? { z: f(b.z) } : {}),
}));
export const EXTRUSIONS = RAW_EXTRUSIONS.map((e) => ({
  ...e,
  left: f(e.left),
  top: f(e.top),
  w: f(e.w),
  h: f(e.h),
  layers: e.layers.map(f),
  height: f(e.height),
}));
export const TREES = RAW_TREES.map(([x, y]) => [f(x), f(y)]);
export const LABELS = RAW_LABELS.map((l) => ({ ...l, x: f(l.x), y: f(l.y), z: f(l.z) }));
export const MARKERS = RAW_MARKERS.map((m) => ({ ...m, x: f(m.x), y: f(m.y) }));
export const VVIP_LABEL = { ...RAW_VVIP_LABEL, x: f(RAW_VVIP_LABEL.x), y: f(RAW_VVIP_LABEL.y) };
