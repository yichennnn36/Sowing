import { Card, Avatar, Menu } from 'antd';
import { Draggable } from 'react-beautiful-dnd';
import { EditOutlined, DeleteOutlined, EnvironmentFilled, PushpinFilled } from '@ant-design/icons';
import { categoryColors } from '../../utils';
import { Container } from './TicketStyle';

const Ticket = ({ ticket, index, setIsAddTicket }) => {
  const color = categoryColors[ticket.category - 1].color;

  return (
    <Draggable draggableId={ticket.id} index={index}>
      {(provided, snapshot) => (

        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
        >

          <Card
            size="small"
            title={ticket.title}
            extra={[
              <PushpinFilled style={{ color: `${color}` }} />,
              <EditOutlined
                key="edit"

              />,
              <DeleteOutlined
                key="delete"

              />
            ]}
          >
            <p>{<EnvironmentFilled />} {ticket.locations}</p>
            <p>{`${ticket.startDate} ～ ${ticket.endDate}`}</p>
          </Card>
        </Container>
      )}
    </Draggable>
  )
};

export default Ticket;