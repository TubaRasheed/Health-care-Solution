import React from 'react'
import DoctorList from './doctorsList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class DocDashboard extends React.Component{
    render(){
       // console.log(this.props);
       const { doctors, auth } = this.props;
       if(!auth.uid) return <Redirect to='/signin' /> 
        return(
            <div className="Dashboard Container">
                <DoctorList doctors={ doctors } />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state);
    return{
        doctors: state.firestore.ordered.doctors,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'doctors' }
    ])
)(DocDashboard);