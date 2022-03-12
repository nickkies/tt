import styled from '@emotion/styled/macro';
import { useRecoilValue } from 'recoil';
import { nextBossState, nextAppearTimeState } from '../atoms';
import { GiPlainDagger } from 'react-icons/gi';

import { BOSS } from '../constant';
import adPng from '../img/ad.png';
import cdPng from '../img/cd.png';
import glPng from '../img/gl.png';
import kyPng from '../img/ky.png';
import slPng from '../img/sl.png';

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

  return (
    <Container>
      {bosses &&
        bosses.map((boss) => (
          <BossContainer key={boss}>
            <ImageWrapper>
              {boss === 'ad' && <Image src={adPng} alt={BOSS[boss].name} />}
              {boss === 'cd' && <Image src={cdPng} alt={BOSS[boss].name} />}
              {boss === 'gl' && <Image src={glPng} alt={BOSS[boss].name} />}
              {boss === 'ky' && <Image src={kyPng} alt={BOSS[boss].name} />}
              {boss === 'sl' && <Image src={slPng} alt={BOSS[boss].name} />}
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
                  {time}
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
