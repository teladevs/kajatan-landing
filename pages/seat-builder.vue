<template>
  <div class="min-h-screen bg-slate-50 p-6 text-slate-800 pb-28 w-full">
    <header class="text-center mb-8">
      <h1 class="text-2xl font-bold text-slate-900 mb-2">
        Simulasi Layout Kursi Event
      </h1>
    </header>
    <div class="flex flex-wrap items-start gap-6 mx-auto scroll-seat">
      <div
        v-for="sector in sectors"
        :key="sector.id"
        class="bg-white rounded-xl p-5 shadow-sm border border-slate-200 w-fit shrink-0"
      >
        <div
          class="flex justify-between items-center pb-3 mb-4 border-b border-slate-100 gap-4"
        >
          <div>
            <h2 class="font-bold text-base" :class="sector.textColor">
              {{ sector.name }}
            </h2>
            <p class="text-[11px] text-slate-400">
              {{ sector.rows }} Baris × {{ sector.cols }} Kolom
            </p>
          </div>
          <span
            class="text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-medium"
          >
            {{ sector.rows * sector.cols }} Kursi
          </span>
        </div>

        <div class="space-y-1.5">
          <div
            v-for="rowIndex in sector.rows"
            :key="rowIndex"
            class="flex items-center gap-2"
          >
            <span
              class="w-4 text-[11px] font-bold text-slate-400 text-center select-none"
            >
              {{ getRowLabel(rowIndex) }}
            </span>

            <div
              class="grid gap-1.5"
              :style="{ gridTemplateColumns: `repeat(${sector.cols}, 40px)` }"
            >
              <button
                v-for="colIndex in sector.cols"
                :key="getSeatCode(sector, rowIndex, colIndex)"
                @click="toggleSeat(getSeatCode(sector, rowIndex, colIndex))"
                :class="[
                  'w-[40px] h-7 text-[10px] font-semibold rounded transition-all duration-150 flex items-center justify-center select-none shrink-0',
                  isSeatSelected(getSeatCode(sector, rowIndex, colIndex))
                    ? 'bg-emerald-500 text-white ring-2 ring-emerald-300 shadow-sm scale-105 z-10'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/80',
                ]"
              >
                {{ getSeatNumber(sector, rowIndex, colIndex) }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-slate-200 text-sm font-medium flex items-center gap-3 z-50"
    >
      <span class="text-slate-500">Terpilih ({{ selectedSeats.length }}):</span>
      <span class="text-emerald-600 font-bold max-w-xs truncate">
        {{ selectedSeats.length > 0 ? selectedSeats.join(", ") : "Belum ada" }}
      </span>
      <button
        v-if="selectedSeats.length > 0"
        @click="selectedSeats = []"
        class="text-xs text-rose-500 hover:underline ml-2"
      >
        Reset
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const sectors = [
  {
    id: "sec-1",
    name: "Sektor 1",
    prefix: "S1",
    textColor: "text-blue-600",
    rows: 15,
    cols: 10,
  },
  {
    id: "sec-2",
    name: "Sektor 2",
    prefix: "S2",
    textColor: "text-emerald-600",
    rows: 15,
    cols: 10,
  },
  {
    id: "sec-3",
    name: "Sektor 3",
    prefix: "S3",
    textColor: "text-amber-600",
    rows: 15,
    cols: 10,
  },
  {
    id: "sec-4",
    name: "Sektor 4",
    prefix: "S4",
    textColor: "text-purple-600",
    rows: 15,
    cols: 10,
  },
  {
    id: "sec-5",
    name: "Sektor 5",
    prefix: "S5",
    textColor: "text-sky-600",
    rows: 15,
    cols: 3,
  },
  {
    id: "sec-6",
    name: "Sektor 6",
    prefix: "S6",
    textColor: "text-lime-600",
    rows: 15,
    cols: 3,
  },
  {
    id: "sec-7",
    name: "Sektor 7",
    prefix: "S7",
    textColor: "text-orange-600",
    rows: 15,
    cols: 10,
  },
  {
    id: "sec-8",
    name: "Sektor 8",
    prefix: "S8",
    textColor: "text-cyan-600",
    rows: 15,
    cols: 10,
  },
  {
    id: "sec-9",
    name: "Sektor 9",
    prefix: "S9",
    textColor: "text-fuchsia-600",
    rows: 15,
    cols: 10,
  },
  {
    id: "sec-10",
    name: "Sektor 10",
    prefix: "S10",
    textColor: "text-rose-600",
    rows: 15,
    cols: 10,
  },
];

const selectedSeats = ref([]);

const getStartCol = (sectorId) => {
  const sectorIndex = sectors.findIndex((s) => s.id === sectorId);
  let startCol = 1;
  for (let i = 0; i < sectorIndex; i++) {
    startCol += sectors[i].cols;
  }
  return startCol;
};

const getRowLabel = (index) => {
  return String.fromCharCode(64 + index);
};

const getSeatNumber = (sector, rowIndex, colIndex) => {
  const rowLabel = getRowLabel(rowIndex);
  const startCol = getStartCol(sector.id);
  const actualSeatNumber = startCol + (colIndex - 1);
  return `${rowLabel}${actualSeatNumber}`;
};

const getSeatCode = (sector, rowIndex, colIndex) => {
  return `${sector.prefix}-${getSeatNumber(sector, rowIndex, colIndex)}`;
};

const toggleSeat = (seatId) => {
  const index = selectedSeats.value.indexOf(seatId);
  if (index === -1) {
    selectedSeats.value.push(seatId);
  } else {
    selectedSeats.value.splice(index, 1);
  }
};

const isSeatSelected = (seatId) => {
  return selectedSeats.value.includes(seatId);
};
</script>
<style>
.scroll-seat {
  width: 4500px;
  overflow-x: scroll;
}
</style>
