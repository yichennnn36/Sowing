import styled, { keyframes } from 'styled-components';
import { flipInX } from 'react-animations';
import { SiteDescription, DefaultButton } from '../../pages/LoginPage/LoginPageStyle';

const FunctionBlock = styled(SiteDescription)`
  animation: 1.5s ${keyframes`${flipInX}`};
`;

const InputWrapper = styled.div`
  & .ant-input-affix-wrapper {
    &:hover {
      border-color: ${({ theme }) => theme.colors.primary}};
    }
  }

  & > span {
    margin-top: 20px;
    border-radius: 6px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyleButton = styled(DefaultButton)`
  background: ${({ theme }) => theme.colors.primary}};
  color: ${({ theme }) => theme.colors.white}};
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

export { FunctionBlock, InputWrapper, ButtonWrapper, StyleButton };