import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import { Button, Radio } from 'antd';
import { DefaultButton } from '../../constants/globalStyle';
import { theme, MEDIA_QUERY } from '../../constants/style';

export const TicketEditorWrapper = styled.div`
  &::before {
    content: '';
    position: fixed;
    z-index: 2;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
  }
`;

export const Editor = styled.div`
  position: fixed;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: .5s ${keyframes`${fadeIn}`};
  width: 80%;
  min-height: 600px;
  padding: 50px 30px 40px;
  border: 2px solid ${theme.COLOR.secondary};
  border-radius: 6px;
  background: white;
  box-shadow: 6px 6px 4px 3px rgb(0 0 0 / 10%);

  ${MEDIA_QUERY.md} {
    max-width: 500px;
  }
`;

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const InputRadioBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  ${MEDIA_QUERY.md} {
    flex-direction: row;
    align-items: center;
  } 
`;

export const Label = styled.label`
  font-size: 16px;
`;

export const CategoryRadio = styled(Radio)`
  margin: 0 12px;

  & .ant-radio-inner {
    background: ${props => props.color};
    width: 22px;
    height: 22px;

    &::after {
      top: 4px;
      left: 4px;
      display: block;
      width: 12px;
      height: 12px;
      background-color: ${theme.COLOR.tertiary};
    }
  }
  & .ant-radio-checked::after {
    top: 0;
  }
  ${MEDIA_QUERY.md} {
    &:first-child {
      margin-left: 30px;
    }
  } 
`;

export const ButtonClose = styled(Button)`
  position: absolute;
  top: 16px;
  right: 16px;
  border: transparent;
  cursor: pointer;
`;

export const ButtonSaveBlock = styled.div`
  text-align: end;
  margin-top: 40px;
`;

export const StyleButton = styled(DefaultButton)`
  background: ${theme.COLOR.primary}};
  color: ${theme.COLOR.white}};
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Alert = styled.div`
  color: ${theme.COLOR.warning};
  position: absolute;
  bottom: 10%;
  font-size: 16px;
  font-weight: 500;
`;