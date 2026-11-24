<template>
  <section
    class="vvip"
    :class="{ 'is-dark': theme === 'dark' }"
    :style="rootVars"
    :aria-label="title"
  >
    <div class="vvip__layout">
      <!-- Judul -->
      <header class="vvip__head">
        <h2 class="vvip__title">{{ title }}</h2>
        <p class="vvip__sub">{{ subtitle }}</p>
        <dl v-if="eventDate || arrivalTime" class="vvip__meta">
          <div v-if="eventDate">
            <dt>Tanggal</dt>
            <dd>{{ eventDate }}</dd>
          </div>
          <div v-if="arrivalTime">
            <dt>Kedatangan VVIP</dt>
            <dd>{{ arrivalTime }}</dd>
          </div>
        </dl>
      </header>

      <!-- Peta 3D -->
      <div
        ref="stageEl"
        class="vvip__stage"
        :class="{ 'is-grabbing': grabbing }"
        tabindex="0"
        role="region"
        aria-roledescription="peta 3D"
        aria-label="Peta isometrik 3D alur kendaraan VVIP. Panah kiri/kanan memutar, plus/minus untuk zoom."
        @pointerdown="onDown"
        @pointermove="onMove"
        @pointerup="onUp"
        @pointercancel="onUp"
        @lostpointercapture="onUp"
        @click.capture="onClickCapture"
        @keydown="onKey"
      >
        <div ref="sceneEl" class="vv-scene">
          <!-- bayangan & dinding lempeng -->
          <svg
            class="vv-abs"
            aria-hidden="true"
            :width="PLANE.w"
            :height="PLANE.h"
            :viewBox="VIEWBOX"
            style="transform: translateZ(-27.227px)"
          >
            <polygon
              :points="TILE_POINTS"
              fill="#081b2e"
              stroke="#081b2e"
              stroke-width="19.361"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            v-for="r in SLAB_RINGS"
            :key="'r' + r.z"
            class="vv-abs"
            aria-hidden="true"
            :width="PLANE.w"
            :height="PLANE.h"
            :viewBox="VIEWBOX"
            :style="{ transform: `translateZ(${r.z}px)` }"
          >
            <polygon
              :points="TILE_POINTS"
              fill="none"
              :stroke="r.c"
              stroke-width="19.361"
              stroke-linejoin="round"
            />
          </svg>

          <!-- permukaan tanah, jalan, area parkir, rute -->
          <svg
            class="vv-abs"
            aria-hidden="true"
            :width="PLANE.w"
            :height="PLANE.h"
            :viewBox="VIEWBOX"
          >
            <defs>
              <clipPath :id="ids.clip">
                <polygon :points="TILE_POINTS" />
              </clipPath>
              <pattern
                :id="ids.stallH"
                width="12.101"
                height="10.286"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="12.101"
                  height="0.908"
                  fill="#ffffff"
                  opacity="0.75"
                />
              </pattern>
              <pattern
                :id="ids.stallD"
                width="10.286"
                height="10.286"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(60)"
              >
                <rect
                  x="0"
                  y="0"
                  width="0.908"
                  height="10.286"
                  fill="#ffffff"
                  opacity="0.7"
                />
              </pattern>
              <g :id="ids.roads">
                <ellipse cx="362.269" cy="621.367" rx="38.571" ry="37.361" />
                <path
                  d="M276.807,921.922l-29.17-77.691c-0.904-2.408 -1.104-5.024 -0.578-7.542l0.385-1.839c0.953-4.553 4.174-8.3 8.534-9.925l157.569-59.709l63.832-55.966l21.479-24.202l112.84-90.454"
                />
                <path
                  d="M283.765,923.132l-29.334-74.484c-1.001-2.541 -1.373-5.287 -1.084-8.003l-0.137-14.319"
                />
                <path
                  d="M251.395,832.678l-21.782-60.202l-13.008-17.546l-43.192-0.858c-1.933-0.038 -3.846-0.392 -5.661-1.059c-6.417-2.359 -20.642-9.291 -24.357-25.31c0,0 -8.168,-32.672 22.084,-46.588l27.832,-4.538l43.261,0.303h119.496l19.664,-5.445l-51.429,-194.824l76.538,-8.773"
                />
                <!-- <path
                  d="M340.537,474.75l-16.286,1.096l-69.831,4.698h-36.303s-14.824,4.84 -16.941,-21.782s0,-55.361 0,-55.361c0,0 -0.605,-8.471 -16.034,-8.471h-49.613"
                /> -->
                <path
                  d="M340.639,480.544s23.683,17.606 -4.948,39.206c0,0 -22.278,2.844 -28.329,-15.61c0,0 -0.303,-35.092 33.277,-23.597Z"
                />
                <path
                  d="M170.924,754.023s21.782,-4.538 34.487,-17.244c6.081,-6.081 10.319,-22.481 9.681,-32.37c-0.605,-9.378 -3.328,-27.832 -21.782,-27.832"
                />
                <line x1="214.487" y1="698.057" x2="217.21" y2="754.023" />
                <path
                  d="M375.731,671.435l8.171,20.701c0.597,1.514 0.904,3.126 0.904,4.753v17.681c0,2.74 -0.856,5.408 -2.446,7.639c-5.287,7.421 -18.362,24.076 -31.436,27.578c-15.166,4.062 -83.426,6.67 -97.566,7.172c-1.664,0.059 -3.257,0.689 -4.512,1.783l-18.397,16.043"
                />
                <path
                  d="M214.925,707.06l55.831,7.635l13.008,5.748l46.286,11.798s17.244,2.42 21.176,-4.84s13.008,-28.134 2.723,-48.403"
                />
                <!-- <rect
                  x="405.378"
                  y="258.493"
                  width="149.143"
                  height="301.916"
                  rx="74.571"
                  ry="74.571"
                /> -->
                <line x1="76.538" y1="778.225" x2="154.286" y2="749.485" />
              </g>
            </defs>
            <polygon
              :points="TILE_POINTS"
              fill="#e6eadf"
              stroke="#e6eadf"
              stroke-width="19.361"
              stroke-linejoin="round"
            />
            <g :clip-path="`url(#${ids.clip})`">
              <path :d="VVIP_LOT" fill="#7cc8f1" />
              <path :d="VVIP_LOT" :fill="`url(#${ids.stallD})`" />
              <path
                d="M79.261,682.325v94.084l75.025,-28.437s-19.992,-22.94 -8.484,-47.47l-66.542,-18.177Z"
                fill="#a6e3d7"
              />
              <path
                d="M79.261,682.325v94.084l75.025,-28.437s-19.992,-22.94 -8.484,-47.47l-66.542,-18.177Z"
                :fill="`url(#${ids.stallD})`"
              />
              <path
                d="M406.891,615.166h52.337c2.888,0 5.64,1.226 7.572,3.372h0c1.602,1.78 2.525,4.065 2.609,6.459c0.425,12.173 -4.688,48.205 -22.887,66.404c-25.109,25.109 -64.739,36 -64.739,36l5.445,-29.345l-10.891,-36.303s26.319,-13.613 30.555,-46.588Z"
                fill="#f6f082"
              />
              <path
                d="M406.891,615.166h52.337c2.888,0 5.64,1.226 7.572,3.372h0c1.602,1.78 2.525,4.065 2.609,6.459c0.425,12.173 -4.688,48.205 -22.887,66.404c-25.109,25.109 -64.739,36 -64.739,36l5.445,-29.345l-10.891,-36.303s26.319,-13.613 30.555,-46.588Z"
                :fill="`url(#${ids.stallD})`"
              />
              <use
                :href="`#${ids.roads}`"
                fill="none"
                stroke="#8e979f"
                stroke-width="15.126"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <use
                :href="`#${ids.roads}`"
                fill="none"
                stroke="#b3bac1"
                stroke-width="12.101"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <use
                :href="`#${ids.roads}`"
                fill="none"
                stroke="#ffffff"
                stroke-width="0.756"
                stroke-dasharray="3.63 4.84"
                stroke-linecap="round"
                opacity="0.85"
              />
              <path
                :d="VVIP_LOT"
                fill="none"
                :stroke="routeColor"
                stroke-width="2.118"
                stroke-linejoin="round"
              />
              <!-- <rect
                x="419.597"
                y="267.569"
                width="121.916"
                height="283.462"
                rx="60.958"
                ry="60.958"
                fill="#b0d697"
              /> -->
              <!-- <path :d="FAMILY_LOT" fill="#fdcf6b" />
              <path :d="FAMILY_LOT" :fill="`url(#${ids.stallH})`" /> -->
              <!-- panah Pintu Masuk Timur -->
              <path
                d="M376.336,675.076L381.782,685.966L386.017,686.844"
                fill="none"
                stroke="#ffffff"
                stroke-width="4.84"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M376.336,675.076L381.782,685.966L386.017,686.844"
                fill="none"
                stroke="#1f2933"
                stroke-width="2.42"
                stroke-dasharray="4.235 3.025"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <polygon
                points="392.975,688.084 384.383,690.958 385.835,682.185"
                fill="#1f2933"
                stroke="#ffffff"
                stroke-width="0.908"
                stroke-linejoin="round"
              />
              <!-- panah Parkir Bus 2 -->
              <path
                d="M154.437,747.832L89.849,773.183"
                fill="none"
                stroke="#ffffff"
                stroke-width="4.84"
                stroke-linecap="round"
              />
              <path
                d="M154.437,747.832L89.849,773.183"
                fill="none"
                stroke="#1f2933"
                stroke-width="2.42"
                stroke-dasharray="4.235 3.025"
                stroke-linecap="round"
              />
              <polygon
                points="82.588,775.966 89.97,768.887 92.753,776.632"
                fill="#1f2933"
                stroke="#ffffff"
                stroke-width="0.908"
                stroke-linejoin="round"
              />
            </g>
          </svg>

          <!-- rute VVIP: lapisan kecil terpisah supaya animasinya tidak menggambar ulang seluruh tanah -->
          <svg
            class="vv-abs vv-route"
            aria-hidden="true"
            :width="ROUTE_BOX.w"
            :height="ROUTE_BOX.h"
            :viewBox="ROUTE_BOX.viewBox"
            :style="{ left: ROUTE_BOX.left + 'px', top: ROUTE_BOX.top + 'px' }"
          >
            <defs>
              <pattern
                :id="ids.hatch"
                width="3.63"
                height="3.63"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(45)"
              >
                <rect
                  x="0"
                  y="0"
                  width="1.513"
                  height="3.63"
                  fill="#ffffff"
                  opacity="0.55"
                />
              </pattern>
            </defs>
            <path
              :d="ROUTE_D"
              fill="none"
              stroke="#ffffff"
              stroke-width="7.261"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              class="vv-route-flow"
              :d="ROUTE_D"
              fill="none"
              :stroke="routeColor"
              stroke-width="3.63"
              stroke-dasharray="8.471 5.445"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              ref="progressEl"
              :d="ANIM_D"
              fill="none"
              :stroke="routeColor"
              stroke-width="4.235"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <polygon
              points="307.361,694.286 301.916,685.21 312.807,685.21"
              :fill="routeColor"
              stroke="#ffffff"
              stroke-width="1.21"
              stroke-linejoin="round"
            />
            <rect
              x="258.655"
              y="672.504"
              width="24.202"
              height="10.891"
              rx="2.118"
              fill="#f59f00"
              stroke="#ffffff"
              stroke-width="1.21"
            />
            <rect
              x="258.655"
              y="672.504"
              width="24.202"
              height="10.891"
              rx="2.118"
              :fill="`url(#${ids.hatch})`"
            />
          </svg>

          <!-- lengkung bertumpuk: Tenda Konsumsi & Gerbang Masuk -->
          <template v-for="(e, i) in EXTRUSIONS" :key="'e' + i">
            <svg
              v-for="z in e.layers"
              :key="'e' + i + '-' + z"
              class="vv-abs"
              aria-hidden="true"
              :width="e.w"
              :height="e.h"
              :viewBox="e.viewBox"
              :style="{
                left: e.left + 'px',
                top: e.top + 'px',
                transform: `translateZ(${z}px)`,
              }"
            >
              <path :d="e.d" :fill="e.side" />
            </svg>
            <svg
              class="vv-abs"
              aria-hidden="true"
              :width="e.w"
              :height="e.h"
              :viewBox="e.viewBox"
              :style="{
                left: e.left + 'px',
                top: e.top + 'px',
                transform: `translateZ(${e.height}px)`,
              }"
            >
              <path :d="e.d" :fill="e.cap" />
            </svg>
          </template>

          <!-- bangunan, kendaraan parkir, bus -->
          <VvipBox
            v-for="(b, i) in BOXES"
            :key="'b' + i"
            :x="b.x"
            :y="b.y"
            :w="b.w"
            :h="b.h"
            :d="b.d"
            :z="b.z || 0"
            :c="b.c"
            :win="!!b.win"
            :rot="b.rot || 0"
          >
            <div
              v-if="b.id === 'auditorium'"
              class="vv-decal"
              :class="{ 'is-active': stepIdx === 3 && phase !== 'idle' }"
            >
              <span class="vv-decal-num">4</span>
              <span class="vv-decal-txt"
                ><small>DROP OFF</small><b>Lobby Auditorium</b></span
              >
            </div>
          </VvipBox>

          <!-- tamu turun di drop off -->
          <div
            v-if="phase === 'dwell' && dropPos"
            class="vv-people"
            :style="{ left: dropPos.x + 'px', top: dropPos.y + 'px' }"
          >
            <div
              v-for="n in 3"
              :key="n"
              class="vv-person"
              :style="{ '--i': n }"
            >
              <VvipBox
                :x="0"
                :y="0"
                :w="1.513"
                :h="1.513"
                :d="2.723"
                :c="PERSON_BODY"
                centered
              />
              <VvipBox
                :x="0"
                :y="0"
                :w="1.21"
                :h="1.21"
                :d="1.21"
                :z="2.723"
                :c="PERSON_HEAD"
                centered
              />
            </div>
          </div>

          <!-- mobil VVIP -->
          <div ref="carEl" class="vv-car">
            <div class="vv-car-glow"></div>
            <div ref="carHeadEl" class="vv-car-head">
              <div class="vv-car-shadow"></div>
              <VvipBox
                :x="0"
                :y="0"
                :w="12.706"
                :h="6.05"
                :d="2.723"
                :z="0.605"
                :c="CAR_BODY"
                centered
              />
              <VvipBox
                :x="-0.908"
                :y="0"
                :w="7.261"
                :h="5.143"
                :d="2.42"
                :z="3.328"
                :c="carCabin"
                centered
              />
              <VvipBox
                :x="6.202"
                :y="-1.815"
                :w="0.605"
                :h="1.21"
                :d="0.908"
                :z="1.815"
                :c="LIGHT_F"
                centered
              />
              <VvipBox
                :x="6.202"
                :y="1.815"
                :w="0.605"
                :h="1.21"
                :d="0.908"
                :z="1.815"
                :c="LIGHT_F"
                centered
              />
              <VvipBox
                :x="-6.202"
                :y="-1.815"
                :w="0.605"
                :h="1.21"
                :d="0.908"
                :z="1.815"
                :c="LIGHT_R"
                centered
              />
              <VvipBox
                :x="-6.202"
                :y="1.815"
                :w="0.605"
                :h="1.21"
                :d="0.908"
                :z="1.815"
                :c="LIGHT_R"
                centered
              />
            </div>
          </div>
        </div>

        <!-- Lapisan label 2D: posisi diproyeksikan dari titik 3D setiap frame (selalu tajam & terbaca) -->
        <div ref="ovEl" class="vv-ov">
          <div
            v-for="(t, i) in TREES"
            :key="'t' + i"
            class="vv-o vv-o--tree"
            :data-x="t[0]"
            :data-y="t[1]"
            data-z="0"
            aria-hidden="true"
          >
            <span class="vv-tree"><i></i><b></b></span>
          </div>
          <div
            v-for="(l, i) in LABELS"
            :key="'l' + i"
            class="vv-o"
            :class="{ 'vv-minor': l.pri === 2 }"
            :data-x="l.x"
            :data-y="l.y"
            :data-z="l.z"
            :style="{ '--stem': l.stem }"
          >
            <span class="vv-stem"></span><span class="vv-foot"></span>
            <span
              class="vv-tag"
              :class="[
                'vv-tag--' + l.kind,
                l.align ? 'vv-tag--' + l.align : '',
              ]"
              :style="{ background: l.bg || undefined }"
            >
              <span v-if="l.kind === 'park'" class="vv-p">P</span>
              <span
                v-else-if="l.kind === 'pill'"
                class="vv-dot"
                :style="{ background: l.dot }"
              ></span>
              <svg
                v-else-if="l.kind === 'arrow'"
                aria-hidden="true"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1f2933"
                stroke-width="2.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M19 12H5" />
                <path d="M11 6l-6 6 6 6" />
              </svg>
              {{ l.text }}
            </span>
          </div>
          <div
            v-for="m in MARKERS"
            :key="'m' + m.step"
            class="vv-o vv-o--marker"
            :data-x="m.x"
            :data-y="m.y"
            data-z="0"
            :style="{ '--stem': m.stem }"
          >
            <span class="vv-stem"></span><span class="vv-foot"></span>
            <button
              type="button"
              class="vv-marker"
              :class="{ 'is-active': stepIdx === m.step && phase !== 'idle' }"
              :aria-label="`Langkah ${m.step + 1}: ${stepsList[m.step].title}`"
              @click="goToStep(m.step)"
            >
              {{ m.step + 1 }}
            </button>
          </div>
          <div
            class="vv-o vv-o--marker"
            :data-x="VVIP_LABEL.x"
            :data-y="VVIP_LABEL.y"
            data-z="0"
            :style="{ '--stem': VVIP_LABEL.stem }"
          >
            <span class="vv-stem"></span><span class="vv-foot"></span>
            <button
              type="button"
              class="vv-tag vv-tag--vvip vv-tag--left"
              :class="{ 'is-active': stepIdx === 4 && phase !== 'idle' }"
              :aria-label="`Langkah 5: ${stepsList[4].title}`"
              @click="goToStep(4)"
            >
              <span class="vv-badge-num">5</span
              ><span class="vv-p">P</span>Parkir VVIP
            </button>
          </div>
          <div ref="carTagEl" class="vv-o vv-o--car" aria-hidden="true">
            <span class="vv-cartag"><i></i>{{ carTag }}</span>
          </div>
        </div>

        <!-- kontrol peta -->
        <div class="vv-ui vv-mapctl">
          <button
            type="button"
            class="vv-icon"
            aria-label="Perbesar"
            @click="zoomBy(1.3)"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </button>
          <button
            type="button"
            class="vv-icon"
            aria-label="Perkecil"
            @click="zoomBy(1 / 1.3)"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14" />
            </svg>
          </button>
          <button
            type="button"
            class="vv-icon"
            aria-label="Putar peta"
            @click="rotateBy(-45)"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 12a8 8 0 1 1-2.35-5.65" />
              <path d="M20 4v5h-5" />
            </svg>
          </button>
          <button
            type="button"
            class="vv-icon"
            aria-label="Atur ulang tampilan"
            @click="resetView"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
            </svg>
          </button>
        </div>
        <p v-if="showHint" class="vv-ui vv-hint">{{ hintText }}</p>
      </div>

      <!-- Kartu langkah aktif + kontrol -->
      <div class="vvip__card">
        <div class="vv-card-top">
          <span class="vv-bignum" :class="{ 'is-stop': current.stop }">{{
            stepIdx + 1
          }}</span>
          <div class="vv-card-head">
            <p class="vv-kicker">
              Langkah {{ stepIdx + 1 }} dari {{ stepsList.length }} ·
              {{ statusText }}
            </p>
            <h3 class="vv-card-title">{{ current.title }}</h3>
          </div>
        </div>
        <p class="vv-card-text">{{ current.text }}</p>
        <div class="vv-progress" aria-hidden="true">
          <span
            v-for="(s, i) in stepsList"
            :key="i"
            class="vv-seg"
            :class="{ 'is-stop': s.stop }"
            ><i :ref="(el) => (segEls[i] = el)"></i
          ></span>
        </div>
        <div class="vv-ctrls">
          <button
            type="button"
            class="vv-btn"
            aria-label="Langkah sebelumnya"
            @click="prev"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
          <button type="button" class="vv-btn vv-btn--main" @click="toggle">
            <svg v-if="playing" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 6v12M15 6v12" />
            </svg>
            <svg
              v-else-if="phase === 'done'"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M4 12a8 8 0 1 0 2.35-5.65" />
              <path d="M4 4v5h5" />
            </svg>
            <svg v-else viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5.5v13l10.5-6.5z" class="fill" />
            </svg>
            <span>{{ playLabel }}</span>
          </button>
          <button
            type="button"
            class="vv-btn"
            aria-label="Langkah berikutnya"
            @click="next"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
        <div class="vv-opts">
          <div class="vv-segctl" role="group" aria-label="Kecepatan simulasi">
            <button
              v-for="sp in SPEEDS"
              :key="sp"
              type="button"
              :aria-pressed="speedSel === sp ? 'true' : 'false'"
              @click="speedSel = sp"
            >
              {{ sp }}×
            </button>
          </div>
          <label class="vv-switch">
            <input v-model="follow" type="checkbox" />
            <span class="vv-switch-ui" aria-hidden="true"></span>
            <span>Kamera ikuti mobil</span>
          </label>
        </div>
      </div>

      <!-- Daftar langkah, titik penting, keterangan -->
      <div class="vvip__rest">
        <section class="vv-block">
          <h3 class="vv-block-title">Alur kendaraan VVIP</h3>
          <ol class="vv-steps">
            <li v-for="(s, i) in stepsList" :key="i">
              <button
                type="button"
                class="vv-step"
                :class="{
                  'is-active': i === stepIdx,
                  'is-done': i < stepIdx || phase === 'done',
                  'is-stop': s.stop,
                }"
                :aria-current="i === stepIdx ? 'step' : undefined"
                @click="goToStep(i)"
              >
                <span class="vv-num">{{ i + 1 }}</span>
                <span class="vv-step-txt"
                  ><b>{{ s.title }}</b
                  ><small>{{ s.text }}</small></span
                >
              </button>
            </li>
          </ol>
        </section>

        <section class="vv-block">
          <h3 class="vv-block-title">Titik penting</h3>
          <ul class="vv-pois">
            <li v-for="p in POIS" :key="p.id">
              <button
                type="button"
                class="vv-poi"
                :class="{ 'is-active': poiId === p.id }"
                @click="flyTo(p)"
              >
                <span class="vv-poi-ic" :class="'vv-poi-ic--' + p.icon">
                  <svg
                    v-if="p.icon === 'drop'"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 4v12" />
                    <path d="M6 10l6 6 6-6" />
                    <path d="M5 20h14" />
                  </svg>
                  <template v-else-if="p.icon === 'p'">P</template>
                  <svg v-else viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 20V5a1 1 0 0 1 1-1h9v16" />
                    <path d="M14 4l6 2v14" />
                    <path d="M3 20h18" />
                  </svg>
                </span>
                <span class="vv-poi-txt"
                  ><b>{{ p.name }}</b
                  ><small>{{ p.note }}</small></span
                >
                <span class="vv-poi-go" aria-hidden="true">Lihat</span>
              </button>
            </li>
          </ul>
        </section>

        <section class="vv-block">
          <h3 class="vv-block-title">Keterangan</h3>
          <ul class="vv-legend">
            <li>
              <svg
                width="44"
                height="12"
                viewBox="0 0 44 12"
                aria-hidden="true"
              >
                <line
                  x1="4"
                  y1="6"
                  x2="40"
                  y2="6"
                  :stroke="routeColor"
                  stroke-width="6"
                  stroke-dasharray="10 6"
                  stroke-linecap="round"
                /></svg
              >Jalur kendaraan VVIP
            </li>
            <li>
              <svg
                width="44"
                height="12"
                viewBox="0 0 44 12"
                aria-hidden="true"
              >
                <line
                  x1="4"
                  y1="6"
                  x2="40"
                  y2="6"
                  stroke="#ffffff"
                  stroke-width="6"
                  stroke-dasharray="8 6"
                  stroke-linecap="round"
                /></svg
              >Jalur bus &amp; arah Parkir Bus 2
            </li>
            <li>
              <svg
                width="44"
                height="12"
                viewBox="0 0 44 12"
                aria-hidden="true"
              >
                <line
                  x1="4"
                  y1="6"
                  x2="40"
                  y2="6"
                  stroke="#b3bac1"
                  stroke-width="10"
                  stroke-linecap="round"
                /></svg
              >Jalan kampus
            </li>
          </ul>
          <ul class="vv-swatches">
            <li v-for="b in BUILDINGS" :key="b[0]">
              <span :style="{ background: b[1] }"></span>{{ b[0] }}
            </li>
          </ul>
          <p class="vv-note">Denah ilustratif, tidak berskala.</p>
        </section>
      </div>
    </div>
    <p class="vv-sr" aria-live="polite">{{ liveText }}</p>
  </section>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from "vue";
