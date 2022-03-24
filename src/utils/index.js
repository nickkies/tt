import { BOSS } from '../constant';

export const findBoss = (appearTime, bool = false) => {
  const bosses = Object.keys(BOSS);

  if (appearTime === '') return null;
  let list = [];
  for (let i in bosses) {
    const boss = bosses[i];

    if (boss === 'lh') continue;

    const arr = BOSS[boss].appears.filter((appear) => appear === appearTime);

    if (arr.length > 0) list.push(boss);
  }

  if (bool) {
    list.push('lh');
  }

  return list;
};
