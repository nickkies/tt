import { BOSS } from '../constant';

export const findBoss = (appearTime) => {
  const bosses = Object.keys(BOSS);

  if (appearTime === '') return null;
  let list = [];
  for (let i in bosses) {
    const boss = bosses[i];

    const arr = BOSS[boss].appears.filter((appear) => appear === appearTime);

    if (arr.length > 0) list.push(boss);
  }

  return list;
};
