import styled from 'styled-components';
import { Card } from 'antd';
import { theme, MEDIA_QUERY } from '../../constants/style';

export const ColumnWrapper = styled.div`
  max-width: 500px;
  margin: 16px auto;
  ${props => props.isOver &&
    `border: 2px dashed ${theme.COLOR.shadow}`
  };

  ${MEDIA_QUERY.lg} {
    flex: 1;
    margin: 0 12px;
  }
`;

export const Container = styled(Card)`
  border-radius: 6px;
  background: ${theme.COLOR.card};
  max-height: 800px;
  overflow-y: scroll;

  ${MEDIA_QUERY.md} {
    height: 1000px;
    
    &::-webkit-scrollbar {
      display: none;
    }
  }
  & button {
    &:focus,&:hover {
      color: ${theme.COLOR.primary};
      border-color: ${theme.COLOR.primary};
    }
  }
  & .ant-card-head-title {
    font-family: ${theme.FONT.content};
    font-size: ${theme.FONT_SIZE.fs4};
    color: ${theme.COLOR.tertiary};
    font-weight: 600;
  }
`;

export const TicketList = styled.div`
  flex-grow: 1;
  min-height: 500px;
`;