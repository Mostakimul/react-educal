import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Home from './pages/Home';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/services">
          <Services></Services>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <Error></Error>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
