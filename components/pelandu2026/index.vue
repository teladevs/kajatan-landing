<template>
  <div class="pelandu">
    <audio
      ref="audioElement"
      loop
      preload="auto"
      @play="soundPlay = true"
      @pause="soundPlay = false"
    >
      <source
        src="/wisuda54poltekpelsby/mars-perhubungan.mp3"
        type="audio/mpeg"
      />
    </audio>
    <button
      class="btn-audio"
      :aria-label="soundPlay ? 'Jeda musik' : 'Putar musik'"
      @click="toggleAudio"
    >
      <svg
        v-if="!soundPlay"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="1.8"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
        />
      </svg>
      <svg
        v-else
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="1.8"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    </button>

    <!-- ============ WELCOME ============ -->
    <section
      class="welcome"
      :style="{ backgroundImage: `url(${mainBg})` }"
    >
      <div class="welcome-overlay"></div>
      <div class="welcome-inner">
        <img :src="logoUpper" class="logo-upper" alt="Logo Kementerian Perhubungan" />

        <div class="welcome-card">
          <span class="flag-bar"><i></i><i></i></span>
          <p class="eyebrow">Pelantikan Terpadu</p>
          <h1 class="title">
            Calon ASN Lulusan Program Pola Pembibitan
            <span>Kementerian Perhubungan Ke-5 Tahun 2026</span>
          </h1>

          <div class="event-meta">
            <div class="meta-item">
              <span class="meta-ico">
                <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
              </span>
              <span class="meta-text">
                <small>Tanggal</small>
                <strong>1 Desember 2026</strong>
              </span>
            </div>
            <div class="meta-item">
              <span class="meta-ico">
                <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </span>
              <span class="meta-text">
                <small>Tempat</small>
                <strong>Auditorium STIP Jakarta</strong>
                <em>Jl. Marunda Makmur, Cilincing, Jakarta Utara</em>
              </span>
            </div>
          </div>

          <a href="#rundown" class="btn-scroll">
            Lihat Rundown
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- ============ CONTENT ============ -->
    <div class="page-body" :style="{ backgroundImage: `url(${pageBg})` }">
      <!-- RUNDOWN -->
      <section id="rundown" class="section">
        <header class="section-head">
          <p class="section-kicker">Susunan Acara</p>
          <h2 class="section-title">Rundown</h2>
        </header>

        <div class="rundown-blocks">
          <div
            v-for="(sec, si) in rundownSections"
            :key="si"
            class="rundown-block"
          >
            <div class="rundown-section-head">
              <span class="section-no">{{ si + 1 }}</span>
              <h3 class="rundown-section-title">{{ sec.title }}</h3>
            </div>

            <div class="rundown-grid">
              <article
                v-for="(group, gi) in sec.groups"
                :key="gi"
                class="rundown-card"
              >
                <div class="rundown-head">
                  <div>
                    <h4>{{ group.title }}</h4>
                    <p class="group-date">
                      <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                      </svg>
                      {{ group.date }}
                    </p>
                  </div>
                </div>

                <ul class="timeline">
                  <li v-for="(item, ii) in group.items" :key="ii">
                    <span class="time">{{ item.time }}</span>
                    <div class="activity-body">
                      <span class="dot"></span>
                      <p class="activity">{{ item.title }}</p>
                      <ul v-if="item.details" class="details">
                        <li v-for="(d, di) in item.details" :key="di">{{ d }}</li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>

      <!-- NARASUMBER -->
      <section class="section">
        <header class="section-head">
          <p class="section-kicker">Para Tokoh</p>
          <h2 class="section-title">Narasumber</h2>
        </header>

        <div class="speaker-grid">
          <figure
            v-for="(sp, si) in speakers"
            :key="si"
            class="speaker-card"
          >
            <img :src="sp.img" :alt="sp.name" loading="lazy" />
          </figure>
        </div>
      </section>

      <!-- REKOMENDASI HOTEL -->
      <section class="section">
        <header class="section-head">
          <p class="section-kicker">Akomodasi</p>
          <h2 class="section-title">Rekomendasi Hotel</h2>
        </header>
        <div class="hotel-card">
          <img :src="rekomendasiHotel" alt="Rekomendasi Hotel" loading="lazy" />
        </div>
      </section>

      <!-- LOKASI -->
      <section class="section">
        <header class="section-head">
          <p class="section-kicker">Peta Lokasi</p>
          <h2 class="section-title">Lokasi Acara</h2>
        </header>
        <div class="map-card">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6735.983342920582!2d106.95858419999999!3d-6.103084799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a20f3f6581e23%3A0xb26c6561615fcdf0!2sSekolah%20Tinggi%20Ilmu%20Pelayaran%20Jakarta!5e1!3m2!1sen!2sid!4v1795175947045!5m2!1sen!2sid"
            width="100%"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </section>

      <!-- PANDUAN PARKIR -->
      <section class="section section--wide">
        <header class="section-head">
          <p class="section-kicker">Panduan Kendaraan</p>
          <h2 class="section-title">Parkir VVIP</h2>
        </header>
        <div class="sim-card">
          <ClientOnly>
            <VvipParkingSim
              route-color="#1478c9"
              height="720px"
              title=""
              subtitle=""
              theme="light"
            />
          </ClientOnly>
        </div>
      </section>

      <!-- FOOTER -->
      <footer class="site-footer">
        <img :src="logoUpper" alt="Logo Kementerian Perhubungan" class="footer-logo" />
        <p>
          Pelantikan Terpadu Calon ASN Lulusan Program Pola Pembibitan
          Kementerian Perhubungan Ke-5 Tahun 2026
        </p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import mainBg from "./assets/main-bg.png";
