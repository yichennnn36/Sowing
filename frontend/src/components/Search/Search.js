import React from 'react';
import useSearch from '../../hooks/useSearch';
import { SearchOutlined, PushpinFilled, EnvironmentFilled } from '@ant-design/icons';
import { categoryColors, timeFormator } from '../../utils';
import {
  SearchWrapper,
  InputWrapper,
  TicketWrapper,
  Subject,
  TicketTitle,
  Info
} from './SearchStyle';

const Search = () => {
  let {
    titleField,
    searchedResult,
    handleComposition,
    handleChange
  } = useSearch();

  return (
    <SearchWrapper>
      <InputWrapper>
        <SearchOutlined />
        <input
          type='text'
          name='search'
          placeholder="Search the Title！"
          ref={titleField}
          onCompositionStart={handleComposition}
          onCompositionUpdate={handleComposition}
          onCompositionEnd={handleComposition}
          onChange={handleChange}
        />
      </InputWrapper>
      {
        searchedResult.length > 0 &&
        searchedResult.map((result, index) => {
          let {
            title,
            location,
            content,
            category,
            start_date,
            end_date
          } = result;
          start_date = timeFormator(start_date);
          end_date = timeFormator(end_date);

          const color = categoryColors[category - 1].color;
          const dateFormat = start_date === end_date ?
            start_date : `${start_date} ～ ${end_date}`
          return (
            <TicketWrapper key={index}>
              <Subject>
                <TicketTitle>
                  <PushpinFilled style={{ color: `${color}` }} />
                  <span>{title}</span>
                </TicketTitle>
              </Subject>
              <Info>
                <span>{dateFormat}</span>
                <span>{<EnvironmentFilled />} {location}</span>
                <p>{content}</p>
              </Info>
            </TicketWrapper>
          )
        })
      }
    </SearchWrapper>
  )
};

export default Search;