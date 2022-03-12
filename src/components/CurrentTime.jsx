import styled from '@emotion/styled/macro';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { currentTimeState } from '../atoms';

const Container = styled.div``;

const H1 = styled.h1`
  font-size: 3em;
`;

const format = (num) => {
  return String(num).padStart(2, '0');
};

export default function CurrentTime() {
  const [time, setTime] = useRecoilState(currentTimeState);

  useEffect(() => {
    const interval = setInterval(() => {
      const dt = new Date();
      setTime(
        `${format(dt.getHours())}:${format(dt.getMinutes())} ${format(
          dt.getSeconds()
        )}`
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [setTime]);

  return (
    <Container>
      <H1>{time}</H1>
    </Container>
  );
}
