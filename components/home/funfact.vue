<template>
  <!--...::: Funfact Section Start :::... -->
  <section id="funfact-section">
    <div class="mx-auto max-w-[1500px] px-5">
      <div
        class="jos grid grid-cols-1 overflow-hidden rounded-[30px] bg-black lg:rounded-[50px] xl:grid-cols-[minmax(400px,_1fr)_1.5fr] xxl:grid-cols-[1fr_minmax(800px,_1fr)]"
      >
        <!-- Funfact Left Block -->
        <div class="relative overflow-hidden rounded-[30px] lg:rounded-[50px]">
          <img
            src="/images/home/th-1/funfact-image.jpg"
            alt="funfact-image"
            width="721"
            height="784"
            class="h-80 w-full object-cover object-center lg:h-[35rem] xl:h-full"
          />
          <!-- Video Play Button -->
          <a
            data-fslightbox="gallery"
            href="https://www.youtube.com/watch?v=3nQNiWdeH2Q"
            class="absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2"
          >
            <div
              class="relative flex h-[120px] w-[120px] items-center justify-center rounded-full border-[3px] border-black text-lg font-bold backdrop-blur-[2px] transition-all duration-300 hover:bg-colorOrangyRed hover:text-white"
            >
              Play
              <div
                class="absolute -z-[1] h-[110%] w-[110%] animate-[ping_1.5s_ease-in-out_infinite] rounded-full bg-gray-600 opacity-30"
              ></div>
            </div>
          </a>
          <!-- Video Play Button -->
        </div>
        <!-- Funfacct Left Block -->

        <!-- Funfact Right Block -->
        <div
          class="self-center px-6 py-16 sm:py-20 md:px-16 xl:px-10 xl:py-24 xxl:py-32 xxl:pl-16 xxl:pr-28"
        >
          <!-- Section Content Block -->
          <div class="mb-8 lg:mb-16 xl:mb-6">
            <h2 class="text-white">AI-powered that streamline tasks</h2>
          </div>
          <!-- Section Content Block -->
          <div class="text-left text-lg leading-[1.4] text-white lg:text-[21px]">
            <p class="mb-7 last:mb-0">
              As your business grows or your AI SaaS needs change, you can easily adjust
              your subscription level to match those needs. This flexibility ensures that
              AI remains an asset.
            </p>
          </div>
          <!-- Horizontal Separator -->
          <div class="my-14 h-[1px] w-full bg-colorCodGray"></div>
          <!-- Counter Scroll -->
          <ul
            class="flex flex-col justify-center gap-x-11 gap-y-8 text-center sm:flex-row md:text-left xl:justify-normal xl:text-left xxl:gap-x-20"
          >
            <!-- Counter Items -->
            <li>
              <h3
                class="text-5xl text-colorOrangyRed md:text-6xl lg:text-7xl xl:text-7xl xxl:text-[120px]"
                data-module="countup"
              >
                <span class="start-number" data-countup-number="92">92</span>%
              </h3>
              <span class="block text-lg font-normal text-white lg:text-[21px]">
                Customer service inquiries
              </span>
            </li>
            <!-- Counter Items -->
            <!-- Counter Items -->
            <li>
              <h3
                class="text-5xl text-colorOrangyRed md:text-6xl lg:text-7xl xl:text-7xl xxl:text-[120px]"
                data-module="countup"
              >
                <span class="start-number" data-countup-number="75">75</span>%
              </h3>
              <span class="block text-lg font-normal text-white lg:text-[21px]">
                Using financial institutions
              </span>
            </li>
            <!-- Counter Items -->
          </ul>
          <!-- Counter Scroll -->
        </div>
        <!-- Funfact Right Block -->
      </div>
    </div>
  </section>
  <!--...::: Funfact Section End :::... -->
</template>
<script setup></script>
