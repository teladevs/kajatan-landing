<template>
  <div class="seat-container">
    <div class="grid grid-cols-3 gap-5 text-center">
      <div v-for="(valSec, idxSec) in sectorAll">
        <div class="text-center my-10">{{ valSec.name }}</div>
        <div class="grid grid-cols-4 gap-4">
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
.seat {
  width: 50px;
  height: 50px;
  background-color: gray;
}
.seat.booked {
  width: 50px;
  height: 50px;
  background-color: red;
}
</style>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const sectorAll = [
  { name: "Sector A", sector: "sca", total: 20 },
  { name: "Sector B", sector: "scb", total: 10 },
  { name: "Sector C", sector: "scc", total: 30 },
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
