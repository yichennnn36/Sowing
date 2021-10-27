import styled from 'styled-components';
import { theme } from '../../constants/style';
import { RedoOutlined } from '@ant-design/icons';

export const LoadingWrapper = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${theme.COLOR.shadow};
`;

export const LoadingIcon = styled(RedoOutlined)`
  font-size: ${theme.FONT_SIZE.fs1};
  position: absolute;
  z-index: 4;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: loading-360 1.5s infinite linear;

  @keyframes loading-360 {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
`;