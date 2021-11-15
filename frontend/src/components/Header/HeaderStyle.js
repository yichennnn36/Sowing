import styled from 'styled-components';
import { DefaultButton } from '../../constants/globalStyle';
import { MEDIA_QUERY, theme } from '../../constants/style';

export const HeaderWrapper = styled.div`
  height: 80px;
  width: 100%;
  padding: 0 14px;
  background: ${theme.COLOR.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 2;
  top: 0;
`;

export const SiteTitle = styled.div`
  font-family: ${theme.FONT.title};
  font-size: ${theme.FONT_SIZE.fs1};
  color: ${theme.COLOR.primary}};

  ${MEDIA_QUERY.md} {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  }
`;

export const HeaderLeft = styled.div`
  display: none;
  font-family: ${theme.FONT.content};
  font-size: ${theme.FONT_SIZE.fs6};

  ${MEDIA_QUERY.md} {
    display: flex;
    margin-left: 10px;
  }
`;

export const Nav = styled.div`
  color: ${theme.COLOR.white};
  background: transparent;
  padding: 27px 20px;
  font-weight: 500;

  &:hover {
    color: ${theme.COLOR.primary};
    background: ${theme.COLOR.light};
  }
`;

export const HeaderRight = styled.div`
  display: none;
  font-family: ${theme.FONT.content};
  font-size: ${theme.FONT_SIZE.fs6};

  ${MEDIA_QUERY.md} {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const MemberInfo = styled.div`
  margin-right: 40px;
  
  & .ant-avatar {
    background: ${theme.COLOR.primary};
  }
  & span {
    margin-left: 10px;
  }
`;

export const StyleButton = styled(DefaultButton)`
  line-height: 1.8;
  transition: transform 0.3s;
  font-size: ${theme.FONT_SIZE.fs6};

  &:hover, &:focus {
    color: ${theme.COLOR.primary};
  }
  &:hover {
    transform: scale(1.1);
  }
`;
