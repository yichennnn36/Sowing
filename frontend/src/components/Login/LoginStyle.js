import styled, { keyframes } from 'styled-components';
import { flipInX } from 'react-animations';
import { SiteDescription } from '../../pages/IntroPage/IntroPageStyle';
import { DefaultButton, DefaultAlert } from '../../constants/globalStyle';
import { MEDIA_QUERY, theme } from '../../constants/style';

export const FunctionBlock = styled(SiteDescription)`
  position: relative;
  animation: 1.5s ${keyframes`${flipInX}`};

  ${MEDIA_QUERY.md}{
    margin-top: 0;
  }

  & h2 {
    font-size: ${theme.FONT_SIZE.subtitle};
    font-family: ${theme.FONT.title};
    color: ${theme.COLOR.primary}};

    ${MEDIA_QUERY.md}{
      font-size: 110px;
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
`;

export const StyleButton = styled(DefaultButton)`
  background: ${theme.COLOR.primary}};
  color: ${theme.COLOR.white}};
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Alert = styled(DefaultAlert)`
  position: absolute;
  bottom: 20%;
`;