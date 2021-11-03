import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle, Root } from './constants/globalStyle';
import 'antd/dist/antd.css';
import IntroPage from './pages/IntroPage/IntroPage';
import Board from './pages/Board/Board';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Root>
      <Router basename="/Sowing">
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={IntroPage} />
          <Route path="/homePage/:id" />
          <Route path="/board" component={Board} />
        </Switch>
      </Router>
      <Footer />
    </Root>
  );
};

export default App;
