<template>
  <div class="seat-container">
    <div class="text-center text-3xl font-bold pt-10">
      SKEMA LAYOUT KURSI <br />
      PELANTIKAN DAN PELEPASAN PERWIRA TRANSPORTASI LAUT
    </div>

    <div class="sector-block text-center py-10 px-10">
      <div
        v-for="(valSec, idxSec) in sectorAll"
        :key="idxSec"
        class="grid-sector"
      >
        <div class="text-center text-2xl font-bold text-slate-100 my-10">
          {{ valSec.name }}
        </div>

        <div :class="`grid grid-cols-${valSec.column} gap-2`">
          <div
            v-for="(valSeat, idxSeat) in valSec.total"
            :key="idxSeat"
            class="seat flex items-center justify-center"
            :class="getSeatClass(valSec.sector, idxSeat)"
          >
            {{ idxSeat + 1 }}
          </div>
        </div>
      </div>
    </div>

    <!-- LEGEND -->
    <div class="container ml-20 mt-5">
      <div class="flex flex-col gap-2">
        <div class="flex items-center">
          <div class="w-5 h-5 mr-3 booked DIPLOMA-III"></div>
          <div class="text-xl font-bold">DIPLOMA III = 266</div>
        </div>

        <div class="flex items-center">
          <div class="w-5 h-5 mr-3 booked DP-III"></div>
          <div class="text-xl font-bold">DP-III = 64</div>
        </div>

        <div class="flex items-center">
          <div class="w-5 h-5 mr-3 booked DP-II"></div>
          <div class="text-xl font-bold">DP-II = 342</div>
        </div>

        <div class="flex items-center mt-3">
          <div class="w-5 h-5 mr-3 vip"></div>
          <div class="text-xl font-bold">VVIP</div>
        </div>

        <div class="flex items-center">
          <div class="w-5 h-5 mr-3 inspektur"></div>
          <div class="text-xl font-bold">Inspektur Upacara</div>
        </div>

        <div class="flex items-center">
          <div class="w-5 h-5 mr-3 perwira"></div>
          <div class="text-xl font-bold">Perwira Upacara</div>
        </div>

        <div class="flex items-center">
          <div class="w-5 h-5 mr-3 dw"></div>
          <div class="text-xl font-bold">DW</div>
        </div>

        <div class="flex items-center">
          <div class="w-5 h-5 mr-3 anak-yatim"></div>
          <div class="text-xl font-bold">Anak Yatim</div>
        </div>

        <div class="flex items-center">
          <div class="w-5 h-5 mr-3 steril"></div>
          <div class="text-xl font-bold">Steril</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sector-block {
  display: flex;
}

.grid-sector {
  width: 250px;
  margin: 0 10px;
}

.seat-container {
  width: 2050px;
  height: 100vh;
  background-color: #429ac0;
}

.seat {
  width: 24px;
  height: 20px;
  border-radius: 6px 6px 0 0;
  font-size: 9px;
  background-color: #ededed;
}

/* DEFAULT GROUP COLORS */
.booked.DIPLOMA-III {
  background-color: #ffffff;
  color: black;
}

.booked.DP-III {
  background-color: #ffffff;
  color: black;
}

.booked.DP-II {
  background-color: #ffffff;
  color: black;
}

/* VVIP */
.vip {
  background-color: #ffffff;
  border: 2px solid #000;
}

/* SPECIAL */
.inspektur {
  background-color: gold;
  color: black;
}

.perwira {
  background-color: orange;
  color: black;
}

.dw {
  background-color: purple;
  color: white;
}

.anak-yatim {
  background-color: pink;
  color: black;
}

.steril {
  background-color: #ccc;
}
</style>

<script setup>
const sectorAll = [
  { name: "S1", sector: 1, total: 100, column: 10 },
  { name: "S2", sector: 2, total: 100, column: 10 },
  { name: "S3", sector: 3, total: 120, column: 10 },
  { name: "S4", sector: 4, total: 120, column: 10 },
  { name: "S5", sector: 5, total: 120, column: 10 },
  { name: "S6", sector: 6, total: 100, column: 10 },
  { name: "S7", sector: 7, total: 100, column: 10 },
];

let diplomaQuota = 266;
let dp3Quota = 64;

const seatMap = new Map();

const getSeatClass = (sector, idxSeat) => {
  const key = `${sector}-${idxSeat}`;
  if (seatMap.has(key)) return seatMap.get(key);

  let result = "";
  const seatNumber = idxSeat + 1;

  // =========================
  // 1. VVIP
  // =========================
  if ([3, 4, 5].includes(sector) && idxSeat < 20) {
    result = "vip";
  }

  // =========================
  // 2. SPECIAL RULES
  // =========================
  else if (sector === 4 && seatNumber === 6) {
    result = "inspektur";
  } else if (sector === 6 && seatNumber === 1) {
    result = "perwira";
  } else if (sector === 3 && seatNumber >= 21 && seatNumber <= 40) {
    result = "dw";
  } else if (sector === 5 && seatNumber >= 21 && seatNumber <= 40) {
    result = "anak-yatim";
  } else if (sector === 4 && seatNumber >= 21) {
    result = "steril";
  }

  // =========================
  // 3. QUOTA LOGIC
  // =========================
  else if (sector >= 1 && sector <= 3) {
    if (diplomaQuota > 0) {
      result = "booked DIPLOMA-III";
      diplomaQuota--;
    } else {
      result = "booked DP-II";
    }
  } else if (sector === 4) {
    if (dp3Quota > 0) {
      result = "booked DP-III";
      dp3Quota--;
    } else {
      result = "booked DP-II";
    }
  } else {
    result = "booked DP-II";
  }

  seatMap.set(key, result);
  return result;
};
</script>
