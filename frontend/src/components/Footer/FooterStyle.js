import styled from 'styled-components';
import { theme } from '../../constants/style';

export const FooterWrapper = styled.div`
  background: ${theme.COLOR.secondary};
  height: 160px;
  display: flex;
  justify-content: space-between;
  padding: 0 150px;
`;

export const FooterLogo = styled.div`
  & img {
    transform: scale(0.5);
  }
`;

export const FooterInfo = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  font-family: ${theme.FONT.content};
  font-size: ${theme.FONT_SIZE.fs6};

  & a {
    color: black;
    text-decoration: none;
  }
  & a {
    margin-top: 20px;
  }
`;