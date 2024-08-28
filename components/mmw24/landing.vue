<template>
  <div class="container mx-auto px-5 pt-10">
    <div class="flex items-center justify-center mb-5">
      <img
        src="/images/logo/webasset-00-garuda.webp"
        alt="image-kemenhub"
        class="logo-instansi"
      />
    </div>
    <div class="flex items-center justify-center">
      <img
        src="/images/logo/webasset-01-kemenhub.webp"
        alt="image-kemenhub"
        class="logo-instansi slide-transition-hide"
      />
      <img
        src="/images/logo/logo-perhubungan.webp"
        alt="image-kemenhub"
        class="logo-instansi slide-transition-hide"
      />
      <img
        src="/images/logo/webasset-05-pip_semarang.webp"
        alt="image-kemenhub"
        class="logo-instansi slide-transition-hide"
      />
      <img
        src="/images/logo/logo-sby"
        alt="image-kemenhub"
        class="logo-instansi slide-transition-hide"
      />
    </div>
    <div class="flex justify-center items-center mt-3">
      <img
        src="/images/logo/webasset-03-proprestasi.webp"
        alt="image-kemenhub"
        class="logo-prestasi slide-transition-hide"
      />
      <img
        src="/images/logo/webasset-04-gold_gen3.webp"
        alt="image-kemenhub"
        class="logo-prestasi slide-transition-hide"
      />
    </div>
    <section
      class="slide-transition-hide mt-5 text-slate-800 text-2xl font-bold text-center mb-10"
    >
      <h1>Ministry of Transportation of the Republic of Indonesia</h1>
    </section>
    <section class="fade-out-hide">
      <img src="/images/brosur/1.webp" alt="image-brosur" class="image-brosur" />
    </section>
    <section class="fade-out-hide">
      <img src="/images/brosur/2.webp" alt="image-brosur" class="image-brosur" />
    </section>
    <section class="fade-out-hide">
      <img src="/images/brosur/3.webp" alt="image-brosur" class="image-brosur" />
    </section>
    <section class="fade-out-hide">
      <img src="/images/brosur/4.webp" alt="image-brosur" class="image-brosur" />
    </section>
    <div class="mt-10 bg-slate-800 p-5 rounded-2xl fade-out-hide">
      <div class="text-xl font-bold text-center">Our Social Media</div>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10 mb-10">
        <div class="sosial-media-list">
          <a href="https://www.instagram.com/bpsdmp151" target="_blank">
            <div class="grid grid-cols-1 sosial-media">
              <Icon name="bxl:instagram-alt" color="white" size="40px" />
              <div class="text-md">bpsdmp151</div>
            </div>
          </a>
        </div>
        <div class="sosial-media-list">
          <a href="https://twitter.com/BPSDMP151" target="_blank">
            <div class="grid grid-cols-1 sosial-media">
              <Icon name="bxl:twitter" color="white" size="40px" />
              <div class="text-md">@BPSDMP151</div>
            </div>
          </a>
        </div>
        <div class="sosial-media-list">
          <a href="https://www.facebook.com/bpsdmkemenhub" target="_blank">
            <div class="grid grid-cols-1 sosial-media">
              <Icon name="bxl:facebook-circle" color="white" size="40px" />
              <div class="text-md text-center">Bpsdm Perhubungan</div>
            </div>
          </a>
        </div>
        <div class="sosial-media-list">
          <a
            href="https://www.youtube.com/channel/UCNGUU2impwfDjc2L_7MFOGg"
            target="_blank"
          >
            <div class="grid grid-cols-1 sosial-media">
              <Icon name="bxl:youtube" color="white" size="40px" />
              <div class="text-md">BPSDMP151</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  if (process.client) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-out-show");
        } else {
          entry.target.classList.remove("fade-out-show");
        }
      });
    });

    const observerLogo = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-transition-show");
        } else {
          entry.target.classList.remove("slide-transition-show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".fade-out-hide");
    hiddenElements.forEach((el) => observer.observe(el));
    const hiddenLogo = document.querySelectorAll(".slide-transition-hide");
    hiddenLogo.forEach((el) => observerLogo.observe(el));
  }
});
</script>
<style scoped>
.icon-sosial-media {
  width: 40px;
  height: 40px;
}
.sosial-media-list {
}
.sosial-media {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
