import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle, Root } from './constants/globalStyle';
import { ScrollToTop } from './utils';
import 'antd/dist/antd.css';
import IntroPage from './pages/IntroPage/IntroPage';
import Board from './pages/Board/Board';
import Time from './pages/Time/Time';
import Map from './pages/Map/Map';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Root>
      <Router basename="/sowing">
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
