import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { getMe } from '../../redux/reducers/userReducer';
import { TimeWrapper } from './TimeStyle';
import { initialData } from '../../utils';
import {
  getTicketsAsync,
  selectStatus,
  selectTickets,
  selectState,
  setInitialData,
  setInitialError
} from '../../redux/reducers/ticketReducer';
import Header from '../../components/Header/Header';
import Loading from '../../components/Loading/Loading';
import Timeline from '../../components/Timeline/Timeline';
import Search from '../../components/Search/Search';
import error from '../../constants/error';

const Time = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const boardData = useSelector(selectState);
  const tickets = useSelector(selectTickets);
  const { getTicketsError } = boardData;

  useEffect(() => {
    dispatch(getMe());
    dispatch(getTicketsAsync());

    if (getTicketsError) {
      alert(error.FAIL_LOGIN[0]);
      history.push('./');
      return;
    }
  }, [dispatch, history, getTicketsError]);

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
      <TimeWrapper>
        <Search />
        <Timeline tickets={tickets} />
      </TimeWrapper>
    </>
  )
};

export default Time;