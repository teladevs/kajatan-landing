<template>
  <div class="container">
    <audio ref="audioElement">
      <source src="/wisuda51poltekpelsby/mars-perhubungan.mp3" type="audio/mpeg" />
    </audio>
    <a
      class="btn-play btn-audio"
      @click="playAudio()"
      id="btn-play"
      v-if="soundPlay == false"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
        />
      </svg>
    </a>
    <a
      class="btn-pause btn-audio"
      @click="pauseAudio()"
      id="btn-pause"
      v-if="soundPlay == true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    </a>

    <div class="page-welcome">
      <div class="section-layout-welcome text-center">
        <div class="grid grid-cols-1 gap-5">
          <div class="flex flex-col justify-center items-center">
            <img
              :src="bpsdmWebp"
              alt="poltekpelxperhubungan"
              class="img-fluid img-top-perhubungan"
            />
          </div>
          <div class="flex flex-col justify-center items-center">
            <img
              :src="proprestasiWebp"
              alt="poltekpelxperhubungan"
              class="img-fluid img-top-welcome"
            />
            <img
              :src="goldgenerationWebp"
              alt="poltekpelxperhubungan"
              class="img-fluid img-top-welcome"
            />
          </div>
        </div>
      </div>
      <!-- <img src="wisuda50poltekpelsby_backdrop_invitation.webp" alt="banner-wisuda" class="img-fluid image-welcome"> -->
      <div class="text-center text-top-welcome mt-10">
        <div class="mb-4 text-headline">WISUDA KE-51 & PELEPASAN</div>
        <div class="mb-4 text-headline-2">
          PERWIRA TRANSPORTASI LAUT POLITEKNIK PELAYARAN SURABAYA TAHUN 2024
        </div>
        <div class="text-headline-3">
          "Sustainable Transportation Technology For Advanced Maritime"
        </div>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
          v-if="buttonInvitation"
          @click="openInvitation()"
        >
          Buka Undangan
        </button>
        <div class="section-bottom-welcome">
          <div class="text-date">Surabaya, 19 September 2024</div>
          <div class="text-headline-4">"Together To Give The Best"</div>
          <img
            :src="rightYellow"
            alt="right-yellow"
            class="right-yellow fade-in-element"
          />
          <img :src="rightBlue" alt="right-blue" class="right-blue fade-in-element" />
          <img :src="leftYellow" alt="right-blue" class="left-yellow fade-in-element" />
          <img :src="leftBlue" alt="right-blue" class="left-blue fade-in-element" />
        </div>
      </div>
    </div>
    <div class="container-fluid d-none" id="content-page" v-if="showContent">
      <div class="page">
        <div class="col-md-12">
          <div class="section-rundown" ref="sectionRundown">
            <h2 class="text-center w-100" id="rundown-acara">Rundown Acara</h2>
            <div>1. Acara Persiapan</div>
            <div class="ms-3">a. MC</div>
            <div class="ms-3">b. Petugas Upacara</div>
            <div class="ms-3">c. Jajar Kehormatan</div>
            <div class="ms-3">
              d. Seluruh pasukan mempersiapan diri di daerah persiapan
            </div>
            <div class="ms-3">
              e. Seluruh tamu undangan keluarga berada di tenda undangan
            </div>
            <div class="ms-3">
              f. Instrumen bunyi sangkakala pertama, seluruh peserta upacara siap di
              daerah persiapan
            </div>
            <div class="ms-3">g. Seluruh petugas upacara memasuki lapangan upacara</div>
            <div class="ms-3">h. Pembukaan MC</div>
            <div class="ms-3">
              i. Sangkakala kedua, peserta upacara memasuki lapangan upacara diiring
              korsik
            </div>
            <div class="ms-3">
              j. Seluruh undangan VIP dan Undangan VVIP telah mengambil tempat yang telah
              ditentukan
            </div>
            <div class="ms-3">k. Pemberitahuan tanda upacara dimulai</div>
            <div class="ms-3">l. Komandan Upacara memasuki lapangan upacara</div>
            <div class="ms-3">m. Panji Perhubungan memasuki lapangan upacara</div>

            <div class="mt-2">2. Acara Pendahuluan</div>
            <div class="ms-3">a. Laporan Perwira Upacara;</div>
            <div class="ms-3">b. Inspektur Upacara memasuki tempat upacara.</div>

            <div class="mt-2">3. Acara Pokok</div>
            <div class="ms-3">a. Lagu Kebangsaan Indonesia Raya (korsik)</div>
            <div class="ms-3">b. Hymne Perhubungan (Paduan Suara)</div>
            <div class="ms-3">c. Penghormatan Umum kepada Inspektur Upacara;</div>
            <div class="ms-3">d. Laporan Komandan Upacara;</div>
            <div class="ms-3">e. Penghormatan Kepada Panji Perhubungan;</div>
            <div class="ms-3">f. Pembacaan Laporan Pendidikan;</div>
            <div class="ms-3">g. Pernyataan Wisuda Perwira Transportasi Laut;</div>
            <div class="ms-3">
              h. Prosesi Wisuda; (Penyematan Epolet, Pengalungan Samir, Penyerahan Ijasah,
              Pemercikan Tirta dan Ikrar Perwira)
            </div>
            <div class="ms-3">i. Amanat Inspektur Upacara;</div>
            <div class="ms-3">j. Pembacaan Do'a;</div>
            <div class="ms-3">k. Andhika Bhayangkari;</div>
            <div class="ms-3">l. Lagu Bagimu Negeri</div>
            <div class="ms-3">m. Mars Perhubungan;</div>
            <div class="ms-3">n. Penghormatan Kepada Panji Perhubungan;</div>
            <div class="ms-3">o. Laporan Komandan Upacara;</div>
            <div class="ms-3">p. Penghormatan Pasukan;</div>
            <div class="ms-3">q. Inspektur Upacara kembali ke mimbar kehormatan;</div>
            <div class="ms-3">r. Laporan Perwira Upacara;</div>
            <div class="ms-3">s. Panji Perhubungan meninggalkan lapangan upcara;</div>
            <div class="ms-3">
              t. Upacara selesai, komandan upacara meninggalkan lapangan upacara
            </div>
            ;
            <div class="ms-3">
              u. Pemasangan Samir Oleh Keluarga Perwira Transportasi Laut;
            </div>
            <div class="ms-3">v. Perwujudan Tanda Kesetiaan Terhadap NKRI;</div>
            <div class="ms-3">w. Penyerahan Lulusan Kepada Korps Alumni;</div>
            <div class="ms-3">x. Pendatanganan Kerjasama dengan Perusahan Pelayaran;</div>

            <div class="mt-2">4. Acara Tambahan</div>
            <div class="ms-3">a. Pemberian santunan kepada anak yatim;</div>
            <div class="ms-3">b. Foto Bersama;</div>
            <div class="ms-3">
              c. Rangkaian Upacara selesai, ucapan terimakasih dilanjutkan dengan acara
              tambahan
            </div>
            <div class="ms-3">1) Penampilan Passing Out Parade</div>
            <div class="ms-3">2) Penampilan Atraksi Reog</div>
            <div class="ms-3">3) Penampilan Marching Band</div>
            <div class="ms-3">4) Atraksi Tari Bersama / Flash Mob</div>
          </div>
          <div class="section-layout-lapangan text-center">
            <img :src="layoutUpacara" alt="layout" class="img-fluid" />
          </div>
          <div class="section-layout-denah text-center">
            <img :src="denahParkir" alt="denah" class="img-fluid" />
          </div>
          <div class="section-lokasi text-center">
            <h2 class="text-section">Lokasi</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.0965068301093!2d112.79223247357261!3d-7.34305897223099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fab3d7416aad%3A0xf0e5a59bb2199674!2sPoliteknik%20Pelayaran%20Surabaya!5e0!3m2!1sid!2sid!4v1715309908294!5m2!1sid!2sid"
              width="100%"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    <div class="section-social-media d-none" id="content-page-footer" v-if="showContent">
      <h2 class="text-center">Follow Sosial Media</h2>
      <h2 class="text-center">Politeknik Pelayaran Surabaya</h2>
      <div class="row mt-3">
        <div class="sosial-media-list col-md-3">
          <a href="https://www.instagram.com/poltekpel_sby/?hl=id" target="_blank">
            <div class="d-flex justify-content-center">
              <i class="bi bi-instagram me-3"></i>
              <div class="text-xs">poltekpel_sby</div>
            </div>
          </a>
        </div>
        <div class="sosial-media-list col-md-3">
          <a href="https://twitter.com/poltekpel_sby" target="_blank">
            <div class="d-flex justify-content-center">
              <i class="bi bi-twitter me-3"></i>
              <div class="text-xs">@poltekpel_sby</div>
            </div>
          </a>
        </div>
        <div class="sosial-media-list col-md-3">
          <a
            href="https://www.facebook.com/poltekpelsurabaya/?locale=id_ID"
            target="_blank"
          >
            <div class="d-flex justify-content-center">
              <i class="bi bi-facebook me-3"></i>
              <div class="text-xs text-center">Politeknik Pelayaran Surabaya</div>
            </div>
          </a>
        </div>
        <div class="sosial-media-list col-md-3">
          <a href="https://www.tiktok.com/@poltekpel_sby?lang=id-ID" target="_blank">
            <div class="d-flex justify-content-center">
              <i class="bi bi-tiktok me-3"></i>
              <div class="text-xs">poltekpel_sby</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import marsPerhubungan from "@/public/wisuda51poltekpelsby/mars-perhubungan.mp3";
