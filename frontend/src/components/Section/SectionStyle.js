import styled from 'styled-components';
import { Layout } from 'antd';

const SectionWrapper = styled(Layout.Content)`
  background: ${({ theme }) => theme.colors.white}};
  padding: 50px 70px;
  display: flex;
`;

export default SectionWrapper;