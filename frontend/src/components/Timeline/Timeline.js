import { useSelector } from 'react-redux';
import { Timeline as TimelineBlock } from 'antd';
import { EnvironmentFilled, PushpinFilled } from '@ant-design/icons';
import { TimelineWrapper } from './TimelineStyle';
import { categoryColors, timeFormator } from '../../utils';
import { selectTicketsData } from '../../redux/reducers/ticketReducer';

const Timeline = () => {
  const { tickets } = useSelector(selectTicketsData);
  const sortedTickets = tickets.map(ticket => ({
    ...ticket,
    start_date: Date.parse(ticket.start_date).valueOf()
  }));
  sortedTickets.sort((a, b) => a.start_date - b.start_date);

  return (
    <TimelineWrapper>
      <TimelineBlock mode="left">
        {
          sortedTickets.map((ticket, index) => {
            let {
              title,
              location,
              category,
              start_date,
              end_date
            } = ticket;
            start_date = timeFormator(start_date);
            end_date = timeFormator(end_date);

            const color = categoryColors[category - 1].color;
            const dateFormat = start_date === end_date ?
              start_date : `${start_date} ～ ${end_date}`

            return (
              <TimelineBlock.Item
                key={index}
                dot={<PushpinFilled style={{ fontSize: '16px', color: `${color}` }} />}
                label={dateFormat}
              >
                {title} <EnvironmentFilled /> {location}
              </TimelineBlock.Item>
            )
          })
        }
      </TimelineBlock>
    </TimelineWrapper>
  )
};

export default Timeline;
