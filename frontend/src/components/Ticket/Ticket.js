import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../../constants/itemTypes';
import { EditOutlined, DeleteOutlined, EnvironmentFilled, PushpinFilled } from '@ant-design/icons';
import { categoryColors } from '../../utils';
import { TicketWrapper, Subject, TicketTitle, FunctionBar, Info } from './TicketStyle';
import {
  deleteTicketAsync,
  setDeleteError,
  setEditError
} from '../../redux/reducers/ticketReducer';

const Ticket = ({ ticket, setIsAddTicket }) => {
  const {
    ticket_id,
    title,
    category,
    start_date,
    end_date,
    location,
    content,
    status
  } = ticket;
  const color = categoryColors[category - 1].color;
  const ticketId = `ticket-${ticket_id}`;
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(setDeleteError(null));
    dispatch(deleteTicketAsync(id));
  };

  const handleEdit = (id) => {
    dispatch(setEditError(null));
    setIsAddTicket(() => ({
      id,
      open: true
    }));
  };

  const [, dragRef] = useDrag(() => ({
    item: { id: ticket_id, start: status },
    type: ItemTypes.TICKET,
  }))

  return (
    <TicketWrapper key={ticketId} ref={dragRef}>
      <Subject>
        <TicketTitle>
          <PushpinFilled style={{ color: `${color}` }} />
          <span>{title}</span>
        </TicketTitle>
        <FunctionBar>
          <EditOutlined
            key="edit"
            onClick={() => handleEdit(ticket_id)}
          />
          <DeleteOutlined
            key="delete"
            onClick={() => handleDelete(ticket_id)}
          />
        </FunctionBar>
      </Subject>
      <Info>
        {
          start_date === end_date ?
            (<span>{`${start_date.slice(0, 10)}`}</span>) :
            (<span>{`${start_date.slice(0, 10)}～ ${end_date.slice(0, 10)}`}</span>)
        }
        <span>{<EnvironmentFilled />} {location}</span>
        <p>{content}</p>
      </Info>
    </TicketWrapper>
  )
};

Ticket.propTypes = {
  ticket: PropTypes.object,
  setIsAddTicket: PropTypes.func
};

export default Ticket;