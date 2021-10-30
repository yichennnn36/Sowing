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

export const SiteDescription = styled.div`
  width: 340px;
  margin: 0 auto;

  ${MEDIA_QUERY.md} {
    text-align: left;
  }

  & h1 {
    font-size: ${theme.FONT_SIZE.title};
    font-family: ${theme.FONT.title};
    color: ${theme.COLOR.primary}};

    ${MEDIA_QUERY.md}{
      font-size: 110px;
    }
  }
  & > p {
    font-size: ${theme.FONT_SIZE.fs4};
    font-family: ${theme.FONT.content};
    font-weight: 600;
    margin-top: -30px;
    color: ${theme.COLOR.tertiary}};

    ${MEDIA_QUERY.md} {
      margin-top: -50px;
    }
  }
`;

export const SiteButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
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