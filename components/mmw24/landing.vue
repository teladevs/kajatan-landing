<template>
  <div class="container mx-auto px-5 pt-10">
    <div class="flex items-center justify-center mb-5">
      <img
        src="/images/logo/webasset-00-garuda.webp"
        alt="image-kemenhub"
        class="logo-instansi"
      />
    </div>
    <div class="flex items-center justify-center">
      <img
        src="/images/logo/webasset-01-kemenhub.webp"
        alt="image-kemenhub"
        class="logo-instansi slide-transition-hide"
      />
      <img
        src="/images/logo/logo-perhubungan.webp"
        alt="image-kemenhub"
        class="logo-instansi slide-transition-hide"
      />
    </div>
    <div class="flex justify-center items-center flex-wrap gap-3 mt-3">
      <img
        src="/images/logo/webasset-03-proprestasi.webp"
        alt="image-kemenhub"
        class="logo-prestasi slide-transition-hide"
      />
      <img
        src="/images/logo/webasset-04-gold_gen3.webp"
        alt="image-kemenhub"
        class="logo-prestasi slide-transition-hide"
      />
    </div>
    <section
      class="slide-transition-hide mt-5 text-slate-800 text-2xl font-bold text-center mb-10"
    >
      <h1>Ministry of Transportation of the Republic of Indonesia</h1>
    </section>
    <section class="fade-out-hide">
      <img
        src="/images/brosur/26/1.png"
        alt="image-brosur"
        class="image-brosur"
      />
    </section>
    <section class="fade-out-hide">
      <img
        src="/images/brosur/26/2.png"
        alt="image-brosur"
        class="image-brosur"
      />
    </section>
    <section class="fade-out-hide mt-10">
      <div class="bg-white rounded-2xl border border-slate-200 p-5 md:p-8">
        <div class="text-lg md:text-xl font-bold text-slate-800 text-center">
          Agency of Human Resources Development on Transportation
          <div class="text-base">(BPSDM PERHUBUNGAN)</div>
        </div>
        <div class="text-sm text-slate-600 text-center mt-2">
          Jl. Medan Merdeka Timur No. 5, Central Jakarta 10110
        </div>
        <div class="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-4 text-sm">
          <a
            v-for="s in bpsdmSocials"
            :key="s.label + s.text"
            :href="s.href"
            target="_blank"
            class="text-slate-600 hover:text-slate-900"
          >
            <span class="font-semibold">{{ s.label }}:</span>
            {{ s.text }}
          </a>
        </div>
      </div>
      <div class="text-md font-bold text-slate-800 text-center mt-8 mb-4">
        Centers for Human Resources Development
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          v-for="center in hrdCenters"
          :key="center.short"
          class="inst-card bg-white rounded-2xl border border-slate-200 p-4 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          <a
            :href="center.url"
            target="_blank"
            class="flex flex-col items-center text-slate-800"
            :title="center.short"
          >
            <img
              :src="center.logo"
              :alt="center.short"
              class="h-20 object-contain mb-3"
              loading="lazy"
            />
            <div class="text-sm font-semibold">{{ center.short }}</div>
          </a>
          <a
            :href="center.instagram"
            target="_blank"
            class="mt-2 text-slate-400 hover:text-slate-800"
            :title="center.short + ' Instagram'"
          >
            <div class="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
              </svg>
              <span class="text-xs">{{ center.instagramUser }}</span>
            </div>
          </a>
        </div>
      </div>
    </section>
    <section
      v-for="group in institutionGroups"
      :key="group.title"
      class="fade-out-hide mt-5"
    >
      <div class="text-xl font-bold text-slate-800 text-center mb-5">
        {{ group.title }}
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div
          v-for="item in group.items"
          :key="item.name"
          class="inst-card bg-white rounded-2xl border border-slate-200 p-4 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          <a
            :href="item.url"
            target="_blank"
            class="flex flex-col items-center text-slate-800"
            :title="item.name"
          >
            <img
              :src="item.logo"
              :alt="item.name"
              class="h-20 object-contain mb-3"
              loading="lazy"
            />
            <div class="text-sm font-semibold">{{ item.name }}</div>
            <div class="text-xs text-slate-500 mt-1">{{ item.short }}</div>
          </a>
          <a
            v-if="item.instagram"
            :href="item.instagram"
            target="_blank"
            class="mt-2 text-slate-400 hover:text-slate-800"
            :title="item.short + ' Instagram'"
          >
            <div class="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
              </svg>
              <span class="text-xs">{{ item.instagram.replace(/.+instagram\.com\//, '') }}</span>
            </div>
          </a>
        </div>
      </div>
    </section>
    <div class="mt-10 bg-slate-800 p-5 rounded-2xl fade-out-hide text-white">
      <div class="text-xl font-bold text-center">Our Social Media</div>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10 mb-10">
        <div class="sosial-media-list">
          <a href="https://www.instagram.com/bpsdmp151" target="_blank">
            <div class="grid grid-cols-1 sosial-media">
              <Icon name="bxl:instagram-alt" color="white" size="40px" />
              <div class="text-md">bpsdmp151</div>
            </div>
          </a>
        </div>
        <div class="sosial-media-list">
          <a href="https://twitter.com/BPSDMP151" target="_blank">
            <div class="grid grid-cols-1 sosial-media">
              <Icon name="bxl:twitter" color="white" size="40px" />
              <div class="text-md">@BPSDMP151</div>
            </div>
          </a>
        </div>
        <div class="sosial-media-list">
          <a href="https://www.facebook.com/bpsdmkemenhub" target="_blank">
            <div class="grid grid-cols-1 sosial-media">
              <Icon name="bxl:facebook-circle" color="white" size="40px" />
              <div class="text-md text-center">Bpsdm Perhubungan</div>
            </div>
          </a>
        </div>
        <div class="sosial-media-list">
          <a
            href="https://www.youtube.com/channel/UCNGUU2impwfDjc2L_7MFOGg"
            target="_blank"
          >
            <div class="grid grid-cols-1 sosial-media">
              <Icon name="bxl:youtube" color="white" size="40px" />
              <div class="text-md">BPSDMP151</div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="w-full mx-auto max-w-screen-xl p-4 flex justify-around">
      <img
        src="/images/logo/logo-telanusa.png"
        alt="logo-tlns"
        class="logo-footer w-[150px]"
      />
    </div>
    <div
      class="w-full mx-auto max-w-screen-xl p-4 flex justify-center flex-col"
    >
      <a
        class="website text-black flex justify-center items-center cursor-pointer"
        href="https://telanusa.com/"
        target="_blank"
      >
        <div class="svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-browser-safari"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.25-14.75v1.5a.25.25 0 0 1-.5 0v-1.5a.25.25 0 0 1 .5 0m0 12v1.5a.25.25 0 1 1-.5 0v-1.5a.25.25 0 1 1 .5 0M4.5 1.938a.25.25 0 0 1 .342.091l.75 1.3a.25.25 0 0 1-.434.25l-.75-1.3a.25.25 0 0 1 .092-.341m6 10.392a.25.25 0 0 1 .341.092l.75 1.299a.25.25 0 1 1-.432.25l-.75-1.3a.25.25 0 0 1 .091-.34ZM2.28 4.408l1.298.75a.25.25 0 0 1-.25.434l-1.299-.75a.25.25 0 0 1 .25-.434Zm10.392 6 1.299.75a.25.25 0 1 1-.25.434l-1.3-.75a.25.25 0 0 1 .25-.434ZM1 8a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 0 .5h-1.5A.25.25 0 0 1 1 8m12 0a.25.25 0 0 1 .25-.25h1.5a.25.25 0 1 1 0 .5h-1.5A.25.25 0 0 1 13 8M2.03 11.159l1.298-.75a.25.25 0 0 1 .25.432l-1.299.75a.25.25 0 0 1-.25-.432Zm10.392-6 1.299-.75a.25.25 0 1 1 .25.433l-1.3.75a.25.25 0 0 1-.25-.434ZM4.5 14.061a.25.25 0 0 1-.092-.341l.75-1.3a.25.25 0 0 1 .434.25l-.75 1.3a.25.25 0 0 1-.342.091m6-10.392a.25.25 0 0 1-.091-.342l.75-1.299a.25.25 0 1 1 .432.25l-.75 1.3a.25.25 0 0 1-.341.09ZM6.494 1.415l.13.483a.25.25 0 1 1-.483.13l-.13-.483a.25.25 0 0 1 .483-.13M9.86 13.972l.13.483a.25.25 0 1 1-.483.13l-.13-.483a.25.25 0 0 1 .483-.13M3.05 3.05a.25.25 0 0 1 .354 0l.353.354a.25.25 0 0 1-.353.353l-.354-.353a.25.25 0 0 1 0-.354m9.193 9.193a.25.25 0 0 1 .353 0l.354.353a.25.25 0 1 1-.354.354l-.353-.354a.25.25 0 0 1 0-.353M1.545 6.01l.483.13a.25.25 0 1 1-.13.483l-.483-.13a.25.25 0 1 1 .13-.482Zm12.557 3.365.483.13a.25.25 0 1 1-.13.483l-.483-.13a.25.25 0 1 1 .13-.483m-12.863.436a.25.25 0 0 1 .176-.306l.483-.13a.25.25 0 1 1 .13.483l-.483.13a.25.25 0 0 1-.306-.177m12.557-3.365a.25.25 0 0 1 .176-.306l.483-.13a.25.25 0 1 1 .13.483l-.483.13a.25.25 0 0 1-.306-.177M3.045 12.944a.3.3 0 0 1-.029-.376l3.898-5.592a.3.3 0 0 1 .062-.062l5.602-3.884a.278.278 0 0 1 .392.392L9.086 9.024a.3.3 0 0 1-.062.062l-5.592 3.898a.3.3 0 0 1-.382-.034zm3.143 1.817a.25.25 0 0 1-.176-.306l.129-.483a.25.25 0 0 1 .483.13l-.13.483a.25.25 0 0 1-.306.176M9.553 2.204a.25.25 0 0 1-.177-.306l.13-.483a.25.25 0 1 1 .483.13l-.13.483a.25.25 0 0 1-.306.176"
            />
          </svg>
        </div>
        <div class="ml-2">WWW.TELANUSA.COM</div>
      </a>
      <a
        class="instagram text-black flex justify-center items-center"
        href="https://www.instagram.com/telanusa/"
        target="_blank"
      >
        <div class="svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-instagram"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
            />
          </svg>
        </div>
        <div class="ml-2">TELANUSA</div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

// ponytail: flat hardcoded list; move to /data JSON when it needs CMS editing
const hrdCenters = [
  {
    short: "Center on Land Transportation",
    logo: "/images/institusi/ppsdmd-1704710287.png",
    url: "http://www.ppsdmd.bpsdm.kemenhub.go.id/",
    instagram: "https://instagram.com/infopusbangdarat",
    instagramUser: "infopusbangdarat",
  },
  {
    short: "Center on Sea Transportation",
    logo: "/images/institusi/ppsdml-1704710692.png",
    url: "http://www.ppsdml.bpsdm.kemenhub.go.id/",
    instagram: "https://instagram.com/pusbangsdm.laut",
    instagramUser: "pusbangsdm.laut",
  },
  {
    short: "Center on Civil Aviation",
    logo: "/images/institusi/ppsdmpu-1704711453.png",
    url: "https://ppsdmpu.bpsdm.kemenhub.go.id/",
    instagram: "https://instagram.com/pusbangsdmhubud",
    instagramUser: "pusbangsdmhubud",
  },
  {
    short: "Center of Transportation Apparatuses",
    logo: "/images/institusi/ppsdma-1704709796.jpeg",
    url: "http://www.ppsdmap.bpsdm.kemenhub.go.id/",
    instagram: "https://instagram.com/ppsdma_perhubungan",
    instagramUser: "ppsdma_perhubungan",
  },
];

const bpsdmSocials = [
  { label: "Website", text: "bpsdm.kemenhub.go.id", href: "http://bpsdm.kemenhub.go.id" },
  { label: "Website", text: "www.sipencatar.kemenhub.go.id", href: "https://www.sipencatar.kemenhub.go.id" },
  { label: "Instagram", text: "@bpsdmp151", href: "https://instagram.com/bpsdmp151" },
  { label: "Youtube", text: "bpsdmp151", href: "https://www.youtube.com/channel/UCNGUU2impwfDjc2L_7MFOGg" },
  { label: "TikTok", text: "bpsdmp151", href: "https://www.tiktok.com/@bpsdmp151" },
  { label: "Twitter", text: "@bpsdmp151", href: "https://twitter.com/BPSDMP151" },
];

const institutionGroups = [
  {
    title: "Land Transport",
    icon: "bx:bus",
    items: [
      { short: "PTDI - STTD Bekasi", name: "Indonesia Land Transportation Polytechnic", logo: "/images/institusi/ptdi-sttd-bekasi-1758786805.png", url: "http://ptdisttd.ac.id/", instagram: "https://instagram.com/ptdi.sttd.official" },
      { short: "PKTJ Tegal", name: "Tegal Road Transportation Safety Polytechnic", logo: "/images/institusi/pktj-tegal-1601637697.png", url: "http://pktj.ac.id/", instagram: "https://instagram.com/pktj_tegal" },
      { short: "POLTEKTRANS SDP Palembang", name: "Inland Waterways and Ferry Transportation Polytechnic", logo: "/images/institusi/poltektrans-sdp-palembang-1758787185.PNG", url: "http://poltektranssdp-palembang.ac.id/", instagram: "https://instagram.com/poltektranssdp" },
      { short: "PPI Madiun", name: "Indonesia Railways Polytechnic", logo: "/images/institusi/ppi-madiun-1601866665.png", url: "http://ppi.ac.id", instagram: "https://instagram.com/ppiacid" },
      { short: "POLTRADA Bali", name: "Bali Land Transportation Polytechnic", logo: "/images/institusi/poltrada-bali-1741572044.png", url: "https://www.poltradabali.ac.id/", instagram: "https://instagram.com/poltradabali.official" },
      { short: "BPPTD Mempawah", name: "Mempawah Land Transportation Training Center", logo: "/images/institusi/bp2td-mempawah-1704713508.jpeg", url: "http://bp2tdmempawah.co.id", instagram: "https://instagram.com/bpptdmempawah" },
    ],
  },
  {
    title: "Sea Transport",
    icon: "bx:ship",
    items: [
      { short: "STIP Jakarta", name: "Jakarta Maritime Institute", logo: "/images/institusi/stip-jakarta-1618368678.png", url: "https://stipjakarta.ac.id/", instagram: "https://instagram.com/stip_jakarta" },
      { short: "POLTEKPEL Surabaya", name: "Surabaya Maritime Polytechnic", logo: "/images/institusi/poltekpel-surabaya-1618718957.png", url: "https://poltekpel-sby.ac.id/", instagram: "https://instagram.com/poltekpel_sby" },
      { short: "PIP Makassar", name: "Makassar Maritime Polytechnic", logo: "/images/institusi/pip-makassar-1601867871.png", url: "https://pipmakassar.ac.id/", instagram: "https://instagram.com/pipmakassar_" },
      { short: "POLTEKPEL Sorong", name: "Sorong Maritime Polytechnic", logo: "/images/institusi/poltekpel-sorong-1601869354.png", url: "https://poltekpel-sorong.ac.id/", instagram: "https://instagram.com/poltekpelsorong" },
      { short: "POLTEKPEL Malahayati", name: "Malahayati Maritime Polytechnic", logo: "/images/institusi/poltekpel-malahayati-1601869529.jpg", url: "https://www.poltekpelaceh.ac.id/", instagram: "https://instagram.com/poltekpelaceh" },
      { short: "POLTEKPEL Banten", name: "Banten Maritime Polytechnic", logo: "/images/institusi/poltekpel-banten-1742181806.png", url: "https://poltekpel-banten.ac.id/", instagram: "https://instagram.com/politeknikpelayaranbanten" },
      { short: "POLTEKPEL Barombong", name: "Barombong Maritime Polytechnic", logo: "/images/institusi/poltekpel-barombong-1601869199.png", url: "https://poltekpelbarombong.ac.id/", instagram: "https://instagram.com/PoltekpelBarombong" },
      { short: "POLTEKPEL Sumatera Barat", name: "West Sumatera Maritime Polytechnic", logo: "/images/institusi/poltekpel-sumatera-barat-1601869767.png", url: "https://poltekpelsumbar.ac.id/", instagram: "https://instagram.com/poltekpelsumbar" },
      { short: "PIP Semarang", name: "Semarang Maritime Polytechnic", logo: "/images/institusi/pip-semarang-1601867707.png", url: "https://pip-semarang.ac.id/", instagram: "https://instagram.com/pip_semarang" },
      { short: "POLTEKPEL Sulawesi Utara", name: "North Sulawesi Maritime Polytechnic", logo: "/images/institusi/poltekpel-sulawesi-utara-1601869667.jpg", url: "https://poltekpelsulut.ac.id/", instagram: "https://instagram.com/poltekpelsulut.official" },
      { short: "BP3IP Jakarta", name: "Jakarta Maritime Training Center", logo: "/images/institusi/bp3ip-jakarta-1704712788.png", url: "https://bp3ip.ac.id/", instagram: "https://instagram.com/bp3ip_jkt" },
      { short: "BP2TL Jakarta", name: "Sea Transportation Training Center", logo: "/images/institusi/bp2tl-jakarta-1704712334.jpg", url: "https://bp2tl.ac.id/", instagram: "https://instagram.com/bp2tljakarta" },
    ],
  },
  {
    title: "Air Transport",
    icon: "bx:plane",
    items: [
      { short: "PPIC Curug", name: "Indonesia Civil Aviation Polytechnic Curug", logo: "/images/institusi/ppi-curug-1658391119.png", url: "https://ppicurug.ac.id/", instagram: "https://instagram.com/ppicurug.official" },
      { short: "POLTEKBANG Medan", name: "Medan Civil Aviation Polytechnic", logo: "/images/institusi/poltekbang-medan-1618719280.png", url: "https://poltekbangmedan.ac.id/", instagram: "https://instagram.com/poltekbang.mdn" },
      { short: "POLTEKBANG Surabaya", name: "Surabaya Civil Aviation Polytechnic", logo: "/images/institusi/poltekbang-surabaya-1601870278.png", url: "http://web.poltekbangsby.ac.id/", instagram: "https://instagram.com/poltekbangsby" },
      { short: "POLTEKBANG Makassar", name: "Makassar Civil Aviation Polytechnic", logo: "/images/institusi/poltekbang-makassar-1601870417.png", url: "https://poltekbangmakassar.ac.id/", instagram: "https://instagram.com/poltekbang_mks" },
      { short: "POLTEKBANG Jayapura", name: "Jayapura Civil Aviation Polytechnic", logo: "/images/institusi/poltekbang-jayapura-1618369536.jpg", url: "https://poltekbangjayapura.ac.id/", instagram: "https://instagram.com/poltekbangjyp" },
      { short: "POLTEKBANG Palembang", name: "Palembang Civil Aviation Polytechnic", logo: "/images/institusi/poltekbang-palembang-1618369929.png", url: "https://poltekbangplg.ac.id/", instagram: "https://instagram.com/poltekbangplg" },
      { short: "API Banyuwangi", name: "Indonesia Pilot Academy Banyuwangi", logo: "/images/institusi/api-banyuwangi-1747209028.png", url: "https://icpa-banyuwangi.ac.id/", instagram: "https://instagram.com/apibanyuwangi" },
      { short: "BP3 Curug", name: "Curug Aviation Education and Training Center", logo: "/images/institusi/bp3-curug-1704713153.jpeg", url: "https://bp3curug.id/", instagram: "https://instagram.com/bp3curug_" },
    ],
  },
  {
    title: "Character Building",
    icon: "bx:heart",
    items: [
      { short: "BP3KSDMT Ciwidey", name: "Human Resources Character Building Center", logo: "/images/institusi/bp3ksdmt-ciwidey-1704713327.png", url: "https://bp3ksdmt.ac.id/", instagram: "https://instagram.com/characterbuildingcamp" },
    ],
  },
];

onMounted(() => {
  if (process.client) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-out-show");
        } else {
          entry.target.classList.remove("fade-out-show");
        }
      });
    });

    const observerLogo = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-transition-show");
        } else {
          entry.target.classList.remove("slide-transition-show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".fade-out-hide");
    hiddenElements.forEach((el) => observer.observe(el));
    const hiddenLogo = document.querySelectorAll(".slide-transition-hide");
    hiddenLogo.forEach((el) => observerLogo.observe(el));
  }
});
</script>
<style scoped>
.icon-sosial-media {
  width: 40px;
  height: 40px;
}
.sosial-media-list {
}
.sosial-media {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.image-brosur {
  width: 100%;
}
</style>
