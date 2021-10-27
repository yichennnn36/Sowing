import React, { useState } from "react";
import { Avatar } from 'antd';
import { Link } from "react-router-dom";
import { UserOutlined } from '@ant-design/icons';
import Menu from '../Menu/Menu';
import { HeaderWrapper, SiteTitle, Nav, HeaderLeft, HeaderRight, MemberInfo, StyleButton } from './HeaderStyle';
import { setAuthToken } from '../../utils';
import { useHistory } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const history = useHistory();

  const handleToggleMenu = () => {
    setIsMenuOpen(isMenuOpen ? false : true);
  };

  const handleLogout = () => {
    setAuthToken('');
    history.push("/");
  };

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <Nav $active as={Link} to="/tasks">All Tasks</Nav>
        <Nav as={Link} to="/timeLine">Time line</Nav>
      </HeaderLeft>
      <SiteTitle>Sowing</SiteTitle>
      <HeaderRight>
        <MemberInfo>
          <Avatar size="small" icon={<UserOutlined />} />
          <span>Yichen</span>
        </MemberInfo>
        <StyleButton onClick={handleLogout}>Log out</StyleButton>
      </HeaderRight>
      <Menu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        handleLogout={handleLogout}
        handleToggleMenu={handleToggleMenu}
      />
    </HeaderWrapper>
  )
};

export default Header;