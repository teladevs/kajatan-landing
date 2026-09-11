<template>
  <div class="container">
    <audio ref="audioElement" loop>
      <source
        src="/wisuda54poltekpelsby/mars-perhubungan.mp3"
        type="audio/mpeg"
      />
    </audio>
    <div class="page-welcome">
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
      <div class="text-center text-top-welcome">
        <div class="mt-10 logo-stack">
          <img
            src="/wisuda55poltekpelsby/logo-00-main.png"
            alt="logo-main"
            class="logo-main"
          />
          <div class="logo-row">
            <img src="/wisuda55poltekpelsby/logo-01-blu.png" alt="logo-blu" />
            <img src="/wisuda55poltekpelsby/logo-02-wbk.png" alt="logo-wbk" />
            <img
              src="/wisuda55poltekpelsby/logo-03-gold-gen.png"
              alt="logo-gg"
            />
            <img
              src="/wisuda55poltekpelsby/logo-04-propres.png"
              alt="logo-propes"
              class="!w-[100px]"
            />
          </div>
        </div>
        <div class="text-content mt-10">
          <div class="mb-5 font-bold text-2xl with-shadow text-[#205397]">
            UPACARA WISUDA KE-55 DAN PELEPASAN PERWIRA TRANSPORTASI LAUT
          </div>
          <div class="mb-5 font-bold text-black text-lg">
            PROGRAM SARJANA TERAPAN <br />
            DIPLOMA-III, RPL DIPLOMA-III <br />
            DAN PROGRAM DIKLAT PELAUT <br />
            PENINGKATAN I,II, III, IV, V
          </div>
          <div class="mb-5 bg-[#f5ce11] rounded-xl text-[#024497] font-bold">
            POLITEKNIK PELAYARAN SURABAYA
          </div>
          <div class="font-bold with-shadow">
            "Shaping The Future of Maritime Safety Through Competency"
          </div>
          <div class="mt-3 font-bold">Together To Give The Best</div>
          <div class="mt-5 font-bold">SURABAYA, 16 SEPTEMBER 2026</div>
        </div>
        <button
          class="text-white font-bold py-2 px-4 rounded-xl btn-invitation"
          v-if="buttonInvitation"
          @click="openInvitation()"
        >
          Buka Undangan
        </button>
      </div>
    </div>
    <div class="container-fluid d-none" id="content-page" v-if="showContent">
      <div class="page">
        <div class="col-md-12">
          <div class="section-rundown" ref="sectionRundown">
            <h2 class="text-center w-100 mb-4 text-xl" id="rundown-acara">
              Rundown Acara
            </h2>
            <div>1. ACARA PERSIAPAN</div>
            <div class="ms-3">
              <div class="grid grid-cols-12">
                <div class="col-span-1">a.</div>
                <div class="col-span-11">MC;</div>
              </div>
            </div>
            <div class="ms-3">
              <div class="grid grid-cols-12">
                <div class="col-span-1">b.</div>
                <div class="col-span-11">Petugas Upacara;</div>
              </div>
            </div>
            <div class="ms-3">
              <div class="grid grid-cols-12">
                <div class="col-span-1">c.</div>
                <div class="col-span-11">Jajar Kehoramatan;</div>
              </div>
            </div>
            <div class="ms-3">
              <div class="grid grid-cols-12">
                <div class="col-span-1">d.</div>
                <div class="col-span-11">
                  Seluruh Peserta Pelantikan berada di daerah Persiapan;
                </div>
              </div>
            </div>
            <div class="ms-3">
              <div class="grid grid-cols-12">
                <div class="col-span-1">d.</div>
                <div class="col-span-11">
                  Seluruh tamu undangan keluarga berada di tenda undangan;
                </div>
              </div>
            </div>
            <div class="ms-3">
              <div class="grid grid-cols-12">
                <div class="col-span-1">f.</div>
                <div class="col-span-11">
                  Instrumen bunyi sangkakala pertama, seluruh peserta upacara
                  siap di daerah persiapan;
                </div>
              </div>
            </div>
            <div class="ms-3">
              <div class="grid grid-cols-12">
                <div class="col-span-1">g.</div>
                <div class="col-span-11">
                  Seluruh petugas upacara memasuki lapangan upacara;
                </div>
              </div>
            </div>
            <div class="ms-3">
              <div class="grid grid-cols-12">
                <div class="col-span-1">h.</div>
                <div class="col-span-11">Pembukaan MC;</div>
              </div>
            </div>
            <div class="ms-3">
              <div class="grid grid-cols-12">
                <div class="col-span-1">i.</div>
                <div class="col-span-11">
                  Sangkakala kedua, peserta upacara memasuki lapangan upacara di
                  iringi korsik;
                </div>
              </div>
            </div>
            <div class="ms-3">
              <div class="grid grid-cols-12">
                <div class="col-span-1">j.</div>
                <div class="col-span-11">
                  Seluruh undangan VIP dan Undangan VVIP telah berada ditempat
                  yang telah ditentukan;
                </div>
              </div>
            </div>
            <div class="ms-3">
              <div class="grid grid-cols-12">
                <div class="col-span-1">k.</div>
                <div class="col-span-11">
                  Pemberitahuan tanda upacara dimulai;
                </div>
              </div>
            </div>

            <div class="mt-2 mb-2">2. ACARA PENDAHULUAN</div>
            <div class="ms-3">
              <div class="grid grid-cols-12">
                <div class="col-span-1">a.</div>
                <div class="col-span-11">
                  Komandan upacara memasuki lapangan upacara;
                </div>
              </div>
            </div>
            <div class="ms-3">
              <div class="grid grid-cols-12">
                <div class="col-span-1">b.</div>
                <div class="col-span-11">Laporan Perwira Upacara;</div>
              </div>
            </div>
            <div class="ms-3">
              <div class="grid grid-cols-12">
                <div class="col-span-1">c.</div>
                <div class="col-span-11">
                  Inspektur Upacara memasuki tempat upacara.
                </div>
              </div>
            </div>

            <div class="mt-2 mb-2">3. ACARA POKOK</div>
            <div class="ms-3">
              <div class="grid grid-cols-12">
                <div class="col-span-1">a.</div>
                <div class="col-span-11">
                  Lagu Kebangsaan Indonesia Raya (korsik);
                </div>
              </div>
            </div>
            <div class="ms-3">
              <div class="grid grid-cols-12">
                <div class="col-span-1">b.</div>
                <div class="col-span-11">Hymne Perhubungan (Paduan Suara);</div>
              </div>
            </div>
            <div class="ms-3">
              <div class="grid grid-cols-12">
                <div class="col-span-1">c.</div>
                <div class="col-span-11">
                  Penghormatan Umum kepada Inspektur Upacara;
                </div>
              </div>
            </div>
            <div class="ms-3">
              <div class="grid grid-cols-12">
                <div class="col-span-1">d.</div>
                <div class="col-span-11">Laporan Komandan Upacara;</div>
              </div>
            </div>
            <div class="ms-3">
              <div class="grid grid-cols-12">
                <div class="col-span-1">e.</div>
                <div class="col-span-11">
                  Panji Perhubungan Memasuki Lapangan Upacara;
                </div>
              </div>
            </div>
            <div class="ms-3">
              <div class="grid grid-cols-12">
                <div class="col-span-1">f.</div>
                <div class="col-span-11">
                  Penghormatan kepada Panji Perhubungan;
                </div>
              </div>
            </div>
            <div class="ms-3">
              <div class="grid grid-cols-12">
                <div class="col-span-1">g.</div>
                <div class="col-span-11">Pembacaan Laporan Pendidikan;</div>
              </div>
            </div>
            <div class="ms-3">
              <div class="grid grid-cols-12">
                <div class="col-span-1">h.</div>
                <div class="col-span-11">
                  Pernyataan Wisuda Perwira Transportasi Laut;
                </div>
              </div>
            </div>
            <div class="ms-3">
              <div class="grid grid-cols-12">
                <div class="col-span-1">i.</div>
                <div class="col-span-11">
                  Prosesi Wisuda; (Penyematan Epolet, Pengalungan Samir,
                  Penyerahan Ijasah, Pemercikan Tirta dan Ikrar Perwira);
                </div>
              </div>
            </div>
            <div class="ms-3">
              <div class="grid grid-cols-12">
                <div class="col-span-1">j.</div>
                <div class="col-span-11">Amanat Inspektur Upacara;</div>
              </div>
            </div>
            <div class="ms-3">
              <div class="grid grid-cols-12">
                <div class="col-span-1">k.</div>
                <div class="col-span-11">Do'a;</div>
              </div>
            </div>
            <div class="ms-3">
              <div class="grid grid-cols-12">
                <div class="col-span-1">l.</div>
                <div class="col-span-11">Andhika Bhayangkari;</div>
              </div>
            </div>
            <div class="ms-3">
              <div class="grid grid-cols-12">
                <div class="col-span-1">m.</div>
                <div class="col-span-11">Mars Perhubungan;</div>
              </div>
            </div>
            <div class="ms-3">
              <div class="grid grid-cols-12">
                <div class="col-span-1">n.</div>
                <div class="col-span-11">
                  Penghoramatan Kepada Panji Perhubungan;
                </div>
              </div>
            </div>
            <div class="ms-3">
              <div class="grid grid-cols-12">
                <div class="col-span-1">o.</div>
                <div class="col-span-11">
                  Panji Perhubungan Meninggalkan Lapangan Upacara;
                </div>
              </div>
            </div>
            <div class="ms-3">
              <div class="grid grid-cols-12">
                <div class="col-span-1">p.</div>
                <div class="col-span-11">Laporan Komandan Upacara;</div>
              </div>
            </div>
            <div class="ms-3">
              <div class="grid grid-cols-12">
                <div class="col-span-1">q.</div>
                <div class="col-span-11">
                  Penghormatan Umum kepada Inspektur Upacara;
                </div>
              </div>
            </div>

            <div class="mt-2 mb-2">4. ACARA PENUTUP</div>
            <div class="ms-3">
              <div class="grid grid-cols-12">
                <div class="col-span-1">a.</div>
                <div class="col-span-11">
                  Inspektur Upacara kembali ke mimbar kehoramatan;
                </div>
              </div>
            </div>
            <div class="ms-3">
              <div class="grid grid-cols-12">
                <div class="col-span-1">b.</div>
                <div class="col-span-11">Laporan Perwira Upacara;</div>
              </div>
            </div>
            <div class="ms-3">
              <div class="grid grid-cols-12">
                <div class="col-span-1">c.</div>
                <div class="col-span-11">
                  Komandan upacara meninggalkan lapangan upacara;
                </div>
              </div>
            </div>

            <div class="mt-2 mb-2">5. ACARA TAMBAHAN</div>
            <div class="ms-3">
              <div class="grid grid-cols-12">
                <div class="col-span-1">a.</div>
                <div class="col-span-11">
                  Pemasangan Samir Oleh Keluarga Perwira Transportasi Laut
                </div>
              </div>
            </div>
            <div class="ms-3">
              <div class="grid grid-cols-12">
                <div class="col-span-1">b.</div>
                <div class="col-span-11">
                  Perwujudan Tanda Kesetiaan Terhadap NKRI diiringi lagu bagimu
                  negeri (disesuaikan dengan tempat upacara)
                </div>
              </div>
            </div>
            <div class="ms-3">
              <div class="grid grid-cols-12">
                <div class="col-span-1">c.</div>
                <div class="col-span-11">
                  Penyerahan Lulusan Kepada Korps Alumni
                </div>
              </div>
            </div>
            <div class="ms-3">
              <div class="grid grid-cols-12">
                <div class="col-span-1">d.</div>
                <div class="col-span-11">
                  Penandatanganan Kerjasama dengan : <br />
                  - Pusat Penerbangan TNI Angkatan Laut <br />
                  - Dinas Pendidikan Provinsi Jawa Timur <br />
                  - Dinas Kebudayaan, Kepemudaan dan Olahraga serta Pariwisata
                  Kota Surabaya <br />
                  - PT. PELNI <br />
                  - PT. ASDP INDONESIA FERRY <br />
                  - PT. ASIA MARINE TEMAS <br />
                  - PT. DELI PRATAMA ANGKUTAN LAUT <br />
                  - PT. CITRABARU ADINUSANTARA <br />
                  - PT. PELAYARAN NASIONAL EKALYA PURNAMASARI. <br />
                  Kembali ke mimbar kehormatan;
                </div>
              </div>
            </div>
            <div class="ms-3">
              <div class="grid grid-cols-12">
                <div class="col-span-1">e.</div>
                <div class="col-span-11">
                  Pemberian santunan kepada anak yatim di serahkan oleh Ibu-Ibu
                  DWP;
                </div>
              </div>
            </div>
            <div class="ms-3">
              <div class="grid grid-cols-12">
                <div class="col-span-1">f.</div>
                <div class="col-span-11">Sesi Foto Bersama</div>
              </div>
            </div>
            <div class="ms-3">
              <div class="grid grid-cols-12">
                <div class="col-span-1">g.</div>
                <div class="col-span-11">Hat Toast / Lempar Pet</div>
              </div>
            </div>
            <div class="ms-3">
              <div class="grid grid-cols-12">
                <div class="col-span-1">h.</div>
                <div class="col-span-11">
                  Rangkaian Upacara selesai, ucapan terimakasih, dilanjutkan
                  dengan acara tambahan; 1) Penampilan Passing Out Parade 2)
                  Abandon Ship 3) Tari Kolosal Reog Ponorogo 4) Penampilan
                  Marching Band
                </div>
              </div>
            </div>

            <div class="mt-2 mb-2">6. ACARA RAMAH TAMAH</div>
            <div class="ms-3">
              <div class="grid grid-cols-12">
                <div class="col-span-1">a.</div>
                <div class="col-span-11">
                  Tamu undangan VIP dan VVIP menuju Ruang Ramah Tamah;
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="section-layout-denah text-center px-5">
            <img :src="denahParkir" alt="denah" class="img-fluid" />
          </div> -->
          <div class="section-layout-lapangan text-center">
            <div
              class="p-10 rounded font-bold overflow-hidden shadow-lg border-sky-100"
            >
              <div class="tetx-lg">DENAH LAPANGAN UPACARA</div>
              <div class="text-lg">
                WISUDA KE-55 DAN PELEPASAN PERWIRA TRANSPORTASI LAUT
              </div>
              <div class="text-md mt-2">POLITEKNIK PELAYARAN SURABAYA</div>
              <div class="text-md mb-5">TAHUN 2026</div>
              <img :src="layoutUpacara" alt="layout" class="img-fluid" />
            </div>
          </div>
          <!-- <div class="section-layout-lapangan text-center">
            <img :src="layoutTempatDuduk" alt="layout" class="img-fluid" />
          </div> -->
          <div class="section-lokasi text-center">
            <h2 class="text-section text-lg font-bold">Lokasi</h2>
            <iframe
              v-if="detailContact.gate == 'A'"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1978.5505797809205!2d112.79250048772934!3d-7.342536181283759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fab3d7416aad%3A0xf0e5a59bb2199674!2sPoliteknik%20Pelayaran%20Surabaya!5e0!3m2!1sid!2ssg!4v1740317025524!5m2!1sid!2ssg"
              width="100%"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <iframe
              v-if="
                detailContact.gate == 'B' ||
                detailContact == 'Politeknik Pelayaran Surabaya'
              "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1978.5387315413402!2d112.7934721179081!3d-7.345198382956895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbebcd81e647%3A0x20a1a151eabcedfe!2sPoltekpel%20Surabaya!5e0!3m2!1sid!2ssg!4v1740316827069!5m2!1sid!2ssg"
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
    <div
      class="section-social-media d-none"
      id="content-page-footer"
      v-if="showContent"
    >
      <h2 class="text-center">Follow Sosial Media</h2>
      <h2 class="text-center">Politeknik Pelayaran Surabaya</h2>
      <div class="grid grid-cols-2 gap-5 mt-5">
        <div class="sosial-media-list">
          <a
            href="https://www.instagram.com/poltekpel_sby/?hl=id"
            target="_blank"
          >
            <div class="flex flex-col justify-center items-center">
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
              <div class="text-xs">poltekpel_sby</div>
            </div>
          </a>
        </div>
        <div class="sosial-media-list">
          <a href="https://twitter.com/poltekpel_sby" target="_blank">
            <div class="flex flex-col justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-twitter-x"
                viewBox="0 0 16 16"
              >
                <path
                  d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
                />
              </svg>
              <div class="text-xs">@poltekpel_sby</div>
            </div>
          </a>
        </div>
        <div class="sosial-media-list">
          <a
            href="https://www.facebook.com/poltekpelsurabaya/?locale=id_ID"
            target="_blank"
          >
            <div class="flex flex-col justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"
                />
              </svg>
              <div class="text-xs text-center">
                Politeknik Pelayaran Surabaya
              </div>
            </div>
          </a>
        </div>
        <div class="sosial-media-list">
          <a
            href="https://www.tiktok.com/@poltekpel_sby?lang=id-ID"
            target="_blank"
          >
            <div class="flex flex-col justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-tiktok"
                viewBox="0 0 16 16"
              >
                <path
                  d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"
                />
              </svg>
              <div class="text-xs">poltekpel_sby</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import marsPerhubungan from "@/public/wisuda52poltekpelsby/mars-perhubungan.mp3";
