import styled, { createGlobalStyle } from 'styled-components';
import { theme } from './style';

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  #root {
    height: 100%;
    width: 100%;
  }
  .content {
    padding-bottom: 160px;
  }
`;

export const Root = styled.div`
  min-height: 100%;
  margin-bottom: -160px;
`;

export const DefaultButton = styled.button`
  border: transparent;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 16px;

  &:hover, &:focus {
    cursor: pointer;
  }
  & span {
    margin-right: 4px;
  }
`;

export const DefaultAlert = styled.div`
  color: ${theme.COLOR.warning};
  font-size: 16px;
  font-weight: 500;
`;

export const DefaultSuccess = styled.div`
  color: ${theme.COLOR.success};
  font-size: 16px;
  font-weight: 500;
`;