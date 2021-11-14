import styled from 'styled-components';
import { MEDIA_QUERY, theme } from '../../constants/style';
import { ReactComponent as Logo } from '../../image/sowing-logo.svg';

export const FooterWrapper = styled.div`
  background: ${theme.COLOR.secondary};
  height: 160px;
  padding: 24px 50px;
  text-align: center;

  ${MEDIA_QUERY.lg} {
    padding: 0 150px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const FooterLogo = styled(Logo)`
  width: 70px;

  ${MEDIA_QUERY.lg} {
    margin: 0 20px;
  }
`;

export const FooterInfo = styled.div`
  font-family: ${theme.FONT.content};
  font-size: ${theme.FONT_SIZE.fs6};
`;