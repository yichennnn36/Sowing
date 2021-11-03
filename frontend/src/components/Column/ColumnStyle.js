import styled from 'styled-components';
import { Card } from 'antd';
import { theme, MEDIA_QUERY } from '../../constants/style';

export const ColumnWrapper = styled(Card)`
  min-width: 360px;
  max-width: 480px;
  margin: 16px auto;
  border-radius: 6px;
  background: ${theme.COLOR.card};

  ${MEDIA_QUERY.md} {
    min-width: 380px;
    flex: 1;
    margin: 0 12px;
  }
  & button {
    &:focus,&:hover {
      color: ${theme.COLOR.primary};
      border-color: ${theme.COLOR.primary};
    }
  }
  & .ant-card-head-title {
    font-family: ${theme.FONT.content};
    font-size: ${theme.FONT_SIZE.fs4};
    color: ${theme.COLOR.tertiary};
    font-weight: 600;
  }
`;

export const TicketList = styled.div`
  flex-grow: 1;
  min-height: 500px;
`;

export const Area = styled.div`
  background: lightgrey;
  height: 50px;
`;