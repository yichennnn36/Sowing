import styled from 'styled-components';
import { MEDIA_QUERY } from '../../constants/style';

export const TimelineWrapper = styled.div`
  min-height: 600px;
  max-height: 800px;
  overflow-y: scroll;
  padding: 30px;

  &::-webkit-scrollbar {
    display: none;
  }
  ${MEDIA_QUERY.md} {
    width: 100%;
    margin-top: 50px;
  }
`;