import VvipBox from "./VvipBox.vue";
import {
  PLANE,
  OX,
  OY,
  VIEWBOX,
  SCALE,
  TILE_POINTS,
  SLAB_RINGS,
  ROUTE_D,
  ANIM_D,
  ANCHORS,
  DWELL_SECONDS,
  STEPS,
  CAM_STEPS,
  CAM_OVERVIEW,
  CAM_DONE,
  OVERVIEW_BOX,
  POIS,
  BOXES,
  EXTRUSIONS,
  TREES,
  LABELS,
  MARKERS,
  VVIP_LABEL,
} from "./mapData.js";

const props = defineProps({
  /** Warna jalur VVIP (garis rute, penanda, atap mobil) */
  routeColor: { type: String, default: "#7048e8" },
  /** Mulai otomatis saat tampil (dinonaktifkan bila pengguna memilih reduced motion) */
  autoplay: { type: Boolean, default: true },
  /** Kecepatan awal: 0.5 | 1 | 2 */
  speed: { type: Number, default: 1 },
  /** Tinggi komponen pada tata letak desktop (container ≥ 880px) */
  height: { type: String, default: "720px" },
  /** 'light' | 'dark' */
  theme: { type: String, default: "light" },
  title: { type: String, default: "Panduan Kendaraan VVIP" },
  subtitle: {
    type: String,
    default:
      "Turunkan tamu VVIP di Drop Off Lobby Auditorium, lalu parkir di Parkir VVIP di seberang lobby.",
  },
  eventDate: { type: String, default: "" },
  arrivalTime: { type: String, default: "" },
  /** Ganti teks langkah: [{ title, text }, …] (5 item, urut) */
  steps: { type: Array, default: null },
});
const emit = defineEmits(["step-change", "finished"]);

