import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import SectionWrapper from './SectionStyle';
import Column from '../Column/Column';
import {
  selectColumnOrder,
  selectColumns,
  updateTicketStatusAsync,
  setUpdateTicketStatusError
} from '../../redux/reducers/ticketReducer';

const Section = ({
  setIsAddTicket,
  setTicketStatus
}) => {
  const [dragStatus, setDragStatus] = useState({
    id: '',
    current_status: '',
    new_status: '',
    update: false
  });
  const dispatch = useDispatch();
  const columnOrder = useSelector(selectColumnOrder);
  const columns = useSelector(selectColumns);

  const handleDrag = (item, finish) => {
    dispatch(setUpdateTicketStatusError(null));
    const { id, start } = item;
    if (start === finish) return;

    setDragStatus(dragStatus => ({
      ...dragStatus,
      id,
      current_status: start,
      new_status: finish,
      update: true
    }));
  };

  useEffect(() => {
    if (dragStatus.update) {
      dispatch(updateTicketStatusAsync(dragStatus));
    }
  }, [dispatch, dragStatus])

  return (
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
              handleDrag={handleDrag}
            />
          )
        })
      }
    </SectionWrapper>
  )
};

Section.propTypes = {
  setIsAddTicket: PropTypes.func,
  setTicketStatus: PropTypes.func
};

export default Section;