
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Header from './components/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home/Home';
import Services from './components/Home/Services/Services';

function App() {
  return (
    <div className="App">
    <AuthProvider>
    <BrowserRouter>
    <Header></Header>
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/services">
        <Services></Services>
      </Route>
      <Route path="*">
        <NotFound></NotFound>
      </Route>
    </Switch>
    </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