// ── konstanta tampilan ─────────────────────────────────────────
const VVIP_LOT =
  "M207.832,678.998L217.21,707.373L271.615,715.3L319.16,730.729L345.15,731.581L358.79,715.905L358.79,700.873L355.287,681.89L349.751,676.88L207.832,675.065Z";
const FAMILY_LOT =
  "M479.95,551.031c-17.252,0 -33.472,-6.718 -45.671,-18.917c-12.199,-12.199 -18.917,-28.419 -18.917,-45.671v-154.286c0,-17.252 6.718,-33.472 18.917,-45.671c12.199,-12.199 28.419,-18.917 45.671,-18.917s33.472,6.718 45.671,18.917c12.199,12.199 18.917,28.419 18.917,45.671v154.286c0,17.252 -6.718,33.472 -18.917,45.671c-12.199,12.199 -28.419,18.917 -45.671,18.917ZM479.95,285.72c-25.606,0 -46.437,20.832 -46.437,46.437v154.286c0,25.605 20.831,46.437 46.437,46.437s46.437,-20.832 46.437,-46.437v-154.286c0,-25.605 -20.831,-46.437 -46.437,-46.437Z";
const CAR_BODY = ["#2a313a", "#1a1f26", "#12161b"];
const LIGHT_F = ["#ffe066", "#ffd43b", "#fab005"];
const LIGHT_R = ["#ff6b6b", "#e03131", "#c92a2a"];
const PERSON_BODY = ["#0d2741", "#1a3a5c", "#0a1f33"];
const PERSON_HEAD = ["#f1c7a1", "#d9ae88", "#c49a76"];
const SPEEDS = [0.5, 1, 2];
const BUILDINGS = [
  ["Auditorium", "#3a4f9f"],
  ["Sport Hall", "#c9a3c0"],
  ["Klinik", "#00a99d"],
  ["Tenda Konsumsi", "#f9b237"],
  ["Toilet", "#7fc147"],
  ["Gedung Utama", "#93d5ec"],
  ["Ruang Maritim", "#1771b7"],
];
const VMAX = 36.303; // unit peta per detik pada kecepatan 1×
const D2R = Math.PI / 180;
// kotak lapisan rute (koordinat SVG 150..800 × 1500..2080 pada skala lama)
const ROUTE_BOX = { x: 126.151, y: 660.403, w: 196.639, h: 175.462 };
ROUTE_BOX.viewBox = `${ROUTE_BOX.x} ${ROUTE_BOX.y} ${ROUTE_BOX.w} ${ROUTE_BOX.h}`;
ROUTE_BOX.left = ROUTE_BOX.x + OX;
ROUTE_BOX.top = ROUTE_BOX.y + OY;
const OVC = {
  x: (OVERVIEW_BOX.x0 + OVERVIEW_BOX.x1) / 2,
  y: (OVERVIEW_BOX.y0 + OVERVIEW_BOX.y1) / 2,
};

