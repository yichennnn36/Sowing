import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { BoardWrapper } from './BoardStyle';
import { getMe } from '../../redux/reducers/userReducer';
import { initialData } from '../../utils';
import {
  getTicketsAsync,
  selectState,
  setInitialData,
  setInitialError
} from '../../redux/reducers/ticketReducer';
import Section from '../../components/Section/Section';
import TicketEditor from '../../components/TicketEditor/TicketEditor';
import FilterButton from '../../components/FilterButton/FilterButton';
import Header from '../../components/Header/Header';
import Loading from '../../components/Loading/Loading';
import error from '../../constants/error';

const Board = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const boardData = useSelector(selectState);
  const {
    status,
    getTicketsError,
    postTicketError,
    deleteError,
    editError,
    updateTicketStatusError
  } = boardData;
  const [isAddTicket, setIsAddTicket] = useState({
    id: null,
    open: false
  });
  const [ticketStatus, setTicketStatus] = useState('');

  useEffect(() => {
    dispatch(getMe());
    dispatch(getTicketsAsync());

    if (getTicketsError) {
      alert(error.FAIL_LOGIN[0]);
      history.push('./');
      return;
    }
    if (postTicketError) {
      alert(error.FAIL_POST[0]);
      return;
    }
    if (deleteError) {
      alert(error.FAIL_DELETE[0]);
      return;
    }
    if (editError) {
      alert(error.FAIL_EDIT[0]);
      return;
    }
    if (updateTicketStatusError) {
      alert(error.FAIL_DRAG[0]);
      return;
    }
  }, [dispatch, history, getTicketsError, postTicketError, deleteError, editError, updateTicketStatusError]);

  useEffect(() => {
    return () => {
      dispatch(setInitialData(initialData));
      dispatch(setInitialError(null));
    }
  }, [dispatch]);

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
        {isAddTicket.open &&
          <TicketEditor
            isAddTicket={isAddTicket}
            setIsAddTicket={setIsAddTicket}
            ticketStatus={ticketStatus}
          />
        }
      </BoardWrapper>
    </>
  )
};

export default Board;
