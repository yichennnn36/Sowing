import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Avatar } from 'antd';
import { UserOutlined, MenuOutlined } from '@ant-design/icons';
import { MenuButton, MenuWrapper, MenuList, MemberInfo, StyleButton } from './MenuStyle';
import { selectUserData } from '../../redux/reducers/userReducer';

const Menu = ({ isMenuOpen, handleLogout, handleToggleMenu }) => {
  const userdata = useSelector(selectUserData);

  return (
    <MenuWrapper>
      <MenuButton onClick={handleToggleMenu}>
        <MenuOutlined />
      </MenuButton>
      <MenuList isMenuOpen={isMenuOpen}>
        <MemberInfo>
          <Avatar size="small" icon={<UserOutlined />} />
          <span>{userdata.user}</span>
        </MemberInfo>
        <Link to="/board">My Board</Link>
        <Link to="/time">My Time</Link>
        <Link to="/map">My Map</Link>
        <StyleButton onClick={handleLogout}>
          Log out
        </StyleButton>
      </MenuList>
    </MenuWrapper>
  )
}

export default Menu;