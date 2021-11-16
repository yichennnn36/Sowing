import styled, { keyframes } from 'styled-components';
import { MEDIA_QUERY, theme } from '../../constants/style';
import { bounceInDown } from 'react-animations';
import { ReactComponent as Map } from '../../image/map.svg';

export const MapContainer = styled.div`
  position: relative;
`;

export const MapImage = styled(Map)`
  min-width: 320px;
  min-height: 320px;

  ${MEDIA_QUERY.lg} {
    width: 500px;
    height: 500px;
  }
`;

export const GridMap = styled.div`
  display: inline-block;
  position: absolute;
  top: -18px;
  left: 10px;
  animation: 1.5s ${keyframes`${bounceInDown}`};

  ${MEDIA_QUERY.lg} {
    top: -28px;
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
    width: 25px;
    height: 25px;
  }
`;

export const SproutIcon = styled.div`
  position: relative;
  &:hover {
    cursor: pointer;

    &::before {
      position: absolute;
      z-index: 2;
      content: ${props => props.location ? `'${props.location}'` : ``};
      text-align: center;
      width: 50px;
      border-radius: 10px;
      top: 20px;
      left: 14px;
      color: ${theme.COLOR.white};
      background: ${theme.COLOR.primary};
    }
  }
`;