// Vue < 3.5 belum punya useId(); cukup penghitung lokal untuk id unik per instance.
let uidSeq = 0;
const uid = `vv${++uidSeq}`;
const ids = {
  clip: `${uid}-clip`,
  stallH: `${uid}-sh`,
  stallD: `${uid}-sd`,
  hatch: `${uid}-ht`,
  roads: `${uid}-rd`,
};

// ── state reaktif (hanya yang jarang berubah) ──────────────────
const stageEl = ref(null);
const sceneEl = ref(null);
const progressEl = ref(null);
const carEl = ref(null);
const carHeadEl = ref(null);
const ovEl = ref(null);
const carTagEl = ref(null);
const segEls = [];
let ovItems = [];

const playing = ref(false);
const phase = ref("idle"); // idle | drive | dwell | done
const stepIdx = ref(0);
const follow = ref(true);
const speedSel = ref(SPEEDS.includes(props.speed) ? props.speed : 1);
const grabbing = ref(false);
const showHint = ref(true);
const poiId = ref(null);
const dropPos = ref(null);
const liveText = ref("");

const stepsList = computed(() =>
  STEPS.map((s, i) => ({ ...s, ...((props.steps && props.steps[i]) || {}) })),
);
const current = computed(() => stepsList.value[stepIdx.value]);
const rootVars = computed(() => ({
  "--route": props.routeColor,
  "--vvip-h": props.height,
}));
const carCabin = computed(() => [props.routeColor, "#8fa9c4", "#6f8aa6"]);
const carTag = computed(() =>
  phase.value === "dwell"
    ? "Tamu turun"
    : phase.value === "done"
    ? "Terparkir"
    : "VVIP",
);
const playLabel = computed(() =>
  playing.value
    ? "Jeda"
    : phase.value === "done"
    ? "Ulangi"
    : phase.value === "idle"
    ? "Mulai simulasi"
    : "Lanjutkan",
);
const statusText = computed(() => {
  if (phase.value === "idle") return "siap";
  if (phase.value === "done") return "selesai";
  if (!playing.value) return "dijeda";
  return phase.value === "dwell" ? "berhenti" : "melaju";
});
const isCoarse =
  typeof window !== "undefined" &&
  window.matchMedia?.("(pointer: coarse)").matches;
const hintText = isCoarse
  ? "Geser ke samping untuk memutar · cubit untuk zoom"
  : "Seret untuk memutar & memiringkan · scroll untuk zoom";

// ── state non-reaktif (diubah tiap frame, langsung ke DOM) ────
const sim = { L: 0, startL: 0, dwellT: 0, dropDone: false };
const G = { total: 1, a1: 0, a2: 0, drop: 0, end: 1, xs: null, ys: null };
const cam = { x: OVC.x, y: OVC.y, s: 0.6, rz: -30, rx: 54 };
const tgt = { ...cam };
const carPos = { x: 0, y: 0, h: 0 };
let W = 800;
let H = 600;
let fit = 0.6;
let userCam = false;
let poi = null;
let reduced = false;
let raf = 0;
let last = 0;
let visible = true;
let ready = false;
let autoTimer = 0;
let hintTimer = 0;
let ro = null;
let io = null;

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const clamp01 = (v) => clamp(v, 0, 1);
const clampS = (s) =>
  clamp(
    s,
    Math.max(0.18 / SCALE, fit * 0.55),
    Math.min(3.2 / SCALE, Math.max(fit * 3.4, 1.4 / SCALE)),
  );
const angDiff = (a, b) => ((((b - a) % 360) + 540) % 360) - 180;

function buildGeometry() {
  const path = progressEl.value;
  const total = path.getTotalLength();
  const n = Math.ceil(total) + 1;
  const xs = new Float32Array(n);
  const ys = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const p = path.getPointAtLength(Math.min(i, total));
    xs[i] = p.x + OX;
    ys[i] = p.y + OY;
  }
  const nearest = ([sx, sy]) => {
    let best = 0;
    let bd = Infinity;
    for (let i = 0; i < n; i++) {
      const d = (xs[i] - (sx + OX)) ** 2 + (ys[i] - (sy + OY)) ** 2;
      if (d < bd) {
        bd = d;
        best = i;
      }
    }
    return best;
  };
  Object.assign(G, {
    total,
    xs,
    ys,
    end: total,
    a1: nearest(ANCHORS.a1),
    a2: nearest(ANCHORS.a2),
    drop: nearest(ANCHORS.drop),
  });
  path.style.strokeDasharray = `${total} ${total}`;
  dropPos.value = pointAt(G.drop);
}

