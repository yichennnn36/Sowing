import styled from 'styled-components';
import { MEDIA_QUERY } from '../../constants/style';

export const MapWrapper = styled.div`
  min-height: 680px;
  margin: 200px auto 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${MEDIA_QUERY.lg} {
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: center;
  }
`;
