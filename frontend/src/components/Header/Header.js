import { useState } from "react";
import { Avatar } from 'antd';
import { Link } from "react-router-dom";
import { UserOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectUserData } from '../../redux/reducers/userReducer';
import {
  HeaderWrapper,
  SiteTitle,
  Nav,
  HeaderLeft,
  HeaderRight,
  MemberInfo,
  StyleButton
} from './HeaderStyle';
import Menu from '../Menu/Menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const history = useHistory();
  const userdata = useSelector(selectUserData);

  const handleToggleMenu = () => {
    setIsMenuOpen(isMenuOpen ? false : true);
  };

  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <Nav as={Link} to="/board">My Board</Nav>
        <Nav as={Link} to="/time">My Time</Nav>
        <Nav as={Link} to="/map">My Map</Nav>
      </HeaderLeft>
      <SiteTitle>Sowing</SiteTitle>
      <HeaderRight>
        <MemberInfo>
          <Avatar size="small" icon={<UserOutlined />} />
          <span>{userdata.user}</span>
        </MemberInfo>
        <StyleButton onClick={handleLogout}>Log out</StyleButton>
      </HeaderRight>
      <Menu
        isMenuOpen={isMenuOpen}
        handleLogout={handleLogout}
        handleToggleMenu={handleToggleMenu}
      />
    </HeaderWrapper>
  )
};

export default Header;
