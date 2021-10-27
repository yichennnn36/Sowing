import styled from 'styled-components';
import { Layout } from 'antd';
import { theme } from '../../constants/style';

const SectionWrapper = styled(Layout.Content)`
  background: ${theme.COLOR.white}};
  padding: 50px 18px;
  display: flex;
  justify-content: center;
`;

export default SectionWrapper;