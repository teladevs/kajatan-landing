<template>
  <div class="container">
    <div class="detail-info mt-5 mb-5 w-full">
      <div
        class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <div>
          <div class="px-4 sm:px-0">
            <h3 class="text-lg text-center font-semibold leading-7 text-slate-100">
              Informasi Keluarga <br />
              Wisudawan / Pasis
            </h3>
          </div>
          <div class="mt-6 border-gray-300">
            <dl class="divide-y divide-gray-100">
              <div class="px-1 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-slate-400">
                  Nama Wisudawan / Pasis
                </dt>
                <dd
                  class="mt-1 text-sm leading-6 font-bold text-gray-100 sm:col-span-2 sm:mt-0"
                >
                  {{ detailContact.name }}
                </dd>
              </div>
              <div class="px-1 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-slate-400">Jurusan</dt>
                <dd
                  class="mt-1 text-sm leading-6 font-bold text-gray-100 sm:col-span-2 sm:mt-0"
                >
                  <!-- {{ detailContact.study }} -->
                  {{ detailContact.jurusan }}
                </dd>
              </div>
              <div class="px-1 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-slate-400">Zona Parkir</dt>
                <dd
                  class="mt-1 text-sm leading-6 font-bold text-gray-100 sm:col-span-2 sm:mt-0"
                >
                  ZONA {{ detailContact.zona }}
                </dd>
              </div>
              <div class="px-1 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-slate-400">Pintu Masuk</dt>
                <dd
                  class="mt-1 text-sm leading-6 font-bold text-gray-100 sm:col-span-2 sm:mt-0 text-capitalize"
                >
                  PINTU {{ detailContact.gate }}
                </dd>
              </div>
              <div class="px-1 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-slate-400">Tempat Duduk</dt>
                <dd
                  class="mt-1 text-sm leading-6 font-bold text-gray-100 sm:col-span-2 sm:mt-0"
                >
                  <!-- BLOK II - {{ detailContact.study }} -->
                  {{ detailContact?.nama_sektor }}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-full p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
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
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import imageDenahLapangan from "../../public/wisuda51poltekpelsby/layout-seat.jpg";
const url = useRequestURL();

const router = useRouter();
const detailContact = ref({});

const loadData = async () => {
  let eventDetail = await useCustomFetch(
    `api/event/domain/${"wisuda51poltekpelsby.telanusa.com"}`,
    "get",
    {},
    true
  );

  let response = await useCustomFetch(
    `api/event-seat/detail-contact-seat/${eventDetail.data.value.data.id}/${router.currentRoute.value.query.id}`,
    "get",
    {},
    true
  );
  detailContact.value = response?.data?.value?.data;
};

setTimeout(() => {
  loadData();
}, 1000);
</script>
<style scoped>
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
  background-color: #0000ff;
  color: white;
}
.seat.booked.DP-II {
  background-color: #000080;
  color: white;
}
.seat.booked.DP-III {
  background-color: #ff0000;
  color: white;
}
.seat.booked.DP-IV {
  background-color: #add8e6;
  color: black;
}
.seat.booked.DP-V {
  background-color: #00ff00;
  color: black;
}
.seat.booked.TROK {
  background-color: #ffff00;
  color: black;
}
.seat.booked.TRPK {
  background-color: #ffa500;
  color: white;
}
.seat.booked.TRKK {
  background-color: #800080;
  color: white;
}
.seat.booked.TRANSLA {
  background-color: #ffc0cb;
  color: black;
}
.seat.booked.D-III-NAUTIKA {
  background-color: #8b4513;
  color: white;
}
.seat.booked.D-III-TEKNIKA {
  background-color: #808080;
  color: white;
}
.seat.booked.D-III-ETO {
  background-color: #008080;
  color: white;
}
</style>
