<template>
  <div ref="download">
    <img src="../../public/unisma/inv-1.png" alt="download-1" class="image" />
    <img src="../../public/unisma/inv-2.png" alt="download-2" class="image" />
    <img src="../../public/unisma/inv-3.png" alt="download-3" class="image" />
    <img src="../../public/unisma/inv-4.png" alt="download-4" class="image" />
    <div class="qr-position">
      <qrcode-vue :value="text" :size="105" />
    </div>
  </div>
  <!-- <button @click="exportToPdf" class="btn-download">Unduh Undangan</button> -->
</template>
<style>
.btn-download {
  position: sticky;
  bottom: 20px;
  background-color: black;
  color: white;
  padding: 20px;
}
.download {
  max-width: 500px;
}
.image {
  width: 500px;
  height: 400px;
}
.qr-position {
  position: absolute;
  top: 445px;
  right: 85px;
  width: 55px;
  height: 65px;
}
</style>
<script setup>
import html2pdf from "html2pdf.js";
import QrcodeVue from "qrcode.vue";
import { ref } from "vue";

const download = ref(null);
const router = useRouter();
const text = ref(router.currentRoute.value.query.code);

function exportToPdf() {
  html2pdf().from(download.value).save();
}
</script>
