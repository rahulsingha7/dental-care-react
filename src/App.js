
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Header from './components/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home/Home';
import Services from './components/Home/Services/Services';
import Footer from './components/Shared/Footer/Footer';
import Blogs from './components/Blogs/Blogs';
import Dentist from './components/Dentists/Dentists'
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute'
import ViewDetails from './components/Login/PrivateRoute/ViewDetails/ViewDetails';
import ReadBlogs from './components/Login/PrivateRoute/ReadBlogs/ReadBlogs';
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
      <Route path="/dentists">
        <Dentist></Dentist>
      </Route>
      <Route path="/blogs">
        <Blogs></Blogs>
      </Route>
      <Route path="/login">
        <Login></Login>
      </Route>
      <PrivateRoute path="/viewDetails/:id">
        <ViewDetails></ViewDetails>
      </PrivateRoute>
      <PrivateRoute path="/readBlogs/:id">
        <ReadBlogs></ReadBlogs>
      </PrivateRoute>
      <Route path="*">
        <NotFound></NotFound>
      </Route>
    </Switch>
       <Footer></Footer>
    </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
