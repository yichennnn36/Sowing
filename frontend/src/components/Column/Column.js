import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Droppable } from 'react-beautiful-dnd';
import { ColumnWrapper, TicketList } from './ColumnStyle';
import Ticket from '../Ticket/Ticket';
import { selectTickets } from '../../redux/reducers/ticketReducer';

const Column = ({
  id,
  title,
  setIsAddTicket,
  setTicketStatus
}) => {
  let neededTickets = [];
  const tickets = useSelector(selectTickets);
  if (tickets.length > 0) {
    neededTickets = tickets.filter(ticket => ticket.status === id);
  }

  const handleCilckAdd = () => {
    setIsAddTicket(true);
    setTicketStatus(id);
  };

  return (
    <Droppable droppableId={id}>
      {(provided, snapshot) => (
        <ColumnWrapper title={title}>
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
              neededTickets.length > 0 &&
              neededTickets
                .map((ticket, index) => {
                  return (
                    <Ticket
                      key={index}
                      index={index}
                      ticket={ticket}
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

Column.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  setIsAddTicket: PropTypes.func,
  setTicketStatus: PropTypes.func
};

export default Column;