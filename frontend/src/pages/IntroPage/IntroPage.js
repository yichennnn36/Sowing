import { useState } from 'react';
import { RightCircleOutlined } from '@ant-design/icons';
import {
  IntroPageWrapper,
  Main,
  Section,
  SiteTitle,
  SiteImage,
  SiteDescription,
  SiteButton,
  StyleButton,
  Introduction,
  Descrition,
  BoardIcon,
  TimelineIcon,
  MapIcon
} from './IntroPageStyle';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';

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
              This website provides a bulletin board that allows you to easily make travel tickets and categorize them. In addition, there is also a clear timeline list and map, allowing you to quickly find places you have visited before.
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
      <Section>
        <Introduction>
          <Descrition>
            <h2>Make your Persolnal Tickets</h2>
            <p>Sowing means To-do list / Watering means Doing list / Sprouting means Finish list</p>
          </Descrition>
          <BoardIcon />
        </Introduction>

        <Introduction className="display___flex">
          <Descrition className="clear__timeline">
            <h2>Clear Timeline</h2>
            <p>In addition to the sorted timeline, you can search for keywords to find the tickets you want！</p>
          </Descrition>
          <TimelineIcon />
        </Introduction>

        <Introduction className="display___flex marked__map-container">
          <Descrition className="marked__map">
            <h2>Marked Map</h2>
            <p>The places that have been visited will be marked with leaf icons, and the number of leaf icons in each area show how many times have been visited.</p>
          </Descrition>
          <MapIcon />
        </Introduction>
      </Section>
    </IntroPageWrapper>
  )
};

export default IntroPage;
