<template>
  <div class="demo" :class="{ 'is-dark': theme === 'dark' }">
    <header class="bar">
      <div class="bar-title">
        <h1>Simulasi Parkir VVIP 3D</h1>
        <p>Komponen Vue 3 · satu komponen, dua tata letak lewat container query</p>
      </div>
      <div class="bar-tools">
        <div v-if="!isPhone" class="seg" role="group" aria-label="Mode pratinjau">
          <button type="button" :aria-pressed="mode === 'desktop' ? 'true' : 'false'" @click="mode = 'desktop'">
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></svg>Desktop
          </button>
          <button type="button" :aria-pressed="mode === 'mobile' ? 'true' : 'false'" @click="mode = 'mobile'">
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="2.5" width="10" height="19" rx="2.5" /><path d="M11 18.5h2" /></svg>Mobile
          </button>
        </div>
        <div class="swatches" role="group" aria-label="Warna jalur">
          <button
            v-for="c in COLORS"
            :key="c.v"
            type="button"
            class="sw"
            :style="{ '--c': c.v }"
            :aria-pressed="routeColor === c.v ? 'true' : 'false'"
            :aria-label="'Warna jalur ' + c.n"
            @click="routeColor = c.v"
          ></button>
        </div>
      </div>
    </header>

    <main ref="areaEl" class="area">
      <!-- Pratinjau desktop: jendela 1280 px yang diskalakan agar muat -->
      <div v-if="mode === 'desktop' || isPhone" class="desk-wrap" :style="isPhone ? null : { height: deskH * deskScale + 'px' }">
        <div
          class="desk"
          :class="{ 'is-bare': isPhone }"
          :style="isPhone ? null : { width: deskW + 'px', transform: `scale(${deskScale})` }"
        >
          <div v-if="!isPhone" class="chrome" aria-hidden="true"><i></i><i></i><i></i><span>kampus.ac.id/panduan-vvip</span></div>
          <VvipParkingSim
            :route-color="routeColor"
            :theme="theme"
            :height="deskH - 34 + 'px'"
            @step-change="onStep"
          />
        </div>
      </div>

      <!-- Pratinjau mobile: bingkai 390 × 800 -->
      <div v-else class="phone-wrap">
        <div class="phone" :style="{ transform: `scale(${phoneScale})` }">
          <div class="phone-notch" aria-hidden="true"></div>
          <div class="phone-screen">
            <VvipParkingSim :route-color="routeColor" :theme="theme" @step-change="onStep" />
          </div>
        </div>
        <aside class="phone-note">
          <h2>Pratinjau 390 px</h2>
          <p>Komponen yang sama. Di bawah 880 px lebar wadah, peta pindah ke atas, kartu langkah menempel di bawahnya, daftar langkah menyusul.</p>
          <p>Geser peta ke samping untuk memutar, cubit untuk zoom. Gulir vertikal tetap menggulir halaman.</p>
          <p class="muted">Langkah aktif: <b>{{ stepNow }}</b></p>
        </aside>
      </div>
    </main>

    <section class="docs">
      <div class="docs-in">
        <h2>Pakai di proyek Vue 3</h2>
        <ol class="howto">
          <li>
            <p>Salin folder <code>src/components/vvip-parking/</code> (3 file: <code>VvipParkingSim.vue</code>, <code>VvipBox.vue</code>, <code>mapData.js</code>) ke proyek Anda. Tanpa dependensi selain Vue ≥ 3.5.</p>
          </li>
          <li>
            <p>Impor dan pasang komponennya:</p>
            <div class="code">
              <button type="button" class="copy" @click="copy(USAGE, 'u')">{{ copied === 'u' ? 'Tersalin' : 'Salin' }}</button>
              <pre><code>{{ USAGE }}</code></pre>
            </div>
          </li>
          <li>
            <p>Nuxt 3: bungkus dengan <code>&lt;ClientOnly&gt;</code>, karena rute dihitung dari SVG di browser.</p>
          </li>
        </ol>

        <h3>Props</h3>
        <div class="scroll">
          <table>
            <thead><tr><th>Prop</th><th>Tipe</th><th>Bawaan</th><th>Fungsi</th></tr></thead>
            <tbody>
              <tr v-for="r in PROPS" :key="r[0]"><td><code>{{ r[0] }}</code></td><td>{{ r[1] }}</td><td><code>{{ r[2] }}</code></td><td>{{ r[3] }}</td></tr>
            </tbody>
          </table>
        </div>
        <h3>Event &amp; method</h3>
        <ul class="list">
          <li><code>@step-change="(i) =&gt; …"</code> — indeks langkah aktif 0–4.</li>
          <li><code>@finished</code> — mobil sampai di Parkir VVIP.</li>
          <li>Lewat <code>ref</code>: <code>play()</code>, <code>pause()</code>, <code>restart()</code>, <code>goToStep(i)</code>.</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import VvipParkingSim from './components/vvip-parking/VvipParkingSim.vue'
