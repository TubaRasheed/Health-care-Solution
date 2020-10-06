import React from 'react';
import f12 from './../img/f12.jpg';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as ROUTES from '../constants/routes';
import { signUp } from '../store/actions/authActions';

class Join extends React.Component{   
    state = {
        email: '',
        password:'',
        firstName: '',
        lastName: '',
  }
  handleChange=(e) => {
   this.setState({
     [e.target.id]: e.target.value

   })
  }    
  handleSubmit=(e) => {
    e.preventDefault();
    this.props.signUp(this.state);
   } 
    render(){
        const style1 = {
            backgroundImage : `url(${f12})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',    
        }
        
      const { auth, authError } = this.props;
      if(auth.uid) return <Redirect to={ROUTES.SECTION} />
  
        return(
            <div>
                <main id="content" className="login-page" role="main" style={style1}>
    
                <section className="container" >
                <div className="login-box">
                <h1 className="sr-only">Join</h1>

                <div className="login-block">
                <h1 className="heading -large" style={{color: "white"}}>Join</h1>
                <div className="btn-pair">
                <br />       
                </div>
                </div>

                <div className="login-block">
        <form className="login-form" id="registration-form" role="form" onSubmit= {this.handleSubmit}>
        
                <input type="hidden" name="_token" value="BYBUyaaR4EZACIV1AiuESP9QaydNgYDuMR4FFJCI" />
                <div id="vue-registration-form" className="registration"><div className="form__main">
                  <div>
                <div className="form__group is_text">
                <label htmlFor="email" className="sr-only">Email</label> 
                <input id="email" type="email" placeholder="E-Mail Address" required="required" data-vv-as="Email" data-vv-validate-on="blur" 
                data-vv-scope="__global__" aria-required="true" aria-invalid="false" onChange={this.handleChange} /> 
                <div id="mailcheckMessage" className="mailcheck-status">
                Did you mean <span>false</span>?
                </div></div>
                <div className="form__group is_text"><label htmlFor="password" className="sr-only">Password</label> 
                <input id="password" type="password" placeholder="Password" required="required" data-vv-as="Password" 
                data-vv-scope="__global__" aria-required="true" aria-invalid="false" onChange={this.handleChange} /> </div>
                </div>
                <div className="form__group is_text">
                <label htmlFor="firstName" className="sr-only">First Name</label> 
                <input id="firstName"  type="text" placeholder="First Name" required="required" data-vv-as="First Name"
                data-vv-scope="__global__" aria-required="true" aria-invalid="false" onChange={this.handleChange}  />
                </div> 
                <div className="form__group is_text">
                <label htmlFor="lastName" className="sr-only">Last Name</label> 
                <input id="lastName" type="text" placeholder="Last Name" required="required" data-vv-as="Last Name"  className="" 
                data-vv-scope="__global__" aria-required="true" aria-invalid="false" onChange={this.handleChange}  />
                </div></div>
                <aside className="form__sidebar"><h3>Key Benefits:</h3> 
                <ul className="check-list"><li><span className="iconfont-check-small"></span>Customizable fitness calendar</li> 
                <li><span className="iconfont-check-small"></span>Daily progress tracking</li> <li><span className="iconfont-check-small">
                </span>Favorite workout videos</li>
                <li><span className="iconfont-check-small"></span>24/7 community support</li> 
                <li><span className="iconfont-check-small"></span>Helpful health, nutrition and fitness information</li> 
                <li><span className="iconfont-check-small"></span>and much, much more…</li></ul></aside> 
                <div id="recaptcha-div" className="form__group -has-label recap-div"><div data-callback="onReCaptchaSuccess" 
                id="buzzNoCaptchaId_a31f7deb2c011881c8651b05234f6bb3" data-sitekey="6LcKFQ8UAAAAAGMbPOo5v6IqNqGUjyLj8F9NQWeg" className="g-recaptcha ">
                <div style={{width: "304px", height: "78px"}}><div><iframe 
                src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LcKFQ8UAAAAAGMbPOo5v6IqNqGUjyLj8F9NQWeg&amp;co=aHR0cHM6Ly93d3cuZml0bmVzc2JsZW5kZXIuY29tOjQ0Mw..&amp;hl=en&amp;v=v1560753160450&amp;size=normal&amp;cb=tonom6u4wtrd" 
                width="304" height="78" role="presentation" name="a-wzttz0iflufw" frameBorder="0" 
                scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox">
                </iframe></div>
                <textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" 
                style={{width: '250px'}, {height: '40px'}, {border: '1px solid rgb(193, 193, 193)'} ,{margin: '10px 25px'}, 
                {padding: '0px'}, {resize: 'none'}, {display: 'none'}}></textarea></div></div> 
                <span id="recaptcha-error" 
                className="message">Please check box</span></div> <div className="form__actions">
                <button type="submit" aria-live="polite" className="btn submitting-btn -main"><span>Join</span> 
                  <span className="iconfont-loader"></span></button></div></div>
                { authError ? <p><strong>{ authError }</strong></p>: null }

      </form>
   
   <footer className="login-block -Footer">
   <p className="medium light">Already a member? <Link to='signin'>Sign In</Link></p>
    </footer>

    
</div>
</div>
</section>
</main>
</div>
)
}
}
const mapStateToProps = (state) => {
  return{
    auth : state.firebase.auth,
    authError: state.auth.authError,
  } 
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Join));
