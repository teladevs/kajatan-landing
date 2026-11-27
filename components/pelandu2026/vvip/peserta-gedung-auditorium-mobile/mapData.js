// Versi mobile: data sama dengan peta desktop, diskalakan ke bidang 710 x 1080.
// Koordinat SVG (rute, tile, ANCHORS) tidak berubah; ke plane lewat (svg + OX/OY) * SCALE.
import * as base from "../peserta-gedung-auditorium/mapData.js";

export {
  OX,
  OY,
  TILE,
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
} from "../peserta-gedung-auditorium/mapData.js";

export const SCALE = 710 / 2380; // desain 2380 px → lebar 710 px (skala seragam)
export const PLANE = { w: 710, h: 1080 };
// viewBox SVG memuat seluruh desain; tinggi diperpanjang ke bawah agar sesuai 710 x 1080
export const VIEWBOX = `-267 -255 2380 ${PLANE.h / SCALE}`;

// Posisi & ukuran 3D diskalakan; "stem" (tinggi tangkai label di layar) dan zoom k tidak.
const f = (v) => +(v * SCALE).toFixed(3);
const at = (o) => ({ ...o, x: f(o.x), y: f(o.y) });

export const OVERVIEW_BOX = {
  x0: f(base.OVERVIEW_BOX.x0),
  y0: f(base.OVERVIEW_BOX.y0),
  x1: f(base.OVERVIEW_BOX.x1),
  y1: f(base.OVERVIEW_BOX.y1),
};
export const POIS = base.POIS.map(at);
export const BOXES = base.BOXES.map((b) => ({
  ...at(b),
  w: f(b.w),
  h: f(b.h),
  d: f(b.d),
  ...(b.z ? { z: f(b.z) } : {}),
}));
export const EXTRUSIONS = base.EXTRUSIONS.map((e) => ({
  ...e,
  left: f(e.left),
  top: f(e.top),
  w: f(e.w),
  h: f(e.h),
  layers: e.layers.map(f),
  height: f(e.height),
}));
export const TREES = base.TREES.map(([x, y]) => [f(x), f(y)]);
export const LABELS = base.LABELS.map((l) => ({ ...at(l), z: f(l.z) }));
export const MARKERS = base.MARKERS.map(at);
export const PARK_LABEL = at(base.PARK_LABEL);
