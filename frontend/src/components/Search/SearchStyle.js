import styled from 'styled-components';
import { theme, MEDIA_QUERY } from '../../constants/style';

export const SearchWrapper = styled.div`
  padding: 50px 40px;
  margin: 0 auto;
  
  ${MEDIA_QUERY.md} {
    min-width: 400px;
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

export const TicketWrapper = styled.div`
  margin: 16px 0;
  padding: 10px 20px;
  border: 2px dashed ${theme.COLOR.secondary};
  border-radius: 6px;
  border-top-right-radius: 30px;
`;

export const Subject = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${theme.COLOR.secondary};
`;

export const TicketTitle = styled.div`
  display: flex;
  font-size: ${theme.FONT_SIZE.fs6};
  padding-bottom: 6px;

  & span {
    font-weight: 500;
  }
  & svg {
    margin-right: 10px;
  }
`;

export const Info = styled.div`
  position: relative;
  margin-top: 6px;

  & span {
    color: ${theme.COLOR.tertiary};
    font-size: ${theme.FONT_SIZE.fs7};
  }
  & span:first-child {
    font-style: italic;
  }
  & span:nth-child(2) {
    position: absolute;
    right: 0;
    top: 2px;
  }
  & p {
    margin: 10px 0 0;
    word-break: break-word;
  }
`;