function pointAt(L) {
  const l = clamp(L, 0, G.total);
  const i = Math.floor(l);
  const j = Math.min(i + 1, G.xs.length - 1);
  const f = l - i;
  return {
    x: G.xs[i] + (G.xs[j] - G.xs[i]) * f,
    y: G.ys[i] + (G.ys[j] - G.ys[i]) * f,
  };
}
function headingAt(L) {
  const a = pointAt(L - 7 * SCALE);
  const b = pointAt(L + 7 * SCALE);
  return Math.atan2(b.y - a.y, b.x - a.x) / D2R;
}

function computeFit() {
  const { rz, rx } = CAM_OVERVIEW;
  const cz = Math.cos(rz * D2R);
  const sz = Math.sin(rz * D2R);
  const cx = Math.cos(rx * D2R);
  const { x0, y0, x1, y1 } = OVERVIEW_BOX;
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;
  for (const [x, y] of [
    [x0, y0],
    [x1, y0],
    [x1, y1],
    [x0, y1],
  ]) {
    const X = x * cz - y * sz;
    const Y = (x * sz + y * cz) * cx;
    minX = Math.min(minX, X);
    maxX = Math.max(maxX, X);
    minY = Math.min(minY, Y);
    maxY = Math.max(maxY, Y);
  }
  fit = Math.min((W * 0.94) / (maxX - minX), (H * 0.84) / (maxY - minY));
}

function preset() {
  if (poi) return poi;
  if (phase.value === "idle" || !follow.value) return CAM_OVERVIEW;
  if (phase.value === "done") return CAM_DONE;
  return CAM_STEPS[stepIdx.value];
}

function computeStep() {
  if (phase.value === "done" || sim.dropDone) return 4;
  if (phase.value === "dwell") return 3;
  if (sim.L < G.a1) return 0;
  if (sim.L < G.a2) return 1;
  return 2;
}

// ── loop animasi ───────────────────────────────────────────────
function tick(dt) {
  if (playing.value) {
    if (phase.value === "drive") {
      const stop = sim.dropDone ? G.end : G.drop;
      const f = Math.max(
        0.14,
        Math.min(
          1,
          (sim.L - sim.startL + 10 * SCALE) / (90 * SCALE),
          (stop - sim.L) / (120 * SCALE),
        ),
      );
      sim.L = Math.min(stop, sim.L + VMAX * speedSel.value * f * dt);
      if (stop - sim.L < 0.05 * SCALE) {
        sim.L = stop;
        if (!sim.dropDone) {
          phase.value = "dwell";
          sim.dwellT = 0;
        } else {
          phase.value = "done";
          playing.value = false;
          emit("finished");
        }
      }
    } else if (phase.value === "dwell") {
      sim.dwellT += dt * speedSel.value;
      if (sim.dwellT >= DWELL_SECONDS) {
        sim.dropDone = true;
        sim.startL = sim.L;
        phase.value = "drive";
      }
    }
  }
  const s = computeStep();
  if (s !== stepIdx.value) stepIdx.value = s;

  // mobil
  const p = pointAt(sim.L);
  const h = headingAt(sim.L);
  carPos.x = p.x;
  carPos.y = p.y;
  carPos.h += angDiff(carPos.h, h) * (reduced ? 1 : 1 - Math.exp(-dt * 12));

  // kamera
  const pr = preset();
  if (!userCam) {
    tgt.rz = pr.rz;
    tgt.rx = pr.rx;
    tgt.s = clampS(Math.min(fit * pr.k, 2.4 / SCALE));
  }
  const tp = poi || (follow.value && phase.value !== "idle" ? carPos : OVC);
  tgt.x = tp.x;
  tgt.y = tp.y;
  const a = reduced ? 1 : 1 - Math.exp(-dt * 3);
  cam.x += (tgt.x - cam.x) * a;
  cam.y += (tgt.y - cam.y) * a;
  cam.s += (tgt.s - cam.s) * a;
  cam.rz += angDiff(cam.rz, tgt.rz) * a;
  cam.rx += (tgt.rx - cam.rx) * a;
  render();

  const settled =
    Math.abs(tgt.x - cam.x) + Math.abs(tgt.y - cam.y) < 0.05 * SCALE &&
    Math.abs(tgt.s - cam.s) < 0.0005 &&
    Math.abs(angDiff(cam.rz, tgt.rz)) < 0.02 &&
    Math.abs(tgt.rx - cam.rx) < 0.02 &&
    Math.abs(angDiff(carPos.h, h)) < 0.05;
  return playing.value || !settled || grabbing.value;
}

function render() {
  const scene = sceneEl.value;
  if (!scene) return;
  const ox = W / 2;
  const oy = H * 0.54;
  const s = cam.s;
  scene.style.transform =
    `translate3d(${ox}px, ${oy}px, 0) scale(${s}) rotateX(${cam.rx}deg) ` +
    `rotateZ(${cam.rz}deg) translate3d(${-cam.x}px, ${-cam.y}px, 0)`;
  stageEl.value.classList.toggle("is-far", s * SCALE < 0.85);

  // proyeksi ortografis titik 3D → layar (sama persis dengan transform adegan)
  const cz = Math.cos(cam.rz * D2R);
  const sz = Math.sin(cam.rz * D2R);
  const cxr = Math.cos(cam.rx * D2R);
  const sxr = Math.sin(cam.rx * D2R);
  const place = (el, x, y, z) => {
    const dx = x - cam.x;
    const dy = y - cam.y;
    const sx = ox + s * (dx * cz - dy * sz);
    const sy = oy + s * ((dx * sz + dy * cz) * cxr - z * sxr);
    el.style.transform = `translate3d(${sx.toFixed(1)}px, ${sy.toFixed(
      1,
    )}px, 0)`;
  };
  for (const it of ovItems) place(it.el, it.x, it.y, it.z);
  if (carTagEl.value) place(carTagEl.value, carPos.x, carPos.y, 30 * SCALE);
  ovEl.value.style.setProperty(
    "--sk",
    clamp(s * SCALE * 0.6, 0.3, 0.9).toFixed(3),
  );
  ovEl.value.style.setProperty("--ts", (s * SCALE).toFixed(3));
  carEl.value.style.transform = `translate3d(${carPos.x}px, ${carPos.y}px, 0)`;
  carHeadEl.value.style.transform = `rotateZ(${carPos.h}deg)`;
  progressEl.value.style.strokeDashoffset = `${G.total - sim.L}`;
  const done = phase.value === "done";
  const fr = [
    clamp01(sim.L / G.a1),
    clamp01((sim.L - G.a1) / (G.a2 - G.a1)),
    clamp01((sim.L - G.a2) / (G.drop - G.a2)),
    sim.dropDone
      ? 1
      : phase.value === "dwell"
      ? clamp01(sim.dwellT / DWELL_SECONDS)
      : 0,
    sim.dropDone ? clamp01((sim.L - G.drop) / (G.end - G.drop)) : 0,
  ];
  for (let i = 0; i < segEls.length; i++) {
    if (segEls[i]) segEls[i].style.transform = `scaleX(${done ? 1 : fr[i]})`;
  }
}

function loop(now) {
  raf = 0;
  const dt = Math.min(0.1, Math.max(0, (now - last) / 1000));
  last = now;
  const keep = tick(dt);
  if (keep && visible && !document.hidden) raf = requestAnimationFrame(loop);
}
function kick() {
  if (!ready || raf || !visible) return;
  last = performance.now();
  raf = requestAnimationFrame(loop);
}

// ── aksi ───────────────────────────────────────────────────────
function play() {
  if (phase.value === "done") return restart();
  if (phase.value === "idle") {
    phase.value = "drive";
    sim.startL = sim.L;
  }
  playing.value = true;
  kick();
}
function pause() {
  playing.value = false;
}
function toggle() {
  (playing.value ? pause : play)();
}
function restart() {
  goToStep(0);
}
function goToStep(i) {
  if (!ready) return;
  clearTimeout(autoTimer);
  poi = null;
  poiId.value = null;
  userCam = false;
  sim.dwellT = 0;
  if (i <= 2) {
    sim.L = [0, G.a1, G.a2][i];
    sim.dropDone = false;
    phase.value = "drive";
  } else if (i === 3) {
    sim.L = G.drop;
    sim.dropDone = false;
    phase.value = "dwell";
  } else {
    sim.L = G.drop;
    sim.dropDone = true;
    phase.value = "drive";
  }
  sim.startL = sim.L;
  carPos.h = headingAt(sim.L + 1);
  stepIdx.value = computeStep();
  playing.value = true;
  kick();
}
function next() {
  if (phase.value === "done") return;
  if (stepIdx.value >= 4 && phase.value !== "idle") {
    sim.L = G.end;
    sim.dropDone = true;
    phase.value = "done";
    playing.value = false;
    emit("finished");
    kick();
    return;
  }
  goToStep(phase.value === "idle" ? 0 : stepIdx.value + 1);
}
function prev() {
  if (phase.value === "done") return goToStep(4);
  goToStep(Math.max(0, stepIdx.value - 1));
}
function zoomBy(f) {
  userCam = true;
  tgt.s = clampS(tgt.s * f);
  hideHint();
  kick();
}
function rotateBy(deg) {
  userCam = true;
  tgt.rz += deg;
  hideHint();
  kick();
}
function resetView() {
  userCam = false;
  poi = null;
  poiId.value = null;
  kick();
}
function flyTo(p) {
  poi = p;
  poiId.value = p.id;
  userCam = false;
  kick();
}
function hideHint() {
  showHint.value = false;
}

