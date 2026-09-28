<script setup lang="ts">
const scrollContainer = ref<HTMLElement | null>(null);
// Cover is locked until the invitation is opened; after that the rest of the
// pages scroll normally.
const opened = ref(false);
// Smoothed progress (0 = cover, 1 = invitation scene) driven by rAF for a
// fluid, eased parallax instead of raw scroll jitter.
const progress = ref(0);

let target = 0;
let rafId: number | null = null;

const tick = () => {
  const diff = target - progress.value;
  if (Math.abs(diff) < 0.0005) {
    progress.value = target;
    rafId = null;
    return;
  }
  progress.value += diff * 0.12;
  rafId = requestAnimationFrame(tick);
};

const startAnimation = () => {
  if (rafId === null) rafId = requestAnimationFrame(tick);
};

const onScroll = () => {
  const el = scrollContainer.value;
  if (!el) return;
  target = Math.min(el.scrollTop / el.clientHeight, 1);
  startAnimation();
};

let scrollAnimId: number | null = null;

const openInvitation = () => {
  const el = scrollContainer.value;
  if (!el) return;

  const from = el.scrollTop;
  const to = el.clientHeight;
  const duration = 900;
  const start = performance.now();

  const step = (now: number) => {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    el.scrollTop = from + (to - from) * eased;
    if (t < 1) {
      scrollAnimId = requestAnimationFrame(step);
    } else {
      scrollAnimId = null;
      opened.value = true;
    }
  };

  if (scrollAnimId !== null) cancelAnimationFrame(scrollAnimId);
  scrollAnimId = requestAnimationFrame(step);
};

// --- Dummy template content (replace with real data later) ---
const stories = [
  {
    year: "2018",
    title: "Pertama Bertemu",
    text: "Kami bertemu di bangku kuliah dan menghabiskan satu semester saling melempar catatan.",
  },
  {
    year: "2021",
    title: "Mulai Menjalin",
    text: "Setelah bertahun-tahun berteman, kami memutuskan untuk saling menjaga dengan serius.",
  },
  {
    year: "2024",
    title: "Lamaran",
    text: "Di hadapan keluarga besar, sebuah cincin akhirnya menemukan jarinya.",
  },
  {
    year: "2025",
    title: "Menikah",
    text: "Hari bahagia yang kami tunggu akhirnya tiba. Terima kasih telah menjadi bagian dari cerita kami.",
  },
];

const gallery = Array.from({ length: 8 }, (_, i) => i + 1);

const placeholderStyles = [
  "from-rose-100 via-amber-50 to-sky-100",
  "from-sky-100 via-rose-50 to-amber-100",
  "from-amber-50 via-sky-100 to-rose-100",
];

const rsvp = reactive({
  name: "",
  attendance: "attending",
  guests: 1,
  message: "",
});
const rsvpSent = ref(false);

// Dummy feed of guests who already sent their RSVP + wishes.
const wishes = reactive([
  {
    name: "Andi Saputra",
    attendance: "attending",
    guests: 2,
    message:
      "Selamat menempuh hidup baru, semoga menjadi keluarga yang sakinah, mawaddah, warahmah. 🤍",
    time: "2 hari lalu",
  },
  {
    name: "Siti & Keluarga",
    attendance: "attending",
    guests: 4,
    message:
      "Barakallahu lakuma. Semoga Allah menyatukan kalian dalam kebaikan sampai jannah.",
    time: "3 hari lalu",
  },
  {
    name: "Rizky Maulana",
    attendance: "absent",
    guests: 0,
    message:
      "Maaf belum bisa hadir, tapi doa terbaik selalu menyertai kalian berdua.",
    time: "5 hari lalu",
  },
  {
    name: "Dewi Anggraini",
    attendance: "attending",
    guests: 1,
    message: "Congratulations! Semoga lancar sampai hari H dan bahagia selamanya.",
    time: "1 minggu lalu",
  },
]);

const initials = (name: string) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");

