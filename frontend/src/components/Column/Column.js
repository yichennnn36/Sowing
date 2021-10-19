import styled from 'styled-components';
import { Button, Card } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Droppable } from 'react-beautiful-dnd';
import Ticket from '../Ticket/Ticket';

const Container = styled(Card)`
  width: 350px;
  margin: 0 12px;
  border-radius: 6px;
  border-top-right-radius: 30px;
  background: ${({ theme }) => theme.colors.light};
  & button {
    &:focus,&:hover {
      color: ${({ theme }) => theme.colors.primary};
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const TicketList = styled.div`
  flex-grow: 1;
  min-height: 500px;
  background: ${props => props.isDraggingOver ?
    `#fbfaf8` :
    `inherit`};
`;

const Column = ({
  id,
  title,
  columnStatus,
  ticketData,
  setIsAddTicket,
  setTicketStatus
}) => {

  const handleCilckAdd = () => {
    setIsAddTicket(true);
    setTicketStatus({
      columnId: id,
      status: columnStatus
    });
  }

  return (
    <Droppable droppableId={id} type="ticket">
      {(provided, snapshot) => (
        <Container
          title={title}
        >
          <Button
            type="dashed" icon={<PlusOutlined />}
            onClick={handleCilckAdd}
          />
          <TicketList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {
              ticketData.length > 0 &&
              ticketData
                .map((ticket, index) => {
                  const [ticketContent] = [...ticket];

                  return (
                    <Ticket
                      key={index}
                      index={index}
                      ticket={ticketContent}
                      setIsAddTicket={setIsAddTicket}
                    />
                  )
                })
            }
            {provided.placeholder}
          </TicketList>
        </Container>
      )}
    </Droppable>
  )
};

export default Column;