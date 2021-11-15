import styled from 'styled-components';
import { theme, MEDIA_QUERY } from '../../constants/style';

export const InformationContainer = styled.div`
  min-width: 350px;
  height: auto;
  margin: 50px 16px 0;

  ${MEDIA_QUERY.lg} {
    margin: 0 50px;
    max-width: 700px;
  }
`;

export const LocationInfo = styled.div`
  display: inline-block;
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
  margin-top: 50px;
  display: flex;
  overflow-x: hidden;
  position: relative;

  & .anticon-close-circle {
    font-size: ${theme.FONT_SIZE.fs5};
  }
`;

export const TicketWrapper = styled.div`
  width: 240px;
  margin: 0 16px;;
  padding: 10px 20px;
  border: 2px dashed ${theme.COLOR.secondary};
  border-radius: 6px;
  border-top-right-radius: 30px;
`;

export const TicketTitle = styled.div`
  display: flex;
  font-size: ${theme.FONT_SIZE.fs6};
  padding-bottom: 6px;
  border-bottom: 1px solid ${theme.COLOR.secondary};

  & span {
    font-weight: 500;
  }
  & svg {
    margin-right: 10px;
  }
`;

export const Date = styled.div`
  margin-top: 6px;
  font-style: italic;
  font-size: ${theme.FONT_SIZE.fs7};
  color: ${theme.COLOR.tertiary};
`;
