<template>
  <div class="seat-container">
    <div class="sector-block text-center py-10 px-10">
      <div
        v-for="(valSec, idxSec) in sectorAll"
        :class="valSec.column == 3 ? 'grid-sector-3' : 'grid-sector'"
      >
        <div class="text-center text-2xl font-bold text-slate-100 my-10">
          {{ valSec.name }}
        </div>
        <div :class="`grid grid-cols-${valSec.column} gap-2`">
          <div
            class="seat flex items-center justify-center"
            :id="`sector-${valSec.sector}-${idxSeat}`"
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
.sector-block {
  display: flex;
  flex-direction: row;
}
.grid-sector {
  width: 250px;
  margin-left: 10px;
  margin-right: 10px;
}
.grid-sector-3 {
  width: 110px;
  margin-left: 10px;
  margin-right: 10px;
}
.seat-container {
  width: 3500px;
  height: 110vh;
  background-color: #429ac0;
}
.seat {
  width: 24px;
  height: 20px;
  border-radius: 6px 6px 0 0;
  font-size: 9px;
  line-height: 1;
}
.booked.YATIM {
  background-color: #ffc0cb;
  color: black;
}
.booked.VIP-VVIP {
  background-color: #ffffff;
  color: black;
}
/* .booked.DP-I {
  background-color: #b3d5e7;
  color: black;
}
.booked.right {
  background-color: #fac1cf;
  color: black;
}
.booked.center {
  background-color: #6b3063;
  color: white;
} */
.booked.DP-I {
  background-color: #0000ff;
  color: white;
}
.booked.DP-II {
  background-color: #000080;
  color: white;
}
.booked.DP-III {
  background-color: #ff0000;
  color: white;
}
.booked.DP-IV {
  background-color: #add8e6;
  color: black;
}
.booked.DP-V {
  background-color: #00ff00;
  color: black;
}
.booked.DP-ETO {
  background-color: #e98a07;
  color: black;
}
.booked.TROK {
  background-color: #ffff00;
  color: black;
}
.booked.TRPK {
  background-color: #ffa500;
  color: white;
}
.booked.TRKK {
  background-color: #800080;
  color: white;
}
.booked.TRANSLA {
  background-color: #ffc0cb;
  color: black;
}
.booked.D-III-NAUTIKA {
  background-color: #8b4513;
  color: white;
}
.booked.D-III-TEKNIKA {
  background-color: #a00e5a;
  color: white;
}
.booked.D-III-ETO {
  background-color: #008080;
  color: white;
}
</style>
<script setup>
const eventDetail = ref(null);
const loadData = async () => {
  eventDetail.value = await useCustomFetch(
    `api/event/domain/${"wisuda54poltekpelsby.telanusa.com"}`,
    "get",
    {},
    true,
  );
  setTimeout(() => {
    loadAllSectorsInQueue();
  }, 1500);
};

const sectorAll = [
  { name: "SEKTOR 1", sector: 1, total: 170, row: 15, column: 10 },
  { name: "SEKTOR 2", sector: 2, total: 170, row: 15, column: 10 },
  { name: "SEKTOR 3", sector: 3, total: 170, row: 15, column: 10 },
  { name: "SEKTOR 4", sector: 4, total: 100, row: 10, column: 10 },
  { name: "SEKTOR 5", sector: 5, total: 100, row: 10, column: 10 },
  { name: "SEKTOR 6", sector: 6, total: 100, row: 10, column: 10 },
  { name: "SEKTOR 7", sector: 7, total: 100, row: 10, column: 10 },
  { name: "SEKTOR 8", sector: 8, total: 170, row: 15, column: 10 },
  { name: "SEKTOR 9", sector: 9, total: 170, row: 15, column: 10 },
  { name: "SEKTOR 10", sector: 10, total: 170, row: 15, column: 10 },
];

const checkAlphabet = (seat, sector) => {
  if (sector >= 2) {
    return seat + sector * 10 - 10;
  }

  if (sector == 1) {
    return seat;
  }

  return seat;
};

const loadDataSector = async (sector) => {
  let response = await useCustomFetch(
    `/api/event-seat/detail-event-seat-sector/${eventDetail.value.data.data.id}/${sector}`,
    "get",
    {},
    true,
  );
  let getData = response.data.value.data;
  getData.forEach((val, idx) => {
    if (val.status == 1) {
      const element = document.querySelector(
        `#sector-${val.code_sector}-${val.number}`,
      );
      if (element) {
        element.classList.add("booked");
        element.classList.add(val.category);
      }
    }
  });
};

const loadAllSectorsInQueue = async () => {
  await loadDataSector("1");
  await loadDataSector("2");
  await loadDataSector("3");
  await loadDataSector("4");
  await loadDataSector("5");
  await loadDataSector("6");
  await loadDataSector("7");
  await loadDataSector("8");
  await loadDataSector("9");
  await loadDataSector("10");
};

loadData();
setInterval(() => {
  loadAllSectorsInQueue();
}, 5000);
</script>
