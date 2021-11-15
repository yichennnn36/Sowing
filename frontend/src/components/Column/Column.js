import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../../constants/itemTypes';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { ColumnWrapper, Container, TicketList } from './ColumnStyle';
import { selectTicketsData } from '../../redux/reducers/ticketReducer';
import Ticket from '../Ticket/Ticket';

const Column = ({
  id,
  title,
  setIsAddTicket,
  setTicketStatus,
  handleDrag
}) => {
  let neededTickets = [];
  const { tickets } = useSelector(selectTicketsData);
  if (tickets.length > 0) {
    neededTickets = tickets.filter(ticket => ticket.status === id);
  }

  const [{ isOver }, dropRef] = useDrop({
    accept: ItemTypes.TICKET,
    drop: (item) => {
      handleDrag(item, id);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const handleCilckAdd = () => {
    setIsAddTicket(() => ({
      id: null,
      open: true
    }));
    setTicketStatus(id);
  };

  return (
    <ColumnWrapper ref={dropRef} isOver={isOver}>
      <Container title={title}>
        <Button
          type="dashed" icon={<PlusOutlined />}
          onClick={handleCilckAdd}
        />
        <TicketList>
          {
            neededTickets.length > 0 &&
            neededTickets
              .map((ticket, index) => {
                return (
                  <Ticket
                    key={index}
                    index={index}
                    ticket={ticket}
                    setIsAddTicket={setIsAddTicket}
                  />
                )
              })
          }
        </TicketList>
      </Container>
    </ColumnWrapper>
  )
};

Column.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  setIsAddTicket: PropTypes.func,
  setTicketStatus: PropTypes.func,
  handleDrag: PropTypes.func
};

export default Column;
