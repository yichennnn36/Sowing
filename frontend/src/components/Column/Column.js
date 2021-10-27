import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Droppable } from 'react-beautiful-dnd';
import { Container, TicketList } from './ColumnStyle';
import Ticket from '../Ticket/Ticket';

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