const submitRsvp = () => {
  const name = rsvp.name.trim();
  if (!name) return;

  wishes.unshift({
    name,
    attendance: rsvp.attendance,
    guests: rsvp.attendance === "attending" ? rsvp.guests : 0,
    message: rsvp.message.trim() || "Turut berbahagia!",
    time: "Baru saja",
  });

  rsvpSent.value = true;
};

const couple = [
  {
    role: "Mempelai Pria",
    name: "Yogi Pratama",
    parents: "Putra dari Bapak Ahmad Pratama & Ibu Siti Aminah",
    instagram: "@yogipratama",
  },
  {
    role: "Mempelai Wanita",
    name: "Bernadya Lestari",
    parents: "Putri dari Bapak Budi Lestari & Ibu Rina Wati",
    instagram: "@bernadya",
  },
];

// Dummy wedding date used by the countdown.
const weddingDate = new Date("2026-12-12T08:00:00+07:00").getTime();
const now = ref(Date.now());
let countdownId: ReturnType<typeof setInterval> | null = null;

const diff = computed(() => Math.max(weddingDate - now.value, 0));

const countdownUnits = computed(() => {
  const d = diff.value;
  const pad = (n: number) => String(n).padStart(2, "0");
  return [
    { label: "Hari", value: String(Math.floor(d / 86_400_000)) },
    { label: "Jam", value: pad(Math.floor(d / 3_600_000) % 24) },
    { label: "Menit", value: pad(Math.floor(d / 60_000) % 60) },
    { label: "Detik", value: pad(Math.floor(d / 1000) % 60) },
  ];
});

const events = [
  {
    title: "Akad Nikah",
    date: "Sabtu, 12 Desember 2026",
    time: "08.00 - 10.00 WIB",
    place: "Masjid Al-Ikhlas, Jl. Melati No. 10, Jakarta",
  },
  {
    title: "Resepsi",
    date: "Sabtu, 12 Desember 2026",
    time: "11.00 - 14.00 WIB",
    place: "Gedung Serbaguna, Jl. Mawar No. 25, Jakarta",
  },
];

// Preloader: counts 1 -> 100%, then fades the dark backdrop away.
const loading = ref(true);
const percent = ref(1);
let loaderId: number | null = null;

const runLoader = () => {
  const duration = 2200;
  const start = performance.now();

  const step = (now: number) => {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    percent.value = Math.round(1 + eased * 99);

    if (t < 1) {
      loaderId = requestAnimationFrame(step);
    } else {
      loaderId = null;
      setTimeout(() => {
        loading.value = false;
      }, 350);
    }
  };

  loaderId = requestAnimationFrame(step);
};

let revealObserver: IntersectionObserver | null = null;

const setupReveal = () => {
  const root = scrollContainer.value;
  if (!root) return;

  revealObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver?.unobserve(entry.target);
        }
      }
    },
    { root, threshold: 0.12 },
  );

  root.querySelectorAll(".reveal").forEach((el) => revealObserver?.observe(el));
};

// Deterrents only: disable right-click and common DevTools shortcuts.
// Client-side code can never truly block DevTools (browser menu, mobile,
// or disabling JS all bypass this) - it only stops casual users.
const blockContextMenu = (event: MouseEvent) => {
  event.preventDefault();
};

const blockShortcuts = (event: KeyboardEvent) => {
  const key = event.key.toLowerCase();
  const combo = event.ctrlKey || event.metaKey;

  const isDevtoolsCombo = combo && event.shiftKey && ["i", "j", "c"].includes(key);

  if (key === "f12" || isDevtoolsCombo || (combo && ["u", "s"].includes(key))) {
    event.preventDefault();
    event.stopPropagation();
  }
};

const enableProtection = () => {
  document.addEventListener("contextmenu", blockContextMenu);
  document.addEventListener("keydown", blockShortcuts, true);
};

const disableProtection = () => {
  document.removeEventListener("contextmenu", blockContextMenu);
  document.removeEventListener("keydown", blockShortcuts, true);
};

onMounted(() => {
  const el = scrollContainer.value;
  if (el) target = Math.min(el.scrollTop / el.clientHeight, 1);
  runLoader();
  setupReveal();
  enableProtection();
  countdownId = setInterval(() => {
    now.value = Date.now();
  }, 1000);
});

