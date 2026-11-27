<template>
  <div class="vb" :style="boxStyle">
    <div class="vb-f" :style="faceW"></div>
    <div class="vb-f" :style="faceE"></div>
    <div class="vb-f" :style="faceN"></div>
    <div class="vb-f" :style="faceS"></div>
    <div class="vb-f vb-top" :style="faceTop"><slot /></div>
  </div>
</template>

<script setup>
// Kotak CSS-3D: 4 sisi + atap. Ukuran dalam piksel bidang peta.
import { computed } from 'vue'

const props = defineProps({
  x: { type: Number, default: 0 },
  y: { type: Number, default: 0 },
  w: { type: Number, required: true },
  h: { type: Number, required: true },
  d: { type: Number, required: true }, // tinggi bangunan
  z: { type: Number, default: 0 }, // ketinggian alas
  c: { type: Array, required: true }, // [atap, sisi barat, sisi selatan]
  win: { type: Boolean, default: false }, // pola jendela
  rot: { type: Number, default: 0 },
  centered: { type: Boolean, default: false }, // x,y = titik tengah
})

import { SCALE } from './mapData.js'
const px = (n) => `${n}px`
const WIN_V = `repeating-linear-gradient(180deg, rgba(255,255,255,0.22) 0px ${14 * SCALE}px, transparent ${14 * SCALE}px ${32 * SCALE}px)`
const WIN_H = `repeating-linear-gradient(90deg, rgba(255,255,255,0.26) 0px ${14 * SCALE}px, transparent ${14 * SCALE}px ${32 * SCALE}px)`

const boxStyle = computed(() => ({
  left: px(props.centered ? props.x - props.w / 2 : props.x),
  top: px(props.centered ? props.y - props.h / 2 : props.y),
  width: px(props.w),
  height: px(props.h),
  transform: props.rot ? `rotateZ(${props.rot}deg)` : undefined,
}))

const side = (color, vertical) => ({
  backgroundColor: color,
  backgroundImage: props.win ? (vertical ? WIN_V : WIN_H) : undefined,
  backgroundSize: props.win ? (vertical ? '42% 100%' : '100% 42%') : undefined,
})
const tz = () => (props.z ? `translateZ(${props.z}px) ` : '')

const faceW = computed(() => ({
  left: px(-props.d), top: 0, width: px(props.d), height: px(props.h),
  transformOrigin: 'right center', transform: `${tz()}rotateY(90deg)`,
  ...side(props.c[1], true),
}))
const faceE = computed(() => ({
  left: px(props.w), top: 0, width: px(props.d), height: px(props.h),
  transformOrigin: 'left center', transform: `${tz()}rotateY(-90deg)`,
  ...side(props.c[2], true),
}))
const faceS = computed(() => ({
  left: 0, top: px(props.h), width: px(props.w), height: px(props.d),
  transformOrigin: 'center top', transform: `${tz()}rotateX(90deg)`,
  ...side(props.c[2], false),
}))
const faceN = computed(() => ({
  left: 0, top: px(-props.d), width: px(props.w), height: px(props.d),
  transformOrigin: 'center bottom', transform: `${tz()}rotateX(-90deg)`,
  ...side(props.c[1], false),
}))
const faceTop = computed(() => ({
  left: 0, top: 0, width: px(props.w), height: px(props.h),
  background: props.c[0],
  boxShadow: props.win ? `inset 0 0 0 ${10 * SCALE}px rgba(255,255,255,0.22)` : undefined,
  transform: `translateZ(${props.z + props.d}px)`,
}))
</script>

<style scoped>
.vb { position: absolute; transform-style: preserve-3d; }
.vb-f { position: absolute; background-position: center; background-repeat: no-repeat; }
.vb-top { transform-style: preserve-3d; }
</style>
