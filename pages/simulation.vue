<template>
  <div class="seat-container">
    <div class="grid grid-cols-9 gap-5 text-center">
      <div v-for="(valSec, idxSec) in sectorAll">
        <div class="text-center my-10">{{ valSec.name }}</div>
        <div class="grid grid-cols-10 gap-2" v-if="valSec.name !== 'Sector E'">
          <div
            class="seat flex items-center justify-center"
            :id="`sector-${valSec.sector}-${idxSeat + 1}`"
            v-for="(valSeat, idxSeat) in valSec.total"
          >
            {{ idxSeat + 1 }}
          </div>
        </div>
        <div class="grid grid-cols-6 gap-2" v-if="valSec.name === 'Sector E'">
          <div
            class="seat flex items-center justify-center"
            :id="`sector-${valSec.sector}-${idxSeat + 1}`"
            v-for="(valSeat, idxSeat) in valSec.total"
          >
            {{ idxSeat + 1 }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.seat-container {
  width: 4000px;
}
.seat {
  width: 35px;
  height: 35px;
  background-color: gray;
}
.seat.booked {
  background-color: red;
}
</style>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
console.log(router);
const sectorAll = [
  { name: "Sector A", sector: "sca", total: 160 },
  { name: "Sector B", sector: "scb", total: 160 },
  { name: "Sector C", sector: "scc", total: 160 },
  { name: "Sector D", sector: "scd", total: 160 },
  { name: "Sector E", sector: "sce", total: 96 },
  { name: "Sector F", sector: "scf", total: 160 },
  { name: "Sector G", sector: "scg", total: 160 },
  { name: "Sector H", sector: "sch", total: 160 },
  { name: "Sector I", sector: "sci", total: 160 },
];

const seatBooked = [
  "sector-sca-1",
  "sector-sca-2",
  "sector-sca-3",
  "sector-sca-4",
  "sector-sca-5",
  "sector-sca-6",
  "sector-sca-7",
  "sector-sca-8",
  "sector-sca-9",
  "sector-sca-10",
  "sector-sca-11",
  "sector-sca-12",
  "sector-sca-13",
  "sector-sca-14",
  "sector-sca-15",
  "sector-sca-16",
  "sector-sca-17",
  "sector-sca-18",
  "sector-sca-19",
  "sector-sca-20",
];

const setSeatBooked = () => {
  seatBooked.forEach((val, idx) => {
    const element = document.querySelector(`#${val}`);
    if (element) {
      element.classList.add("booked");
    }
  });
};

setTimeout(() => {
  setSeatBooked();
}, 1500);
</script>
