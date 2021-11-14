import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { categoryColors, timeFormator } from '../../utils';
import { ReactComponent as LeafIcon } from '../../image/sowing-icon1.svg';
import {
  PlusCircleFilled,
  PushpinFilled,
  CloseCircleFilled
} from '@ant-design/icons';
import {
  InformationContainer,
  ListItem,
  TicketWrapper,
  TicketTitle,
  Date,
  TicketInfo,
  LocationInfo
} from './MapInformationStyle';

const MapInformation = ({ locationInfo, tickets }) => {
  const [ticketsInfo, setTicketsInfo] = useState([]);

  const handleShowInfo = (location) => {
    const info = tickets.filter(item => item.location === location);
    setTicketsInfo(() => ([
      ...info
    ]));
  }

  return (
    <InformationContainer>
      <LocationInfo>
        {
          locationInfo.length > 0 &&
          locationInfo.map((info, index) => (
            <ListItem key={index}>
              <PlusCircleFilled
                onClick={() => handleShowInfo(info.location)}
              />
              <span>{info.location} </span>
              <span className="info__sum">{info.sum} </span>
              <span className="mark__icon">x <LeafIcon /></span>
            </ListItem>
          ))
        }
      </LocationInfo>
      <TicketInfo>
        <CloseCircleFilled
          onClick={() => setTicketsInfo([])}
        />
        {
          ticketsInfo.length > 0 &&
          ticketsInfo.map((info, index) => {
            let {
              title,
              category,
              start_date,
              end_date
            } = info;
            start_date = timeFormator(start_date);
            end_date = timeFormator(end_date);

            const color = categoryColors[category - 1].color;
            const dateFormat = start_date === end_date ?
              start_date : `${start_date} ～ ${end_date}`
            return (
              <TicketWrapper key={index}>
                <TicketTitle>
                  <PushpinFilled style={{ color: `${color}` }} />
                  <span>{title}</span>
                </TicketTitle>
                <Date>{dateFormat}</Date>
              </TicketWrapper>
            )
          })
        }
      </TicketInfo>
    </InformationContainer>
  )
};

MapInformation.propTypes = {
  locationInfo: PropTypes.array,
  tickets: PropTypes.array
}

export default MapInformation;