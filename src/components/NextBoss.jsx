import styled from '@emotion/styled/macro';
import { useRecoilValue } from 'recoil';
import { nextBossState, nextAppearTimeState, lhAppearTime } from '../atoms';
import { GiPlainDagger } from 'react-icons/gi';

import { BOSS } from '../constant';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const BossContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1.5em;
  width: 95%;
  border: 1px solid #8c2b45;
  padding: 15px 0;
`;

const ImageWrapper = styled.div`
  width: 50%;
  height: 50%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InfoContainer = styled.div``;

const Ul = styled.ul`
  list-style: none;
  text-align: left;
  font-size: 1em;
  margin: 0;
  padding: 15px 0 0 0;
  > li + li {
    margin-top: 15px;
  }
`;

const Li = styled.li``;

export default function NextBoss() {
  const bosses = useRecoilValue(nextBossState);
  const time = useRecoilValue(nextAppearTimeState);
  const hltime = useRecoilValue(lhAppearTime);

  return (
    <Container>
      {bosses &&
        bosses.map((boss) => (
          <BossContainer key={boss}>
            <ImageWrapper>
              <Image src={BOSS[boss].img} alt={BOSS[boss].name} />
            </ImageWrapper>
            <InfoContainer>
              <Ul>
                <Li>
                  <GiPlainDagger />
                  &emsp;
                  {BOSS[boss].name}
                </Li>
                <Li>
                  <GiPlainDagger />
                  &emsp;
                  {BOSS[boss].name === '라인하르트' ? hltime : time}
                </Li>
                <Li>
                  <GiPlainDagger />
                  &emsp;
                  {BOSS[boss].region}
                </Li>
                <Li>
                  <GiPlainDagger />
                  &emsp;
                  {BOSS[boss].term}
                </Li>
              </Ul>
            </InfoContainer>
          </BossContainer>
        ))}
    </Container>
  );
}
