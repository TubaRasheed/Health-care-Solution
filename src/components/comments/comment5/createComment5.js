import React from 'react';
import { connect } from 'react-redux';
import { createComment5 } from '../../../store/actions/commentActions';

class CreateComment5 extends React.Component {
    state= {
        content: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.createComment5(this.state);
    }
   render(){
       return(
           <div>
               <h2>Share Your views:</h2>
<form className="login-form" id="registration-form" role="form" onSubmit= {this.handleSubmit}>
        
<input type="hidden" name="_token" value="BYBUyaaR4EZACIV1AiuESP9QaydNgYDuMR4FFJCI" />
<div id="vue-registration-form" className="registration"><div className="form__main">
<div className="form__group is_text">
<label htmlFor="comment" className="sr-only">Comment </label> 
<input id="comment" type="text" placeholder="Enter Comment Here" required="required" data-vv-as="Content" 
data-vv-scope="__global__" aria-required="true" aria-invalid="false" onChange={this.handleChange}  /><br />
<span className="action__group">
<button  type="submit" name="sign-in-button" aria-live="polite" className="btn submitting-btn -main">Done</button>
</span>
</div></div></div>
</form>

           </div>
       )
   }
} 
const mapDispatchToProps = (dispatch) => {
    return{
        createComment5: (comment5) => dispatch(createComment5(comment5))
    }
}

export default connect(null, mapDispatchToProps)(CreateComment5);

