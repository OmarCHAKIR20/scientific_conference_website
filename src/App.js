import React , {useEffect} from "react";
import Navigation from "./components/navigation/navigationItems/navigationItems";
import Home from "./containers/home/home";
import Speakers from './containers/speakers/speakers'
import Auth from './containers/auth/auth'
import Userspace from './containers/userspace/userspace'
import Contact from './components/contact/contact'
import Logout from './components/logout/logout'
import { BrowserRouter as Router , Route , Switch } from "react-router-dom";
import {useSelector , useDispatch } from 'react-redux'
import * as action from './store/actions/index'
import "./App.scss";
import Committes from "./containers/committes/committes";

const App = () => {
 
  
  const dispatcher = useDispatch()
  useEffect(() => {

    const dispatchAction =()=>{
        return dispatcher(action.authCheckStatus())
    }
    dispatchAction()
  },[])

   const state = useSelector(state => state)
   let routes = (
     <Switch>
              <Route exact path="/Speakers" component={Speakers} />
                <Route exact path="/Committes" component={Committes} />
                <Route exact path="/Submit" component={Auth} />
                <Route exact path="/" component={Home}  />
     </Switch>
   )

   if (state.token != null) {
   routes= <Switch>
    <Route exact path="/Speakers" component={Speakers} />
      <Route exact path="/Committes" component={Committes} />
      <Route exact path="/Submit" component={Auth} />
      <Route path="/Contact" component={Contact} />
      <Route path="/logout" component={Logout} />
      <Route exact path="/userspace" component={Userspace} />
      <Route exact path="/" component={Home}  />
    </Switch>
   }

  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="container">
          <div className="wrapper">
            <div className="home">
             {routes}
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