import { STEPS } from './components/vvip-parking/mapData.js'

const COLORS = [
  { v: '#7048e8', n: 'ungu' },
  { v: '#e8364b', n: 'merah' },
  { v: '#0c8599', n: 'teal' },
]
const USAGE = `<script setup>
import VvipParkingSim from '@/components/vvip-parking/VvipParkingSim.vue'
<\/script>

<template>
  <VvipParkingSim
    route-color="#7048e8"
    height="720px"
    event-date="Sabtu, 12 Desember"
    arrival-time="07.30 WIB"
    @step-change="(i) => console.log('langkah', i + 1)"
  />
</template>`
const PROPS = [
  ['routeColor', 'String', "'#7048e8'", 'Warna jalur, penanda dan atap mobil VVIP'],
  ['autoplay', 'Boolean', 'true', 'Mulai otomatis (mati bila pengguna memilih reduced motion)'],
  ['speed', 'Number', '1', 'Kecepatan awal: 0.5, 1 atau 2'],
  ['height', 'String', "'720px'", 'Tinggi tata letak desktop (wadah ≥ 880 px)'],
  ['theme', 'String', "'light'", "'light' atau 'dark'"],
  ['title / subtitle', 'String', 'teks desain', 'Judul dan ringkasan panduan'],
  ['eventDate / arrivalTime', 'String', "''", 'Tampil di bawah judul bila diisi'],
  ['steps', 'Array', 'null', 'Ganti teks 5 langkah: [{ title, text }]'],
]

const mode = ref('desktop')
const routeColor = ref('#7048e8')
const theme = ref('light')
const isPhone = ref(false)
const areaEl = ref(null)
const deskW = ref(1280)
const deskH = 760
const deskScale = ref(1)
const phoneScale = ref(1)
const stepNow = ref(STEPS[0].title)
const copied = ref('')

function onStep(i) { stepNow.value = STEPS[i].title }
async function copy(text, key) {
  try {
    await navigator.clipboard.writeText(text)
    copied.value = key
    setTimeout(() => { copied.value = '' }, 1600)
  } catch { copied.value = '' }
}

function readTheme() {
  const t = document.documentElement.getAttribute('data-theme')
  theme.value = t === 'dark' || t === 'light' ? t : matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}
function layout() {
  const vw = document.documentElement.clientWidth
  isPhone.value = vw < 640
  const avail = Math.max(320, (areaEl.value?.clientWidth || vw) - 32)
  deskW.value = Math.round(Math.max(1120, Math.min(avail, 1440)))
  deskScale.value = Math.min(1, avail / deskW.value)
  phoneScale.value = Math.min(1, (window.innerHeight - 120) / 812)
}

let mo = null
let mq = null
onMounted(() => {
  readTheme()
  layout()
  mo = new MutationObserver(readTheme)
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
  mq = matchMedia('(prefers-color-scheme: dark)')
  mq.addEventListener?.('change', readTheme)
  window.addEventListener('resize', layout)
})
onBeforeUnmount(() => {
  mo?.disconnect()
  mq?.removeEventListener?.('change', readTheme)
  window.removeEventListener('resize', layout)
})
</script>

<style>
/* VOICE: tenang dan jelas, seperti papan petunjuk acara resmi.
   IDEA: miniatur maket kampus di meja panitia, mobil VVIP berjalan di atasnya.
   PICTURE: peta isometrik 3D dari desain, mobil beranimasi sepanjang rute.
   COLOUR and TYPE: biru langit desain #e0ecf9, kartu navy #143553, jalur ungu; Space Grotesk + Inter.
   LAYOUT: bilah alat tipis, pratinjau penuh lebar, dokumentasi integrasi di bawah. */
:root { color-scheme: light dark; }
:root[data-theme='light'] { color-scheme: light; }
:root[data-theme='dark'] { color-scheme: dark; }
* { box-sizing: border-box; min-width: 0; }
html, body { margin: 0; }
body { font: 16px/1.55 Inter, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif; overflow-x: clip; }

