import { BOSS } from '../constant';

// 라인은 하단 테이블에서는 제외하고
// 상단 박스에만 출력
export const findBoss = (appearTime) => {
  const bosses = Object.keys(BOSS);

  if (appearTime === '') return null;
  let list = [];
  for (let i in bosses) {
    const boss = bosses[i];

    // 라인하르트도 일반 보스규칙으로 출력
    // 보스 시계열에 추가 하지 않음
    //if (boss === 'lh') continue;

    const arr = BOSS[boss].appears.filter((appear) => appear === appearTime);

    if (arr.length > 0) list.push(boss);
  }

  // TODO: 상단에만 출력하는 보스가 추가되는 경우
  // 새로운 상태관리가 필요
  // if (bool) {
  //   list.push('lh');
  // }

  return list;
};
