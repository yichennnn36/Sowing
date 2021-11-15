import styled from 'styled-components';
import { theme } from '../../constants/style';

export const InputBlock = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-bottom: 30px;
  position: relative;
  
  & > span {
    position: absolute;
    left: 3%;
  }

  & input {
    border: 1px solid ${theme.COLOR.white};
    border-radius: 10px;
    padding: 6px 10px 6px 36px;
    width: 100%;

    &:hover {
      border-color: ${theme.COLOR.primary};
    }
  }
`;

export const Alert = styled.div`
  color: ${theme.COLOR.warning};
  position: absolute;
  top: 100%;
  left: 2%;
`;
