/* eslint-disable no-lone-blocks */
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home"
import Page1 from "./pages/Page1"
import Page2 from "./pages/Page2"
import Page3 from "./pages/Page3"
import NavBar from './pages/components/Navbar';
import Footer from './pages/components/Footer';

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
            <Route path="/page1">
              <Page1 />
            </Route>
            <Route path="/page2">
              <Page2 />
            </Route>
            <Route path="/page3">
              <Page3 />
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