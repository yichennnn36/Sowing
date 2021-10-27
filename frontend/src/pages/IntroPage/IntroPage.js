import React, { useState } from 'react';
import { RightCircleOutlined } from '@ant-design/icons';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import SiteImg from '../../image/siteImage.png';
import 'antd/dist/antd.css';
import {
  IntroPageWrapper,
  Main,
  Section,
  SiteImage,
  SiteDescription,
  SiteButton,
  StyleButton
} from './IntroPageStyle';

const IntroPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <IntroPageWrapper>
      <Main>
        <SiteImage>
          <img src={SiteImg} alt="site-pic" />
        </SiteImage>
        {!isRegister && !isLogin && (
          <SiteDescription>
            <h1>Sowing</h1>
            <p>Record
              <br />
              your trip or outdoor life
              <br />
              with the Sowing！
            </p>
            <SiteButton>
              <StyleButton onClick={() => setIsRegister(true)}>
                <span>{<RightCircleOutlined />}</span>
                Register
              </StyleButton>
              <StyleButton onClick={() => setIsLogin(true)}>
                <span>{<RightCircleOutlined />}</span>
                Login
              </StyleButton>
            </SiteButton>
          </SiteDescription>
        )}
        {isRegister && <Register setIsRegister={setIsRegister} setIsLogin={setIsLogin} />}
        {isLogin && <Login setIsLogin={setIsLogin} />}
      </Main>
      <Section></Section>
    </IntroPageWrapper>
  )
}

export default IntroPage;