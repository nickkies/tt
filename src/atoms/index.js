import { atom, selector } from 'recoil';
import { BOSS } from '../constant';

const arr = [];

Object.entries(BOSS).forEach(([_, { appears }]) => {
  appears.forEach((appear) => arr.push(appear));
});

// 미래에 쓸 수도 있으니 미리 아톰으로 해놂
export const appearTimesState = atom({
  key: 'appearTimesState',
  default: arr.sort(),
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
    const bosses = Object.keys(BOSS);

    if (appearTime === '') return null;
    let list = [];
    for (let i in bosses) {
      const boss = bosses[i];

      const arr = BOSS[boss].appears.filter((appear) => appear === appearTime);

      if (arr.length > 0) list.push(boss);
    }

    return list;
  },
});
