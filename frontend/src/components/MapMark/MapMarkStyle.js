import styled, { keyframes } from 'styled-components';
import { MEDIA_QUERY } from '../../constants/style';
import { bounceInDown } from 'react-animations';
import { ReactComponent as Map } from '../../image/map.svg';

export const MapContainer = styled.div`
  position: relative;
  margin: 0 10px;
`;

export const MapImage = styled(Map)`
  width: 320px;
  height: 320px;

  ${MEDIA_QUERY.lg} {
    width: 600px;
    height: 600px;
  }
`;

export const GridMap = styled.div`
  display: inline-block;
  position: absolute;
  top: -18px;
  left: 10px;
  animation: 1.5s ${keyframes`${bounceInDown}`};

  ${MEDIA_QUERY.lg} {
    top: -30px;
    left: 12px;
  }
`;

export const Row = styled.div`
  display: flex;
`;

export const Square = styled.div`
  width: 16px;
  height: 16px;

  ${MEDIA_QUERY.lg} {
    width: 30px;
    height: 30px;
  }
`;