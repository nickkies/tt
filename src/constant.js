import adPng from './img/ad.png';
import cdPng from './img/cd.png';
import glPng from './img/gl.png';
import kyPng from './img/ky.png';
import slPng from './img/sl.png';
import apPng from './img/ap.png';
import fbPng from './img/fb.png';
import lhPng from './img/lh.png';

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
  fb: {
    name: '폭죽상자',
    appears: ['12:10', '15:10', '17:10'],
    region: 'Random',
    term: '특정시간',
    img: fbPng,
  },
  lh: {
    name: '라인하르트',
    appears: [
      '00:00',
      '01:00',
      '02:00',
      '03:00',
      '04:00',
      // '05:00',
      // '06:00',
      // '07:00',
      // '08:00',
      // '09:00',
      '10:00',
      '11:00',
      '12:00',
      '13:00',
      '14:00',
      '15:00',
      '16:00',
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
    ],
    region: '말던 2층',
    term: '1시간',
    img: lhPng,
  },
};
