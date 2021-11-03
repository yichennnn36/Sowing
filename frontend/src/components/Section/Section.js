import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import SectionWrapper from './SectionStyle';
import Column from '../Column/Column';
import {
  selectColumnOrder,
  selectColumns
} from '../../redux/reducers/ticketReducer';

const Section = ({
  setIsAddTicket,
  setTicketStatus
}) => {
  const columnOrder = useSelector(selectColumnOrder);
  const columns = useSelector(selectColumns);

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

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <SectionWrapper>
        {
          columnOrder.map((columnId) => {
            const column = columns[columnId];

            return (
              <Column
                key={columnId}
                id={columnId}
                title={column.title}
                setIsAddTicket={setIsAddTicket}
                setTicketStatus={setTicketStatus}
              />
            )
          })
        }
      </SectionWrapper>
    </DragDropContext>
  )
};

Section.propTypes = {
  setIsAddTicket: PropTypes.func,
  setTicketStatus: PropTypes.func
};

export default Section;