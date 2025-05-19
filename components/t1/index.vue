<template>
  <div class="container">
    <div
      class="header flex flex-col justify-center items-center bg-gradient-to-b from-amber-400 to-yellow-200"
    >
      <div class="flex justify-center logo-section">
        <img
          src="../../public/dummy/dummy-logo-1.png"
          alt="logo-1"
          class="img-logo"
        />
        <img
          src="../../public/dummy/dummy-logo-2.png"
          alt="logo-2"
          class="img-logo"
        />
      </div>
      <div class="text-section flex flex-col justify-center items-center">
        <div class="text-3xl mb-2 mx-5 text-center">
          {{ eventDescribe?.title }}
        </div>
      </div>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded btn-open-invitation"
        @click="openInvitation"
        v-if="!showContent"
      >
        Buka Undangan
      </button>
    </div>
    <div class="body" v-if="showContent">
      <div class="box-card mt-3 mb-5 rounded overflow-hidden shadow-lg w-full">
        <div class="px-6 py-10 text-center">
          <div class="text-2xl mb-5">{{ eventDescribe?.title }}</div>
          <p>
            Selamat datang di momen bersejarah! Kami dengan bangga mengundang
            Anda untuk merayakan pencapaian luar biasa para wisudawan. Mari
            bersama-sama menyaksikan langkah awal mereka menuju masa depan yang
            gemilang. Pastikan Anda menjadi bagian dari perayaan penuh
            kebahagiaan ini!
          </p>
        </div>
      </div>
      <div class="dateplace-section">
        <div
          class="box-card mt-3 mb-5 rounded overflow-hidden shadow-lg w-full"
        >
          <div class="px-6 py-10 text-center">
            <div class="font-bold text-xl mb-2">Tanggal</div>
            <div class="icon flex flex-col justify-center items-center mb-2">
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
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>
            </div>
            <p class="text-gray-700 text-base">{{ eventDescribe?.date }}</p>
          </div>
        </div>
        <div
          class="box-card mt-3 mb-5 rounded overflow-hidden shadow-lg w-full"
        >
          <div class="px-6 py-10 text-center">
            <div class="font-bold text-2xl mb-2">Waktu</div>
            <div class="icon flex flex-col justify-center items-center mb-2">
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
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <p class="text-gray-700 text-base">{{ eventDescribe?.time }}</p>
          </div>
        </div>
        <div
          class="box-card mt-3 mb-5 rounded overflow-hidden shadow-lg w-full"
        >
          <div class="px-6 py-10 text-center">
            <div class="font-bold text-2xl mb-2">Tempat</div>
            <div class="icon flex flex-col justify-center items-center mb-2">
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
                  d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                />
              </svg>
            </div>
            <p class="text-gray-700 text-base">
              {{ eventDescribe?.place }}
            </p>
          </div>
        </div>
        <div
          class="box-card mt-3 mb-5 rounded overflow-hidden shadow-lg w-full"
        >
          <div class="px-6 py-10 text-center">
            <div class="font-bold text-2xl mb-2">Area Parkir</div>
            <p class="text-gray-700 text-base">Depan Gedung Fakultas A</p>
            <p class="text-gray-700 text-base">Depan Gedung Fakultas B</p>
            <p class="text-gray-700 text-base">Area Parkir Umum Unisma</p>
          </div>
        </div>
      </div>
      <div class="ruwndow-section">
        <div
          class="box-card mt-3 mb-5 p-5 rounded overflow-hidden shadow-lg w-full"
        >
          <div class="text-center text-2xl font-medium mb-5">Susunan Acara</div>
          <ul class="list-disc text-md text-gray-700">
            <li>Registrasi</li>
            <li>Wisudawan Memasuki Area Upacara</li>
            <li>Prosesi Pimpinan Wisuda Memasuki Ruangan Upacara</li>
            <li>Mengheningkan Cipta</li>
            <li>Hymne Universitas</li>
            <li>Sambutan Direktur</li>
            <li>Sambutan Rektor</li>
            <li>Pemberian Ijazah dan Upacara Selamat</li>
            <li>Pembacaan Janji Wisudawan</li>
            <li>Pembacaan Do'a</li>
          </ul>
        </div>
      </div>
      <div class="map-section">
        <div class="text-center text-2xl mb-5">Peta Lokasi</div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.5993628956035!2d112.60680130000001!3d-7.936842799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e788211bc384919%3A0xdd8bda6f37230a4f!2sUniversitas%20Islam%20Malang!5e0!3m2!1sid!2ssg!4v1747121056423!5m2!1sid!2ssg"
          width="100%"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="cs-section">
        <div
          class="rounded-lg shadow-md p-6 border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Kontak Informasi
          </h3>
          <p class="mt-3 mb-5 text-gray-600 dark:text-gray-300">
            Hubungi nomor CP kami jika memiliki pertanyaan terkait wisuda
          </p>

          <a
            :href="`https://wa.me/${eventDescribe?.contact_person}`"
            class="text-white"
            >{{ eventDescribe?.contact_person }}</a
          >
        </div>
      </div>
    </div>
    <div class="footer bg-gradient-to-b from-amber-400 to-yellow-200">
      <div
        class="section-social-media"
        id="content-page-footer"
        v-if="showContent"
      >
        <h2 class="text-center text-xl pt-5">Ikuti Sosial Media</h2>
        <h2 class="text-center text-lg">Universitas Islam Malang</h2>
        <div class="grid grid-cols-2 gap-5 mt-5">
          <div class="sosial-media-list">
            <a href="https://www.instagram.com/unisma_malang/" target="_blank">
              <div class="flex flex-col justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-instagram"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                  />
                </svg>
                <div class="text-md">Unisma Malang</div>
              </div>
            </a>
          </div>
          <div class="sosial-media-list">
            <a
              href="https://x.com/unisma193?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              target="_blank"
            >
              <div class="flex flex-col justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-twitter-x"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
                  />
                </svg>
                <div class="text-md">@unisma_malang</div>
              </div>
            </a>
          </div>
          <div class="sosial-media-list">
            <a
              href="https://www.facebook.com/unisma1/?locale=id_ID"
              target="_blank"
            >
              <div class="flex flex-col justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-facebook"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"
                  />
                </svg>
                <div class="text-md text-center">Universitas Islam Malang</div>
              </div>
            </a>
          </div>
          <div class="sosial-media-list">
            <a href="https://www.tiktok.com/@unisma_malang" target="_blank">
              <div class="flex flex-col justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-tiktok"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"
                  />
                </svg>
                <div class="text-md">unisma_malang</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import marsPerhubungan from "@/public/wisuda52poltekpelsby/mars-perhubungan.mp3";
