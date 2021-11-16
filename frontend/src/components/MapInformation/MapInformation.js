import PropTypes from 'prop-types';
import { ReactComponent as LeafIcon } from '../../image/sowing-icon1.svg';
import {
  PlusCircleFilled,
  CloseCircleFilled
} from '@ant-design/icons';
import {
  InformationContainer,
  ListItem,
  TicketInfo,
  LocationInfo
} from './MapInformationStyle';
import Ticket from '../Ticket/Ticket';

const MapInformation = ({
  locationInfo,
  ticketsInfo,
  setTicketsInfo,
  handleShowInfo,
  setIsAddTicket
}) => {
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
          ticketsInfo.map((info, index) => (
            <Ticket
              key={index}
              ticket={info}
              setIsAddTicket={setIsAddTicket}
              $secondMode
            />
          ))
        }
      </TicketInfo>
    </InformationContainer>
  )
};

MapInformation.propTypes = {
  locationInfo: PropTypes.array,
  ticketsInfo: PropTypes.array,
  setTicketsInfo: PropTypes.func,
  handleShowInfo: PropTypes.func,
  setIsAddTicket: PropTypes.func
};

export default MapInformation;