import logoUpper from "./assets/logo-upper.png";
import pageBg from "./assets/page-bg.jpg";
import inspekturUpacara from "./assets/inspektur-upacara.png";
import pembekalanSesi1 from "./assets/pembekalan-sesi-1.png";
import pembekalanSesi2 from "./assets/pembekalan-sesi-2.png";
import pembacaLaporan from "./assets/pembaca laporan.png";
import rekomendasiHotel from "./assets/Rekomendasi Hotel.png";
import VvipParkingSim from "./vvip-parking/VvipParkingSim.vue";

const speakers = [
  { name: "Inspektur Upacara", img: inspekturUpacara },
  { name: "Pembekalan Sesi 1", img: pembekalanSesi1 },
  { name: "Pembekalan Sesi 2", img: pembekalanSesi2 },
  { name: "Pembaca Laporan", img: pembacaLaporan },
];

const rundownSections = [
  {
    title: "Gladi",
    groups: [
      {
        title: "Gladi Pelantikan",
        date: "28 - 29 November 2026",
        items: [
          { time: "08.00 - 12.00 WIB", title: "Gladi Pelantikan" },
          { time: "12.00 - 13.00 WIB", title: "Ishoma" },
          { time: "13.00 - 16.00 WIB", title: "Gladi Pelantikan" },
        ],
      },
    ],
  },
  {
    title: "Acara",
    groups: [
      {
        title: "A. Acara Pelantikan",
        date: "1 Desember 2026",
        items: [
          { time: "07.00 - 08.00 WIB", title: "Registrasi" },
          { time: "08.00 - 08.02 WIB", title: "Persiapan MC" },
          { time: "08.02 - 08.04 WIB", title: "Safety Induction" },
          {
            time: "08.04 - 08.06 WIB",
            title: "Menteri Perhubungan Memasuki Tempat Upacara",
          },
          { time: "08.06 - 08.10 WIB", title: "Lagu Indonesia Raya" },
          { time: "08.10 - 08.13 WIB", title: "Hymne Perhubungan" },
          {
            time: "08.13 - 08.18 WIB",
            title: "Pembacaan Laporan Pelantikan",
          },
          {
            time: "08.18 - 08.21 WIB",
            title: "Pembacaan SK/PERTEK Pelantikan",
          },
          { time: "08.21 - 08.25 WIB", title: "Pernyataan Pelantikan" },
          {
            time: "08.25 - 08.35 WIB",
            title: "Prosesi Pelantikan",
            details: [
              "Penyerahan PERTEK CPNS Secara Simbolis oleh Bapak Menteri Perhubungan kepada Lulusan Terbaik",
              "Penyerahan Lulusan Pola Pembibitan oleh Bapak Menteri Perhubungan kepada Unit Eselon I",
            ],
          },
          {
            time: "08.35 - 08.38 WIB",
            title: "Pembacaan Ikrar ASN oleh Perwakilan",
          },
          {
            time: "08.38 - 09.23 WIB",
            title: "Sambutan oleh Menteri Perhubungan",
          },
          { time: "09.23 - 09.26 WIB", title: "Mars Perhubungan" },
          { time: "09.26 - 09.30 WIB", title: "Pembacaan Doa" },
          {
            time: "09.30 - 09.33 WIB",
            title: "Menteri Perhubungan Meninggalkan Tempat Pelantikan",
          },
          {
            time: "09.33 - 09.35 WIB",
            title:
              "Pelantikan Selesai, Dilanjutkan Persiapan Acara Pembekalan (Peserta Pelantikan Menyesuaikan)",
          },
        ],
      },
      {
        title: "B. Acara Pembekalan",
        date: "1 Desember 2026",
        items: [
          { time: "09.55 - 09.57 WIB", title: "Pembukaan MC" },
          {
            time: "09.57 - 10.00 WIB",
            title: "Pemutaran Video Perjalanan Pola Pembibitan",
          },
          {
            time: "10.00 - 10.30 WIB",
            title:
              'Pembekalan Sesi 1 oleh Menteri Pendayagunaan Aparatur Negara dan Reformasi Birokrasi "Mewujudkan New Era ASN Digital Kementerian Perhubungan yang Profesional, Tangguh dan Melayani"',
            details: ["Dilanjutkan pemberian Plakat kepada Menpan RB"],
          },
          {
            time: "10.30 - 11.00 WIB",
            title:
              'Pembekalan Sesi 2 oleh Kepala Badan Kepegawaian Negara "Adaptasi birokrasi ASN dalam menghadapi kehadiran dan tantangan generasi muda Kementerian Perhubungan melalui manajemen talenta dan penguatan karakter"',
            details: ["Dilanjutkan pemberian Plakat kepada Kepala BKN"],
          },
          { time: "11.00 - 11.15 WIB", title: "Games Interactive & Doorprize" },
          { time: "11.15 - 11.30 WIB", title: "Perform Brass Band PTDI-STTD" },
          { time: "11.30 WIB", title: "Penutupan" },
        ],
      },
    ],
  },
];

