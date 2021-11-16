import styled from 'styled-components';
import { MEDIA_QUERY } from '../../constants/style';

export const BoardWrapper = styled.div`
  min-height: 800px;
  margin: 100px auto;

  ${MEDIA_QUERY.md} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const FunctionBlock = styled.div`
  ${MEDIA_QUERY.md} {
    .search__wrapper {
      border-right: none;
    }
  }
  ${MEDIA_QUERY.lg} {
    
    width: 100%;

    .filter__wrapper {
      padding: 0 40px;
    }
    .search__wrapper {
      position: relative;
      margin: 0;
      padding-bottom: 0;
    }
    .input__wrapper {
      width: 260px;
    }
    .result__wrapper {
      display: flex;
      max-width: 800px;
      padding: 10px 0;
      position: absolute;
      top: 15px;
      left: 500px;
    }
  }
`;
