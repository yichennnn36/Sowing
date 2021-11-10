import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { getMe } from '../../redux/reducers/userReducer';
import { PlusCircleFilled, PushpinFilled, CloseCircleFilled } from '@ant-design/icons';
import { ReactComponent as LeftIcon } from '../../image/sowing-icon1.svg';
import { ReactComponent as Sprout } from '../../image/sowing-icon4.svg';
import {
  MapWrapper,
  MapImage,
  MapBlock,
  GridMap,
  ListItem,
  TicketWrapper,
  Subject,
  TicketTitle,
  Info,
  Row,
  Square,
  Mark,
  Information,
  TicketInfo,
  LocationInfo
} from './MapStyle';
import { initialData, availableLocations, categoryColors, locationSum, timeFormator } from '../../utils';
import {
  getTicketsAsync,
  selectTicketsData,
  selectState,
  setInitialData,
  setInitialError
} from '../../redux/reducers/ticketReducer';
import Header from '../../components/Header/Header';
import Loading from '../../components/Loading/Loading';
import error from '../../constants/error';

const Map = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const boardData = useSelector(selectState);
  const { tickets } = useSelector(selectTicketsData);
  const { status, getTicketsError } = boardData;
  const [locationInfo, setLocationInfo] = useState(locationSum);
  const [ticketsInfo, setTicketsInfo] = useState([]);


  let grid = new Array(20);
  for (var i = 0; i < grid.length; i++) {
    grid[i] = new Array(20).fill(null);
  }
  availableLocations.map((data) => {
    const { location, coordinates } = data;
    return grid[coordinates[0]][coordinates[1]] = location;
  })

  const handleShowInfo = (location) => {
    const info = tickets.filter(item => item.location === location);
    setTicketsInfo(() => ([
      ...info
    ]));
  }

  useEffect(() => {
    dispatch(getMe());
    dispatch(getTicketsAsync());

    if (getTicketsError) {
      alert(error.FAIL_LOGIN[0]);
      history.push('./');
      return;
    }
  }, [dispatch, history, getTicketsError]);

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

  useEffect(() => {
    return () => {
      dispatch(setInitialData(initialData));
      dispatch(setInitialError(null));
      setLocationInfo(locationSum);
    }
  }, [dispatch]);
  return (
    <>
      {status === 'loading' && <Loading />}
      <Header />
      <MapWrapper>
        <MapBlock>
          <MapImage />
          <GridMap>
            {
              grid.map((row, y) => {
                return (
                  <Row key={y}>
                    {
                      row.map((col, y) => {
                        return (
                          <Square key={y}>
                            {
                              locationInfo.map((item, index) => {
                                const { location, sum } = item;

                                return (
                                  location === col && sum !== 0 &&
                                  <Mark key={index}>
                                    <Sprout />
                                  </Mark>
                                )
                              })
                            }
                          </Square>
                        )
                      })
                    }
                  </Row>
                )
              })
            }
          </GridMap>
        </MapBlock>
        <Information>
          <LocationInfo>
            {
              locationInfo.length > 0 &&
              locationInfo.map((info, index) => (
                <ListItem key={index}>
                  <PlusCircleFilled onClick={() => handleShowInfo(info.location)} />
                  <span>{info.location} </span>
                  <span className="info__sum">{info.sum} </span>
                  <span className="mark__icon">x <LeftIcon /></span>
                </ListItem>
              ))
            }
          </LocationInfo>
          <TicketInfo>
            <CloseCircleFilled onClick={() => setTicketsInfo([])} />
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
                    <Subject>
                      <TicketTitle>
                        <PushpinFilled style={{ color: `${color}` }} />
                        <span>{title}</span>
                      </TicketTitle>
                    </Subject>
                    <Info>
                      <span>{dateFormat}</span>
                    </Info>
                  </TicketWrapper>
                )
              })
            }
          </TicketInfo>
        </Information>
      </MapWrapper>
    </>
  )
};

export default Map;