import styled from 'styled-components';
import { Layout } from 'antd';
import { theme, MEDIA_QUERY } from '../../constants/style';

const SectionWrapper = styled(Layout.Content)`
  background: ${theme.COLOR.white}};
  padding: 50px 24px;

  ${MEDIA_QUERY.md} {
    display: flex;
    justify-content: center;
  }
`;

export default SectionWrapper;