onBeforeUnmount(() => {
  if (rafId !== null) cancelAnimationFrame(rafId);
  if (loaderId !== null) cancelAnimationFrame(loaderId);
  if (scrollAnimId !== null) cancelAnimationFrame(scrollAnimId);
  if (countdownId !== null) clearInterval(countdownId);
  revealObserver?.disconnect();
  disableProtection();
});
</script>

<template>
  <div
    class="relative w-full h-screen max-w-[500px] mx-auto overflow-hidden bg-main"
  >
    <div
      ref="scrollContainer"
      class="h-full no-scrollbar bg-[#e7dbcc]"
      :class="[
        opened ? 'overflow-y-scroll' : 'overflow-hidden touch-none',
        { 'pointer-events-none': loading },
      ]"
      @scroll="onScroll"
    >
      <section
        class="relative h-full overflow-hidden flex items-center justify-center bg-[#e6f0fa]"
      >
        <img
          src="/wedding-assets/bg.png"
          class="absolute inset-0 w-full h-full object-cover will-change-transform"
          :style="{
            transform: `scale(${1 + progress * 0.15}) translateY(${
              progress * 5
            }%)`,
          }"
          alt="Background"
        />

        <div
          class="relative z-10 px-6 text-center text-black will-change-transform"
          :style="{
            transform: `translateY(${progress * 25}%)`,
            opacity: 1 - progress * 1.2,
          }"
        >
          <h1 class="text-4xl font-serif mb-8">Yogi & Bernadya</h1>

          <button
            type="button"
            class="rounded-full border border-black/20 bg-white/60 px-8 py-3 text-sm font-medium tracking-wide text-black shadow-sm backdrop-blur transition hover:bg-white/80 active:scale-95"
            @click="openInvitation"
          >
            Open Invitation
          </button>
        </div>
      </section>

      <section class="relative h-full overflow-hidden">
        <div
          class="bg-main absolute inset-0 flex items-center justify-center will-change-transform"
          :style="{
            transform: `translateY(${(1 - progress) * 8}%)`,
            opacity: Math.min(progress * 1.5, 1),
          }"
        >
          <img
            src="/wedding-assets/bg-shadow.png"
            class="absolute bottom-0 left-0 z-1 w-full h-[200px] object-contain"
            alt="Background-shadow"
          />

          <img
            src="/wedding-assets/mountain-up.png"
            class="absolute bottom-0 left-0 z-3 w-full h-auto object-contain mountain-up-animation"
            alt="Background"
          />

          <img
            src="/wedding-assets/mountain-ground.png"
            class="absolute bottom-0 left-0 z-2 w-full h-auto object-contain mountain-animation"
            alt="Background"
          />

          <img
            src="/wedding-assets/tree.png"
            class="absolute bottom-0 left-0 z-5 w-25 h-auto object-contain tree-wind-sway"
            alt="Foreground Tree & Flowers"
          />

          <img
            src="/wedding-assets/tree.png"
            class="absolute bottom-0 right-0 z-5 w-25 h-auto object-contain tree-wind-sway"
            alt="Foreground Tree & Flowers"
          />

          <div class="relative z-30 text-center text-black">
            <h1 class="text-4xl font-serif">Yogi & Bernadya</h1>
          </div>
        </div>
      </section>

      <section
        class="sheet reveal flex min-h-full flex-col items-center justify-center px-8 py-16 text-center text-stone-800"
      >
        <p class="text-xs uppercase tracking-[0.3em] text-rose-400">
          QS. Ar-Rum : 21
        </p>

        <p dir="rtl" class="arabic mt-6 text-2xl leading-[2.4] text-stone-700">
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا
          لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ
          فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
        </p>

        <p class="mt-6 text-sm leading-relaxed text-stone-500">
          "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
          dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
          kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat
          tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."
        </p>

        <p class="mt-4 text-sm font-semibold text-rose-400">
          QS. Ar-Rum: 21
        </p>
      </section>

      <section class="sheet reveal min-h-full px-6 py-16 text-stone-800">
        <div class="mb-10 text-center">
          <p class="text-xs uppercase tracking-[0.3em] text-rose-400">
            The Couple
          </p>
          <h2 class="mt-2 text-3xl font-serif">Mempelai</h2>
        </div>

        <div class="space-y-10">
          <div
            v-for="(person, i) in couple"
            :key="person.name"
            class="text-center"
          >
            <div
              class="mx-auto h-40 w-40 rounded-full bg-gradient-to-br p-1"
              :class="placeholderStyles[i % placeholderStyles.length]"
            >
              <div
                class="flex h-full w-full items-center justify-center rounded-full bg-white/70"
              >
                <span class="text-sm font-medium text-stone-400">Photo</span>
              </div>
            </div>

            <p class="mt-5 text-xs uppercase tracking-[0.3em] text-rose-400">
              {{ person.role }}
            </p>
            <h3 class="mt-2 text-2xl font-serif">{{ person.name }}</h3>
            <p class="mt-2 text-sm text-stone-500">{{ person.parents }}</p>
            <p class="mt-3 text-sm text-rose-400">{{ person.instagram }}</p>
          </div>
        </div>
      </section>

      <section
        class="sheet reveal flex min-h-full flex-col items-center justify-center px-6 py-16 text-center text-stone-800"
      >
        <p class="text-xs uppercase tracking-[0.3em] text-rose-400">
          Save The Date
        </p>
        <h2 class="mt-2 text-3xl font-serif">Menuju Hari Bahagia</h2>

        <div class="mt-8 grid w-full max-w-xs grid-cols-4 gap-2">
          <div
            v-for="unit in countdownUnits"
            :key="unit.label"
            class="rounded-xl bg-white py-4 shadow-sm ring-1 ring-black/5"
          >
            <div class="text-2xl font-semibold tabular-nums text-rose-400">
              {{ unit.value }}
            </div>
            <div class="mt-1 text-[10px] uppercase tracking-widest text-stone-400">
              {{ unit.label }}
            </div>
          </div>
        </div>

        <p class="mt-6 text-sm text-stone-500">Sabtu, 12 Desember 2026</p>
      </section>

      <section class="sheet reveal min-h-full px-6 py-16 text-stone-800">
        <div class="mb-10 text-center">
          <p class="text-xs uppercase tracking-[0.3em] text-rose-400">
            Our Story
          </p>
          <h2 class="mt-2 text-3xl font-serif">Perjalanan Kami</h2>
        </div>

        <div class="space-y-8">
          <article
            v-for="(item, i) in stories"
            :key="item.year"
            class="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5"
          >
            <div
              class="flex aspect-[4/3] w-full items-center justify-center bg-gradient-to-br"
              :class="placeholderStyles[i % placeholderStyles.length]"
            >
              <span class="text-sm font-medium text-stone-400">Photo</span>
            </div>

            <div class="p-5">
              <span
                class="inline-block rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-500"
              >
                {{ item.year }}
              </span>
              <h3 class="mt-3 text-lg font-serif">{{ item.title }}</h3>
              <p class="mt-2 text-sm leading-relaxed text-stone-500">
                {{ item.text }}
              </p>
            </div>
          </article>
        </div>
      </section>

      <section class="sheet reveal min-h-full px-6 py-16 text-stone-800">
        <div class="mb-10 text-center">
          <p class="text-xs uppercase tracking-[0.3em] text-rose-400">
            Gallery
          </p>
          <h2 class="mt-2 text-3xl font-serif">Momen Bahagia</h2>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div
            v-for="n in gallery"
            :key="n"
            class="flex items-center justify-center rounded-xl bg-gradient-to-br"
            :class="[
              placeholderStyles[(n - 1) % placeholderStyles.length],
              n === 1 || n === 6 ? 'col-span-2 aspect-[4/3]' : 'aspect-square',
            ]"
          >
            <span class="text-xs font-medium text-stone-400">{{ n }}</span>
          </div>
        </div>
      </section>

      <section class="sheet reveal min-h-full px-6 py-16 text-stone-800">
        <div class="mb-10 text-center">
          <p class="text-xs uppercase tracking-[0.3em] text-rose-400">
            The Event
          </p>
          <h2 class="mt-2 text-3xl font-serif">Lokasi Acara</h2>
        </div>

        <div class="space-y-6">
          <div
            v-for="(ev, i) in events"
            :key="ev.title"
            class="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5"
          >
            <div
              class="flex aspect-[16/9] items-center justify-center bg-gradient-to-br"
              :class="placeholderStyles[i % placeholderStyles.length]"
            >
              <span class="text-sm font-medium text-stone-400">Map</span>
            </div>

            <div class="p-5 text-center">
              <h3 class="text-lg font-serif">{{ ev.title }}</h3>
              <p class="mt-2 text-sm text-stone-500">{{ ev.date }}</p>
              <p class="text-sm text-stone-500">{{ ev.time }}</p>
              <p class="mt-3 text-sm font-medium text-stone-700">
                {{ ev.place }}
              </p>
              <button
                type="button"
                class="mt-4 rounded-full border border-rose-300 px-6 py-2 text-sm text-rose-500 transition hover:bg-rose-50"
              >
                Lihat Lokasi
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="sheet reveal min-h-full px-6 py-16 text-stone-800">
        <div class="mb-10 text-center">
          <p class="text-xs uppercase tracking-[0.3em] text-rose-400">RSVP</p>
          <h2 class="mt-2 text-3xl font-serif">Konfirmasi Kehadiran</h2>
        </div>

        <form
          v-if="!rsvpSent"
          class="space-y-5 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5"
          @submit.prevent="submitRsvp"
        >
          <div>
            <label class="mb-2 block text-sm font-medium text-stone-600">
              Nama
            </label>
            <input
              v-model="rsvp.name"
              type="text"
              placeholder="Nama lengkap"
              class="w-full rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none transition focus:border-rose-300 focus:bg-white"
            />
          </div>

          <div>
            <label class="mb-2 block text-sm font-medium text-stone-600">
              Kehadiran
            </label>
            <div class="grid grid-cols-2 gap-3">
              <label
                class="cursor-pointer rounded-lg border px-4 py-3 text-center text-sm transition"
                :class="
                  rsvp.attendance === 'attending'
                    ? 'border-rose-300 bg-rose-50 text-rose-600'
                    : 'border-stone-200 bg-stone-50 text-stone-500'
                "
              >
                <input
                  v-model="rsvp.attendance"
                  type="radio"
                  value="attending"
                  class="sr-only"
                />
                Hadir
              </label>
              <label
                class="cursor-pointer rounded-lg border px-4 py-3 text-center text-sm transition"
                :class="
                  rsvp.attendance === 'absent'
                    ? 'border-rose-300 bg-rose-50 text-rose-600'
                    : 'border-stone-200 bg-stone-50 text-stone-500'
                "
              >
                <input
                  v-model="rsvp.attendance"
                  type="radio"
                  value="absent"
                  class="sr-only"
                />
                Tidak Hadir
              </label>
            </div>
          </div>

          <div>
            <label class="mb-2 block text-sm font-medium text-stone-600">
              Jumlah Tamu
            </label>
            <input
              v-model.number="rsvp.guests"
              type="number"
              min="1"
              class="w-full rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none transition focus:border-rose-300 focus:bg-white"
            />
          </div>

          <div>
            <label class="mb-2 block text-sm font-medium text-stone-600">
              Ucapan & Doa
            </label>
            <textarea
              v-model="rsvp.message"
              rows="3"
              placeholder="Tulis ucapan terbaikmu..."
              class="w-full resize-none rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none transition focus:border-rose-300 focus:bg-white"
            />
          </div>

          <button
            type="submit"
            class="w-full rounded-full bg-rose-400 px-8 py-3 text-sm font-semibold tracking-wide text-white shadow-sm transition hover:bg-rose-500 active:scale-[0.98]"
          >
            Kirim Konfirmasi
          </button>
        </form>

        <div
          v-else
          class="rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-black/5"
        >
          <div
            class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-rose-50 text-2xl text-rose-400"
          >
            ♥
          </div>
          <h3 class="text-lg font-serif">Terima kasih, {{ rsvp.name }}!</h3>
          <p class="mt-2 text-sm text-stone-500">
            Konfirmasi kehadiranmu sudah kami terima.
          </p>
        </div>

        <div class="mt-10">
          <h3 class="mb-4 text-center text-lg font-serif">
            Ucapan & Doa
          </h3>

          <div class="space-y-3">
            <div
              v-for="(wish, i) in wishes"
              :key="i"
              class="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5"
            >
              <div class="flex items-center gap-3">
                <div
                  class="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-rose-50 text-sm font-semibold text-rose-400"
                >
                  {{ initials(wish.name) }}
                </div>

                <div class="min-w-0 flex-1">
                  <p class="truncate text-sm font-medium text-stone-700">
                    {{ wish.name }}
                  </p>
                  <p class="text-xs text-stone-400">{{ wish.time }}</p>
                </div>

                <span
                  class="flex-none rounded-full px-2.5 py-1 text-[10px] font-semibold"
                  :class="
                    wish.attendance === 'attending'
                      ? 'bg-rose-50 text-rose-500'
                      : 'bg-stone-100 text-stone-400'
                  "
                >
                  {{
                    wish.attendance === "attending"
                      ? `Hadir · ${wish.guests}`
                      : "Tidak Hadir"
                  }}
                </span>
              </div>

              <p class="mt-3 text-sm leading-relaxed text-stone-500">
                {{ wish.message }}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <Transition name="loader-fade">
      <div
        v-if="loading"
        class="absolute inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-black/90 backdrop-blur-sm"
      >
        <div class="relative h-28 w-28">
          <div class="absolute inset-0 rounded-full border-2 border-white/15" />
          <div
            class="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-white"
          />
          <div class="absolute inset-0 flex items-center justify-center">
            <span class="text-2xl font-serif tabular-nums text-white">
              {{ percent }}%
            </span>
          </div>
        </div>

        <p class="text-xs uppercase tracking-[0.3em] text-white/60">
          Loading
        </p>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