import bpsdmWebp from "@/public/wisuda51poltekpelsby/logo-web.png";
import proprestasiWebp from "@/public/wisuda51poltekpelsby/proprestasi_gen2.webp";
import goldgenerationWebp from "@/public/wisuda51poltekpelsby/goldgeneration_gen2.webp";
import layoutUpacara from "@/public/wisuda51poltekpelsby/wisuda50pelepasan_p2s-denah_layout_upcara-web-01.webp";
import denahParkir from "@/public/wisuda51poltekpelsby/wisuda50pelepasan-p2b-denah_parkir-rev3-01.webp";
import rightYellow from "@/public/wisuda51poltekpelsby/right-yellow.png";
import rightBlue from "@/public/wisuda51poltekpelsby/right-blue.png";
import leftYellow from "@/public/wisuda51poltekpelsby/left-yellow.png";
import leftBlue from "@/public/wisuda51poltekpelsby/left-blue.png";
import AudioPlayer from "@/components/audio";
import { nextTick } from "vue";

const showContent = ref(false);
const buttonInvitation = ref(true);
const currentUrl = window.location.origin;
const soundPlay = ref(null);
const audioElement = ref(null);
const sectionRundown = ref(null);

const focusInput = async () => {
  await nextTick();
  if (sectionRundown.value) {
    sectionRundown.value.focus();
  } else {
    console.error("Ref is not assigned");
  }
};