.demo {
  --bg: #e0ecf9;
  --panel: #f4f8fd;
  --ink: #0d2741;
  --ink-2: #3b5674;
  --line: rgba(13, 39, 65, 0.14);
  background: var(--bg);
  color: var(--ink);
  min-height: 100vh;
}
.demo.is-dark { --bg: #07131f; --panel: #0d1d2e; --ink: #eef4fb; --ink-2: #a9bccf; --line: rgba(255, 255, 255, 0.12); }

.bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px 20px;
  padding: 14px max(2vw, 16px);
  border-bottom: 1px solid var(--line);
}
.bar-title h1 { margin: 0; font-family: 'Space Grotesk', Inter, sans-serif; font-size: 20px; line-height: 1.1; }
.bar-title p { margin: 2px 0 0; font-size: 13px; color: var(--ink-2); }
.bar-tools { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; }
.seg { display: flex; padding: 3px; border-radius: 12px; background: var(--panel); border: 1px solid var(--line); }
.seg button {
  display: flex; align-items: center; gap: 8px; height: 40px; padding: 0 14px; border: 0; border-radius: 9px;
  background: transparent; color: var(--ink-2); font: 600 14px Inter, sans-serif; cursor: pointer;
}
.seg button svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
.seg button[aria-pressed='true'] { background: #143553; color: #fff; }
.swatches { display: flex; gap: 6px; }
.sw { width: 44px; height: 44px; border-radius: 12px; border: 1px solid var(--line); background: var(--panel); cursor: pointer; display: grid; place-items: center; padding: 0; }
.sw::after { content: ''; width: 20px; height: 20px; border-radius: 50%; background: var(--c); }
.sw[aria-pressed='true'] { box-shadow: inset 0 0 0 2px var(--c); }
button:focus-visible { outline: 3px solid #7048e8; outline-offset: 2px; }

.area { padding: 16px; }
.desk-wrap { position: relative; width: 100%; overflow: hidden; }
.desk {
  transform-origin: 0 0;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--line);
  box-shadow: 0 20px 50px rgba(8, 27, 46, 0.18);
  background: var(--panel);
  margin: 0 auto;
}
.desk.is-bare { border-radius: 0; border: 0; box-shadow: none; margin: -16px; }
.chrome { height: 34px; display: flex; align-items: center; gap: 7px; padding: 0 14px; background: var(--panel); border-bottom: 1px solid var(--line); }
.chrome i { width: 11px; height: 11px; border-radius: 50%; background: var(--line); }
.chrome span { margin-left: 12px; font-size: 13px; color: var(--ink-2); }

.phone-wrap { display: flex; flex-wrap: wrap; justify-content: center; align-items: flex-start; gap: 32px; }
.phone {
  position: relative;
  width: 414px;
  height: 812px;
  padding: 12px;
  border-radius: 52px;
  background: #0d1520;
  box-shadow: 0 24px 60px rgba(8, 27, 46, 0.3);
  transform-origin: 50% 0;
  flex: none;
}
.phone-notch { position: absolute; left: 50%; top: 22px; width: 92px; height: 26px; margin-left: -46px; border-radius: 13px; background: #0d1520; z-index: 5; }
.phone-screen { width: 390px; height: 788px; border-radius: 40px; overflow: hidden auto; background: #e0ecf9; scrollbar-width: none; }
.phone-screen > :first-child { padding-top: 34px; }
.phone-note { max-width: 320px; padding-top: 40px; }
.phone-note h2 { margin: 0 0 8px; font-family: 'Space Grotesk', Inter, sans-serif; font-size: 24px; line-height: 1.1; }
.phone-note p { margin: 0 0 10px; color: var(--ink-2); }
.phone-note .muted b { color: var(--ink); }

.docs { padding: clamp(28px, 4vw, 56px) max(5vw, 16px); border-top: 1px solid var(--line); }
.docs-in { max-width: 920px; margin: 0 auto; }
.docs h2 { margin: 0 0 16px; font-family: 'Space Grotesk', Inter, sans-serif; font-size: 32px; line-height: 1.05; }
.docs h3 { margin: 28px 0 10px; font-family: 'Space Grotesk', Inter, sans-serif; font-size: 20px; }
.howto { margin: 0; padding-left: 22px; display: grid; gap: 10px; }
.howto p { margin: 0 0 8px; max-width: 70ch; }
code { font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace; font-size: 0.9em; overflow-wrap: anywhere; }
.code { position: relative; }
.code pre {
  margin: 0; padding: 16px 18px; border-radius: 14px; background: #0d2741; color: #e3ebf3; overflow-x: auto;
  font-size: 14px; line-height: 1.55;
}
.copy {
  position: absolute; top: 8px; right: 8px; height: 36px; padding: 0 14px; border-radius: 10px; border: 0;
  background: #fff; color: #0d2741; font: 600 13px Inter, sans-serif; cursor: pointer;
}
.scroll { overflow-x: auto; }
table { width: 100%; border-collapse: collapse; font-size: 15px; }
th, td { text-align: left; padding: 10px 12px; border-bottom: 1px solid var(--line); vertical-align: top; }
th { font-size: 13px; color: var(--ink-2); font-weight: 600; }
td:first-child, td:nth-child(3) { white-space: nowrap; }
.list { margin: 0; padding-left: 20px; display: grid; gap: 6px; }

@media (max-width: 640px) {
  .bar-title p { display: none; }
  .area { padding: 16px 0 0; }
  .desk.is-bare { margin: 0; }
  table { font-size: 13px; }
}
</style>
