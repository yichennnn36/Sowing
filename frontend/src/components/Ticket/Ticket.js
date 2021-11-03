import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { EditOutlined, DeleteOutlined, EnvironmentFilled, PushpinFilled } from '@ant-design/icons';
import { categoryColors } from '../../utils';
import { TicketWrapper, Subject, TicketTitle, FunctionBar, Info } from './TicketStyle';
import {
  deleteTicketAsync,
  setDeleteError
} from '../../redux/reducers/ticketReducer';

const Ticket = ({ ticket, index }) => {
  const {
    ticket_id,
    title,
    category,
    start_date,
    end_date,
    location,
    content
  } = ticket;
  const color = categoryColors[category - 1].color;
  const ticketId = `ticket-${ticket_id}`;
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(setDeleteError(null));
    dispatch(deleteTicketAsync(id));
  };

  return (
    <Draggable draggableId={ticketId} index={index}>
      {(provided, snapshot) => (
        <TicketWrapper
          ref={provided.innerRef}
          {...provided.draggableProps}
          isDragging={snapshot.isDragging}
          key={ticketId}
        >
          <Subject>
            <TicketTitle {...provided.dragHandleProps}>
              <PushpinFilled style={{ color: `${color}` }} />
              <span>{title}</span>
            </TicketTitle>
            <FunctionBar>
              <EditOutlined key="edit" />
              <DeleteOutlined
                key="delete"
                onClick={() => handleDelete(ticket_id)}
              />
            </FunctionBar>
          </Subject>
          <Info {...provided.dragHandleProps}>
            {
              start_date === end_date ?
                (<span>{`${start_date.slice(0, 10)}`}</span>) :
                (<span>{`${start_date.slice(0, 10)}～ ${end_date.slice(0, 10)}`}</span>)
            }
            <span>{<EnvironmentFilled />} {location}</span>
            <p>{content}</p>
          </Info>
        </TicketWrapper>
      )}
    </Draggable>
  )
};

Ticket.propTypes = {
  ticket: PropTypes.object,
  index: PropTypes.number
};

export default Ticket;