const soundPlay = ref(false);
const audioElement = ref(null);

const toggleAudio = () => {
  if (!audioElement.value) return;
  if (soundPlay.value) {
    audioElement.value.pause();
  } else {
    audioElement.value.play().catch(() => {});
  }
};

const tryAutoplay = () => {
  if (!audioElement.value) return;
  audioElement.value.play().catch(() => {});
};

const removeInteractionListeners = () => {
  window.removeEventListener("click", startOnInteraction);
  window.removeEventListener("touchstart", startOnInteraction);
  window.removeEventListener("keydown", startOnInteraction);
};

const startOnInteraction = (event) => {
  if (event?.target?.closest && event.target.closest(".btn-audio")) return;
  if (!audioElement.value) return;
  audioElement.value
    .play()
    .then(() => removeInteractionListeners())
    .catch(() => {});
};

onMounted(() => {
  tryAutoplay();
  window.addEventListener("click", startOnInteraction);
  window.addEventListener("touchstart", startOnInteraction);
  window.addEventListener("keydown", startOnInteraction);
});

onBeforeUnmount(removeInteractionListeners);

useSeoMeta({
  title:
    "Pelantikan Terpadu Calon ASN Kementerian Perhubungan Ke-5 Tahun 2026",
  description:
    "Pelantikan Terpadu Calon ASN Lulusan Program Pola Pembibitan Kementerian Perhubungan Ke-5 Tahun 2026 - Auditorium STIP Jakarta.",
  ogImage: mainBg,
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;1,700&display=swap");

.pelandu {
  font-family: "Montserrat", ui-sans-serif, system-ui, sans-serif;
  color: #0f2a47;
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
}

/* ============ WELCOME ============ */
.welcome {
  position: relative;
  min-height: 100svh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px 56px;
  overflow: hidden;
}
.welcome-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 45, 98, 0.15) 0%,
    rgba(0, 45, 98, 0.05) 40%,
    rgba(0, 30, 66, 0.35) 100%
  );
}
.welcome-inner {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 860px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
  text-align: center;
}
.logo-upper {
  width: min(680px, 88%);
  height: auto;
  filter: drop-shadow(0 6px 16px rgba(0, 0, 0, 0.25));
}
.btn-audio {
  position: fixed;
  top: 18px;
  right: 18px;
  z-index: 10000;
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  color: #fff;
  background: rgba(0, 58, 112, 0.78);
  backdrop-filter: blur(6px);
  box-shadow: 0 8px 22px rgba(0, 30, 66, 0.35);
  transition: transform 0.2s ease, background 0.2s ease;
}
.btn-audio:hover {
  transform: scale(1.06);
  background: #0b5fa5;
}
.btn-audio svg {
  width: 24px;
  height: 24px;
}
.welcome-card {
  width: 100%;
  background: rgba(255, 255, 255, 0.93);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 22px;
  padding: clamp(24px, 4vw, 46px) clamp(20px, 4vw, 52px);
  box-shadow: 0 24px 60px rgba(0, 40, 90, 0.28);
}
.flag-bar {
  display: inline-flex;
  overflow: hidden;
  border-radius: 3px;
  margin-bottom: 14px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}