watch(follow, (v) => {
  if (v) {
    poi = null;
    poiId.value = null;
  }
  kick();
});
watch(speedSel, kick);
watch(stepIdx, (i) => {
  emit("step-change", i);
  liveText.value = `Langkah ${i + 1}: ${stepsList.value[i].title}. ${
    stepsList.value[i].text
  }`;
});

// ── interaksi peta ─────────────────────────────────────────────
const ptrs = new Map();
let drag = null;
let pinch = null;
let suppressClick = false;
const ptrDist = () => {
  const [a, b] = [...ptrs.values()];
  return Math.hypot(a.x - b.x, a.y - b.y) || 1;
};
function onDown(e) {
  if (e.button > 0 || e.target.closest(".vv-ui")) return;
  ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (ptrs.size === 1) {
    drag = {
      x0: e.clientX,
      y0: e.clientY,
      rz: tgt.rz,
      rx: tgt.rx,
      moved: false,
      type: e.pointerType,
      id: e.pointerId,
    };
  } else if (ptrs.size === 2) {
    pinch = { d0: ptrDist(), s0: tgt.s };
  }
}
function onMove(e) {
  if (!ptrs.has(e.pointerId)) return;
  ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (ptrs.size === 2 && pinch) {
    userCam = true;
    tgt.s = clampS((pinch.s0 * ptrDist()) / pinch.d0);
    if (drag) drag.moved = true;
    hideHint();
    kick();
    return;
  }
  if (!drag) return;
  const dx = e.clientX - drag.x0;
  const dy = e.clientY - drag.y0;
  if (!drag.moved) {
    if (Math.hypot(dx, dy) < 6) return;
    drag.moved = true;
    grabbing.value = true;
    try {
      stageEl.value.setPointerCapture(drag.id);
    } catch {
      /* abaikan */
    }
  }
  userCam = true;
  hideHint();
  cam.rz = tgt.rz = drag.rz + dx * 0.35;
  if (drag.type === "mouse")
    cam.rx = tgt.rx = clamp(drag.rx - dy * 0.25, 28, 68);
  kick();
}
function onUp(e) {
  if (!ptrs.has(e.pointerId)) return;
  ptrs.delete(e.pointerId);
  if (ptrs.size < 2) pinch = null;
  if (ptrs.size === 0) {
    if (drag && drag.moved) {
      suppressClick = true;
      setTimeout(() => {
        suppressClick = false;
      }, 60);
    }
    drag = null;
    grabbing.value = false;
  }
}
function onClickCapture(e) {
  if (suppressClick) {
    e.stopPropagation();
    e.preventDefault();
    suppressClick = false;
  }
}
function onWheel(e) {
  e.preventDefault();
  userCam = true;
  tgt.s = clampS(tgt.s * Math.exp(-e.deltaY * 0.0016));
  hideHint();
  kick();
}
function onKey(e) {
  const map = {
    ArrowLeft: () => rotateBy(-15),
    ArrowRight: () => rotateBy(15),
    "+": () => zoomBy(1.2),
    "=": () => zoomBy(1.2),
    "-": () => zoomBy(1 / 1.2),
  };
  if (map[e.key]) {
    e.preventDefault();
    map[e.key]();
  }
}
function onVisibility() {
  if (!document.hidden) kick();
}

onMounted(() => {
  reduced = !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  buildGeometry();
  const stage = stageEl.value;
  const measure = () => {
    // clientWidth/Height = ukuran layout (tidak terpengaruh transform scale induk)
    W = stage.clientWidth || 800;
    H = stage.clientHeight || 600;
    computeFit();
  };
  measure();
  tgt.s = cam.s = clampS(fit);
  const p0 = pointAt(0);
  Object.assign(carPos, { x: p0.x, y: p0.y, h: headingAt(1) });
  ovItems = [...ovEl.value.querySelectorAll(".vv-o[data-x]")].map((el) => ({
    el,
    x: +el.dataset.x,
    y: +el.dataset.y,
    z: +el.dataset.z || 0,
  }));
  ready = true;
  render();
  ro = new ResizeObserver(() => {
    measure();
    kick();
  });
  ro.observe(stage);
  io = new IntersectionObserver(([en]) => {
    visible = en.isIntersecting;
    if (visible) kick();
  });
  io.observe(stage);
  stage.addEventListener("wheel", onWheel, { passive: false });
  document.addEventListener("visibilitychange", onVisibility);
  liveText.value = "";
  if (props.autoplay && !reduced) autoTimer = setTimeout(play, 1100);
  hintTimer = setTimeout(hideHint, 8000);
});
onBeforeUnmount(() => {
  clearTimeout(autoTimer);
  clearTimeout(hintTimer);
  if (raf) cancelAnimationFrame(raf);
  ro?.disconnect();
  io?.disconnect();
  stageEl.value?.removeEventListener("wheel", onWheel);
  document.removeEventListener("visibilitychange", onVisibility);
});

defineExpose({ play, pause, restart, goToStep });
</script>

<style scoped>
/* ── tema ─────────────────────────────────────────────── */
.vvip {
  --bg: #e0ecf9;
  --stage: #d4e5f7;
  --ink: #0d2741;
  --ink-2: #3b5674;
  --card: #143553;
  --card-2: #1c4166;
  --card-ink: #e3ebf3;
  --card-ink-2: #a9bccf;
  --line: rgba(13, 39, 65, 0.14);
  --drop: #f59f00;
  container-type: inline-size;
  position: relative;
  background: var(--bg);
  color: var(--ink);
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  -webkit-tap-highlight-color: transparent;
}
.vvip.is-dark {
  --bg: #0a1828;
  --stage: #0e2237;
  --ink: #eef4fb;
  --ink-2: #a9bccf;
  --card: #15324f;
  --card-2: #1d4268;
  --line: rgba(255, 255, 255, 0.12);
}
.vvip :where(*) {
  box-sizing: border-box;
  min-width: 0;
}
.vvip :where(button) {
  font: inherit;
  color: inherit;
}
.vvip :where(svg) {
  display: block;
}

/* ── tata letak (mobile-first, container query) ──────── */
.vvip__layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-areas: "head" "stage" "card" "rest";
}
.vvip__head {
  grid-area: head;
  padding: 18px 16px 12px;
}
.vvip__title {
  margin: 0;
  font-family: "Space Grotesk", Inter, system-ui, sans-serif;
  font-size: 27px;
  line-height: 1.05;
  font-weight: 700;
  letter-spacing: -0.01em;
  text-wrap: balance;
}
.vvip__sub {
  margin: 8px 0 0;
  font-size: 16px;
  line-height: 1.45;
  color: var(--ink-2);
  max-width: 46ch;
}
.vvip__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 20px;
  margin: 12px 0 0;
}
.vvip__meta div {
  display: grid;
}
.vvip__meta dt {
  font-size: 13px;
  color: var(--ink-2);
}
.vvip__meta dd {
  margin: 0;
  font-weight: 600;
}

