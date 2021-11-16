import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../../constants/itemTypes';
import { categoryColors, timeFormator } from '../../utils';
import {
  EditOutlined,
  DeleteOutlined,
  EnvironmentFilled,
  PushpinFilled
} from '@ant-design/icons';
import {
  TicketWrapper,
  Subject,
  TicketTitle,
  FunctionBar,
  Info
} from './TicketStyle';
import {
  deleteTicketAsync,
  setDeleteError,
  setEditError
} from '../../redux/reducers/ticketReducer';

const Ticket = ({ ticket, setIsAddTicket, $secondMode }) => {
  let {
    ticket_id,
    title,
    category,
    start_date,
    end_date,
    location,
    content,
    status
  } = ticket;
  start_date = timeFormator(start_date);
  end_date = timeFormator(end_date);

  const dispatch = useDispatch();
  const color = categoryColors[category - 1].color;
  const ticketId = `ticket-${ticket_id}`;
  const dateFormat = start_date === end_date ?
    start_date : `${start_date} ～ ${end_date}`

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

  const [, dragRef] = useDrag({
    item: { id: ticket_id, start: status },
    type: ItemTypes.TICKET,
  });

  return (
    <TicketWrapper
      key={ticketId}
      ref={dragRef}
      $secondMode={$secondMode}
    >
      <Subject>
        <TicketTitle onClick={() => console.log('id', ticket_id)}>
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
        <span>{dateFormat}</span>
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
