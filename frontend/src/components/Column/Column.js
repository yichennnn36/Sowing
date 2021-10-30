import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Droppable } from 'react-beautiful-dnd';
import { ColumnWrapper, TicketList } from './ColumnStyle';
import Ticket from '../Ticket/Ticket';

const Column = ({
  id,
  title,
  ticketData,
  setIsAddTicket,
  setTicketStatus
}) => {

  const handleCilckAdd = () => {
    setIsAddTicket(true);
    setTicketStatus(id);
  };

  return (
    <Droppable droppableId={id} type="ticket">
      {(provided, snapshot) => (
        <ColumnWrapper
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
                    />
                  )
                })
            }
            {provided.placeholder}
          </TicketList>
        </ColumnWrapper>
      )}
    </Droppable>
  )
};

export default Column;