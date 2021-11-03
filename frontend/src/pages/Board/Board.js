import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { BoardWrapper, TagWrapper } from './BoardStyle';
import { getMe } from '../../redux/reducers/userReducer';
import {
  getTicketsAsync,
  selectTicketsData,
  selectStatus,
  selectGetTicketsError,
  selectDeleteError,
  selectPostTicketError,
  setInitalData,
  setGetTicketsError,
  setDeleteError,
  setPostTicketError
} from '../../redux/reducers/ticketReducer';
import { initialData } from '../../utils';
import Section from '../../components/Section/Section';
import TicketEditor from '../../components/TicketEditor/TicketEditor';
import FilterButton from '../../components/FilterButton/FilterButton';
import Header from '../../components/Header/Header';
import Loading from '../../components/Loading/Loading';
import error from '../../constants/error';

const Board = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const ticketsData = useSelector(selectTicketsData);
  const status = useSelector(selectStatus);
  const getTicketsError = useSelector(selectGetTicketsError);
  const deleteError = useSelector(selectDeleteError);
  const postTicketError = useSelector(selectPostTicketError);

  const [isAddTicket, setIsAddTicket] = useState(false);
  const [ticketStatus, setTicketStatus] = useState('');

  useEffect(() => {
    console.log('Board effect');
    dispatch(getMe());
    dispatch(getTicketsAsync());

    if (getTicketsError) {
      alert(error.FAIL_LOGIN[0]);
      history.push('./');
      return;
    }
    if (postTicketError) {
      alert('新增失敗，請再試一次');
      return;
    }
    if (deleteError) {
      alert('刪除失敗，請再試一次');
      return;
    }
  }, [dispatch, history, getTicketsError, deleteError, postTicketError]);

  useEffect(() => {
    return () => {
      console.log('return effect')
      dispatch(setInitalData(initialData));
      dispatch(setGetTicketsError(null));
      dispatch(setDeleteError(null));
      dispatch(setPostTicketError(null));
    }
  }, [dispatch])

  return (
    <>
      {status === 'loading' && <Loading />}
      <Header />
      <BoardWrapper>
        <FilterButton />
        <Section
          setIsAddTicket={setIsAddTicket}
          setTicketStatus={setTicketStatus}
        />
        {isAddTicket &&
          <TicketEditor
            setIsAddTicket={setIsAddTicket}
            ticketStatus={ticketStatus}
          />
        }
      </BoardWrapper>
    </>
  )
};

export default Board;