<template>
  <div class="seat-container">
    <div class="grid grid-cols-10 gap-10 text-center py-10 px-10">
      <div v-for="(valSec, idxSec) in sectorAll">
        <div class="text-center text-2xl font-bold text-slate-100 my-10">
          {{ valSec.name }}
        </div>
        <div
          class="grid grid-cols-10 gap-2"
          v-if="valSec.sector !== 5 && valSec.sector !== 6"
        >
          <div
            class="seat flex items-center justify-center"
            :id="`sector-${valSec.sector}-${checkAlphabet(
              10 * parseInt(idxSeat / 10),
              idxSeat + 1 - 10 * parseInt(idxSeat / 10),
              valSec.sector
            )}`"
            v-for="(valSeat, idxSeat) in valSec.total"
          >
            {{
              checkAlphabet(
                10 * parseInt(idxSeat / 10),
                idxSeat + 1 - 10 * parseInt(idxSeat / 10),
                valSec.sector
              )
            }}
          </div>
        </div>
        <div class="text-center flex justify-center">
          <div
            class="grid grid-cols-3 gap-2"
            v-if="valSec.sector === 5 || valSec.sector === 6"
          >
            <div
              class="seat flex items-center justify-center"
              :id="`sector-${valSec.sector}-${checkAlphabet(
                3 * parseInt(idxSeat / 3),
                idxSeat + 1 - 3 * parseInt(idxSeat / 3),
                valSec.sector
              )}`"
              v-for="(valSeat, idxSeat) in valSec.total"
            >
              {{
                checkAlphabet(
                  3 * parseInt(idxSeat / 3),
                  idxSeat + 1 - 3 * parseInt(idxSeat / 3),
                  valSec.sector
                )
              }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.seat-container {
  width: 3500px;
  background-color: #429ac0;
}
.seat {
  width: 30px;
  height: 25px;
  border-radius: 10px 10px 0px 0px;
  background-color: white;
  color: black;
  font-size: 10px;
}
.seat.booked {
  background-color: red;
}
.seat.booked.YATIM {
  background-color: #ffc0cb;
  color: black;
}
.seat.booked.VIP-VVIP {
  background-color: #ffffff;
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
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
console.log(router);
const sectorAll = [
  { name: "Sektor 1", sector: 1, total: 160 },
  { name: "Sektor 2", sector: 2, total: 160 },
  { name: "Sektor 3", sector: 3, total: 160 },
  { name: "Sektor 4", sector: 4, total: 160 },
  { name: "Sektor 5", sector: 5, total: 48 },
  { name: "Sektor 6", sector: 6, total: 48 },
  { name: "Sektor 7", sector: 7, total: 160 },
  { name: "Sektor 8", sector: 8, total: 160 },
  { name: "Sektor 9", sector: 9, total: 160 },
  { name: "Sektor 10", sector: 10, total: 160 },
];

const checkAlphabet = (number, seat, sector) => {
  let alphabet = "";
  if (sector == 5 || sector == 6) {
    switch (number) {
      case 0:
        alphabet = "A";
        break;
      case 3:
        alphabet = "B";
        break;
      case 6:
        alphabet = "C";
        break;
      case 9:
        alphabet = "D";
        break;
      case 12:
        alphabet = "E";
        break;
      case 15:
        alphabet = "F";
        break;
      case 18:
        alphabet = "G";
        break;
      case 21:
        alphabet = "H";
        break;
      case 24:
        alphabet = "I";
        break;
      case 27:
        alphabet = "J";
        break;
      case 30:
        alphabet = "K";
        break;
      case 33:
        alphabet = "L";
        break;
      case 36:
        alphabet = "M";
        break;
      case 39:
        alphabet = "N";
        break;
      case 42:
        alphabet = "O";
        break;
      case 45:
        alphabet = "P";
        break;

      default:
        break;
    }
  } else {
    switch (number) {
      case 0:
        alphabet = "A";
        break;
      case 10:
        alphabet = "B";
        break;
      case 20:
        alphabet = "C";
        break;
      case 30:
        alphabet = "D";
        break;
      case 40:
        alphabet = "E";
        break;
      case 50:
        alphabet = "F";
        break;
      case 60:
        alphabet = "G";
        break;
      case 70:
        alphabet = "H";
        break;
      case 80:
        alphabet = "I";
        break;
      case 90:
        alphabet = "J";
        break;
      case 100:
        alphabet = "K";
        break;
      case 110:
        alphabet = "L";
        break;
      case 120:
        alphabet = "M";
        break;
      case 130:
        alphabet = "N";
        break;
      case 140:
        alphabet = "O";
        break;
      case 150:
        alphabet = "P";
        break;

      default:
        break;
    }
  }

  if (sector >= 2 && sector <= 4) {
    return alphabet + (seat + sector * 10 - 10);
  }

  if (sector > 6) {
    return alphabet + (seat + (sector * 10 - 24));
  }

  if (sector == 5) {
    return alphabet + (seat + 40);
  }

  if (sector == 6) {
    return alphabet + (seat + 43);
  }

  if (sector == 1) {
    return alphabet + seat;
  }
};

const loadDataSector = async (sector) => {
  let response = await useCustomFetch(
    `/api/event-seat/detail-event-seat-sector/28/${sector}`,
    "get",
    {},
    true
  );
  let getData = response.data.value.data;
  getData.forEach((val, idx) => {
    if (val.status == 1) {
      const element = document.querySelector(
        `#sector-${val.code_sector}-${val.seat_number}`
      );
      if (element) {
        element.classList.add("booked");
        element.classList.add(val.category);
      }
    }
  });
};

const loadAllSectorsInQueue = async () => {
  await loadDataSector("SEKTOR 1");
  await loadDataSector("SEKTOR 2");
  await loadDataSector("SEKTOR 3");
  await loadDataSector("SEKTOR 4");
  await loadDataSector("SEKTOR 5");
  await loadDataSector("SEKTOR 6");
  await loadDataSector("SEKTOR 7");
  await loadDataSector("SEKTOR 8");
  await loadDataSector("SEKTOR 9");
  await loadDataSector("SEKTOR 10");
};

loadAllSectorsInQueue();
setInterval(() => {
  loadAllSectorsInQueue();
}, 5000);
</script>
