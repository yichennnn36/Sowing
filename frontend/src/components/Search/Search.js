import { SearchOutlined, CloseSquareFilled } from '@ant-design/icons';
import {
  SearchWrapper,
  InputWrapper,
  ResultWrapper,
  CloseButton
} from './SearchStyle';
import Ticket from '../Ticket/Ticket';
import useSearch from '../../hooks/useSearch';

const Search = ({ setIsAddTicket }) => {
  const {
    searchFieldRef,
    handleComposition,
    handleChange,
    searchedResult,
    setSearchedResult
  } = useSearch();

  return (
    <SearchWrapper className="search__wrapper">
      <InputWrapper className="input__wrapper">
        <SearchOutlined />
        <input
          type='text'
          name='search'
          placeholder="Search the Title！"
          ref={searchFieldRef}
          onCompositionStart={handleComposition}
          onCompositionUpdate={handleComposition}
          onCompositionEnd={handleComposition}
          onChange={handleChange}
        />
      </InputWrapper>
      <ResultWrapper className="result__wrapper">
        {searchedResult.length > 0 && (
          <CloseButton onClick={() => setSearchedResult([])}>
            <CloseSquareFilled /> Clear All
          </CloseButton>
        )}
        {
          searchedResult.length > 0 &&
          searchedResult.map((result, index) => (
            <Ticket
              key={index}
              ticket={result}
              setIsAddTicket={setIsAddTicket}
              $secondMode
            />
          ))
        }
      </ResultWrapper>
    </SearchWrapper>
  )
};

export default Search;
