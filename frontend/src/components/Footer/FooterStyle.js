import styled from 'styled-components';

export const FooterWrapper = styled.div`
  background: white;
  height: 160px;
  display: flex;
  justify-content: space-around;
`;

export const FooterLogo = styled.div``;

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  & a {
    color: black;
    text-decoration: none;
  }

  & a + a {
    margin-top: 10px;
  }
`;