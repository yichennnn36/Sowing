import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { getMe } from '../../redux/reducers/userReducer';
import { MapWrapper } from './MapStyle';
import { initialData } from '../../utils';
import {
  getTicketsAsync,
  setInitialData,
  setInitialError
} from '../../redux/reducers/ticketReducer';
import useMap from '../../hooks/useMap';
import Header from '../../components/Header/Header';
import Loading from '../../components/Loading/Loading';
import TicketEditor from '../../components/TicketEditor/TicketEditor';
import MapMark from '../../components/MapMark/MapMark';
import MapInformation from '../../components/MapInformation/MapInformation';
import error from '../../constants/error';

const Map = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    locationInfo,
    status,
    getTicketsError,
    deleteError,
    editError,
    handleShowInfo,
    ticketsInfo,
    setTicketsInfo,
    isAddTicket,
    setIsAddTicket
  } = useMap();

  useEffect(() => {
    dispatch(getMe());
    dispatch(getTicketsAsync());
    setTicketsInfo([]);

    if (getTicketsError) {
      alert(error.FAIL_LOGIN[0]);
      history.push('./');
      return;
    }
    if (deleteError) {
      alert(error.FAIL_DELETE[0]);
      return;
    }
    if (editError) {
      alert(error.FAIL_EDIT[0]);
      return;
    }
  }, [dispatch, history, getTicketsError, deleteError, editError, setTicketsInfo]);

  useEffect(() => {
    return () => {
      dispatch(setInitialData(initialData));
      dispatch(setInitialError(null));
    }
  }, [dispatch]);

  return (
    <>
      {status === 'loading' && <Loading />}
      {status === 'error' && <Loading $error />}
      <Header />
      <MapWrapper>
        <MapMark
          locationInfo={locationInfo}
          handleShowInfo={handleShowInfo}
        />
        <MapInformation
          locationInfo={locationInfo}
          ticketsInfo={ticketsInfo}
          setTicketsInfo={setTicketsInfo}
          handleShowInfo={handleShowInfo}
          setIsAddTicket={setIsAddTicket}
        />
      </MapWrapper>
      {isAddTicket.open &&
        <TicketEditor
          isAddTicket={isAddTicket}
          setIsAddTicket={setIsAddTicket}
          ticketStatus=''
        />
      }
    </>
  )
};

export default Map;
