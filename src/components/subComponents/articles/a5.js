import React from 'react';
import f20 from '../../../img/f20.jpg';
import CommentList5 from '../../comments/comment5/commentList5'
import CreateComment5 from '../../comments/comment5/createComment5'
import { connect } from 'react-redux';
import * as ROUTES from '../../../constants/routes';
import { Link } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const Article5 = props => {
        const { auth, comments5 } = props;
        const page = auth.uid ? <div><Article /><CreateComment5 /><CommentList5 comments5={comments5} /></div> : 
        <div><Article /><h2><div className="menu-id">
        <span className="menu-login-name"><Link to={ROUTES.SIGNIN}>Sign In</Link> To share your Views...</span>
        </div></h2><br /></div>
        return(
              <div>
                    { auth.isLoaded && page }
              </div>
        )
    }

class Article extends React.Component{
    render(){
            return(
        <div>
    
    <section>
       <h1 style={{fontSize: '40px'}}>The Best Workouts for Stress Relief</h1>
          <div className="masthead image-masthead about no-blurb" style={{backgroundImage: `url(${f20})`}}></div>

             <h1 style={{color: `royalblue`}}>Kickboxing</h1>
                    <p>This workout burns calories like crazy and helps maintain a high metabolism. Kickboxing is a blend of martial arts and boxing, and can be practiced for general fitness, self-defense, or sport. It reduces stress by teaching proper breathing techniques, building confidence, and giving you an instant energy boost. Smack down your stress with this kickboxing cardio workout.

                            Dan</p>
                    <h1 style={{color: `royalblue`}}>Dancing</h1>
                    <p>Dancing is as fun as it is stress-relieving. Dancing provides an outlet for self-expression and creativity. It helps build confidence, and the ability to express yourself in a safe environment is great for a healthy mindset. Not to mention, dancing has amazing fitness benefits as well. Getting groovy can assist in weight loss, build muscle, improve heart health, and strengthen bones.
                         Dance your stress away with this samba-inspired Zumba workout.</p>
                    <h1 style={{color: `royalblue`}}>Outdoor Activity</h1>
                    <p>Being active outdoors just might be the cure to all things stressful. Plenty of research has shown the health benefits of spending more time outdoors. Admiring nature calms your brain and melts stress away. Taking a bike ride, going for a run, or even taking a walk in a park will improve your mood and clear your mind. Check out this quick video to learn even more benefits of exercising outdoors.

                            Remember that any type of physical activity that increases your heart rate is sure to reduce stress! Try out some of these exercises when you are craving an instant rush of tranquility and calmness.
                            
                            What’s your favorite stress-relieving exercise? 
                            
                            </p>
                    </section>


   </div>
    )
}
}
const mapStateToProps = (state) => {
    // console.log(state);
     return{
         comments5: state.firestore.ordered.comments5,
         auth: state.firebase.auth,
     }
 }


export default compose(
     connect(mapStateToProps),
     firestoreConnect([                       // when db changes this component hears that bcz we connect this comp
           { collection: 'comments5' }
     ])
)(Article5);