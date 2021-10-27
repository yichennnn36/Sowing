import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle, Root } from './constants/globalStyle';
import IntroPage from './pages/IntroPage/IntroPage';
import Kanban from './pages/Kanban/Kanban';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Root>
      <Router basename="/Sowing">
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={IntroPage} />
          <Route path="/HomePage/:id" />
          <Route path="/kanban" component={Kanban} />
        </Switch>
      </Router>
      <Footer />
    </Root>
  );
};

export default App;
