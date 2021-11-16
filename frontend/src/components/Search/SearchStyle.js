import styled from 'styled-components';
import { theme, MEDIA_QUERY } from '../../constants/style';

export const SearchWrapper = styled.div`
  padding: 50px 40px;
  margin: 0 auto 50px;
  
  ${MEDIA_QUERY.md} {
    border-right: 1px solid ${theme.COLOR.card};
  }
`;

export const InputWrapper = styled.div`
  border: 2px solid ${theme.COLOR.secondary};
  border-radius: 20px;
  padding: 6px 12px;
  margin-bottom: 50px;

  & svg {
    color: ${theme.COLOR.tertiary};
  }
  & input {
    border: transparent;
    margin-left: 10px;

    &:focus-visible {
      outline: transparent;
    }
  }
`;

export const ResultWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 0 10px;
  max-height: 450px;
  overflow: auto;
  
  ${MEDIA_QUERY.md} {
    min-width: 400px;
    max-height: 800px;
  }
`;

export const CloseButton = styled.span`
  color: ${theme.COLOR.shadow};
  cursor: pointer;
`;