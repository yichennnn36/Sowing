import styled from 'styled-components';
import { Layout, Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const HeaderWrapper = styled(Layout.Header)`
  background: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const MemberInfo = styled.div`
  margin-right: 40px;

  & span {
    margin-left: 10px;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <MemberInfo>
        <Avatar size="small" icon={<UserOutlined />} />
        <span>Yichen</span>
      </MemberInfo>
      <Button>Log out</Button>
    </HeaderWrapper>
  )
};

export default Header;