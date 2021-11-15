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
import MapMark from '../../components/MapMark/MapMark';
import MapInformation from '../../components/MapInformation/MapInformation';
import error from '../../constants/error';

const Map = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    tickets,
    locationInfo,
    status,
    getTicketsError
  } = useMap();

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
    return () => {
      dispatch(setInitialData(initialData));
      dispatch(setInitialError(null));
    }
  }, [dispatch]);
  return (
    <>
      {status === 'loading' && <Loading />}
      <Header />
      <MapWrapper>
        <MapMark
          locationInfo={locationInfo}
        />
        <MapInformation
          locationInfo={locationInfo}
          tickets={tickets}
        />
      </MapWrapper>
    </>
  )
};

export default Map;
