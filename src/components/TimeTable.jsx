import styled from '@emotion/styled/macro';
import { useRecoilValue } from 'recoil';

import { appearTimesState, nextAppearTimeState } from '../atoms';
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
`;

const Th = styled.th`
  border: 1px solid #a68a7b;
  background-color: #6b594f;
  padding-block: 7px;
  font-weight: bold;
`;

const Tbody = styled.tbody``;

const Td = styled.td`
  padding: 8px;
  position: relative;
  border: 1px solid #a68a7b;
`;

const Tr = styled.tr`
  > td {
    background-color: ${({ now }) => now && '#8c2b45'};
  }
`;

export default function TimeTable() {
  const appears = useRecoilValue(appearTimesState);
  const now = useRecoilValue(nextAppearTimeState);

  return (
    <Container>
      <Table>
        <Thead>
          <Tr>
            <Th>시간</Th>
            <Th>보스이름</Th>
            <Th>장소</Th>
            <Th>등장 간격</Th>
          </Tr>
        </Thead>
        <Tbody>
          {appears &&
            appears.map((appear) => {
              const bosses = findBoss(appear);

              if (bosses.length === 0) {
                return <Td colspan='4'>데이터가 없습니다.</Td>;
              } else if (bosses.length === 1) {
                return (
                  <Tr key={bosses[0] + appear} now={now === appear}>
                    <Td>{appear}</Td>
                    <Td>{BOSS[bosses[0]].name}</Td>
                    <Td>{BOSS[bosses[0]].region}</Td>
                    <Td>{BOSS[bosses[0]].term}</Td>
                  </Tr>
                );
              } else {
                return (
                  <Tr key={bosses[0] + bosses[1] + appear} now={now === appear}>
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
                  </Tr>
                );
              }
            })}
        </Tbody>
      </Table>
    </Container>
  );
}
