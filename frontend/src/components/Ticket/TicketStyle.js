import styled from 'styled-components';
import { theme } from '../../constants/style';

export const TicketWrapper = styled.div`
  margin-top: 10px;
  background: ${theme.COLOR.light};
  padding: 10px 20px;
  border-radius: 6px;

  &:hover {
    cursor: grab;
  }
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

export const FunctionBar = styled.div`
  & svg {
    margin-left: 14px;
    font-size: ${theme.FONT_SIZE.fs6};
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
