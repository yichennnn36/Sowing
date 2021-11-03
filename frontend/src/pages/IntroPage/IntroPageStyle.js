import styled from 'styled-components';
import { DefaultButton } from '../../constants/globalStyle';
import { MEDIA_QUERY, theme } from '../../constants/style';
import { ReactComponent as SiteImg } from '../../image/sowing-siteImg.svg';

export const IntroPageWrapper = styled.div``;

export const Main = styled.div`
  background: ${theme.COLOR.secondary};
  height: 100%;
  padding: 20px 20px 40px;
  text-align: center;

  ${MEDIA_QUERY.md} {
    height: 680px;
    margin: 40px;
    border-radius: 20px;
    display: flex;
    align-items: center;
  }
`;

export const Section = styled.div`
  position: relative;
  background: ${theme.COLOR.white};
  height: 800px;

  ${MEDIA_QUERY.md} {
    height: 680px;
  }
`;

export const SiteImage = styled(SiteImg)`
  width: 500px;
  height: 500px;
  margin: 50px 0;

  ${MEDIA_QUERY.md} {
    width: 560px;
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

  ${MEDIA_QUERY.md}{
    top: 50px;
    left: 65px;
  }
`;

export const SiteDescription = styled.div`
  max-width: 500px;
  margin: 0 auto;

  ${MEDIA_QUERY.md} {
    min-width: 300px;
    text-align: left;
    margin-top: 60px;
  }

  & h1 {
    font-size: ${theme.FONT_SIZE.title};
    font-family: ${theme.FONT.title};
    color: ${theme.COLOR.primary};
    text-align: center;

    ${MEDIA_QUERY.md}{
      text-align: left;
    }
  }
  & > p {
    font-size: ${theme.FONT_SIZE.fs5};
    font-family: ${theme.FONT.content};
    font-weight: 600;

    ${MEDIA_QUERY.md} {

    }
  }
`;

export const SiteButton = styled.div`
  max-width: 360px;
  display: flex;
  justify-content: space-between;
  margin: 50px auto;

  ${MEDIA_QUERY.md} {
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