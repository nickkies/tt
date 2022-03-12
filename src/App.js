import { RecoilRoot } from 'recoil';
import styled from '@emotion/styled/macro';
import CurrentTime from './components/CurrentTime';
import CurrentBoss from './components/CurrentBoss';
import InfoTable from './components/InfoTable';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #363636;
`;

const Container = styled.div`
  width: 100vw;
  max-width: 1000px;
  height: 100vh;
  margin: 0 auto;
  border: 1px solid #a68a7b;
  background-color: #733d38;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  > div {
    width: 95%;
    align-items: center;
    text-align: center;
  }
`;

function App() {
  return (
    <RecoilRoot>
      <Background>
        <Container>
          <CurrentTime />
          <CurrentBoss />
          <InfoTable />
        </Container>
      </Background>
    </RecoilRoot>
  );
}

export default App;
