<template>
  <div class="container">
    <audio id="myAudio" autoplay loop>
      <source :src="marsPerhubungan" type="audio/mp3" />
    </audio>
    <a class="btn-play btn-audio" @click="playAudio()" id="btn-play">
      <i class="bi bi-play-circle"></i>
    </a>
    <a class="btn-pause btn-audio" @click="pauseAudio()" id="btn-pause">
      <i class="bi bi-pause-circle"></i>
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
          "To Support Inclusive And Sustainable Maritime Safety"
        </div>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
          @click="openInvitation()"
        >
          Buka Undangan
        </button>
        <div class="text-date">Surabaya, 19 September 2024</div>
        <div class="text-headline-4">"Together To Give The Best"</div>
      </div>
    </div>
    <div class="container-fluid d-none" id="content-page" v-if="showContent">
      <div class="page">
        <div class="col-md-12">
          <div class="section-rundown">
            <h2 class="text-center w-100" id="rundown-acara">Rundown Acara</h2>
            <div>A. Persiapan</div>
            <div class="ms-3">
              1. Seluruh pasukan mempersiapan diri di daerah persiapan
            </div>
            <div class="ms-3">
              2. Seluruh pasukan upacara telah siap dilapangan upacara
            </div>
            <div class="ms-3">3. Komandan upacara memasuki lapangan upacara</div>
            <div class="mt-2">B. Pendahuluan</div>
            <div class="ms-3">4. Inspektur Upacara Tiba di Mimbar Kehormatan</div>
            <div class="ms-3">5. Laporan Perwira Upacara kepada Inspektur Upacara</div>
            <div class="mt-2">C. Acara Pokok</div>
            <div class="ms-3">6. Inspektur Upacara memasuki mimbar utama</div>
            <div class="ms-3">7. Lagu Kebangsaan Indonesia Raya</div>
            <div class="ms-3">8. Hymne Perhubungan</div>
            <div class="ms-3">9. Penghormatan umum kepada Inspektur Upacara</div>
            <div class="ms-3">10. Laporan Komandan Upacara</div>
            <div class="ms-3">11. Panji Perhubungan memasuki lapangan upacara</div>
            <div class="ms-3">12. Penghormatan kepada Panji Perhubungan</div>
            <div class="ms-3">13. Laporan Pendidikan</div>
            <div class="ms-3">14. Pernyataan Wisuda Perwira Transportasi Laut</div>
            <div class="ms-3">
              15. Prosesi Wisuda Perwira Transportasi Laut oleh Inspektur Upacara
            </div>
            <div class="ms-3">16. Ikrar Wisudawan</div>
            <div class="ms-3">17. Amanat Inspektur Upacara</div>
            <div class="ms-3">18. Doa</div>
            <div class="ms-3">19. Andhika Bhayangkari</div>
            <div class="ms-3">20. Lagu Bagimu Negeri</div>
            <div class="ms-3">21. Mars Perhubungan</div>
            <div class="ms-3">22. Penghormatan kepada Panji Perhubungan</div>
            <div class="ms-3">23. Panji Perhubungan meninggalkan lapangan upacara</div>
            <div class="ms-3">24. Laporan Komandan Upacara</div>
            <div class="ms-3">25. Penghormatan Pasukan kepada Inspektur Upacara</div>
            <div class="mt-2">D. Acara Penutup</div>
            <div class="ms-3">26. Inspektur Upacara meninggalkan lapangan upacara</div>
            <div class="ms-3">27. Laporan Perwira Upacara kepada Inspektur Upacara</div>
            <div class="ms-3">28. Komandan Upacara meninggalkan lapangan upacara</div>
            <div class="ms-3">
              29. Pemasangan Samir oleh keluarga Perwira Transportasi Laut
            </div>
            <div class="ms-3">
              30. Perwujudan Tanda Kesetiaan terhadap Negara Kesatuan Republik Indonesia
              (NKRI)
            </div>
            <div class="ms-3">
              31. Penyerahan lulusan Poltekpel Surabaya kepada Korp Alumni
            </div>
            <div class="ms-3">32. Penandatangan kerjasama dengan Perusahan Pelayaran</div>
            <div class="ms-3">33. Penyerahan Tali Asih kepada Panti asuhan</div>
            <div class="ms-3">34. Foto bersama Perwira Transportasi Laut</div>
            <div class="mt-2">E. Acara Tambahan</div>
            <div class="ms-3">35. Passing Out Parade</div>
            <div class="ms-3">36. Atraksi Sendratari Kolosal Reog</div>
            <div class="ms-3">37. Atraksi Marching Band GITA SWARA SAMUDRA</div>
            <div class="ms-3">38. Atraksi Tari Bersama / Flash Mob</div>
            <div class="ms-3">39. Rangkaian Upacara Wisuda Selesai</div>
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
import bpsdmWebp from "@/public/wisuda51poltekpelsby/poltekpel_x_perhubungan_bpsdm.webp";
import proprestasiWebp from "@/public/wisuda51poltekpelsby/proprestasi_gen2.webp";
import goldgenerationWebp from "@/public/wisuda51poltekpelsby/goldgeneration_gen2.webp";
import layoutUpacara from "@/public/wisuda51poltekpelsby/wisuda50pelepasan_p2s-denah_layout_upcara-web-01.webp";
import denahParkir from "@/public/wisuda51poltekpelsby/wisuda50pelepasan-p2b-denah_parkir-rev3-01.webp";

const showContent = ref(false);

const currentUrl = window.location.origin;
var x = document.getElementById("myAudio");

const openInvitation = () => {
  // playAudio();
  showContent.value = true;
};

function playAudio() {
  x.play();
}

function pauseAudio() {
  x.pause();
}
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
  margin-top: 80px;
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
.bg-welcome {
  display: none;
}
.page-welcome {
  background-image: linear-gradient(
    to bottom,
    #ffffff,
    #ffffff,
    #ffffff,
    #ffffff,
    #ffffff,
    #f2f1f8,
    #e4e3f1,
    #d6d5ea,
    #b5b7db,
    #929acc,
    #6b7fbd,
    #3b65af
  );
  height: 100vh;
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
  font-size: 45px;
  line-height: 1;
  text-shadow: 1px 1px 4px rgba(69, 69, 69, 0.38);
}
.text-headline-2 {
  font-family: "Lexend Deca", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  color: #29abe0;
  font-size: 30px;
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
  font-size: 30px;
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
  font-size: 25px;
  color: #29abe0;
  margin-top: 40px;
  margin-bottom: 15px;
}
</style>
