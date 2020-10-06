import  React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import f25 from '../../img/f25.jpg';
import { Redirect } from 'react-router-dom';

const DoctorDetails = (props) => {
    // console.log(props);
    //const id = props.match.params.id;
    const style1 = {
        backgroundColor: 'hsla( 0,0,0,0.5	)',
        opacity: '1.0px',
        backgroundImage : `url(${f25})`,
        backgroundPosition: 'center',
        backgroundRepeat:'no-repeat',
        backgroundSize: 'cover',    
  }
  const { doctor, auth } = props;
  if(!auth.uid) return <Redirect to='/signin' /> 
    if(doctor){
        return(
        <div>
        <main id="content" className="login-page" role="main" style={style1}>
        <div className="card z-depth-0 doctor-details">
        <div className="card z-depth-0">
            <div className="card-content">
            <div className="card-content grey-text text-darken-3">
                <h2 className="card-title "> Name: Dr { doctor.authorFirstName } { doctor.authorLastName }</h2>
                <p className="dr-info">Qualification: { doctor.qualification}</p>
                <p className="dr-info">Experience: { doctor.experience } years</p>
                <p className="dr-info">CNIC Number: { doctor.cnic }</p>
                <p className="dr-info">Age: { doctor.age } years old</p>
                <p className="dr-info">Workplace: { doctor.workplace }</p>
                <p className="dr-info">Designation: { doctor.designation }</p>
                <p className="dr-info">PMDC Registration Number: { doctor.pmdc }</p>
                <p className="dr-info">Email:<a href={'mailto:' +  doctor.email } > { doctor.email }</a></p>
           </div>
           </div>
          </div>
        </div>
        </main>
     </div>
     )
    }else{
        return(
            <div className="container center">
               <p> loading Doctor's Profile.... </p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
   // console.log(state);
    const id = ownProps.match.params.id;
    const doctors = state.firestore.data.doctors;
    const doctor = doctors ? doctors[id]: null
    return{
      doctor: doctor,
      auth: state.firebase.auth,  
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'doctors' }
    ])
)(DoctorDetails);