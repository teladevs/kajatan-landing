<template>
  <NuxtLayout name="default">
    <main class="main-wrapper relative overflow-hidden">
      <!--...::: Hero Section Start :::... -->
      <section id="section-hero">
        <!-- Section Spacer -->
        <div
          class="relative z-[1] overflow-hidden rounded-bl-[30px] rounded-br-[30px] bg-colorLinenRuffle pb-20 pt-28 lg:rounded-bl-[50px] lg:rounded-br-[50px] lg:pb-24 lg:pt-32 xl:pt-40 xxl:pb-[133px] xxl:pt-[195px]"
        >
          <!-- Section Container -->
          <div class="global-container">
            <!-- Hero Content -->
            <div class="mb-14 flex flex-col items-center text-center lg:mb-20">
              <h1
                class="jos slide-from-bottom mb-6 max-w-[510px] lg:max-w-[768px] xl:max-w-[1076px]"
              >
                Digital Invitation Solutions
              </h1>
              <p
                class="jos slide-from-bottom mb-11 max-w-[700px] text-lg font-semibold sm:text-xl xl:max-w-[980px]"
              >
                Welcome to Kajatan, your one-stop solution for modern, efficient, and
                eco-friendly digital invitations. Whether you're hosting a wedding,
                corporate event, or private party, our platform makes it easy to create,
                send, and manage your invitations.
              </p>
              <div
                class="jos flex flex-wrap justify-center gap-6"
                data-jos_animation="fade"
              >
                <a
                  href="#"
                  class="button rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white"
                  >Get started for free</a
                >
                <a
                  href="#"
                  class="button rounded-[50px] border-2 border-black bg-transparent py-4 text-black after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white"
                  >Learn more</a
                >
              </div>
            </div>
            <!-- Hero Content -->
            <!-- Hero Image -->
            <div
              class="jos hero-img overflow-hidden rounded-2xl bg-black"
              data-jos_animation="zoom"
            >
              <img
                src="/images/img-1.png"
                alt="hero-dashboard"
                width="1296"
                height="640"
                class="h-auto w-full"
              />
            </div>
            <!-- Hero Image -->

            <div class="my-10 h-[1px] w-full bg-[#DBD6CF] lg:my-16 xl:my-20"></div>
            <div class="jos mx-auto mb-12 max-w-[715px] text-center lg:mb-16">
              <p class="text-lg">
                Empowering Companies of All Sizes with Digital Invitation Solutions for
                Unmatched Growth and Innovation
              </p>
            </div>
            <!-- Slider main container -->
            <div class="brand-slider">
              <div class="flex justify-between items-center">
                <img
                  src="/images/logo/logo-sipencatar.png"
                  alt="brand-1"
                  width="180"
                  height="38"
                  class="max-w-full"
                />
                <img
                  src="/images/logo/logo-perhubungan.webp"
                  alt="brand-2"
                  width="183"
                  height="35"
                  class="max-w-full"
                />
                <img
                  src="/images/logo/logo-sulut.webp"
                  alt="brand-2"
                  width="183"
                  height="35"
                  class="max-w-full"
                />
                <img
                  src="/images/logo/logo-sby.webp"
                  alt="brand-3"
                  width="172"
                  height="35"
                  class="max-w-full"
                />
              </div>
            </div>
          </div>
          <!-- Section Container -->
          <!-- Hero Background Shape 1 -->
          <div
            class="orange-gradient-1 absolute -right-[150px] top-[370px] -z-[1] h-[500px] w-[500px] animate-spin rounded-[500px]"
          ></div>
          <!-- Hero Background Shape 2 -->
          <div
            class="orange-gradient-2 absolute right-[57px] top-[620px] -z-[1] h-[450px] w-[450px] animate-spin rounded-[450px]"
          ></div>
        </div>
        <!-- Section Spacer -->
      </section>
      <!--...::: Hero Section End :::... -->

      <!-- Body Background Shape 1 -->
      <div
        class="orange-gradient-1 absolute -left-[15px] top-[61%] -z-[1] h-[400px] w-[400px] -rotate-[-9.022deg] rounded-[400px]"
      ></div>

      <!-- Body Background Shape 2 -->
      <div
        class="orange-gradient-2 absolute -left-[100px] top-[64%] -z-[1] h-[360px] w-[360px] -rotate-[-9.022deg] rounded-[360px]"
      ></div>

      <Feature />
    </main>
  </NuxtLayout>
</template>
<script setup>
import Feature from "@/components/home/feature";
</script>
