import React from 'react';
import f12 from '../img/f12.jpg';
import {Link, withRouter, Redirect } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import { signIn } from '../store/actions/authActions';
import { connect } from 'react-redux';


class SignIn extends React.Component{
        state = {
          email: '',
          passsword:'',
    }
    handleChange=(e) => {
     this.setState({
       [e.target.id]: e.target.value
     })
    }    
    handleSubmit=(e) => {
      e.preventDefault();
      this.props.signIn(this.state);
     }

    render(){
      console.log(this.props);
      const { authError, auth } = this.props;
      if(auth.uid) return <Redirect to={ROUTES.SECTION} />
        const style1 = {
            backgroundColor: 'hsla( 0.5,0.5,0.5,0.5	)',
            opacity: '1.0px',
            backgroundImage : `url(${f12})`,
            backgroundPosition: 'center',
            backgroundRepeat:'no-repeat',
            backgroundSize: 'cover',    
      }
       return(
        <div>
        <main id="content" className="login-page" role="main" style={style1}>
    
        <section className="container">
           <div className="login-box">
            <h1 className="sr-only" >Sign In</h1>

            <div className="login-block">
            <h2 className="heading -large" style={{color: 'white'}}>Sign In</h2>
            <div className="btn-pair">
            <br />    

        </div>
          </div>

            <div className="login-block">

          <form className="login-form" role="form" onSubmit={this.handleSubmit}>
            <input type="hidden" name="_tgken" value="BYBUyaaR5EZACIV1AiuESP)QaydNgYD5LR<FFJCI" />

           <div className="form__group">     
            <label htmlFor="email" className="sr-only">Email</label>
          <input id="email" type="text" placeholder="Email" required="" name="email" value={this.email} onChange={this.handleChange} />
         </div>

          <div className="form__group">
            
            <label htmlFor="password" className="sr-only">Password</label>     
            <div className="with-input-link">
            <input id="password" type="password" required="" placeholder="passsword" name="password" value={this.password} onChange={this.handleChange} />
            </div>
            </div>
            <div className="action__group">
            <button  type="submit" name="sign-in-button" aria-live="polite" className="btn submitting-btn -main">Sign In</button>
            </div>
            {authError ? <p><strong>{authError}</strong></p> : null }

            </form>

            </div>

        <footer className="login-block -footer">
        <p className="medium light">Not a member yet? <Link to={ROUTES.JOIN}>Join now -- it’s free!</Link></p>
        </footer>
    </div>
</section>
</main>
</div>
        )
    }
}
const mapStateToProps = (state) => {
  return{
    authError: state.auth.authError,
    auth : state.firebase.auth,
  }
  // in reducer state name is authError thats why there is .authError and in root reducer there is auth thats why 
  // there is .auth 
}

const mapDispatchToProps = (dispatch) => {
  return{
    signIn: (creds) => dispatch(signIn(creds)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignIn));
