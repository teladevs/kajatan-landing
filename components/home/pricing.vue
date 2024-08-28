<template>
  <section class="pricing-section">
    <!-- Section Spacer -->
    <div class="pb-20 pt-20 xl:pb-[150px] xl:pt-[130px]">
      <!-- Section Container -->
      <div class="global-container">
        <!-- Section Content Block -->
        <div class="jos mb-10 text-center lg:mb-12">
          <div class="mx-auto md:max-w-xs lg:max-w-xl xl:max-w-[746px]">
            <h2>Cost-effectively build any software</h2>
          </div>
        </div>
        <!-- Section Content Block -->
        <!-- Pricing Block -->
        <div class="container mx-auto">
          <!-- Tab buttons -->
          <div class="jos flex justify-center" data-jos_animation="fade">
            <div
              class="inline-flex space-x-4 rounded-[50px] border-2 border-black font-semibold"
            >
              <button class="tab-button price-button active" data-tab="monthly">
                Monthly
              </button>
              <button class="tab-button price-button" data-tab="annually">
                Annually
              </button>
            </div>
          </div>

          <!-- Pricing Block -->
          <div class="mt-12 lg:mt-16 xl:mt-20">
            <!-- Price List -->
            <ul
              id="monthly"
              class="tab-content grid grid-cols-1 gap-6 md:grid-cols-2 xxl:grid-cols-3"
            >
              <!-- Price Item -->
              <li
                class="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-10 transition-all duration-300 ease-linear hover:bg-black"
                data-jos_animation="flip"
                data-jos_delay="0"
              >
                <h3
                  class="font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white"
                >
                  Beginner
                </h3>
                <span
                  class="text-lg text-black transition-all duration-300 ease-linear group-hover:text-white"
                  >Up to 10 members</span
                >

                <div class="my-5 h-[1px] w-full bg-[#DBD6CF]"></div>
                <h4
                  class="mb-4 font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]"
                >
                  $25<span class="text-lg font-semibold">/Per month</span>
                </h4>
                <p
                  class="mb-10 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white"
                >
                  This is an excellent option for people & small businesses who are
                  starting out.
                </p>
                <a
                  href="pricing.html"
                  class="button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white"
                  >Choose the plan</a
                >
              </li>
              <!-- Price Item -->
              <!-- Price Item -->
              <li
                class="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-10 transition-all duration-300 ease-linear hover:bg-black"
                data-jos_animation="flip"
                data-jos_delay="0"
              >
                <h3
                  class="font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white"
                >
                  Starter
                </h3>
                <span
                  class="text-lg text-black transition-all duration-300 ease-linear group-hover:text-white"
                  >Up to 50 members</span
                >

                <div class="my-5 h-[1px] w-full bg-[#DBD6CF]"></div>
                <h4
                  class="mb-4 font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]"
                >
                  $89<span class="text-lg font-semibold">/Per month</span>
                </h4>
                <p
                  class="mb-10 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white"
                >
                  This plan is suitable for e-commerce stores as well as professional
                  blogs.
                </p>
                <a
                  href="pricing.html"
                  class="button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white"
                  >Choose the plan</a
                >
              </li>
              <!-- Price Item -->
              <!-- Price Item -->
              <li
                class="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-10 transition-all duration-300 ease-linear hover:bg-black"
                data-jos_animation="flip"
                data-jos_delay="0"
              >
                <h3
                  class="font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white"
                >
                  Pro
                </h3>
                <span
                  class="text-lg text-black transition-all duration-300 ease-linear group-hover:text-white"
                  >Up to 100 members</span
                >

                <div class="my-5 h-[1px] w-full bg-[#DBD6CF]"></div>
                <h4
                  class="mb-4 font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]"
                >
                  $199<span class="text-lg font-semibold">/Per month</span>
                </h4>
                <p
                  class="mb-10 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white"
                >
                  Ideal for handling complicated projects enterprise-level projects, and
                  websites.
                </p>
                <a
                  href="pricing.html"
                  class="button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white"
                  >Choose the plan</a
                >
              </li>
              <!-- Price Item -->
            </ul>
            <!-- Price List -->
            <!-- Price List -->
            <ul
              id="annually"
              class="tab-content grid hidden grid-cols-1 gap-6 md:grid-cols-2 xxl:grid-cols-3"
            >
              <!-- Price Item -->
              <li
                class="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-10 transition-all duration-300 ease-linear hover:bg-black"
                data-jos_animation="flip"
                data-jos_delay="0"
              >
                <h3
                  class="font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white"
                >
                  Beginner
                </h3>
                <span
                  class="text-lg text-black transition-all duration-300 ease-linear group-hover:text-white"
                  >Up to 10 members</span
                >

                <div class="my-5 h-[1px] w-full bg-[#DBD6CF]"></div>
                <h4
                  class="mb-4 font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]"
                >
                  $240<span class="text-lg font-semibold">/Per year</span>
                </h4>
                <p
                  class="mb-10 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white"
                >
                  This is an excellent option for people & small businesses who are
                  starting out.
                </p>
                <a
                  href="pricing.html"
                  class="button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white"
                  >Choose the plan</a
                >
              </li>
              <!-- Price Item -->
              <!-- Price Item -->
              <li
                class="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-10 transition-all duration-300 ease-linear hover:bg-black"
                data-jos_animation="flip"
                data-jos_delay="0"
              >
                <h3
                  class="font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white"
                >
                  Starter
                </h3>
                <span
                  class="text-lg text-black transition-all duration-300 ease-linear group-hover:text-white"
                  >Up to 50 members</span
                >

                <div class="my-5 h-[1px] w-full bg-[#DBD6CF]"></div>
                <h4
                  class="mb-4 font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]"
                >
                  $960<span class="text-lg font-semibold">/Per year</span>
                </h4>
                <p
                  class="mb-10 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white"
                >
                  This plan is suitable for e-commerce stores as well as professional
                  blogs.
                </p>
                <a
                  href="pricing.html"
                  class="button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white"
                  >Choose the plan</a
                >
              </li>
              <!-- Price Item -->
              <!-- Price Item -->
              <li
                class="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-10 transition-all duration-300 ease-linear hover:bg-black"
                data-jos_animation="flip"
                data-jos_delay="0"
              >
                <h3
                  class="font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white"
                >
                  Pro
                </h3>
                <span
                  class="text-lg text-black transition-all duration-300 ease-linear group-hover:text-white"
                  >Up to 100 members</span
                >

                <div class="my-5 h-[1px] w-full bg-[#DBD6CF]"></div>
                <h4
                  class="mb-4 font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]"
                >
                  $1800<span class="text-lg font-semibold leading-none">/Per year</span>
                </h4>
                <p
                  class="mb-10 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white"
                >
                  Ideal for handling complicated projects enterprise-level projects, and
                  websites.
                </p>
                <a
                  href="pricing.html"
                  class="button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white"
                  >Choose the plan</a
                >
              </li>
              <!-- Price Item -->
            </ul>
            <!-- Price List -->
          </div>
          <!-- Pricing Block -->
        </div>
      </div>
      <!-- Section Container -->
    </div>
    <!-- Section Spacer -->
  </section>
</template>
<script>
export default {};
</script>