.vvip__stage {
  grid-area: stage;
  position: relative;
  overflow: hidden;
  height: clamp(360px, 62cqw, 700px);
  background: radial-gradient(
    120% 90% at 50% 40%,
    color-mix(in srgb, var(--stage) 70%, #fff) 0%,
    var(--stage) 70%
  );
  touch-action: pan-y;
  cursor: grab;
  user-select: none;
  -webkit-user-select: none;
  outline: none;
}
.vvip.is-dark .vvip__stage {
  background: radial-gradient(
    120% 90% at 50% 40%,
    #16304d 0%,
    var(--stage) 70%
  );
}
.vvip__stage:focus-visible {
  box-shadow: inset 0 0 0 3px var(--route);
}
.vvip__stage.is-grabbing {
  cursor: grabbing;
}

.vvip__card {
  grid-area: card;
  position: relative;
  z-index: 2;
  margin: 16px 10px 0;
  padding: 18px 18px 16px;
  border-radius: 20px;
  background: var(--card);
  color: #fff;
  box-shadow: 0 10px 30px rgba(8, 27, 46, 0.25);
}
.vvip__rest {
  grid-area: rest;
  display: grid;
  gap: 12px;
  padding: 14px 10px 24px;
}

@container (min-width: 880px) {
  .vvip__stage {
    height: min(78vh, var(--vvip-h, 720px));
  }
  .vvip__head {
    padding: 28px 24px 16px;
  }
  .vvip__title {
    font-size: 40px;
  }
  .vvip__card {
    margin: 0 24px;
  }
  .vvip__rest {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    padding: 14px 24px 24px;
    align-items: start;
  }
}

/* ── adegan 3D ───────────────────────────────────────── */
.vv-scene {
  position: absolute;
  left: 0;
  top: 0;
  width: 720px;
  height: 1080px;
  transform-origin: 0 0;
  transform-style: preserve-3d;
  will-change: transform;
  font-family: Inter, system-ui, sans-serif;
}
.vv-abs {
  position: absolute;
  left: 0;
  top: 0;
  overflow: visible;
}
.vv-route {
  transform: translateZ(0.121px);
}
.vv-route-flow {
  animation: vvFlow 1.1s linear infinite;
}
@keyframes vvFlow {
  to {
    stroke-dashoffset: -13.916;
  }
}

.vv-ov {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  --sk: 0.6;
  --ts: 1;
}
.vv-o {
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  z-index: 1;
}
.vv-o--tree {
  z-index: 0;
}
.vv-o--marker {
  z-index: 2;
}
.vv-o--car {
  z-index: 3;
}
.vv-tree {
  position: absolute;
  left: 0;
  bottom: 0;
  transform: scale(var(--ts));
  transform-origin: 0 100%;
}
.vv-tree i {
  position: absolute;
  left: -4px;
  bottom: 0;
  width: 8px;
  height: 18px;
  background: #7a5b3d;
}
.vv-tree b {
  position: absolute;
  left: -24px;
  bottom: 14px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #6fae5a;
  box-shadow: inset -8px -8px 0 rgba(0, 0, 0, 0.14);
}
.vv-stem {
  position: absolute;
  left: -1.5px;
  bottom: 0;
  width: 3px;
  height: calc(var(--stem) * var(--sk) * 1px);
  background: #0d2741;
  opacity: 0.55;
}
.vv-foot {
  position: absolute;
  left: -4px;
  bottom: -4px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #0d2741;
}
.vv-tag {
  position: absolute;
  left: 0;
  bottom: calc(var(--stem) * var(--sk) * 1px);
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
  background: #fff;
  color: #0d2741;
  font-size: 13px;
  line-height: 1.2;
  font-weight: 600;
  padding: 5px 11px 5px 8px;
  border-radius: 999px;
  border: 0;
  box-shadow: 0 3px 0 rgba(13, 39, 65, 0.22);
  transition: opacity 0.3s;
}
.is-far .vv-minor {
  opacity: 0;
}
.vv-tag--left {
  transform: none;
  left: -10px;
}
.vv-tag--right {
  transform: none;
  left: auto;
  right: -10px;
}
.vv-tag--park {
  font-weight: 700;
  padding: 4px 11px 4px 4px;
  border-radius: 9px;
}
.vv-tag--dark {
  background: #0d2741;
  color: #fff;
  font-weight: 700;
  padding: 6px 12px;
}
.vv-tag--arrow {
  font-size: 12.5px;
  gap: 5px;
  color: #1f2933;
}
.vv-tag--vvip {
  pointer-events: auto;
  background: #7cc8f1;
  font-size: 14px;
  font-weight: 700;
  padding: 4px 11px 4px 4px;
  border-radius: 10px;
  border: 2px solid #fff;
  cursor: pointer;
  transform-origin: 10px 100%;
  transition: transform 0.25s;
}
.vv-tag--vvip.is-active {
  transform: scale(1.15);
  box-shadow: 0 0 0 5px color-mix(in srgb, var(--route) 45%, transparent),
    0 3px 0 rgba(13, 39, 65, 0.25);
}
.vv-p {
  flex: none;
  width: 20px;
  height: 20px;
  border-radius: 6px;
  background: #0d2741;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Space Grotesk", Inter, sans-serif;
  font-size: 13px;
  font-weight: 700;
}
.vv-dot {
  flex: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.vv-badge-num {
  flex: none;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--route);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Space Grotesk", Inter, sans-serif;
  font-size: 13px;
}

.vv-marker {
  pointer-events: auto;
  position: absolute;
  left: -17px;
  bottom: calc(var(--stem) * var(--sk) * 1px);
  width: 34px;
  height: 34px;
  padding: 0;
  border-radius: 50%;
  background: var(--route);
  border: 3px solid #fff;
  color: #fff;
  font-family: "Space Grotesk", Inter, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 3px 0 rgba(13, 39, 65, 0.25);
  transform-origin: 50% 100%;
  transition: transform 0.25s;
}
.vv-marker.is-active {
  transform: scale(1.25);
  animation: vvRing 1.4s ease-out infinite;
}
@keyframes vvRing {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--route) 60%, transparent),
      0 3px 0 rgba(13, 39, 65, 0.25);
  }
  100% {
    box-shadow: 0 0 0 14px transparent, 0 3px 0 rgba(13, 39, 65, 0.25);
  }
}
@container (min-width: 880px) {
  .vv-tag {
    font-size: 14px;
  }
  .vv-marker {
    width: 38px;
    height: 38px;
    left: -19px;
    font-size: 18px;
  }
}

.vv-decal {
  position: absolute;
  left: -3.63px;
  top: 68.37px;
  display: flex;
  align-items: center;
  gap: 3.63px;
  white-space: nowrap;
  background: var(--drop);
  color: #0d2741;
  padding: 3.025px 6.655px 3.025px 3.025px;
  border-radius: 4.84px;
  border: 1.21px solid #fff;
  box-shadow: 0 1.815px 0 rgba(13, 39, 65, 0.3);
}
.vv-decal.is-active {
  animation: vvDecal 1.2s ease-in-out infinite;
}
@keyframes vvDecal {
  50% {
    box-shadow: 0 0 0 3.025px color-mix(in srgb, var(--drop) 45%, transparent),
      0 1.815px 0 rgba(13, 39, 65, 0.3);
  }
}
.vv-decal-num {
  flex: none;
  width: 13.916px;
  height: 13.916px;
  border-radius: 50%;
  background: var(--route);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Space Grotesk", Inter, sans-serif;
  font-size: 7.261px;
  font-weight: 700;
}
.vv-decal-txt {
  display: flex;
  flex-direction: column;
  gap: 1px;
  line-height: 1.15;
}
.vv-decal-txt small {
  font-size: 4.84px;
  font-weight: 700;
  letter-spacing: 0.1em;
}
.vv-decal-txt b {
  font-family: "Space Grotesk", Inter, sans-serif;
  font-size: 7.563px;
}

/* mobil */
.vv-car {
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  transform-style: preserve-3d;
}
.vv-car-head {
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  transform-style: preserve-3d;
}
.vv-car-glow {
  position: absolute;
  left: -13.311px;
  top: -13.311px;
  width: 26.622px;
  height: 26.622px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    color-mix(in srgb, var(--route) 55%, transparent) 0 30%,
    transparent 70%
  );
  transform: translateZ(0.303px);
  animation: vvGlow 1.6s ease-in-out infinite;
}
@keyframes vvGlow {
  50% {
    transform: translateZ(0.303px) scale(1.35);
    opacity: 0.6;
  }
}
.vv-car-shadow {
  position: absolute;
  left: -8.168px;
  top: -4.235px;
  width: 16.336px;
  height: 8.471px;
  border-radius: 4.235px;
  background: radial-gradient(
    closest-side,
    rgba(8, 27, 46, 0.38),
    rgba(8, 27, 46, 0)
  );
  transform: translate3d(0.908px, 0.908px, 0.182px);
}
.vv-cartag {
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
  background: #0d2741;
  color: #fff;
  font-size: 12.5px;
  font-weight: 700;
  line-height: 1.2;
  padding: 4px 10px 4px 6px;
  border-radius: 999px;
  border: 2px solid #fff;
  box-shadow: 0 3px 0 rgba(13, 39, 65, 0.25);
}
.vv-cartag i {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--route);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--route) 40%, transparent);
}

/* tamu turun: kotak 3D kecil berjalan ke pintu lobby */
.vv-people {
  position: absolute;
  width: 0;
  height: 0;
  transform-style: preserve-3d;
}
.vv-person {
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  transform-style: preserve-3d;
  animation: vvWalk 2.2s ease-in-out calc(var(--i) * 0.45s) both;
}
@keyframes vvWalk {
  0% {
    transform: translate3d(calc(var(--i) * 2.42px - 4.84px), -2.42px, 0)
      scale3d(0.01, 0.01, 0.01);
  }
  10% {
    transform: translate3d(calc(var(--i) * 2.42px - 4.84px), -2.42px, 0)
      scale3d(1, 1, 1);
  }
  85% {
    transform: translate3d(calc(var(--i) * 1.21px - 2.42px), -5.143px, 0)
      scale3d(1, 1, 1);
  }
  100% {
    transform: translate3d(calc(var(--i) * 1.21px - 2.42px), -5.748px, 0)
      scale3d(0.01, 0.01, 0.01);
  }
}

