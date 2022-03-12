import { RecoilRoot } from 'recoil';
import styled from '@emotion/styled/macro';
import CurrentTime from './components/CurrentTime';
import NextBoss from './components/NextBoss';
import biPng from './img/bi.png';

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
  border-top: none;
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
          <Footer>
            <P>하딘혈맹 화이팅</P>
            <P>만든이: 봉딱</P>
          </Footer>
        </Container>
      </Background>
    </RecoilRoot>
  );
}

export default App;
