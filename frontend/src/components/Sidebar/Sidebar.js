import React from 'react';
import styled from 'styled-components';
import { Layout, Menu } from 'antd';

const SiderWrapper = styled(Layout.Sider)`
  background: white;
  border-right: 1px solid ${({ theme }) => theme.colors.light};

  & .ant-menu-item-selected {
    color: ${({ theme }) => theme.colors.primary};
  }

  & .ant-menu-title-content {
    &:hover, &:focus {
      color: ${({ theme }) => theme.colors.tertiary};
    }

    &::after {
      border-right: 3px solid ${({ theme }) => theme.colors.primary};
    }
  }
`;

const Sidebar = () => {
  return (
    <SiderWrapper>
      <Menu
        defaultSelectedKeys={['1']}
        mode="inline"
      >
        <Menu.Item key="1">
          All Tasks
        </Menu.Item>
        <Menu.Item key="2">
          TimeLine
        </Menu.Item>
      </Menu>
    </SiderWrapper>
  )
}

export default Sidebar;