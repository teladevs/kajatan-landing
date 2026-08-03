<template>
  <div class="container">
    <div class="detail-info mt-5 mb-5 w-full">
      <div
        class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow bg-seat"
      >
        <div>
          <div class="px-4 sm:px-0">
            <h3
              class="text-lg text-center font-semibold leading-7 text-[#024497]"
            >
              Informasi Keluarga <br />
              Wisudawan / Pasis
            </h3>
          </div>
          <div class="mt-6 border-gray-300">
            <dl class="divide-y divide-gray-100">
              <div class="px-1 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt
                  class="text-sm font-medium leading-6 text-column text-black"
                >
                  Nama Wisudawan / Pasis
                </dt>
                <dd
                  class="mt-1 text-sm leading-6 font-bold sm:col-span-2 sm:mt-0 text-[#024497]"
                >
                  {{ detailContact.name }}
                </dd>
              </div>
              <div class="px-1 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt
                  class="text-sm font-medium leading-6 text-column text-black"
                >
                  Jurusan
                </dt>
                <dd
                  class="mt-1 text-sm leading-6 font-bold sm:col-span-2 sm:mt-0 text-[#024497]"
                >
                  {{ detailContact.jurusan }}
                </dd>
              </div>
              <!-- <div class="px-1 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-column">
                  Zona Parkir
                </dt>
                <dd
                  class="mt-1 text-sm leading-6 font-bold text-gray-100 sm:col-span-2 sm:mt-0"
                >
                  ZONA {{ detailContact.zona }}
                </dd>
              </div> -->
              <!-- <div class="px-1 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-column">
                  Pintu Masuk
                </dt>
                <dd
                  class="mt-1 text-sm leading-6 font-bold text-gray-100 sm:col-span-2 sm:mt-0 text-capitalize"
                >
                  PINTU {{ detailContact.gate }}
                </dd>
              </div> -->
              <!-- <div class="px-1 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-column">
                  Tempat Duduk
                </dt>
                <dd
                  class="mt-1 text-sm leading-6 font-bold text-gray-100 sm:col-span-2 sm:mt-0"
                >
                  <div>Sektor {{ detailContact?.nama_sektor }}</div>
                </dd>
              </div> -->
            </dl>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-full p-3 bg-white border border-gray-200 rounded-lg shadow bg-seat"
    >
      <div class="section-lokasi text-center">
        <h2
          class="text-section text-lg font-bold text-slate-100 mt-2 mb-4 text-[#024497]"
        >
          Lokasi
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.7252604615237!2d106.564792574749!3d-6.032392793953149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a070e31381713%3A0xd7ecd75837ebe62!2sPoliteknik%20Pelayaran%20Banten!5e0!3m2!1sen!2sid!4v1770456314329!5m2!1sen!2sid"
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
</template>
<script setup>
import { useRouter } from "vue-router";
const url = useRequestURL();

const router = useRouter();
const detailContact = ref({});

const loadData = async () => {
  let eventDetail = await useCustomFetch(
    `api/event/domain/${"bonvoyagepoltekpelbanten.telanusa.com"}`,
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
  background-color: #88d1ef;
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
