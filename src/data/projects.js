import * as THREE from 'three';

import burger from '../assets/projects/burger/header.jpg';
import places from '../assets/projects/places/header.jpg';
import vault from '../assets/projects/vault/header.jpg';
import incoming from '../assets/projects/incoming.jpg';

const loader = new THREE.TextureLoader();

export default [
  {
    index: 0,
    url: '/work/vault-clothing',
    texture: loader.load(vault)
  },
  {
    index: 1,
    url: '/work/places-app',
    texture: loader.load(places)
  },
  {
    index: 2,
    url: '/work/burger-project',
    texture: loader.load(burger)
  },
  {
    index: 3,
    url: '',
    texture: loader.load(incoming)
  },
]