.flag-bar i {
  display: block;
  width: 34px;
  height: 7px;
}
.flag-bar i:first-child {
  background: #d81f26;
}
.flag-bar i:last-child {
  background: #ffffff;
  border: 1px solid #e2e2e2;
}
.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.28em;
  font-size: clamp(0.68rem, 1.6vw, 0.82rem);
  font-weight: 700;
  color: #0b5fa5;
  margin: 0 0 12px;
}
.title {
  font-size: clamp(1.15rem, 3vw, 1.75rem);
  line-height: 1.35;
  font-weight: 800;
  letter-spacing: 0.01em;
  color: #003a70;
  text-transform: uppercase;
  margin: 0;
}
.title span {
  display: block;
  margin-top: 4px;
  color: #0b5fa5;
}
.event-meta {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
  margin: 26px 0 28px;
}
.meta-item {
  display: flex;
  align-items: center;
  gap: 12px;
  text-align: left;
  background: #f2f8ff;
  border: 1px solid #d6e8fb;
  border-radius: 14px;
  padding: 12px 18px;
  flex: 1 1 260px;
  max-width: 340px;
}
.meta-ico {
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0b5fa5, #2e8fe0);
  color: #fff;
}
.meta-ico svg {
  width: 22px;
  height: 22px;
}
.meta-text {
  display: flex;
  flex-direction: column;
  line-height: 1.3;
}
.meta-text small {
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.64rem;
  font-weight: 700;
  color: #5b86b5;
}
.meta-text strong {
  font-size: 0.98rem;
  font-weight: 700;
  color: #003a70;
}
.meta-text em {
  font-style: normal;
  font-size: 0.78rem;
  color: #5a7690;
  margin-top: 2px;
}
.btn-scroll {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  background: linear-gradient(135deg, #0b5fa5, #1478c9);
  color: #fff;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-decoration: none;
  padding: 13px 32px;
  border-radius: 999px;
  box-shadow: 0 10px 24px rgba(11, 95, 165, 0.35);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.btn-scroll:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 30px rgba(11, 95, 165, 0.45);
}
.btn-scroll svg {
  width: 18px;
  height: 18px;
  animation: bob 1.6s ease-in-out infinite;
}
@keyframes bob {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(3px);
  }
}

/* ============ PAGE BODY ============ */
.page-body {
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-color: #eaf3fc;
  padding: 70px 18px 0;
}
.section {
  max-width: 1040px;
  margin: 0 auto 76px;
}
.section-head {
  text-align: center;
  margin-bottom: 34px;
}
.section-kicker {
  text-transform: uppercase;
  letter-spacing: 0.24em;
  font-size: 0.72rem;
  font-weight: 700;
  color: #1478c9;
  margin: 0 0 6px;
}
.section-title {
  display: inline-block;
  position: relative;
  font-size: clamp(1.5rem, 3.4vw, 2.15rem);
  font-weight: 800;
  color: #003a70;
  margin: 0;
  padding-bottom: 12px;
}
.section-title::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 64px;
  height: 4px;
  border-radius: 4px;
  background: linear-gradient(90deg, #f5c518, #1478c9);
}

