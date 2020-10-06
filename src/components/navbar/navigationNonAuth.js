import React from 'react';
import {Link, NavLink, withRouter } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const NavigationNonAuth = (props) => {
  
      return(
        <div>
          <header className="fb-menu" id="header">
        <div className="container header-container">
          <h1 className=" brand">Fitness Club</h1>
          <nav className="menu-main">
            <ul>
                <li className="has-dropdown healthy-living ">
                    <Link className="anchor dropdown-button" to={ROUTES.SECTION} ><span >Home</span></Link>
                  </li>
              <li className="has-dropdown workouts ">
                <NavLink to={ROUTES.WORKOUT} className="anchor dropdown-button" ><span>Workouts &amp; Programs</span></NavLink>
                <ul className="sub-menu the-dropdown" id="workout-dropdown">
                  <li><a href="/videos"><span className="menu-icon"><i className="icon -workout-videos" aria-hidden="true"></i></span><span className="menu-label">Workout Videos</span></a></li>
                  <li><a href="/plans"><span className="menu-icon"><i className="icon -workout-programs" aria-hidden="true"></i></span><span className="menu-label">Workout Programs</span></a></li>
                  <li><a href="/meal-plans"><span className="menu-icon"><i className="icon -nutrition-programs" aria-hidden="true"></i></span><span className="menu-label">Meal Plans</span></a></li>
                </ul>
              </li>
              <li className="has-dropdown healthy-living ">
                <NavLink className="anchor dropdown-button" to={ROUTES.HEALTHY} ><span >Healthy Living</span></NavLink>
              </li>
              <li className="about">
               <NavLink to={ROUTES.ABOUT} className="anchor"><span>About</span></NavLink>
              </li>
            </ul>
          </nav>
         <div className="menu-controls">
           <div className="menu-login has-dropdown">
       <div className="menu-login-button logged-out dropdown-button" data-event="hover" aria-controls="user-dropdown">
              <div className="avatar-container">
         <span className="iconfont-profile-icon avatar-guest"></span>
         <span className="iconfont-carrot"></span>
         </div>
             <div className="menu-id">
               <span className="menu-login-name"><NavLink to={ROUTES.SIGNIN}>Sign In  </NavLink></span>
             </div>
             
          </div>
</div>
<NavLink  to={ROUTES.SEARCH}>
          <div className="menu-util">
          <div className="menu-search has-dropdown" data-focus="search">	
          <span className="dropdown-button" data-event="click"><span aria-hidden="true" className="iconfont-search"></span></span>
          <div className="search-dropdown the-dropdown">
          <div className="container -flush">
          <span className="sr-only">Search<span className="iconfont-search white" aria-hidden="true"></span></span>
         </div>
   </div>
  </div> 
  </div></NavLink>

</div> 
</div>
</header>
</div>
  )
}

export default withRouter(NavigationNonAuth);



