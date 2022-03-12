import styled from '@emotion/styled/macro';
import { useRecoilValue } from 'recoil';

import { appearTimesState } from '../atoms';
import { BOSS } from '../constant';
import { findBoss } from '../utils';

const Container = styled.div`
  width: 95%;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  height: 100%;
  border-spacing: 0;
`;

const Thead = styled.thead`
  padding-block: 12px;
  /* > tr {
    > th {
      padding-block: 12px;
      font-weight: normal;
      width: 14%;
    }
  } */
`;

const Th = styled.th`
  border: 1px solid #a68a7b;
`;

const Tbody = styled.tbody``;

const Td = styled.td`
  padding: 8px;
  position: relative;
  border: 1px solid #a68a7b;
`;

export default function TimeTable() {
  const appears = useRecoilValue(appearTimesState);

  return (
    <Container>
      <Table>
        <Thead>
          <tr>
            <Th>시간</Th>
            <Th>보스이름</Th>
            <Th>장소</Th>
            <Th>등장 간격</Th>
          </tr>
        </Thead>
        <Tbody>
          {appears &&
            appears.map((appear) => {
              const bosses = findBoss(appear);

              if (bosses.length === 0) {
                return <Td colspan='4'>데이터가 없습니다.</Td>;
              } else if (bosses.length === 1) {
                return (
                  <tr key={bosses[0] + appear}>
                    <Td>{appear}</Td>
                    <Td>{BOSS[bosses[0]].name}</Td>
                    <Td>{BOSS[bosses[0]].region}</Td>
                    <Td>{BOSS[bosses[0]].term}</Td>
                  </tr>
                );
              } else {
                return (
                  <tr key={bosses[0] + bosses[1] + appear}>
                    <Td>{appear}</Td>
                    <Td>
                      {BOSS[bosses[0]].name}
                      <br />
                      <br />
                      {BOSS[bosses[1]].name}
                    </Td>
                    <Td>
                      {BOSS[bosses[0]].region}
                      <br />
                      <br />
                      {BOSS[bosses[1]].region}
                    </Td>
                    <Td>
                      {BOSS[bosses[0]].term}
                      <br />
                      <br />
                      {BOSS[bosses[1]].term}
                    </Td>
                  </tr>
                );
              }
            })}
        </Tbody>
      </Table>
    </Container>
  );
}
