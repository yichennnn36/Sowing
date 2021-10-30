import styled from 'styled-components';
import { Card } from 'antd';
import { theme, MEDIA_QUERY } from '../../constants/style';

export const ColumnWrapper = styled(Card)`
  min-width: 360px;
  max-width: 480px;
  margin: 16px auto;
  border-radius: 6px;
  background: ${theme.COLOR.card};

  ${MEDIA_QUERY.md} {
    min-width: 380px;
    flex: 1;
    margin: 0 12px;
  }
  & button {
    &:focus,&:hover {
      color: ${theme.COLOR.primary};
      border-color: ${theme.COLOR.primary};
    }
  }
`;

export const TicketList = styled.div`
  flex-grow: 1;
  min-height: 500px;
  background: ${props => props.isDraggingOver ?
    `#fbfaf8` : `inherit`};
`;