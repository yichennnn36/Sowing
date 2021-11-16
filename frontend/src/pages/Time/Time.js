import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { getMe } from '../../redux/reducers/userReducer';
import { TimeWrapper } from './TimeStyle';
import { initialData } from '../../utils';
import {
  getTicketsAsync,
  selectState,
  setInitialData,
  setInitialError
} from '../../redux/reducers/ticketReducer';
import Header from '../../components/Header/Header';
import Loading from '../../components/Loading/Loading';
import TicketEditor from '../../components/TicketEditor/TicketEditor';
import Timeline from '../../components/Timeline/Timeline';
import Search from '../../components/Search/Search';
import error from '../../constants/error';

const Time = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const boardData = useSelector(selectState);
  const {
    status,
    getTicketsError,
    editError,
    deleteError
  } = boardData;
  const [isAddTicket, setIsAddTicket] = useState({
    id: null,
    open: false
  });

  useEffect(() => {
    dispatch(getMe());
    dispatch(getTicketsAsync());

    if (getTicketsError) {
      alert(error.FAIL_LOGIN[0]);
      history.push('./');
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
  }, [dispatch, history, getTicketsError, deleteError, editError]);

  useEffect(() => {
    return () => {
      dispatch(setInitialData(initialData));
      dispatch(setInitialError(null));
    }
  }, [dispatch]);

  return (
    <>
      {status === 'loading' && <Loading />}
      {status === 'error' && <Loading $error />}
      <Header />
      <TimeWrapper>
        <Search setIsAddTicket={setIsAddTicket} />
        <Timeline />
      </TimeWrapper>
      {isAddTicket.open &&
        <TicketEditor
          isAddTicket={isAddTicket}
          setIsAddTicket={setIsAddTicket}
          ticketStatus=''
        />
      }
    </>
  )
};

export default Time;
