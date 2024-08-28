<template>
  <div class="page-wrapper relative z-[1] bg-white">
    <!--...::: Header Start :::... -->
    <header class="site-header site-header--absolute is--white py-3" id="sticky-menu">
      <div class="global-container">
        <div class="flex items-center justify-between gap-x-8">
          <!-- Header Logo -->
          <a href="index.html" class="">
            <img src="/images/home/logo-dark.png" alt="AIMass" width="96" height="24" />
          </a>
          <!-- Header Logo -->

          <!-- Header Navigation -->
          <div class="menu-block-wrapper">
            <div class="menu-overlay"></div>
            <nav class="menu-block" id="append-menu-header">
              <div class="mobile-menu-head">
                <div class="go-back">
                  <img
                    class="dropdown-icon"
                    src="/images/home/icon-black-long-arrow-right.svg"
                    alt="cheveron-right"
                    width="16"
                    height="16"
                  />
                </div>
                <div class="current-menu-title"></div>
                <div class="mobile-menu-close">&times;</div>
              </div>
              <ul class="site-menu-main">
                <li class="nav-item nav-item-has-children">
                  <a href="#" class="nav-link-item drop-trigger"
                    >Demo
                    <img
                      class="dropdown-icon"
                      src="/images/home/icon-black-cheveron-right.svg"
                      alt="cheveron-right"
                      width="16"
                      height="16"
                  /></a>
                  <ul class="sub-menu" id="submenu-1">
                    <li class="sub-menu--item">
                      <a href="index.html">home 01</a>
                    </li>
                    <li class="sub-menu--item">
                      <a href="index-2.html">home 02</a>
                    </li>
                    <li class="sub-menu--item">
                      <a href="index-3.html">home 03</a>
                    </li>
                    <li class="sub-menu--item">
                      <a href="index-4.html"> home 04</a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a href="about.html" class="nav-link-item">About</a>
                </li>
                <li class="nav-item nav-item-has-children">
                  <a href="#" class="nav-link-item drop-trigger"
                    >Services
                    <img
                      class="dropdown-icon"
                      src="/images/home/icon-black-cheveron-right.svg"
                      alt="cheveron-right"
                      width="16"
                      height="16"
                  /></a>
                  <ul class="sub-menu" id="submenu-2">
                    <li class="sub-menu--item">
                      <a href="services.html">Services</a>
                    </li>
                    <li class="sub-menu--item">
                      <a href="service-details.html">Service Details</a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item nav-item-has-children">
                  <a href="#" class="nav-link-item drop-trigger"
                    >Pages
                    <img
                      class="dropdown-icon"
                      src="/images/home/icon-black-cheveron-right.svg"
                      alt="cheveron-right"
                      width="16"
                      height="16"
                  /></a>
                  <ul class="sub-menu" id="submenu-3">
                    <li class="sub-menu--item nav-item-has-children">
                      <a href="#" data-menu-get="h3" class="drop-trigger"
                        >blogs
                        <img
                          class="dropdown-icon"
                          src="/images/home/icon-black-cheveron-right.svg"
                          alt="cheveron-right"
                          width="16"
                          height="16"
                      /></a>
                      <ul class="sub-menu shape-none" id="submenu-4">
                        <li class="sub-menu--item">
                          <a href="blog.html">blogs</a>
                        </li>
                        <li class="sub-menu--item">
                          <a href="blog-details.html">blog details</a>
                        </li>
                      </ul>
                    </li>
                    <li class="sub-menu--item nav-item-has-children">
                      <a href="#" data-menu-get="h3" class="drop-trigger"
                        >Team
                        <img
                          class="dropdown-icon"
                          src="/images/home/icon-black-cheveron-right.svg"
                          alt="cheveron-right"
                          width="16"
                          height="16"
                        />
                      </a>
                      <ul class="sub-menu shape-none" id="submenu-5">
                        <li class="sub-menu--item">
                          <a href="teams.html">Teams</a>
                        </li>
                        <li class="sub-menu--item">
                          <a href="team-details.html">Teams Details</a>
                        </li>
                      </ul>
                    </li>
                    <li class="sub-menu--item nav-item-has-children">
                      <a href="#" data-menu-get="h3" class="drop-trigger"
                        >FAQ
                        <img
                          class="dropdown-icon"
                          src="/images/home/icon-black-cheveron-right.svg"
                          alt="cheveron-right"
                          width="16"
                          height="16"
                        />
                      </a>
                      <ul class="sub-menu shape-none" id="submenu-6">
                        <li class="sub-menu--item">
                          <a href="faq.html">FAQ-1</a>
                        </li>
                        <li class="sub-menu--item">
                          <a href="faq-2.html">FAQ-2</a>
                        </li>
                      </ul>
                    </li>
                    <li class="sub-menu--item nav-item-has-children">
                      <a href="#" data-menu-get="h3" class="drop-trigger"
                        >Portfolio
                        <img
                          class="dropdown-icon"
                          src="/images/home/icon-black-cheveron-right.svg"
                          alt="cheveron-right"
                          width="16"
                          height="16"
                        />
                      </a>
                      <ul class="sub-menu shape-none" id="submenu-7">
                        <li class="sub-menu--item">
                          <a href="portfolio.html">Portfolio</a>
                        </li>
                        <li class="sub-menu--item">
                          <a href="portfolio-details.html">Portfolio Details</a>
                        </li>
                      </ul>
                    </li>
                    <li class="sub-menu--item">
                      <a href="pricing.html" data-menu-get="h3" class="drop-trigger"
                        >Pricing
                      </a>
                    </li>

                    <li class="sub-menu--item nav-item-has-children">
                      <a href="#" data-menu-get="h3" class="drop-trigger"
                        >Utilities
                        <img
                          class="dropdown-icon"
                          src="/images/home/icon-black-cheveron-right.svg"
                          alt="cheveron-right"
                          width="16"
                          height="16"
                        />
                      </a>
                      <ul class="sub-menu shape-none" id="submenu-8">
                        <li class="sub-menu--item">
                          <a href="error-404.html">Error 404</a>
                        </li>
                        <li class="sub-menu--item">
                          <a href="login.html">Login</a>
                        </li>
                        <li class="sub-menu--item">
                          <a href="signup.html">Signup</a>
                        </li>
                        <li class="sub-menu--item">
                          <a href="reset-password.html">Reset Password</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a href="contact.html" class="nav-link-item">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <!-- Header Navigation -->

          <!-- Header User Event -->
          <div class="flex items-center gap-6">
            <a
              href="login.html"
              class="button hidden rounded-[50px] border-[#7F8995] bg-transparent text-black after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white lg:inline-block"
              >Login</a
            >
            <a
              href="signup.html"
              class="button hidden rounded-[50px] border-black bg-black text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white lg:inline-block"
              >Sign up free</a
            >
            <!-- Responsive Offcanvas Menu Button -->
            <div class="block lg:hidden">
              <button id="openBtn" class="hamburger-menu mobile-menu-trigger">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
          <!-- Header User Event -->
        </div>
      </div>
    </header>
    <!--...::: Header End :::... -->

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

    <!--...::: Footer Section Start :::... -->
    <footer
      class="relative z-[1] -mt-[70px] overflow-hidden rounded-tl-[30px] rounded-tr-[30px] bg-colorLinenRuffle lg:rounded-tl-[50px] lg:rounded-tr-[50px]"
    >
      <!-- Footer Top -->
      <div class="py-[60px] xl:pb-[100px] xl:pt-[130px]">
        <div class="overflow-hidden">
          <!-- Footer Text Slider -->
          <div
            class="footer-text-slider flex w-full items-center gap-x-[30px] whitespace-nowrap"
          >
            <!-- Footer Slide Item  -->
            <img
              src="/images/home/th-1/footer-text-slider-icon.svg"
              alt="footer-text-slider-icon"
              width="60"
              height="60"
              class="h-10 w-10 lg:h-[60px] lg:w-[60px]"
            />
            <div
              class="block font-dmSans text-4xl font-bold leading-none -tracking-[2px] text-black lg:text-6xl xl:text-7xl xxl:text-[80px]"
            >
              Say Goodbye to Paper Invites – Go Digital Today!
            </div>
            <img
              src="/images/home/th-1/footer-text-slider-icon.svg"
              alt="footer-text-slider-icon"
              width="60"
              height="60"
              class="h-10 w-10 lg:h-[60px] lg:w-[60px]"
            />
            <div
              class="block font-dmSans text-4xl font-bold leading-none -tracking-[2px] text-black lg:text-6xl xl:text-7xl xxl:text-[80px]"
            >
              Say Goodbye to Paper Invites – Go Digital Today!
            </div>
            <!-- Footer Slide Item  -->
            <!-- Footer Slide Item  -->
            <img
              src="/images/home/th-1/footer-text-slider-icon.svg"
              alt="footer-text-slider-icon"
              width="60"
              height="60"
              class="h-10 w-10 lg:h-[60px] lg:w-[60px]"
            />
            <div
              class="block font-dmSans text-4xl font-bold leading-none -tracking-[2px] text-black lg:text-6xl xl:text-7xl xxl:text-[80px]"
            >
              Say Goodbye to Paper Invites – Go Digital Today!
            </div>
            <!-- Footer Slide Item  -->
          </div>
        </div>
      </div>
      <!-- Footer Text Slider -->
      <!-- Footer Top -->
      <div class="global-container">
        <div class="h-[1px] w-full bg-[#DBD6CF]"></div>
        <!-- Footer Center -->
        <div
          class="lg grid grid-cols-1 gap-10 py-[60px] md:grid-cols-[1fr_auto_auto] xl:grid-cols-[1fr_auto_auto_1fr] xl:gap-20 xl:py-[100px]"
        >
          <!-- Footer Widget -->
          <div class="flex flex-col gap-y-6">
            <a href="index.html" class="inline-block"
              ><img src="/images/home/th-1/logo.png" alt="logo" width="96" height="24"
            /></a>
            <p>
              Our mission is to harness the power of AI to solve complex business
              challenges & decision-makers with data-driven insights, and enhance user
              experiences across digital platforms.
            </p>
            <p>Website: <a href="https://www.example.com">www.example.com</a></p>
          </div>
          <!-- Footer Widget -->

          <!-- Footer Widget -->
          <div class="flex flex-col gap-y-6">
            <!-- Footer Title -->
            <h4 class="text-[21px] font-semibold capitalize text-black">Primary Pages</h4>
            <!-- Footer Title -->

            <!-- Footer Navbar -->
            <ul class="flex flex-col gap-y-[10px] capitalize">
              <li>
                <a
                  href="index.html"
                  class="transition-all duration-300 ease-linear hover:text-colorOrangyRed"
                  >Home</a
                >
              </li>
              <li>
                <a
                  href="about.html"
                  class="transition-all duration-300 ease-linear hover:text-colorOrangyRed"
                  >About Us</a
                >
              </li>
              <li>
                <a
                  href="services.html"
                  class="transition-all duration-300 ease-linear hover:text-colorOrangyRed"
                  >Services</a
                >
              </li>
              <li>
                <a
                  href="pricing.html"
                  class="transition-all duration-300 ease-linear hover:text-colorOrangyRed"
                  >pricing</a
                >
              </li>
              <li>
                <a
                  href="contact.html"
                  class="transition-all duration-300 ease-linear hover:text-colorOrangyRed"
                  >Contact</a
                >
              </li>
            </ul>
          </div>
          <!-- Footer Widget -->

          <!-- Footer Widget -->
          <div class="flex flex-col gap-y-6">
            <!-- Footer Title -->
            <h4 class="text-[21px] font-semibold capitalize text-black">Utility pages</h4>
            <!-- Footer Title -->

            <!-- Footer Navbar -->
            <ul class="flex flex-col gap-y-[10px] capitalize">
              <li>
                <a
                  href="signup.html"
                  class="transition-all duration-300 ease-linear hover:text-colorOrangyRed"
                  >Signup</a
                >
              </li>
              <li>
                <a
                  href="login.html"
                  class="transition-all duration-300 ease-linear hover:text-colorOrangyRed"
                  >Login</a
                >
              </li>
              <li>
                <a
                  href="error-404.html"
                  class="transition-all duration-300 ease-linear hover:text-colorOrangyRed"
                  >404 Not found</a
                >
              </li>
              <li>
                <a
                  href="reset-password.html"
                  class="transition-all duration-300 ease-linear hover:text-colorOrangyRed"
                  >Password Reset</a
                >
              </li>
            </ul>
          </div>
          <!-- Footer Widget -->

          <!-- Footer Widget -->
          <div class="flex flex-col gap-y-6">
            <!-- Footer Title -->
            <h4 class="text-[21px] font-semibold capitalize text-black">
              Subscribe to our newsletter
            </h4>
            <!-- Footer Title -->
            <!-- Footer Subscriber Form -->
            <form action="#" method="post" class="">
              <div class="relative h-[50px] max-w-[300px]">
                <input
                  type="email"
                  name="newsletter-email"
                  id="newsletter-email"
                  placeholder="Enter your email"
                  class="p-y-[18px] h-full w-full rounded-[50px] border-[1px] border-black px-[24px] pr-20 outline-none"
                  required
                />
                <button
                  type="submit"
                  class="absolute right-[5px] top-[50%] inline-block h-10 -translate-y-[50%] rounded-[50px] bg-black px-6 transition-all hover:bg-orange-500"
                >
                  <img src="/images/home/th-1/arrow-right-large.svg" alt="newsletter" />
                </button>
              </div>
            </form>
            <!-- Footer Subscriber Form -->
          </div>
          <!-- Footer Widget -->
        </div>
        <!-- Footer Center -->
        <div class="h-[1px] w-full bg-[#DBD6CF]"></div>
        <!-- Footer Bottom -->
        <div class="py-9 text-center">
          <p>&copy; Copyright 2023, All Rights Reserved by Mthemeus</p>
        </div>
        <!-- Footer Bottom -->
      </div>

      <!-- Footer Background Shape 1  -->
      <div
        class="orange-gradient-2 absolute -top-[290px] right-[90px] -z-[1] h-[406px] w-[406px] -rotate-[58deg] rounded-[406px]"
      ></div>

      <!-- Footer Background Shape 2  -->
      <div
        class="orange-gradient-1 absolute -right-[200px] -top-[205px] -z-[1] h-[451px] w-[451px] -rotate-[58deg] rounded-[451px]"
      ></div>
    </footer>
    <!--...::: Footer Section End :::... -->
  </div>
</template>
<script setup>
import Feature from "@/components/home/feature";
import "assets/home/assets/fonts/fonts.css";
import "assets/home/assets/css/vendors/swiper-bundle.min.css";
import "assets/home/assets/css/vendors/jos.css";
import "assets/home/assets/css/vendors/menu.css";
import "assets/home/assets/css/custom.css";
import "assets/home/assets/css/style.css";
</script>
