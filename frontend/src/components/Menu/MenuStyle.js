import styled from 'styled-components';
import { DefaultButton } from '../../constants/globalStyle';
import { MEDIA_QUERY, theme } from '../../constants/style';

export const MenuWrapper = styled.div`
  position: relative;
  background: ${theme.COLOR.light};

  ${MEDIA_QUERY.md} {
    display: none;
  }
`;

export const MenuButton = styled.div`
  position: absolute;
  top: -15px;
  right: 10px;
  cursor: pointer;

  & svg {
    color: ${theme.COLOR.tertiary};
    font-size: ${theme.FONT_SIZE.fs2};
  }
`;

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: calc(100vh);
  position: absolute;
  z-index: 1;
  top: 40px;
  right: ${props => props.isMenuOpen ? `-15px` : `-315px`};
  background: ${theme.COLOR.light};
  padding: 30px;
  font-family: ${theme.FONT.content};
  font-size: ${theme.FONT_SIZE.fs6};
  transition: 0.5s;

  & a {
    color: ${theme.COLOR.tertiary};
    margin-top: 36px;
    padding-left: 20px;
    border-left: 3px solid transparent;
    transition: border 0.3s;

    &:hover {
      border-color: ${theme.COLOR.primary}
    }
  }
`;

export const MemberInfo = styled.div`
  text-align: center;
  
  & .ant-avatar {
    background: ${theme.COLOR.primary}};
  }
  & span {
    margin-left: 10px;
  }
`;

export const StyleButton = styled(DefaultButton)`
  margin-top: 50px;
  transition: transform 0.3s;

  &:hover, &:focus {
    color: ${theme.COLOR.primary};
  }
  &:hover {
    transform: scale(1.1);
  }
`;
