import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { locationSum } from '../utils';
import { selectState, selectTicketsData } from '../redux/reducers/ticketReducer';

const useMap = () => {
  const boardData = useSelector(selectState);
  const { tickets } = useSelector(selectTicketsData);
  const {
    status,
    getTicketsError,
    editError,
    deleteError
  } = boardData;
  const [locationInfo, setLocationInfo] = useState(locationSum);
  const [ticketsInfo, setTicketsInfo] = useState([]);
  const [isAddTicket, setIsAddTicket] = useState({
    id: null,
    open: false
  });

  const handleShowInfo = (location) => {
    const info = tickets.filter(ticket => ticket.location === location);
    setTicketsInfo(() => ([
      ...info,
      ...ticketsInfo
    ]));
  };

  useEffect(() => {
    let theLocationInfo = JSON.parse(JSON.stringify(locationSum));
    tickets.map(ticket => {
      if (theLocationInfo.find(item => item.location === ticket.location)) {
        const index = theLocationInfo.findIndex(item => item.location === ticket.location);
        theLocationInfo[index].sum++;
      }
      return theLocationInfo;
    });

    setLocationInfo(() => ([
      ...theLocationInfo
    ]));
  }, [tickets]);

  return {
    locationInfo,
    status,
    getTicketsError,
    deleteError,
    editError,
    handleShowInfo,
    ticketsInfo,
    setTicketsInfo,
    isAddTicket,
    setIsAddTicket
  }
};

export default useMap;