const openInvitation = () => {
  playAudio();
  showContent.value = true;
  buttonInvitation.value = false;
  setTimeout(() => {
    window.scrollTo(0, 700);
  }, 1000);
};

const playAudio = () => {
  soundPlay.value = true;
  if (audioElement.value) {
    audioElement.value.play();
  }
};
const pauseAudio = () => {
  soundPlay.value = false;
  if (audioElement.value) {
    audioElement.value.pause();
  }
};

useSeoMeta({
  ogImage: "../../public/wisuda51poltekpelsby/logo.png",
});
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Lexend+Deca:wght@100..900&family=Mukta+Malar:wght@200;300;400;500;600;700;800&display=swap");
.img-top-welcome {
  width: 100px;
}
.img-top-perhubungan {
  width: 200px;
  padding-top: 20px;
}
.btn-audio {
  position: fixed;
  top: 20px;
  right: 15px;
  z-index: 10000;
  font-size: 30px;
  color: #ffc608;
}
.section-layout-lapangan {
  height: 100%;
  width: 100%;
  padding-top: 40px;
}
.section-layout-denah {
  height: 100%;
  width: 100%;
  padding-top: 40px;
}
.section-rundown {
  height: 100%;
  width: 100%;
  padding: 30px 40px 40px 40px;
  background-color: #3b65af;
  border-radius: 10px;
  color: white !important;
  margin-top: 20px;
}
.text-section {
  margin-top: 20px;
  margin-bottom: 20px;
}
html {
  scroll-behavior: smooth;
}
.section-layout-welcome {
  position: relative;
}
.section-lokasi {
  margin-top: 50px;
}
.btn-undangan {
  width: 50%;
  border-radius: 10px;
}

.section-social-media {
  background-color: #3b65af;
  color: white !important;
  margin-top: 50px;
  text-decoration: none;
  padding: 15px 15px 40px 15px;
}
.section-social-media a {
  color: #fff !important;
}
.page-welcome {
  background-image: url("../../public/wisuda51poltekpelsby/background-web.png");
  background-position: center;
  height: 770px;
}
.section-bottom-welcome {
  position: relative;
}
.right-yellow {
  position: absolute;
  width: 100px;
  right: -15%;
  bottom: -40%;
}
.right-blue {
  position: absolute;
  width: 100px;
  right: -15%;
  bottom: -70%;
}
.left-yellow {
  position: absolute;
  width: 100px;
  left: -15%;
  bottom: -40%;
}
.left-blue {
  position: absolute;
  width: 100px;
  left: -15%;
  bottom: -70%;
}
@media (max-width: 576px) {
  .section-layout-welcome {
    position: relative;
  }
  .image-welcome {
    height: 150px;
    width: 100%;
    object-fit: cover;
  }
  .text-top-welcome {
    margin-top: 30px;
  }
}
.text-top-welcome {
  padding: 0px 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.text-headline {
  font-family: "Lexend Deca", sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: italic;
  color: #29abe0;
  font-size: 30px;
  line-height: 1;
  text-shadow: 1px 1px 4px rgba(69, 69, 69, 0.38);
}
.text-headline-2 {
  font-family: "Lexend Deca", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  color: #29abe0;
  font-size: 25px;
  line-height: 1;
  text-shadow: 1px 1px 2px rgba(69, 69, 69, 0.38);
}
.text-headline-3 {
  font-family: "Mukta Malar", sans-serif;
  font-weight: 800;
  font-style: italic;
  line-height: 1;
  font-size: 25px;
  color: #4e5fa9;
  margin-bottom: 40px;
}
.text-headline-4 {
  font-family: "Dancing Script", cursive;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: italic;
  font-size: 20px;
}
.text-date {
  background-color: #ffc608;
  padding: 10px;
  margin: 0px 30px;
  border-radius: 10px;
  font-family: "Mukta Malar", sans-serif;
  font-weight: 800;
  font-style: italic;
  line-height: 1;
  font-size: 18px;
  color: #29abe0;
  margin-top: 40px;
  margin-bottom: 15px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in-element {
  animation: fadeIn 2s ease-in;
}
</style>
