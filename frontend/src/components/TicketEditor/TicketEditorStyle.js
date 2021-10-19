import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import { Button, Radio } from 'antd';

const TicketEditorWrapper = styled.div`
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
  }
`;

const Editor = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: .5s ${keyframes`${fadeIn}`};
  width: 500px;
  height: 400px;
  padding: 50px 30px 40px;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 6px;
  background: white;
  box-shadow: 6px 6px 4px 3px rgb(0 0 0 / 10%);
`;

const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const InputRadioBlock = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
`;

const Label = styled.label`
  font-size: 16px;
`;

const ButtonDelete = styled(Button)`
  position: absolute;
  top: 16px;
  right: 16px;
  border: transparent;
  cursor: pointer;
`;

const ButtonSaveBlock = styled.div`
  text-align: end;
  margin-top: 40px;

  & button {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  
    &:focus, &:hover {
      color: ${({ theme }) => theme.colors.primary};
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const CategoryRadio = styled(Radio)`
  margin: 0 10px;

  &:first-child {
    margin-left: 30px;
  }

  & .ant-radio-inner {
    background: ${props => props.color};
    width: 24px;
    height: 24px;
  }
`;


export { TicketEditorWrapper, Editor, InputBlock, InputRadioBlock, Label, ButtonDelete, ButtonSaveBlock, CategoryRadio };