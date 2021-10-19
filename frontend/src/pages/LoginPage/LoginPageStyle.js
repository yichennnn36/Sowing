import styled from 'styled-components';

const LoginPageWrapper = styled.div`
  height: 800px;
  background: ${({ theme }) => theme.colors.secondary}};
  position: relative;
`;

const SiteLogo = styled.div`
  font-size: 60px;
  font-family: 'Fredoka One', cursive;
  color: ${({ theme }) => theme.colors.tertiary}};
  position: absolute;
  top: 20%;
  left: 13%;
`;

const SiteDescription = styled.div`
  position: absolute;
  top: 23%;
  right: 13%;
  height: 360px;
  width: 360px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-color: lightgrey;

  & h1 {
    font-size: 80px;
    font-family: 'Fredoka One', cursive;
    color: ${({ theme }) => theme.colors.primary}};
  }

  & > p {
    font-size: 20px;
    font-family: 'Baloo 2', 'sans-serif';
    font-weight: 600;
    margin-top: -50px;
    color: ${({ theme }) => theme.colors.tertiary}};
  }
`;

const SiteButton = styled.div`
  display: flex;
  justify-content: space-between;

  & button + button {
    margin-left: 18px;
  }
`;

const DefaultButton = styled.button`
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

const StyleButton = styled(DefaultButton)`
  transition: transform 0.3s;

  &:hover, &:focus {
    color: ${({ theme }) => theme.colors.primary}};
  }
  &:hover {
    transform: scale(1.1);
  }
`;

export {
  LoginPageWrapper,
  SiteLogo,
  SiteDescription,
  SiteButton,
  DefaultButton,
  StyleButton
};