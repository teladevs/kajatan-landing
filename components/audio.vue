<template>
  <div>
    <audio ref="audioPlayer" controls>
      <source :src="audioSrc" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<script setup>
const audioSrc = "../public/wisuda51poltekpelsby/mars-perhubungan.mp3";
</script>

<style scoped>
/* Add custom styles for the audio player if needed */
</style>