/* Each content section sits as an inset card over the tinted backdrop, so the
   change of section is obvious while scrolling. */
.sheet {
  position: relative;
}

.sheet::before {
  content: "";
  position: absolute;
  inset: 12px;
  z-index: 0;
  border-radius: 28px;
  background: #fffdfb;
  box-shadow: 0 14px 34px -16px rgba(74, 52, 32, 0.4);
}

/* Alternate the card tone for a visible rhythm between sections. */
.sheet:nth-child(even)::before {
  background: #f6e9e4;
}

.sheet > * {
  position: relative;
  z-index: 1;
}

/* Scroll-reveal: cards rise and fade in as they enter the viewport. */
.reveal {
  opacity: 0;
  transform: translateY(48px) scale(0.985);
  transition:
    opacity 0.7s ease,
    transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}

.reveal.is-visible {
  opacity: 1;
  transform: none;
}

@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}

.arabic {
  font-family: "Scheherazade New", "Noto Naskh Arabic", "Traditional Arabic",
    serif;
}

.loader-fade-leave-active {
  transition: opacity 0.6s ease;
}

.loader-fade-leave-to {
  opacity: 0;
}

.no-scrollbar {
  scrollbar-width: none;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Natural wind sway anchored to the bottom root */
@keyframes treeSway {
  0%,
  100% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(1.5deg) scale(1.05); /* Gentle tilt */
  }
}

@keyframes slideLeftToRight {
  0%,
  100% {
    transform: translateX(-10px); /* Starts slightly to the left */
  }
  50% {
    transform: translateX(10px); /* Slides over to the right */
  }
}

.tree-wind-sway {
  /* Crucial: Pivots from the bottom-left corner so the tree bends naturally */
  transform-origin: bottom left;
  animation: treeSway 5s ease-in-out infinite;
}

.mountain-animation {
  animation: slideLeftToRight 5s ease-in-out infinite;
}

.mountain-up-animation {
  animation: slideLeftToRight 6s ease-in-out infinite;
}

.bg-main {
  background-color: azure;
}
</style>
