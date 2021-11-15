import styled from 'styled-components';
import { MEDIA_QUERY } from '../../constants/style';

export const TimeWrapper = styled.div`
  min-height: 800px;
  margin: 100px auto;

  ${MEDIA_QUERY.md} {
    display: flex;
  }
`;
