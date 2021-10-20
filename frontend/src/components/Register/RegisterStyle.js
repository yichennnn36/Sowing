import styled, { keyframes } from 'styled-components';
import { flipInX } from 'react-animations';
import { SiteDescription, DefaultButton } from '../../pages/LoginPage/LoginPageStyle';

export const FunctionBlock = styled(SiteDescription)`
  animation: 1.5s ${keyframes`${flipInX}`};
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyleButton = styled(DefaultButton)`
  background: ${({ theme }) => theme.colors.primary}};
  color: ${({ theme }) => theme.colors.white}};
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Alert = styled.div`
  color: ${({ theme }) => theme.colors.warning};
  position: absolute;
  bottom: 30%;
  font-size: 16px;
`;

export const Success = styled.div`
  color: ${({ theme }) => theme.colors.success};
  position: absolute;
  bottom: 30%;
  font-size: 16px;
`;