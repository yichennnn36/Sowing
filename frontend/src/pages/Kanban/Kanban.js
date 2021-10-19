import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import Section from '../../components/Section/Section';
import TicketEditor from '../../components/TicketEditor/TicketEditor';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import { initialData } from '../../utils';

const KanbanWrapper = styled(Layout)`
  min-height: 800px;
`;


const Kanban = () => {
  const [isAddTicket, setIsAddTicket] = useState(false);
  const [ticketsData, setTicketsData] = useState(initialData);
  const [ticketStatus, setTicketStatus] = useState({
    columnId: '',
    status: ''
  });

  let id = ticketsData.tickets.length + 1;


  const { tickets, columns, columnOrder } = ticketsData;

  return (
    <KanbanWrapper>
      <Sidebar />
      <Layout>
        <Header />
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
            id={id}
            ticketsData={ticketsData}
            setTicketsData={setTicketsData}
            setIsAddTicket={setIsAddTicket}
            ticketStatus={ticketStatus}
          />}
      </Layout>
    </KanbanWrapper>
  )
}

export default Kanban;