import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10px;
  
  & .ant-card {
    ${props => props.isDragging && `border: 2px dashed #C7BAA0`};
  }

  & .ant-card-extra {
    & span:first-child {
      margin-right: 20px;
    }

    & span + span {
      margin-left: 12px;
    }
  }
`;