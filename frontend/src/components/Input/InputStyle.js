import styled from 'styled-components';

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
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 10px;
    padding: 6px 10px 6px 36px;
    width: 100%;

    &:hover {
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Alert = styled.div`
  color: ${({ theme }) => theme.colors.warning};
  position: absolute;
  top: 100%;
  left: 2%;
`;