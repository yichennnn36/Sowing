import styled from 'styled-components';

export const TagWrapper = styled.div`
  text-align: center;
  margin-top: 120px;

  & button {
    transform: scale(1.2);
    margin: 0 20px;
    border: transparent;

    &:hover {
      transform: scale(1.4);
    }
  }
`;