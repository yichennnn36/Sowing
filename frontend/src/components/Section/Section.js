import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import SectionWrapper from './SectionStyle';
import Column from '../Column/Column';

const Section = ({
  ticketsData,
  setIsAddTicket,
  setTicketStatus
}) => {

  const onDragEnd = (result) => {
    // const { destination, draggableId, source } = result;

    // if (!destination) return;
    // if (
    //   destination.index === source.index &&
    //   destination.droppableId === source.droppableId
    // ) return;

    // const start = columns[source.droppableId];
    // const finish = columns[destination.droppableId];

    // if (start === finish) {
    //   const column = columns[source.droppableId];
    //   const newTickets = Array.from(column.ticketIds);

    //   newTickets.splice(source.index, 1);
    //   newTickets.splice(destination.index, 0, draggableId);

    //   const newColumn = {
    //     ...column,
    //     ticketIds: newTickets
    //   };

    //   return setTicketsData(ticketsData => (
    //     {
    //       ...ticketsData,
    //       columns: {
    //         ...columns,
    //         [newColumn.id]: newColumn
    //       }
    //     }
    //   ));
    // }

    // const startTicketIds = Array.from(start.ticketIds);
    // startTicketIds.splice(source.index, 1);
    // const newStart = {
    //   ...start,
    //   ticketIds: startTicketIds
    // };

    // const finishTicketIds = Array.from(finish.ticketIds);
    // finishTicketIds.splice(destination.index, 0, draggableId);
    // const newFinish = {
    //   ...finish,
    //   ticketIds: finishTicketIds
    // };

    // setTicketsData(ticketsData => (
    //   {
    //     ...ticketsData,
    //     columns: {
    //       ...columns,
    //       [newStart.id]: newStart,
    //       [newFinish.id]: newFinish
    //     }
    //   }
    // ))
  };
  const { tickets, columns, columnOrder } = ticketsData;

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <SectionWrapper>
        {
          columnOrder.map((columnId) => {
            const column = columns[columnId];
            const ticketData = column.ticketIds.map(ticketId => tickets.filter(ticket => ticket.ticket_id === ticketId));

            return (
              <Column
                key={columnId}
                id={columnId}
                title={column.title}
                ticketData={ticketData}
                setIsAddTicket={setIsAddTicket}
                setTicketStatus={setTicketStatus}
              />
            )
          })
        }
      </SectionWrapper>
    </DragDropContext>
  )
}

export default Section;