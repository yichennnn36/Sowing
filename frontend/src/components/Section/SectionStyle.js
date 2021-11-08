import styled from 'styled-components';
import { Layout } from 'antd';
import { MEDIA_QUERY } from '../../constants/style';

const SectionWrapper = styled(Layout.Content)`
  padding: 50px;
  width: 100%;

  ${MEDIA_QUERY.lg} {
    display: flex;
    justify-content: center;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export default SectionWrapper;