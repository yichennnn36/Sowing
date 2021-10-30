import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { KanbanWrapper } from './KanbanStyle';
import { getMe } from '../../redux/reducers/userReducer';
import { getTicket, setInitalData } from '../../redux/reducers/ticketReducer';
import { initialData } from '../../utils';
import Section from '../../components/Section/Section';
import TicketEditor from '../../components/TicketEditor/TicketEditor';
import Header from '../../components/Header/Header';
import Loading from '../../components/Loading/Loading';

const Kanban = () => {
  const [isAddTicket, setIsAddTicket] = useState(false);
  const [ticketStatus, setTicketStatus] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoadingTickets = useSelector(store => store.ticket.isLoadingTickets);
  const ticketsData = useSelector(store => store.ticket.ticketsData);
  const errResponse = useSelector(store => store.ticket.getPostErrResponse);

  useEffect(() => {
    dispatch(getMe());
    dispatch(getTicket());

    if (errResponse) {
      alert(errResponse);
      history.push('./');
    }
  }, [dispatch, history, errResponse]);

  useEffect(() => {
    return () => {
      dispatch(setInitalData(initialData));
    }
  }, [dispatch])

  return (
    <>
      {isLoadingTickets && <Loading $loadingKanban />}
      <Header />
      <KanbanWrapper>
        <Section
          ticketsData={ticketsData}
          setIsAddTicket={setIsAddTicket}
          setTicketStatus={setTicketStatus}
        />
        {isAddTicket &&
          <TicketEditor
            setIsAddTicket={setIsAddTicket}
            ticketStatus={ticketStatus}
          />
        }
      </KanbanWrapper>
    </>
  )
};

export default Kanban;