import layoutUpacara from "@/public/wisuda55poltekpelsby/layout-lapangan.png";
import layoutTempatDuduk from "@/public/wisuda54poltekpelsby/p2s-w54-layout-upacara-inv.webp";
import denahParkir from "@/public/wisuda54poltekpelsby/p2s-w54-denah_parkir.png";
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

const loadData = async () => {
  if (router.currentRoute.value.query.id != undefined) {
    let eventDetail = await useCustomFetch(
      `api/event/domain/${"wisuda53poltekpelsby.telanusa.com"}`,
      "get",
      {},
      true,
    );

    let response = await useCustomFetch(
      `api/event-seat/detail-contact-seat/${eventDetail.data.value.data.id}/${router.currentRoute.value.query.id}`,
      "get",
      {},
      true,
    );
    detailContact.value = response?.data?.value?.data;
  }
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
  ogImage: "../../public/wisuda53poltekpelsby/logo.png",
});
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Lexend+Deca:wght@100..900&family=Mukta+Malar:wght@200;300;400;500;600;700;800&display=swap");
.container {
  max-width: 600px !important;
  margin-left: auto;
  margin-right: auto;
}
.img-top-welcome {
  width: 100px;
}
.logo-top-welcome {
  width: 60px;
  height: auto;
  object-fit: contain;
  margin-left: 5px;
  margin-right: 5px;
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
  padding: 30px 30px 40px 30px;
  background-color: #93d8f7;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  color: #205397 !important;
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
  background-color: #93d8f7;
  color: black !important;
  margin-top: 50px;
  text-decoration: none;
  padding: 15px 15px 40px 15px;
}
.section-social-media a {
  color: #000 !important;
}
.page-welcome {
  background-image: url("../../public/wisuda55poltekpelsby/w55-main-bg-resize.png");
  background-position: center;
  height: 1100px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
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
.btn-invitation {
  position: absolute;
  top: 900px;
  background-color: #024497;
}
@media (max-width: 576px) {
  .page-welcome {
    height: 780px;
    background-size: 100% 100%;
  }
  .btn-invitation {
    top: 650px;
  }
  .section-layout-welcome {
    position: relative;
  }
  .image-welcome {
    height: 150px;
    width: 100%;
    object-fit: cover;
  }
}
.text-top-welcome {
  padding: 0px 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.logo-stack {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(10px, 3vw, 20px);
  width: 100%;
}
.logo-main {
  display: block;
  height: clamp(58px, 16vw, 96px);
  width: auto;
  object-fit: contain;
}
.logo-row {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  gap: clamp(8px, 3vw, 25px);
}
.logo-row img {
  display: block;
  height: clamp(35px, 6.5vw, 38px);
  width: auto;
  object-fit: contain;
}
.text-content .with-shadow {
  font-weight: 800;
  letter-spacing: 0.02em;
  -webkit-text-stroke: 2px #ffffff;
  paint-order: stroke fill;
  text-shadow: -1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff,
    1px 1px 0 #ffffff;
}
.text-headline {
  font-family: "Lexend Deca", sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: italic;
  color: #0097de;
  font-size: 28px;
  line-height: 1;
  text-shadow: 1px 1px 4px rgb(251 251 251);
}
.text-headline-2 {
  font-family: "Lexend Deca", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  color: #002f77;
  font-size: 22px;
  line-height: 1;
  text-shadow: 1px 1px 2px rgba(69, 69, 69, 0.38);
}
.text-headline-3 {
  font-family: "Mukta Malar", sans-serif;
  font-weight: 800;
  font-style: italic;
  line-height: 1;
  font-size: 25px;
  color: #005397;
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
