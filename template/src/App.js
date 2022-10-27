/* eslint-disable no-lone-blocks */
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Page3 from "./pages/Settings"
import NavBar from './pages/components/Navbar';
import Footer from './pages/components/Footer';
import Inventory from './pages/Inventory';
import Settings from './pages/Settings';
import CheckIn from './pages/CheckIn';
import CheckOut from './pages/CheckOut';
import CreateProject from './pages/CreateProject';

{/*
  Create new Button function
  props - link, value
*/}
function CreateButton(props) {
  return <a href={props.link}><button type="button" class="btn btn-primary">{props.value}</button></a>;
}

{/*
  Main App Functionality
*/}
function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/inventory">
              <Inventory />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/checkin">
              <CheckIn />
            </Route>
            <Route path="/checkout">
              <CheckOut />
            </Route>
            <Route path="/createproject">
              <CreateProject />
            </Route>
          </Switch>
        </div>
      <Footer/>
      </div>
    </Router>
      
    
  );
}

export default App;


{/*
  START APP:
  1. cd template
  2. npm start
*/}



{/*
<NavBar/>
<h1>Hello World</h1>
<h1>Hello World</h1>
<CreateButton class="align-middle" value='Check In' link='/checkin' />
<CreateButton class="align-middle" value='Check Out' link='/checkout'/>
<Footer/>
*/}