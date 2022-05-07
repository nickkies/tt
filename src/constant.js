import adPng from './img/ad.png';
import cdPng from './img/cd.png';
import glPng from './img/gl.png';
import kyPng from './img/ky.png';
import slPng from './img/sl.png';
import apPng from './img/ap.png';
import lhPng from './img/lh.png';
import nlPng from './img/nl.png';
import ldPng from './img/ld.png';
import spPng from './img/sp.png';
import drPng from './img/dr.png';

export const BOSS = {
  ad: {
    name: '올디아르',
    appears: ['02:15', '14:15', '18:15', '22:15'],
    region: '본던 4층',
    term: '4시간',
    img: adPng,
  },
  cd: {
    name: '카르디쉬',
    appears: ['00:45', '12:45', '16:45', '20:45'],
    region: '우드벡 1시',
    term: '4시간',
    img: cdPng,
  },
  gl: {
    name: '가스트 로드',
    appears: ['11:45', '15:45', '19:45', '23:45'],
    region: '죽음의숲',
    term: '4시간',
    img: glPng,
  },
  nl: {
    name: '님로드',
    appears: ['11:30', '15:30', '19:30', '23:30'],
    region: '포노스오크부락',
    term: '4시간',
    img: nlPng,
  },
  ky: {
    name: '쿠요',
    appears: ['01:45', '11:45', '14:45', '17:45'],
    region: '말섬 1층',
    term: '특정시간',
    img: kyPng,
  },
  sl: {
    name: '슬래셔',
    appears: ['04:00', '10:00', '16:00', '22:00'],
    region: '죽음의 폐허',
    term: '6시간',
    img: slPng,
  },
  ap: {
    name: '아르피어',
    appears: ['18:00'],
    region: 'Random',
    term: '24시간',
    img: apPng,
  },
  ld: {
    name: '라돈(월보)',
    appears: ['11:55'],
    region: '아덴 어딘가...',
    term: '24시간',
    img: ldPng,
  },
  sp: {
    name: '스피리드(월보)',
    appears: ['14:56'],
    region: '아덴 어딘가...',
    term: '24시간',
    img: spPng,
  },
  dr1: {
    name: '드레이크1',
    appears: ['00:30', '12:30', '16:30', '20:30'],
    region: '용계입구 1, 3',
    term: '특정시간',
    img: drPng,
  },
  dr2: {
    name: '드레이크2',
    appears: ['00:30', '11:30', '17:30', '20:30'],
    region: '용계입구 2, 4',
    term: '특정시간',
    img: drPng,
  },
  lh: {
    name: '라인하르트',
    appears: [
      '00:00',
      '02:00',
      '04:00',
      '06:00',
      '08:00',
      '10:00',
      '12:00',
      '14:00',
      '16:00',
      '18:00',
      '20:00',
    ],
    region: '말던 2층',
    term: '2시간',
    img: lhPng,
  },
};