import layoutUpacara from "@/public/wisuda52poltekpelsby/layout-lapangan.webp";
import layoutTempatDuduk from "@/public/wisuda52poltekpelsby/layout-seat.webp";
import denahParkir from "@/public/wisuda52poltekpelsby/denah-parkir.webp";
import AudioPlayer from "@/components/audio";
import { useRouter } from "vue-router";

const showContent = ref(false);
const buttonInvitation = ref(true);
const currentUrl = window.location.origin;
const soundPlay = ref(null);
const audioElement = ref(null);
const sectionRundown = ref(null);
const router = useRouter();
const detailContact = ref("Politeknik Pelayaran Surabaya");
const eventDescribe = ref({});

const loadData = async () => {
  let eventDetail = await useCustomFetch(`api/event/36`, "get", {}, true);
  eventDescribe.value = eventDetail.data.value.data;
};

setTimeout(() => {
  loadData();
}, 1000);

const openInvitation = () => {
  playAudio();
  showContent.value = true;
  buttonInvitation.value = false;
  setTimeout(() => {
    window.scrollTo(0, 700, "smooth");
  }, 200);
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
  ogImage: "../../public/wisuda52poltekpelsby/logo.png",
});
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&display=swap");
.container {
  font-family: "Merriweather", serif;
  font-optical-sizing: auto;
  max-width: 600px !important;
  margin-left: auto;
  margin-right: auto;
}
.header {
  min-height: 100vh;
}
.body {
  padding: 10px 20px;
}
.img-logo {
  width: 180px;
  height: 180px;
}
.logo-section {
  margin-bottom: 20px;
}
.text-section {
  margin-bottom: 150px;
  color: #b83b5e;
}
.btn-open-invitation {
  background-color: #f08a5d !important;
  border-radius: 10px;
}
.dateplace-section {
  margin-top: 20px;
}
.map-section {
  margin-top: 50px;
}
.cs-section {
  margin-top: 50px;
}
.section-social-media {
  margin-top: 50px;
  padding-bottom: 100px;
}
.footer {
  color: #b83b5e;
  font-weight: 600;
}
</style>
