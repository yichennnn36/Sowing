import styled from 'styled-components';
import { theme } from '../../constants/style';
import { ReactComponent as Logo } from '../../image/sowing-logo.svg';

export const FooterWrapper = styled.div`
  background: ${theme.COLOR.secondary};
  height: 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 150px;
`;

export const FooterLogo = styled(Logo)`
  width: 100px;
  height: 100px;
  margin: 0 20px;
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