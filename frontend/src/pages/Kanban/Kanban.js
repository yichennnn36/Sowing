import React, { useState, useRef, useEffect, useCallback } from 'react';
import Section from '../../components/Section/Section';
import TicketEditor from '../../components/TicketEditor/TicketEditor';
import Header from '../../components/Header/Header';
import { initialData } from '../../utils';
import { KanbanWrapper } from './KanbanStyle';

const Kanban = () => {
  const [isAddTicket, setIsAddTicket] = useState(false);
  const [ticketsData, setTicketsData] = useState(initialData);
  const [ticketStatus, setTicketStatus] = useState({
    columnId: '',
    status: ''
  });

  const { tickets, columns, columnOrder } = ticketsData;

  return (
    <>
      <Header />
      <KanbanWrapper>
        <Section
          tickets={tickets}
          columns={columns}
          columnOrder={columnOrder}
          setIsAddTicket={setIsAddTicket}
          setTicketStatus={setTicketStatus}
          ticketsData={ticketsData}
          setTicketsData={setTicketsData}
        />
        {isAddTicket &&
          <TicketEditor
            ticketsData={ticketsData}
            setTicketsData={setTicketsData}
            setIsAddTicket={setIsAddTicket}
            ticketStatus={ticketStatus}
          />}
      </KanbanWrapper>
    </>
  )
}

export default Kanban;