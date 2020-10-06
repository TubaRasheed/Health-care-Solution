import React from 'react';

const DoctorSummary = ({doctor}) => {
    return(
        <div>
            <div className="card  doctor-summary">
               <div className="card-content grey-text text-darken-3">
                   <h3> Name: { doctor.authorFirstName } { doctor.authorLastName }</h3>
                   <p className="grey-text">Qualification: { doctor.qualification }</p>
               </div>
           </div>

        </div>
    )
}

export default DoctorSummary;