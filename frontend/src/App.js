import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle, Root } from './constants/globalStyle';
import 'antd/dist/antd.css';
import IntroPage from './pages/IntroPage/IntroPage';
import Board from './pages/Board/Board';
import Time from './pages/Time/Time';
import Map from './pages/Map/Map';
import Footer from './components/Footer/Footer';
import { ScrollToTop } from './utils';

const App = () => {
  return (
    <Root>
      <Router basename="/Sowing">
        <GlobalStyle />
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={IntroPage} />
          <Route path="/board" component={Board} />
          <Route path="/time" component={Time} />
          <Route path="/map" component={Map} />
        </Switch>
      </Router>
      <Footer />
    </Root>
  );
};

export default App;
