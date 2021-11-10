import styled from 'styled-components';
import { theme, MEDIA_QUERY } from '../../constants/style';
import { ReactComponent as Map } from '../../image/map.svg';

export const MapWrapper = styled.div`
  min-height: 680px;
  margin: 200px auto 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${MEDIA_QUERY.lg} {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export const MapBlock = styled.div`
  position: relative;
`;

export const MapImage = styled(Map)`
  width: 600px;
  height: 600px;
`;

export const Information = styled.div`
  width: 600px;
  height: 600px;
  margin-top: 50px;

  ${MEDIA_QUERY.lg} {
    margin: 0 50px;
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

export const Subject = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${theme.COLOR.secondary};
`;

export const TicketTitle = styled.div`
  display: flex;
  font-size: ${theme.FONT_SIZE.fs6};
  padding-bottom: 6px;

  & span {
    font-weight: 500;
  }
  & svg {
    margin-right: 10px;
  }
`;

export const Info = styled.div`
  position: relative;
  margin-top: 6px;
  display: block;

  & span {
    color: ${theme.COLOR.tertiary};
    font-size: ${theme.FONT_SIZE.fs7};
  }
  & span:first-child {
    font-style: italic;
  }
  & p {
    margin: 10px 0 0;
    word-break: break-word;
  }
`;

export const GridMap = styled.div`
  display: inline-block;
  position: absolute;
  top: -30px;
  left: 20px;
`;

export const Row = styled.div`
  display: flex;
`;

export const Square = styled.div`
  width: 30px;
  height: 30px;
`;

export const Mark = styled.div`

`;

