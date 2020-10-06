import React from 'react';
import 'react-awesome-slider/dist/styles.css';
import { Link } from 'react-router-dom';
import DoctorSummary from './doctorsSummary';
import f34 from '../../img/f34.jpg';

const DoctorsList = ({doctors}) => {
    const style1 = {
        backgroundColor: 'hsla( 0,0,0,0.5	)',
        opacity: '1.0px',
        backgroundImage : `url(${f34})`,
        backgroundPosition: 'center',
        backgroundRepeat:'no-repeat',
        backgroundSize: 'cover',    
  }
        return(
            <div className="doctor list section">
            <main id="content" className="login-page" role="main" style={style1}>
            <center>
            <p>DOCTOR?? Create your profile <Link to='/doctorForm'>Add Details</Link> </p>
              { doctors && doctors.map( doctor => {
                  return(
                      <Link to={'/docdashboard/' + doctor.id } key={ doctor.id }>
                      <DoctorSummary doctor={ doctor } />
                      </Link>
                  )
              })}
             </center>
             </main>
            </div>
        )
}



export default DoctorsList;