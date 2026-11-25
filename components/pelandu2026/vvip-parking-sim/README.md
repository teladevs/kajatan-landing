# Simulasi Panduan Parkir VVIP 3D — komponen Vue 3

Peta isometrik 3D (CSS 3D, tanpa WebGL/library) dari desain *Panduan Kendaraan VVIP*.
Mobil VVIP berjalan di rute asli desain: Gerbang Masuk → putar di samping Parkir Pegawai →
depan Gedung Utama → berhenti di Drop Off Lobby Auditorium → Parkir VVIP.

## Isi

```
src/components/vvip-parking/
  VvipParkingSim.vue   komponen utama (pakai ini)
  VvipBox.vue          kotak 3D (bangunan, mobil)
  mapData.js           semua koordinat, rute, teks langkah, preset kamera
  index.js             ekspor + plugin opsional
src/App.vue            halaman demo (pratinjau Desktop / Mobile)
```

## Pasang di proyek Vue

Syarat: **Vue ≥ 3.5** (memakai `useId`). Tidak ada dependensi lain.

1. Salin folder `src/components/vvip-parking/` ke proyek Anda.
2. Pakai:

```vue
<script setup>
import VvipParkingSim from '@/components/vvip-parking/VvipParkingSim.vue'
</script>

<template>
  <VvipParkingSim
    route-color="#7048e8"
    height="720px"
    event-date="Sabtu, 12 Desember"
    arrival-time="07.30 WIB"
    @step-change="(i) => console.log('langkah', i + 1)"
    @finished="() => console.log('mobil sudah parkir')"
  />
</template>
```

Atau global: `app.use(VvipParkingPlugin)` dari `index.js`, lalu `<VvipParkingSim />` di mana saja.

**Nuxt 3:** bungkus dengan `<ClientOnly>` — rute dihitung dari SVG di browser.

### Props

| Prop | Tipe | Bawaan | Fungsi |
|---|---|---|---|
| `routeColor` | String | `'#7048e8'` | Warna jalur, penanda, atap mobil VVIP |
| `autoplay` | Boolean | `true` | Mulai otomatis (mati jika pengguna memilih *reduced motion*) |
| `speed` | Number | `1` | Kecepatan awal: `0.5`, `1`, `2` |
| `height` | String | `'720px'` | Tinggi tata letak desktop |
| `theme` | String | `'light'` | `'light'` / `'dark'` |
| `title`, `subtitle` | String | teks desain | Judul & ringkasan |
| `eventDate`, `arrivalTime` | String | `''` | Tampil di bawah judul bila diisi |
| `steps` | Array | `null` | Ganti teks 5 langkah: `[{ title, text }, …]` |

### Event & method

- `@step-change(index)` — langkah aktif 0–4
- `@finished` — mobil tiba di Parkir VVIP
- Via `ref`: `play()`, `pause()`, `restart()`, `goToStep(i)`

## Responsif

Tata letak memakai **container query**, bukan media query: komponen menyesuaikan lebar
*wadahnya*. Wadah ≥ 880 px → peta kiri + panel kanan; di bawah itu → judul, peta, kartu langkah,
daftar. Jadi komponen benar di halaman penuh, di kolom sempit, maupun di dalam modal.

Butuh browser dengan container query & `color-mix()` (Chrome/Edge 111+, Safari 16.2+, Firefox 113+).

## Interaksi

- Seret (mouse) memutar & memiringkan; di layar sentuh geser ke samping memutar, cubit untuk zoom
  (gulir vertikal tetap menggulir halaman).
- Scroll roda mouse = zoom. Panah kiri/kanan & `+`/`-` saat peta fokus.
- Klik penanda 1–3, label Parkir VVIP, atau item daftar untuk lompat ke langkah.
- "Titik penting" menerbangkan kamera ke lokasi tersebut.

## Mengubah peta

Semua ada di `mapData.js`:

- `ROUTE_D` — path SVG rute (koordinat SVG). `ANIM_D` = rute + masuk petak parkir.
- `ANCHORS` — titik batas tiap langkah; `DWELL_SECONDS` — lama berhenti di drop off.
- `STEPS` — teks langkah. `CAM_STEPS` — sudut & zoom kamera per langkah.
- `BOXES`, `LABELS`, `TREES`, `MARKERS`, `POIS` — bangunan, label, pohon, penanda, titik penting.
  Koordinat "plane" = koordinat SVG + (267, 255).

## Catatan teknis

- Animasi berjalan di `requestAnimationFrame` dan menulis langsung ke DOM (tidak memicu render
  ulang Vue tiap frame). Loop berhenti saat peta diam atau tidak terlihat di layar.
- Label adalah lapisan 2D yang posisinya diproyeksikan dari titik 3D — selalu tajam dan tidak
  terganggu pengurutan 3D browser.
- Denah ilustratif, tidak berskala (sesuai desain).

## Demo

```
npm install
npm run dev      # pengembangan
npm run build    # dist/index.html mandiri (JS & CSS ter-inline)
```