/* ── kontrol di atas peta ────────────────────────────── */
.vv-mapctl {
  position: absolute;
  top: 12px;
  right: 12px;
  display: grid;
  gap: 8px;
  z-index: 3;
}
.vv-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: color-mix(in srgb, var(--bg) 88%, transparent);
  backdrop-filter: blur(6px);
  color: var(--ink);
  display: grid;
  place-items: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(8, 27, 46, 0.12);
}
.vv-icon svg {
  width: 20px;
  height: 20px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2.2;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.vv-icon:hover {
  background: var(--bg);
}
.vv-hint {
  position: absolute;
  left: 12px;
  top: 12px;
  margin: 0;
  max-width: calc(100% - 80px);
  padding: 7px 12px;
  border-radius: 999px;
  background: rgba(13, 39, 65, 0.78);
  color: #fff;
  font-size: 13px;
  line-height: 1.3;
  pointer-events: none;
  z-index: 3;
}

/* ── kartu langkah ───────────────────────────────────── */
.vv-card-top {
  display: flex;
  gap: 14px;
  align-items: center;
}
.vv-bignum {
  flex: none;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: var(--route);
  color: #fff;
  display: grid;
  place-items: center;
  font-family: "Space Grotesk", Inter, sans-serif;
  font-size: 26px;
  font-weight: 700;
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.14);
}
.vv-bignum.is-stop {
  background: var(--drop);
  color: #0d2741;
}
.vv-kicker {
  margin: 0;
  font-size: 13px;
  color: var(--card-ink-2);
}
.vv-card-title {
  margin: 2px 0 0;
  font-family: "Space Grotesk", Inter, sans-serif;
  font-size: 22px;
  line-height: 1.15;
  font-weight: 700;
  text-wrap: balance;
}
.vv-card-text {
  margin: 10px 0 14px;
  color: var(--card-ink);
  font-size: 16px;
  line-height: 1.45;
  min-height: 2.9em;
}
.vv-progress {
  display: flex;
  gap: 5px;
  margin-bottom: 14px;
}
.vv-seg {
  flex: 3 1 0;
  height: 6px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.16);
  overflow: hidden;
}
.vv-seg.is-stop {
  flex: 1.4 1 0;
}
.vv-seg i {
  display: block;
  height: 100%;
  background: var(--route);
  transform-origin: 0 50%;
  transform: scaleX(0);
}
.vv-seg.is-stop i {
  background: var(--drop);
}
.vv-ctrls {
  display: grid;
  grid-template-columns: 52px minmax(0, 1fr) 52px;
  gap: 8px;
}
.vv-btn {
  height: 48px;
  border-radius: 14px;
  border: 0;
  background: var(--card-2);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
}
.vv-btn:hover {
  filter: brightness(1.12);
}
.vv-btn svg {
  width: 22px;
  height: 22px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2.4;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.vv-btn svg .fill {
  fill: currentColor;
  stroke: none;
}
.vv-btn--main {
  background: #fff;
  color: #0d2741;
}
.vv-opts {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px 14px;
  margin-top: 12px;
}
.vv-segctl {
  display: flex;
  padding: 3px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
}
.vv-segctl button {
  min-width: 52px;
  height: 38px;
  border: 0;
  border-radius: 9px;
  background: transparent;
  color: var(--card-ink-2);
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
}
.vv-segctl button[aria-pressed="true"] {
  background: #fff;
  color: #0d2741;
}
.vv-switch {
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 44px;
  cursor: pointer;
  font-size: 14px;
  color: var(--card-ink);
}
.vv-switch input {
  position: absolute;
  opacity: 0;
  width: 1px;
  height: 1px;
}
.vv-switch-ui {
  position: relative;
  flex: none;
  width: 42px;
  height: 24px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.22);
  transition: background 0.2s;
}
.vv-switch-ui::after {
  content: "";
  position: absolute;
  left: 3px;
  top: 3px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  transition: transform 0.2s;
}
.vv-switch input:checked + .vv-switch-ui {
  background: var(--route);
}
.vv-switch input:checked + .vv-switch-ui::after {
  transform: translateX(18px);
}
.vv-switch input:focus-visible + .vv-switch-ui {
  outline: 2px solid #fff;
  outline-offset: 2px;
}

/* ── blok daftar ─────────────────────────────────────── */
.vv-block {
  background: var(--card);
  color: #fff;
  border-radius: 20px;
  padding: 18px;
}
.vv-block-title {
  margin: 0 0 12px;
  font-family: "Space Grotesk", Inter, sans-serif;
  font-size: 19px;
  font-weight: 700;
}
.vv-steps,
.vv-pois,
.vv-legend,
.vv-swatches {
  list-style: none;
  margin: 0;
  padding: 0;
}
.vv-steps {
  display: grid;
  gap: 4px;
}
.vv-step {
  width: 100%;
  display: flex;
  gap: 12px;
  align-items: flex-start;
  text-align: left;
  padding: 8px;
  border: 0;
  border-radius: 14px;
  background: transparent;
  cursor: pointer;
}
.vv-step:hover {
  background: rgba(255, 255, 255, 0.06);
}
.vv-step.is-active {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: inset 0 0 0 2px color-mix(in srgb, var(--route) 70%, #fff);
}
.vv-num {
  flex: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--route);
  color: #fff;
  display: grid;
  place-items: center;
  font-family: "Space Grotesk", Inter, sans-serif;
  font-weight: 700;
  font-size: 17px;
}
.vv-step.is-stop .vv-num {
  background: var(--drop);
  color: #0d2741;
}
.vv-step.is-done:not(.is-active) .vv-num {
  opacity: 0.55;
}
.vv-step-txt {
  display: grid;
  gap: 1px;
  padding-top: 2px;
}
.vv-step-txt b {
  font-size: 15px;
  font-weight: 600;
  color: #fff;
}
.vv-step-txt small {
  font-size: 14px;
  line-height: 1.4;
  color: var(--card-ink-2);
}

.vv-pois {
  display: grid;
  gap: 4px;
}
.vv-poi {
  width: 100%;
  display: flex;
  gap: 12px;
  align-items: center;
  text-align: left;
  padding: 8px;
  border: 0;
  border-radius: 14px;
  background: transparent;
  cursor: pointer;
}
.vv-poi:hover,
.vv-poi.is-active {
  background: rgba(255, 255, 255, 0.1);
}
.vv-poi-ic {
  flex: none;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  font-family: "Space Grotesk", Inter, sans-serif;
  font-weight: 700;
  font-size: 20px;
}
.vv-poi-ic svg {
  width: 22px;
  height: 22px;
  fill: none;
  stroke-width: 2.5;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.vv-poi-ic--drop {
  background: var(--drop);
}
.vv-poi-ic--drop svg {
  stroke: #0d2741;
}
.vv-poi-ic--p {
  background: #7cc8f1;
  color: #0d2741;
}
.vv-poi-ic--door {
  background: #3a4f9f;
}
.vv-poi-ic--door svg {
  stroke: #fff;
}
.vv-poi-txt {
  flex: 1;
  display: grid;
  gap: 1px;
}
.vv-poi-txt b {
  font-size: 15px;
  font-weight: 600;
  color: #fff;
}
.vv-poi-txt small {
  font-size: 14px;
  color: var(--card-ink-2);
}
.vv-poi-go {
  flex: none;
  font-size: 13px;
  font-weight: 600;
  color: var(--card-ink-2);
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.vv-legend {
  display: grid;
  gap: 8px;
  margin-bottom: 12px;
}
.vv-legend li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  color: var(--card-ink);
}
.vv-swatches {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 14px;
  font-size: 14px;
  color: #c6d4e2;
}
.vv-swatches li {
  display: flex;
  align-items: center;
  gap: 6px;
}
.vv-swatches span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
.vv-note {
  margin: 12px 0 0;
  font-size: 13px;
  color: #8ea6bd;
}

.vv-sr {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

.vvip :where(button):focus-visible {
  outline: 3px solid color-mix(in srgb, var(--route) 70%, #fff);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .vv-route-flow,
  .vv-car-glow,
  .vv-marker.is-active,
  .vv-decal.is-active {
    animation: none;
  }
  .vv-person {
    animation-duration: 0.01s;
  }
}
</style>
