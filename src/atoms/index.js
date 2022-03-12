import { atom, selector } from 'recoil';
import { BOSS } from '../constant';
import { findBoss } from '../utils';

const arr = [];

Object.entries(BOSS).forEach(([_, { appears }]) => {
  appears.forEach((appear) => arr.push(appear));
});

const set = new Set(arr);

export const appearTimesState = atom({
  key: 'appearTimesState',
  default: [...set].sort(),
});

export const currentTimeState = atom({
  key: 'currentTimeState',
  default: '',
});

export const nextAppearTimeState = selector({
  key: 'nextAppearTimeState',
  get: ({ get }) => {
    const appears = get(appearTimesState);
    const now = get(currentTimeState);

    if (now === '') return '';

    for (let i in appears) {
      const appear = appears[i];

      if (now > appear) {
        continue;
      } else {
        return appear;
      }
    }
  },
});

export const nextBossState = selector({
  key: 'nextBossState',
  get: ({ get }) => {
    const appearTime = get(nextAppearTimeState);
    return findBoss(appearTime);
  },
});