/* ============ RUNDOWN ============ */
.rundown-blocks {
  display: flex;
  flex-direction: column;
  gap: 44px;
}
.rundown-section-head {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 22px;
}
.section-no {
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 14px;
  background: linear-gradient(135deg, #003a70, #1478c9);
  color: #fff;
  font-weight: 800;
  font-size: 1.15rem;
  box-shadow: 0 8px 20px rgba(0, 58, 112, 0.25);
}
.rundown-section-title {
  font-size: clamp(1.25rem, 3vw, 1.7rem);
  font-weight: 800;
  color: #003a70;
  margin: 0;
}
.rundown-grid {
  display: grid;
  gap: 28px;
}
.rundown-card {
  background: #ffffff;
  border-radius: 20px;
  padding: clamp(22px, 3.5vw, 40px);
  box-shadow: 0 16px 40px rgba(0, 58, 112, 0.12);
  border: 1px solid rgba(20, 120, 201, 0.1);
}
.rundown-head {
  display: flex;
  align-items: center;
  gap: 16px;
  padding-bottom: 18px;
  margin-bottom: 22px;
  border-bottom: 2px dashed #d6e8fb;
}
.rundown-head h4 {
  font-size: clamp(1.1rem, 2.6vw, 1.4rem);
  font-weight: 800;
  color: #003a70;
  margin: 0;
}
.group-date {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin: 4px 0 0;
  font-size: 0.82rem;
  font-weight: 600;
  color: #1478c9;
}
.group-date svg {
  width: 15px;
  height: 15px;
}
.timeline {
  list-style: none;
  margin: 0;
  padding: 0;
}
.timeline > li {
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 14px;
  padding: 12px 0;
  border-bottom: 1px solid #eef4fb;
}
.timeline > li:last-child {
  border-bottom: none;
}
.time {
  font-weight: 700;
  font-size: 0.85rem;
  color: #0b5fa5;
  background: #eaf4ff;
  border-radius: 8px;
  padding: 5px 10px;
  height: fit-content;
  text-align: center;
}
.activity-body {
  position: relative;
  padding-left: 18px;
}
.dot {
  position: absolute;
  left: 0;
  top: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #f5c518;
  box-shadow: 0 0 0 3px rgba(245, 197, 24, 0.25);
}
.activity {
  margin: 0;
  font-size: 0.92rem;
  line-height: 1.5;
  font-weight: 500;
  color: #24425f;
}
.details {
  margin: 8px 0 0;
  padding-left: 18px;
  list-style: disc;
}
.details li {
  font-size: 0.84rem;
  line-height: 1.5;
  color: #5a7690;
  margin-bottom: 4px;
}

/* ============ SPEAKERS ============ */
.speaker-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(16px, 2.5vw, 28px);
}
.speaker-card {
  margin: 0;
  aspect-ratio: 4 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 14px 34px rgba(0, 58, 112, 0.14);
  border: 1px solid rgba(20, 120, 201, 0.1);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.speaker-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 44px rgba(0, 58, 112, 0.2);
}
.speaker-card img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}

/* ============ HOTEL ============ */
.hotel-card {
  background: #ffffff;
  border-radius: 20px;
  padding: clamp(14px, 2.5vw, 28px);
  box-shadow: 0 16px 40px rgba(0, 58, 112, 0.12);
  overflow-x: auto;
}
.hotel-card img {
  display: block;
  width: 100%;
  min-width: 640px;
  height: auto;
}

/* ============ MAP ============ */
.map-card {
  background: #ffffff;
  border-radius: 20px;
  padding: 10px;
  box-shadow: 0 16px 40px rgba(0, 58, 112, 0.12);
  overflow: hidden;
}
.map-card iframe {
  display: block;
  width: 100%;
  border-radius: 14px;
}

/* ============ PANDUAN PARKIR ============ */
.section--wide {
  max-width: 1280px;
}
.sim-card {
  background: #e0ecf9;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 16px 40px rgba(0, 58, 112, 0.12);
  border: 1px solid rgba(20, 120, 201, 0.1);
}

/* ============ FOOTER ============ */
.site-footer {
  max-width: 1040px;
  margin: 0 auto;
  padding: 48px 20px 56px;
  text-align: center;
  border-top: 1px solid rgba(0, 58, 112, 0.12);
}
.footer-logo {
  display: block;
  width: min(520px, 80%);
  height: auto;
  margin: 0 auto 16px;
  opacity: 0.95;
}
.site-footer p {
  max-width: 640px;
  margin: 0 auto;
  font-size: 0.82rem;
  line-height: 1.6;
  font-weight: 600;
  color: #44688c;
}

/* ============ RESPONSIVE ============ */
/* background-attachment: fixed + konten beranimasi menyebabkan layar berkedip di mobile. */
@media (max-width: 1024px) {
  .page-body {
    background-attachment: scroll;
  }
}
@media (max-width: 768px) {
  .page-body {
    padding-top: 54px;
  }
  .timeline > li {
    grid-template-columns: 1fr;
    gap: 8px;
  }
  .time {
    display: inline-block;
    width: fit-content;
  }
  .activity-body {
    padding-left: 16px;
  }
  .dot {
    top: 7px;
  }
}
@media (max-width: 560px) {
  .welcome {
    padding: 28px 14px 40px;
  }
  .logo-upper {
    width: 94%;
  }
  .speaker-grid {
    grid-template-columns: 1fr;
  }
  .section {
    margin-bottom: 56px;
  }
  .meta-item {
    flex: 1 1 100%;
    max-width: none;
  }
}
</style>
