import styled from 'styled-components';
import { MEDIA_QUERY, theme } from '../../constants/style';

export const BoardWrapper = styled.div`
  position: relative;
  background: ${theme.COLOR.white}};
  padding: 10px 24px;

  ${MEDIA_QUERY.md} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;