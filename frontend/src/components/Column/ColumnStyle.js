import styled from 'styled-components';
import { Card } from 'antd';
import { theme } from '../../constants/style';

export const Container = styled(Card)`
  min-width: 380px;
  margin: 0 12px;
  border-radius: 6px;
  border-top-right-radius: 30px;
  background: ${theme.COLOR.card};

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