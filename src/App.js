import React from 'react';
import './Shoping.css';
import Header from './components/navbar/header';
import Section from './components/section';
import Footer from './components/footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Healthy from './components/subComponents/healthy';
import SignIn from './components/signin';
import DoctorsList from './components/doctors/doctorsList';
import DoctorDetails from './components/doctors/doctorDetails';
import DoctorForm from './components/doctors/docJoin';
import DocDashboard from './components/doctors/docDashboard';
import Workout from './components/subComponents/workout';
import About from './components/subComponents/about';
import Article1 from './components/subComponents/articles/a1';
import Article2 from './components/subComponents/articles/a2';
import Article3 from './components/subComponents/articles/a3';
import Article4 from './components/subComponents/articles/a4';
import Article5 from './components/subComponents/articles/a5';
import Article6 from './components/subComponents/articles/a6';
import Article7 from './components/subComponents/articles/a7';
import Article8 from './components/subComponents/articles/a8';
import Join from './components/join';
import * as ROUTES from './constants/routes.js';
import Search from './components/search';


class Fitness extends React.Component{
render(){
    return(
      <Router>
     <div className="App">
        <Header />
        <Switch>
         <Route exact path={ROUTES.SECTION} component={ Section } />
          <Route path={ROUTES.WORKOUT} component={ Workout } />
          <Route path={ROUTES.HEALTHY} component={ Healthy } />
         <Route path={ROUTES.ABOUT} component={ About } />
          <Route path={ROUTES.SIGNIN} component={ SignIn } />
          <Route path={ROUTES.JOIN} component={ Join } />
         <Route path={ROUTES.SEARCH} component={ Search } />
         <Route path="/a1" component={ Article1 } />
      <Route path="/a2" component={ Article2 } />
      <Route path="/a3" component={ Article3 } />
          <Route path="/a4" component={ Article4 } />
          <Route path="/a5" component={ Article5 } />
        <Route path="/a6" component={ Article6 } />
          <Route path="/a7" component={ Article7 } />
          <Route path="/a8" component={ Article8 } />
          <Route path='/docDashboard/:id' component={ DoctorDetails } />
          <Route exact path='/docDashboard' component= { DocDashboard } />
          <Route path='/doctorForm' component={ DoctorForm } />
        </Switch>
        <Footer />
      </div>
      </Router>
)
    }
}


export default (Fitness);
