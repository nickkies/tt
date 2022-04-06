import { atom, selector } from 'recoil';
import { BOSS } from '../constant';
import { findBoss } from '../utils';

const arr = [];

Object.entries(BOSS).forEach(([_, { name, appears }]) => {
  if (name !== '라인하르트') appears.forEach((appear) => arr.push(appear));
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

// 라인은 두 시간 마다 젠
export const lhAppearTime = selector({
  key: 'lhAppearTimeState',
  get: ({ get }) => {
    let now = Number(get(currentTimeState).substring(0, 2));

    now = now % 2 === 0 ? now + 2 : now + 1;

    return `${String(now).padStart(2, 0)}:00`;
  },
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
        if (i === appears.lenght && now < appear) {
          return appears[0];
        }
        return appear;
      }
    }
  },
});

export const nextBossState = selector({
  key: 'nextBossState',
  get: ({ get }) => {
    const appearTime = get(nextAppearTimeState);
    return findBoss(appearTime, true);
  },
});
