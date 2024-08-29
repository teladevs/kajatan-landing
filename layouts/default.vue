<template>
  <div class="page-wrapper relative z-[1] bg-white">
    <Header />
    <slot />
    <Footer />
  </div>
</template>
<script setup>
import "assets/home/assets/fonts/fonts.css";
import "assets/home/assets/css/vendors/swiper-bundle.min.css";
import "assets/home/assets/css/vendors/jos.css";
import "assets/home/assets/css/vendors/menu.css";
import "assets/home/assets/css/custom.css";
import "assets/home/assets/css/style.css";
import Header from "@/components/default/header";
import Footer from "@/components/default/footer";
</script>
