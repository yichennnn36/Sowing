import styled from 'styled-components';
import { theme, MEDIA_QUERY } from '../../constants/style';

export const InformationContainer = styled.div`
  height: auto;
  max-width: 860px;
  margin: 50px 20px 0;

  ${MEDIA_QUERY.lg} {
    margin: 0 50px;
    max-width: 660px;
  }
`;

export const LocationInfo = styled.div`
  display: inline-block;
  padding: 0 20px;
  font-size: ${theme.FONT_SIZE.fs6};
  line-height: 3rem;
  padding-bottom: 20px;
  border-bottom: 1px solid ${theme.COLOR.shadow};
`;

export const ListItem = styled.span`
  margin: 0 12px;
  white-space: nowrap;

  & .anticon {
    margin-right: 11px;
    color: ${theme.COLOR.primary};
  }
  & .mark__icon {
    & svg {
      width: 20px;
      height: 20px;
    }
  }
  & .info__sum {
    color: ${theme.COLOR.success};
    font-weight: 600;
  }
`;

export const TicketInfo = styled.div`
  margin-top: 30px;
  padding: 0 20px;
  height: 360px;
  overflow: auto;
  position: relative;

  ${MEDIA_QUERY.md} {
    display: flex;
    height: auto;
    padding: 20px 0;
    width: 700px;
  }
  ${MEDIA_QUERY.lg} {
    width: 400px;
  }
  ${MEDIA_QUERY.xl} {
    width: 600px;
  }
  & .anticon-close-circle {
    font-size: ${theme.FONT_SIZE.fs5};
  }
`;
