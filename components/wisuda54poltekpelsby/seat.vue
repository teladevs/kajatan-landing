<template>
  <div class="container">
    <div class="detail-info mt-5 mb-5 w-full">
      <div
        class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow bg-seat"
      >
        <div>
          <div class="px-4 sm:px-0">
            <h3
              class="text-lg text-center font-semibold leading-7 text-slate-100"
            >
              Informasi Keluarga <br />
              Wisudawan / Pasis
            </h3>
          </div>
          <div class="mt-6 border-gray-300">
            <dl class="divide-y divide-gray-100">
              <div class="px-1 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-column">
                  Nama Wisudawan / Pasis
                </dt>
                <dd
                  class="mt-1 text-sm leading-6 font-bold text-gray-100 sm:col-span-2 sm:mt-0"
                >
                  {{ detailContact.name }}
                </dd>
              </div>
              <div class="px-1 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-column">
                  Jurusan
                </dt>
                <dd
                  class="mt-1 text-sm leading-6 font-bold text-gray-100 sm:col-span-2 sm:mt-0"
                >
                  <!-- {{ detailContact.study }} -->
                  {{ detailContact.jurusan }}
                </dd>
              </div>
              <div class="px-1 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-column">
                  Zona Parkir
                </dt>
                <dd
                  class="mt-1 text-sm leading-6 font-bold text-gray-100 sm:col-span-2 sm:mt-0"
                >
                  ZONA {{ detailContact.zona }}
                </dd>
              </div>
              <div class="px-1 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-column">
                  Pintu Masuk
                </dt>
                <dd
                  class="mt-1 text-sm leading-6 font-bold text-gray-100 sm:col-span-2 sm:mt-0 text-capitalize"
                >
                  PINTU {{ detailContact.gate }}
                </dd>
              </div>
              <div class="px-1 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-column">
                  Tempat Duduk
                </dt>
                <dd
                  class="mt-1 text-sm leading-6 font-bold text-gray-100 sm:col-span-2 sm:mt-0"
                >
                  <div>Sektor {{ detailContact?.nama_sektor }}</div>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-full p-3 bg-white border border-gray-200 rounded-lg shadow bg-seat"
    >
      <div class="seat-block pb-5">
        <div class="text-md w-full text-center mb-2 font-bold text-slate-100">
          DENAH TEMPAT DUDUK
        </div>
        <div class="grid grid-cols-1 gap-5">
          <div
            class="seat booked block-sector flex justify-center flex-col p-2"
            :class="detailContact?.kategori"
          >
            <div class="text-base font-bold w-full text-center mb-2">
              {{ detailContact?.jurusan }}
            </div>
          </div>
        </div>
      </div>
      <div class="w-full my-10">
        <div class="w-full text-center text-slate-100 mb-5 text-md font-bold">
          Layout Tempat Duduk Lapangan
        </div>
        <img :src="imageDenahLapangan" alt="" />
      </div>
      <div class="section-lokasi text-center">
        <h2 class="text-section text-lg font-bold text-slate-100 mt-2 mb-4">
          Lokasi
        </h2>
        <div class="maps" v-if="detailContact?.gate == 'A'">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1978.5505797809205!2d112.79250048772934!3d-7.342536181283759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fab3d7416aad%3A0xf0e5a59bb2199674!2sPoliteknik%20Pelayaran%20Surabaya!5e0!3m2!1sid!2ssg!4v1740317025524!5m2!1sid!2ssg"
            width="100%"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="maps" v-if="detailContact?.gate == 'B'">
          <iframe
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
</template>
<script setup>
import { useRouter } from "vue-router";
import imageDenahLapangan from "../../public/wisuda53poltekpelsby/w53-layout_seat_mobile.webp";
const url = useRequestURL();

const router = useRouter();
const detailContact = ref({});

const loadData = async () => {
  let eventDetail = await useCustomFetch(
    `api/event/domain/${"wisuda54poltekpelsby.telanusa.com"}`,
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
};

setTimeout(() => {
  loadData();
}, 1000);
</script>
<style scoped>
.section-lokasi {
  padding-bottom: 50px;
}
.bg-seat {
  background-color: var(--53primary);
}
.text-column {
  color: #ffdab9 !important;
}
.container {
  max-width: 600px !important;
  margin-left: auto;
  margin-right: auto;
}
.block-sector {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}
.gatea {
  width: 100%;
  background-color: white;
  height: 100%;
}
.gateb {
  width: 100%;
  background-color: red;
  height: 100%;
}
.gatec {
  width: 100%;
  background-color: pink;
  height: 100%;
}
.dp1 {
  background-color: #ff0000;
  color: white;
}
.seat-icon {
  width: 20px;
  height: 20px;
  background-color: white;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.seat-sector-active-9 {
  background-color: yellow;
  color: black;
}
.seat-sector-active-10 {
  background-color: yellow;
  color: black;
}
.seat.booked.DP-I {
  background-color: #b3d5e7;
  color: black;
}
.seat.booked.DP-II {
  background-color: #b3d5e7;
  color: black;
}
.seat.booked.DP-III {
  background-color: #b3d5e7;
  color: black;
}
.seat.booked.DP-IV {
  background-color: #fac1cf;
  color: black;
}
.seat.booked.DP-V {
  background-color: #fac1cf;
  color: black;
}
.seat.booked.TROK {
  background-color: #6b3063;
  color: white;
}
.seat.booked.TRPK {
  background-color: #6b3063;
  color: white;
}
.seat.booked.TRKK {
  background-color: #6b3063;
  color: white;
}
.seat.booked.TRANSLA {
  background-color: #6b3063;
  color: white;
}
.seat.booked.D-III-NAUTIKA {
  background-color: #6b3063;
  color: white;
}
.seat.booked.D-III-TEKNIKA {
  background-color: #6b3063;
  color: white;
}
.seat.booked.D-III-ETO {
  background-color: #6b3063;
  color: white;
}
.seat.booked.DP-ETO {
  background-color: #fac1cf;
  color: black;
}
</style>
