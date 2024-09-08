<template>
  <div class="container p-2">
    <div class="detail-info mt-5 mb-10">
      <div
        class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
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
                  Yogi Wirmanda
                </dd>
              </div>
              <div class="px-1 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-slate-400">Jurusan</dt>
                <dd
                  class="mt-1 text-sm leading-6 font-bold text-gray-100 sm:col-span-2 sm:mt-0"
                >
                  DP-I
                </dd>
              </div>
              <div class="px-1 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-slate-400">Zona Parkir</dt>
                <dd
                  class="mt-1 text-sm leading-6 font-bold text-gray-100 sm:col-span-2 sm:mt-0"
                >
                  ZONA 2 & 3
                </dd>
              </div>
              <div class="px-1 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-slate-400">Pintu Masuk</dt>
                <dd
                  class="mt-1 text-sm leading-6 font-bold text-gray-100 sm:col-span-2 sm:mt-0"
                >
                  PINTU A
                </dd>
              </div>
              <div class="px-1 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-slate-400">Tempat Duduk</dt>
                <dd
                  class="mt-1 text-sm leading-6 font-bold text-gray-100 sm:col-span-2 sm:mt-0"
                >
                  BLOK II - KELUARGA PASIS DP-I
                </dd>
              </div>
              <div class="px-1 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-slate-400">Nomor Kursi</dt>
                <dd
                  class="mt-1 text-sm leading-6 font-bold text-gray-100 sm:col-span-2 sm:mt-0"
                >
                  A1 & A2
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
    <div
      class="max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="seat-block pb-5">
        <div class="text-md w-full text-center mb-2 font-bold text-slate-100">
          DENAH BLOK II
        </div>
        <div class="grid grid-cols-2 gap-5">
          <div class="gatea block-sector dp1 flex justify-center flex-col p-2">
            <div class="text-base font-bold w-full text-center mb-2">
              KELUARGA PASIS DP-I
            </div>
            <!-- <div class="grid grid-cols-10 gap-1">
              <div class="seat-icon" :class="`seat-dp1-${item}`" v-for="item in 60"></div>
            </div> -->
          </div>
          <div class="gatea block-sector dp3 flex justify-center flex-col p-2">
            <div class="text-base font-bold w-full text-center mb-2">
              KELUARGA PASIS DP-III
            </div>
            <!-- <div class="grid grid-cols-10 gap-1">
              <div class="seat-icon" :class="`seat-dp3-${item}`" v-for="item in 60"></div>
            </div> -->
          </div>
          <div class="gatea block-sector dp5 flex justify-center flex-col p-2">
            <div class="text-base font-bold w-full text-center mb-2">
              KELUARGA PASIS DP-V
            </div>
            <!-- <div class="grid grid-cols-10 gap-1">
              <div class="seat-icon" :class="`seat-dpv-${item}`" v-for="item in 60"></div>
            </div> -->
          </div>
          <div class="gatea block-sector eto flex justify-center flex-col p-2">
            <div class="text-base font-bold w-full text-center mb-2">
              KELUARGA PASIS ETO
            </div>
            <!-- <div class="grid grid-cols-10 gap-1">
              <div class="seat-icon" :class="`seat-eto-${item}`" v-for="item in 60"></div>
            </div> -->
          </div>
        </div>
      </div>
      <!-- <div class="grid grid-cols-2 gap-5">
        <div class="gateb block-sector">KELUARGA PASIS DP-I</div>
        <div class="gateb block-sector">KELUARGA PASIS DP-III</div>
        <div class="gateb block-sector">KELUARGA PASIS DP-V</div>
        <div class="gateb block-sector">KELUARGA PASIS ETO</div>
      </div>
      <div class="grid grid-cols-2 gap-5">
        <div class="gatec block-sector">KELUARGA PASIS DP-I</div>
        <div class="gatec block-sector">KELUARGA PASIS DP-III</div>
        <div class="gatec block-sector">KELUARGA PASIS DP-V</div>
        <div class="gatec block-sector">KELUARGA PASIS ETO</div>
      </div> -->
    </div>
    <div
      class="max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5"
    >
      <div class="text-center my-5 font-bold text-slate-100">
        DENAH KURSI KELUARGA PASIS DP-I
      </div>
      <div class="gate-active flex justify-center flex-col p-2">
        <div class="grid grid-cols-10 gap-1">
          <div class="seat-icon" :class="`seat-sector-active-${item}`" v-for="item in 60">
            <span class="text-center w-full">{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
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
  background-color: yellow;
  color: black;
}
.seat-icon {
  width: 20px;
  height: 20px;
  background-color: white;
  font-size: 12px;
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
</style>
