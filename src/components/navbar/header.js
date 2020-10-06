import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import NavigationAuth from '../navbar/navigationAuth';
import NavigationNonAuth from '../navbar/navigationNonAuth';

const Header = (props) => {
  const { auth, profile } = props;
  // console.log(auth);
  const links = auth.uid ? <NavigationAuth profile={profile} /> : <NavigationNonAuth /> 
  return(
  <div>
    { auth.isLoaded && links }
  </div>
  )
};


const mapStateToProps = ( state ) => {
  console.log(state);
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  }
}

export default connect(mapStateToProps)(withRouter(Header));



