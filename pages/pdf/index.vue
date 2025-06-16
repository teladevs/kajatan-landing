<template>
  <div ref="download">
    <img src="../../public/unisma/inv-1.png" alt="download-1" class="image" />
    <img src="../../public/unisma/inv-2.png" alt="download-2" class="image" />
    <img src="../../public/unisma/inv-3.png" alt="download-3" class="image" />
    <img src="../../public/unisma/inv-4.png" alt="download-4" class="image" />
    <div class="qr-position">qr-code</div>
  </div>
  <button @click="exportToPdf">Download</button>
</template>
<style>
.download {
  max-width: 800px;
}
.image {
  width: 500px;
  height: 400px;
}
.qr-position {
  position: absolute;
  top: 275px;
  left: 125px;
  width: 55px;
  height: 65px;
  border: 1px solid red;
}
</style>
<script setup>
import html2pdf from "html2pdf.js";
import { ref } from "vue";

const download = ref(null);

function exportToPdf() {
  html2pdf().from(download.value).save();
}
</script>
