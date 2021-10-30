import { Draggable } from 'react-beautiful-dnd';
import { EditOutlined, DeleteOutlined, EnvironmentFilled, PushpinFilled } from '@ant-design/icons';
import { categoryColors } from '../../utils';
import { TicketWrapper, Subject, TicketTitle, FunctionBar, Info } from './TicketStyle';

const Ticket = ({ ticket, index }) => {
  const {
    id,
    title,
    category,
    start_date,
    end_date,
    location,
    content
  } = ticket;
  const color = categoryColors[category - 1].color;
  const ticketId = `ticket-${id}`;

  return (
    <Draggable draggableId={ticketId} index={index}>
      {(provided, snapshot) => (

        <TicketWrapper
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
          key={ticketId}
        >
          <Subject>
            <TicketTitle>
              <PushpinFilled style={{ color: `${color}` }} />
              <span>{title}</span>
            </TicketTitle>
            <FunctionBar>
              <EditOutlined key="edit" />
              <DeleteOutlined key="delete" />
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
      )}
    </Draggable>
  )
};

export default Ticket;