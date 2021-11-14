import styled from 'styled-components';
import { DefaultButton } from '../../constants/globalStyle';
import { MEDIA_QUERY, theme } from '../../constants/style';
import { ReactComponent as SiteImg } from '../../image/sowing-siteImg.svg';
import { ReactComponent as BoardImage } from '../../image/intro1.svg';
import { ReactComponent as TimeImage } from '../../image/intro2.svg';
import { ReactComponent as MapImage } from '../../image/intro3.svg';

export const IntroPageWrapper = styled.div``;

export const Main = styled.div`
  background: ${theme.COLOR.secondary};
  height: 100%;
  padding: 20px 20px 40px;
  text-align: center;

  ${MEDIA_QUERY.lg} {
    height: 680px;
    margin: 40px;
    border-radius: 20px;
    display: flex;
    align-items: center;
  }
`;

export const SiteImage = styled(SiteImg)`
  height: auto;
  max-width: 80%;
  margin: 50px 10px;

  ${MEDIA_QUERY.lg} {
    height: 560px;
    margin: 0 20px;
  }
`;

export const SiteTitle = styled.h1`
  font-size: ${theme.FONT_SIZE.fs3};
  font-family: ${theme.FONT.title};
  color: ${theme.COLOR.tertiary}};
  position: absolute;
  top: 4px;
  left: 12px;

  ${MEDIA_QUERY.lg}{
    top: 50px;
    left: 65px;
  }
`;

export const SiteDescription = styled.div`
  max-width: 500px;
  margin: 0 auto;

  ${MEDIA_QUERY.lg} {
    min-width: 300px;
    text-align: left;
    margin-top: 60px;
  }
  & h1 {
    font-size: ${theme.FONT_SIZE.fs1};
    font-family: ${theme.FONT.title};
    color: ${theme.COLOR.primary};
    text-align: center;

    ${MEDIA_QUERY.lg}{
      font-size: ${theme.FONT_SIZE.title};
      text-align: left;
    }
  }
  & > p {
    font-size: ${theme.FONT_SIZE.fs5};
    font-family: ${theme.FONT.content};
    font-weight: 600;
  }
`;

export const SiteButton = styled.div`
  max-width: 360px;
  display: flex;
  justify-content: space-between;
  margin: 50px auto;

  ${MEDIA_QUERY.lg} {
    margin: 50px 0;
  }
`;

export const StyleButton = styled(DefaultButton)`
  transition: transform 0.3s;

  &:hover, &:focus {
    color: ${theme.COLOR.primary}};
  }
  &:hover {
    transform: scale(1.1);
  }
`;

export const Section = styled.div`
  position: relative;
  background: ${theme.COLOR.white};
  margin: 60px;

  ${MEDIA_QUERY.lg} {
    & .display___flex {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    & .clear__timeline, & .marked__map {
      width: 500px;
      margin: 0 50px;
    }
    & .marked__map-container {
      flex-direction: row-reverse;
    }
  }
`;

export const Introduction = styled.div`
  text-align: center;
  margin: 100px auto;
`;

export const Descrition = styled.div`
  & h2 {
    font-size: ${theme.FONT_SIZE.fs3};
    font-family: ${theme.FONT.title};

    ${MEDIA_QUERY.lg} {
      font-size: ${theme.FONT_SIZE.fs1};
    }
  }
  & p {
    font-size: ${theme.FONT_SIZE.fs5};
    font-family: ${theme.FONT.content};
    font-weight: 600;
  }

`;

export const BoardIcon = styled(BoardImage)`
  width: 80%;

  ${MEDIA_QUERY.lg} {
    width: 60%;
  }
`;

export const TimelineIcon = styled(TimeImage)`
  width: 60%;
  margin: 30px 0;

  ${MEDIA_QUERY.lg} {
    width: 40%;
    margin: 0 40px;
  }
`;

export const MapIcon = styled(MapImage)`
  width: 60%;
  margin: 40px 0;

  ${MEDIA_QUERY.lg} {
    width: 40%;
    margin: 0 40px;
  }
`;