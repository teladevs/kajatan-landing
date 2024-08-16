<template>
  <div id="app">
    <div class="spinner-overlay flex flex-col">
      <atom-spinner :animation-duration="1000" :size="60" color="#ff1d5e" />
      <div class="text-lg mt-2">Memproses...</div>
    </div>
  </div>
</template>

<script>
import { AtomSpinner } from "epic-spinners";

export default {
  components: {
    AtomSpinner,
  },
};
</script>

<style>
.spinner-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5); /* semi-transparent white overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* ensure it's on top of other content */
}
</style>
