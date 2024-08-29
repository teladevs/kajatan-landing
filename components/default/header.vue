<template>
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
              <li class="nav-item">
                <nuxt-link href="/" class="nav-link-item drop-trigger">Home</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link href="/about" class="nav-link-item">About</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link href="/services" class="nav-link-item drop-trigger"
                  >Services</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link href="/portfolio" class="nav-link-item drop-trigger"
                  >Portofolio
                </nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
        <!-- Header Navigation -->

        <!-- Header User Event -->
        <div class="flex items-center gap-6">
          <a
            href="signup.html"
            class="button hidden rounded-[50px] border-black bg-black text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white lg:inline-block"
            >Contact Us</a
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
</template>
<script>
export default {};
</script>
