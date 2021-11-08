import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectTickets } from '../redux/reducers/ticketReducer';

const useSearch = () => {
  let isSearching = false;
  let keepSearchedTickets = [];
  let isOnComposition = false;
  const titleField = useRef('');
  const tickets = useSelector(selectTickets);
  const [searchedResult, setSearchedResult] = useState([]);

  const handleTicketSearch = (searchWord) => {
    console.log('search')
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
    console.log('e type', e.type)
    if (e.type === 'compositionend') {
      //composition結束，代表中文輸入完成
      isOnComposition = false;
      if (navigator.userAgent.indexOf('Chrome') > -1 && !isOnComposition && e.target.value) {
        handleTicketSearch(titleField.current.value);
      }
    } else {
      //composition進行中，代表中文正在輸入
      isOnComposition = true;
    }
    console.log('isOnComposition', isOnComposition)
  };

  const handleChange = (e) => {
    if (e.target.value && !isOnComposition) {
      handleTicketSearch(titleField.current.value)
    }
  };

  return {
    titleField,
    isOnComposition,
    searchedResult,
    handleComposition,
    handleTicketSearch,
    handleChange
  }
};

export default useSearch;