import { Button } from 'antd';
import { PushpinFilled } from '@ant-design/icons';
import { categoryColors, initialData } from '../../utils';
import { FilterWrapper } from './FilterButtonStyle';
import { useDispatch } from 'react-redux';
import { fetchAllTickets } from '../../api';
import {
  setInitialData,
  getTicketsAsync
} from '../../redux/reducers/ticketReducer';

const FilterButton = () => {
  const dispatch = useDispatch();

  const handleFilter = async (colorId) => {
    const ticketsData = await fetchAllTickets();
    const tickets = ticketsData.tickets.filter(item => item.category === colorId);
    let newColumns = JSON.parse(JSON.stringify(initialData.columns));
    for (let value of tickets) {
      newColumns[value.status].ticketIds.push(value.ticket_id)
    }
    const filterResult = {
      ...initialData,
      tickets,
      columns: newColumns
    }
    dispatch(setInitialData(filterResult));
  }

  return (
    <FilterWrapper className="filter__wrapper">
      <Button
        shape="circle"
        style={{ background: `pink`, color: `white` }}
        onClick={() => dispatch(getTicketsAsync())}
      >
        All
      </Button>
      {
        categoryColors.map((radio, index) => (
          <Button
            key={index}
            shape="circle"
            icon={<PushpinFilled />}
            style={{ background: `${radio.color}`, color: `white` }}
            category={radio.label}
            onClick={() => handleFilter(radio.label)}
          />
        )
        )
      }
    </FilterWrapper>
  )
};

export default FilterButton;
