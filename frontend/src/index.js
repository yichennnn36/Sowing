import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle, Root } from './indexStyle';
import LoginPage from './pages/LoginPage/LoginPage';
import Kanban from './pages/Kanban/Kanban';
import Footer from './components/Footer/Footer';

const theme = {
  colors: {
    primary: '#e57b2f',
    secondary: '#C7BAA0',
    tertiary: '#2d4a3d',
    warning: 'tomato',
    success: '#6cafff',
    light: '#fbfaf8',
    dark: '',
    white: 'white',
    black: 'black'
  }
}

const App = () => {
  return (
    <Root>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/HomePage/:id" />
          <Route path="/kanban" component={Kanban} />
        </Switch>
      </Router>
      <Footer />
    </Root>
  );
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
