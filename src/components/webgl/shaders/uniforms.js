import * as THREE from 'three';

export default {
  u_time: { type: "f", value: 0 },
  u_res: {
    type: "v2",
    value: new THREE.Vector2(window.innerWidth, window.innerHeight)
  },
  u_mouse: { type: "v2", value: new THREE.Vector2(0, 0) },
  u_directionMouse: { type: "v2", value: new THREE.Vector2(0, 0) },
  u_text0: { value: null },
  u_progress: { type: "f", value: .5 },
  u_waveIntensity: { type: "f", value: .3 },
  u_direction: { type: "f", value: .5 },
  u_offset: { type: "f", value: 10 },
  u_volatility: { type: "f", value: 0 },
  u_textureFactor: { type: "v2", value: new THREE.Vector2(1, 1) }
}