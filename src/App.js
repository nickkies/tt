import { RecoilRoot } from 'recoil';
import styled from '@emotion/styled/macro';
import { Gi3DHammer, GiCrown, GiBlackFlag } from 'react-icons/gi';

import CurrentTime from './components/CurrentTime';
import NextBoss from './components/NextBoss';
import biPng from './img/bi.png';
import TimeTable from './components/TimeTable';

const Background = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #d9d0c7;
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  border: 1px solid #a68a7b;
  background-color: #363636;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  /* padding: 10px; */
  > div {
    align-items: center;
    text-align: center;
  }
  position: relative;
`;

const Img = styled.img`
  position: absolute;
  width: 100px;
  top: 10px;
  left: 20px;
`;

const Footer = styled.div``;

const P = styled.p`
  color: #d99c52;
  font-size: 15px;
`;

function App() {
  return (
    <RecoilRoot>
      <Background>
        <Container>
          <Img src={biPng} alt='리니지다블류' />
          <CurrentTime />
          <NextBoss />
          <TimeTable />
          <Footer>
            <P>
              <GiBlackFlag />
              {/* &nbsp;하딘혈맹 화이팅 */}
              &nbsp;캐릭터는 또 다른 나입니다.
            </P>
            <br />
            {/* <P>
              <GiCrown />
              &nbsp; Guild Master: 데컨
            </P> */}
            <P>
              <Gi3DHammer />
              &nbsp; 만든이: 봉딱(붕딱아님)
            </P>
          </Footer>
        </Container>
      </Background>
    </RecoilRoot>
  );
}

export default App;
