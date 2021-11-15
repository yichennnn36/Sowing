import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectTicketsData,
  setPostTicketError,
  editTicketAsync,
  postTicketAsync
} from '../redux/reducers/ticketReducer';
import error from '../constants/error';

const usePost = ({
  isAddTicket,
  setIsAddTicket,
  ticketStatus
}) => {
  const [inputValue, setInputValue] = useState({
    title: '',
    location: '',
    start_date: '',
    end_date: '',
    category: 1,
    status: ticketStatus
  });
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(null);
  const { tickets } = useSelector(selectTicketsData);
  const ticket = useRef({});

  const handleClose = () => {
    setIsAddTicket(() => ({
      id: null,
      open: false
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue(inputValue => ({
      ...inputValue,
      [name]: value,
    }));
  };

  const handleSelectChange = (value) => {
    setInputValue(inputValue => ({
      ...inputValue,
      location: value,
    }));
  };

  const handleDateChange = (value, dateString) => {
    const [start_date, end_date] = dateString;
    setInputValue(inputValue => ({
      ...inputValue,
      start_date,
      end_date
    }));
  };

  const handleSave = () => {
    setErrorMessage(null);
    dispatch(setPostTicketError(null));

    const { title, location, start_date, end_date } = inputValue;
    if (!title || !location || !start_date || !end_date) {
      return setErrorMessage(error.EMPTY_FILEDS.required);
    }
    isAddTicket.id ?
      dispatch(editTicketAsync(inputValue)) :
      dispatch(postTicketAsync(inputValue));
    setIsAddTicket(false);
  };

  if (isAddTicket.id) {
    [ticket.current] = tickets.filter(item => item.ticket_id === isAddTicket.id);
  }

  return {
    errorMessage,
    setInputValue,
    ticket,
    handleClose,
    handleInputChange,
    handleSelectChange,
    handleDateChange,
    handleSave
  }
};

export default usePost;
