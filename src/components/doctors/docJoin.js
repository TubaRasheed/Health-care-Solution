import React from 'react';
import f17 from '../../img/f17.jpg';
import { createDoctor } from '../../store/actions/doctorActions';
import  { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';

class DoctorForm extends React.Component{
        state = {
          qualification: '',
          experience:'',
          cnic:'',
          age:'',
          workplace:'',
          designation:'',
          email:'',
          pmdc:'',
    }
    handleChange=(e) => {
     this.setState({
       [e.target.id]: e.target.value
     })
    }    
    handleSubmit=(e) => {
      e.preventDefault();
    //console.log(this.state);
    this.props.createDoctor(this.state);
    this.props.history.push('/docDashboard');

     }

    render(){
        const style1 = {
            backgroundColor: 'hsla( 0,0,0,0.5	)',
            opacity: '1.0px',
            backgroundImage : `url(${f17})`,
            backgroundPosition: 'center',
            backgroundRepeat:'no-repeat',
            backgroundSize: 'cover',    
      }
      const { auth, authError, docDetails } = this.props;
      if(!auth.uid) return <Redirect to='/signin' />
       return(
        <div>
        <main id="content" className="login-page" role="main" style={style1}>
    
        <section className="container">
           <div className="login-box">
            <h1 className="sr-only" >Sign In</h1>

            <div className="login-block">
            <h2 className="heading -large" style={{color: 'white'}}>Yoo DOCTOR!! Let's Join & Help Others </h2>
            <div className="btn-pair">
            <br />    

        </div>
          </div>

            <div className="login-block">

          <form className="login-form" role="form" onSubmit={this.handleSubmit}>
            <input type="hidden" name="_tgken" value="BYBUyaaR5EZACIV1AiuESP)QaydNgYD5LR<FFJCI" />

           <div className="form__group">     
            <label htmlFor="qualification" className="sr-only">qualification</label>
          <input id="qualification" type="text" placeholder="Qualification" required="" name="qualification" value={this.qualification} onChange={this.handleChange} />
         </div>

         <div className="form__group">     
            <label htmlFor="experience" className="sr-only">experience</label>
          <input id="experience" type="text" placeholder="Experience" required="" name="experience" value={this.experience} onChange={this.handleChange} />
         </div>

         <div className="form__group">     
            <label htmlFor="cnic" className="sr-only">cnic</label>
          <input id="cnic" type="text" placeholder="CNIC Number" required="" name="cnic" value={this.cnic} onChange={this.handleChange} />
         </div>

         <div className="form__group">     
            <label htmlFor="age" className="sr-only">age</label>
          <input id="age" type="text" placeholder="Age" required="" name="age" value={this.age} onChange={this.handleChange} />
         </div>

         <div className="form__group">     
            <label htmlFor="workplace" className="sr-only">workplace</label>
          <input id="workplace" type="text" placeholder="Where you are currently working?" required="" name="workplace" value={this.workplace} onChange={this.handleChange} />
         </div>

         <div className="form__group">     
            <label htmlFor="designation" className="sr-only">designation</label>
          <input id="designation" type="text" placeholder="Designation" required="" name="designation" value={this.designation} onChange={this.handleChange} />
         </div>

         <div className="form__group">     
            <label htmlFor="email" className="sr-only">Email</label>
          <input id="email" type="text" placeholder="Email" required="" name="email" value={this.email} onChange={this.handleChange} />
         </div>

          <div className="form__group">
            
            <label htmlFor="pmdc" className="sr-only">pmdc</label>     
            <div className="with-input-link">
            <input id="pmdc" type="text" required="" placeholder="PMDC Registration Number" name="pmdc" value={this.pmdc} onChange={this.handleChange} />
            </div>
            </div>
            <div className="action__group">
            <button  type="submit" name="sign-in-button" aria-live="polite" className="btn submitting-btn -main">Create</button>
            </div>
          
            { authError ? <p><strong>{ authError }</strong></p>: null }

            </form>

            </div>

    </div>
</section>
</main>
</div>
        )
    }
}

const mapStateToProps = (state) => {
  console.log(state);
  return{
    auth : state.firebase.auth,
    authError: state.auth.authError,
  } 
}

const mapDispatchToProps = (dispatch) => {
    return{
      createDoctor: (doctor) => dispatch(createDoctor(doctor))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DoctorForm);
