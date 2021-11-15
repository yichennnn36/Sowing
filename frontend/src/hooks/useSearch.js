import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectTicketsData } from '../redux/reducers/ticketReducer';

const useSearch = () => {
  let isSearching = false;
  let keepSearchedTickets = [];
  let isOnComposition = false;
  const searchFieldRef = useRef('');
  const { tickets } = useSelector(selectTicketsData);
  const [searchedResult, setSearchedResult] = useState([]);

  const handleTicketSearch = (searchWord) => {
    if (!isSearching) {
      isSearching = true;
      keepSearchedTickets = [...tickets];
    }
    if (isSearching && searchWord === '') {
      isSearching = false;
      setSearchedResult([]);
    } else {
      const searchedTickets = keepSearchedTickets.filter(item => (
        item.title.includes(searchWord)
      ));
      setSearchedResult(() => ([
        ...searchedTickets
      ]))
    }
  };

  const handleComposition = (e) => {
    if (e.type === 'compositionend') {
      //composition結束，代表中文輸入完成
      isOnComposition = false;
      if (navigator.userAgent.indexOf('Chrome') > -1 && !isOnComposition && e.target.value) {
        handleTicketSearch(searchFieldRef.current.value);
      }
    } else {
      //composition進行中，代表中文正在輸入
      isOnComposition = true;
    }
  };

  const handleChange = (e) => {
    if (e.target.value && !isOnComposition) {
      handleTicketSearch(searchFieldRef.current.value);
    }
  };

  return {
    searchFieldRef,
    isOnComposition,
    searchedResult,
    handleComposition,
    handleTicketSearch,
    handleChange
  }
};

export default useSearch;
