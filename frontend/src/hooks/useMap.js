import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { locationSum } from '../utils';
import { selectState, selectTicketsData } from '../redux/reducers/ticketReducer';

const useMap = () => {
  const boardData = useSelector(selectState);
  const { tickets } = useSelector(selectTicketsData);
  const { status, getTicketsError } = boardData;
  const [locationInfo, setLocationInfo] = useState(locationSum);

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
    tickets,
    locationInfo,
    setLocationInfo,
    status,
    getTicketsError
  }
};

export default useMap;
