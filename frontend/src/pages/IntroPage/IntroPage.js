import React, { useState } from 'react';
import { RightCircleOutlined } from '@ant-design/icons';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import {
  IntroPageWrapper,
  Main,
  Section,
  SiteTitle,
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
        <SiteTitle>Sowing</SiteTitle>
        <SiteImage />
        {!isRegister && !isLogin && (
          <SiteDescription>
            <h1>
              Make it Easier to
              <br />
              Record your Trip and
              <br />
              Outdoor life
            </h1>
            <p>
              This website provides a bulletin board that allows you to easily make travel cards and categorize them. In addition, there is also a clear timeline list and categorized map, allowing you to quickly find places you have visited and plan your future itinerary.
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
        {isRegister &&
          <Register
            setIsRegister={setIsRegister}
            setIsLogin={setIsLogin}
          />
        }
        {isLogin &&
          <Login
            setIsLogin={setIsLogin}
          />
        }
      </Main>
      <Section></Section>
    </IntroPageWrapper>
  )
}

export default IntroPage;