import React from 'react';
import f23 from '../../../img/f23.jpg'
import CommentList8 from '../../comments/comment8/commentList8'
import CreateComment8 from '../../comments/comment8/createComment8'
import { connect } from 'react-redux';
import * as ROUTES from '../../../constants/routes';
import { Link } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const Article8 = props => {
  const { auth, comments8 } = props;
  const page = auth.uid ? <div><Article /><CreateComment8 /><CommentList8 comments8={comments8} /></div> : 
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
                    <h1 style={{fontSize: '40px'}}>What causes salt cravings?</h1>
                   
        <div className="masthead image-masthead about no-blurb" style={{backgroundImage: `url(${f23})`}}></div>

                           <h1 style={{fontSize: '30px'}}> 1. Stress</h1>
                           <p> Salt on a table
                            Salt cravings may be the result of stress.
                            When stress levels rise, many people crave their favorite foods for comfort. Foods that people commonly crave are often high in fat, sugar, or salt — also known as sodium.
                            
                            The "comfort food" habit can decrease a person's overall health. An article in the Journal of Health Psychology found a significant association between levels of chronic stress, food cravings, and higher body mass index (BMI).
                            
                            Another study found a link between stress and higher levels of the hormone ghrelin, which increases hunger. The results of the study suggest that ghrelin may increase food cravings and lead to weight gain.
                            
                            2. Lack of sleep
                            People who do not get enough sleep may crave snacks with high "satisfaction levels" such as salty, crunchy foods.
                            
                            A study in the journal Sleep found that people who were sleep-deprived were less able to resist cravings for their favorite unhealthy foods. This resulted in weight gain.
                            
                            Because lack of sleep may also be linked to other health problems, people who are consistently having inadequate rest may wish to discuss this with their doctors.
                            
                            Sleep disorders, stress, and busy schedules are often to blame, but a health professional can offer a clear diagnosis and potential treatment plan.</p>
                            
                           <h1 style={{fontSize: '30px'}}>2. Boredom</h1>
                           <p> bored man eating on the sofa 
                            Eating salty food due to boredom is similar to stress eating.
                            Eating due to boredom is an emotional eating behavior, similar to stress eating.
                            
                            To determine whether a salt craving is due to boredom or hunger, it is helpful to look for the body's hunger cues.
                            
                            True hunger occurs when a person's body is in need of food. If a person has not eaten for several hours, they may have true hunger.
                            
                            Other signs of hunger include:
                            noisy stomach grumbling
                            wanting to eat almost any food, not a specific one
                            a desire to eat that gets stronger over time
                            These signs indicate that it may be time to eat a meal or snack. Salty, high-fat foods are rarely a nutritious choice, however.
                            
                            Instead, a person should look for something with crunch and flavor, such as raw fruits or vegetables.
                             These choices can keep the salt intake to a minimum while calming the desire for crunchy,
                              satisfying foods.</p>
                            
                            <h1 style={{fontSize: '30px'}}>4. Excessive sweating</h1>
                           <p> Sweat contains salt, so when a person sweats, their sodium levels decrease.
                            
                            For most people, light sweating is nothing to worry about. Sodium levels do not drop significantly with day to day sweating, and typically, only water is needed to replace fluids after a workout.
                            
                            Endurance athletes or those who work in very hot environments may need to consume more salt, however, to replace what is lost through excessive or prolonged sweating.
                            
                            When a person loses too much sodium, their body may begin to crave salt. One study found that people who work in hot conditions for 10 hours can lose up to 15 grams of salt, although this number may vary widely from person to person.
                            
                            Electrolyte-enhanced drinks or sports drinks may be recommended for people who exercise excessively or who spend long hours in a hot environment. These drinks contain sodium and other electrolytes to replace what is lost through sweat.
                    </p>

                    </section>
  </div>
   )
}
}
const mapStateToProps = (state) => {
  // console.log(state);
   return{
       comments8: state.firestore.ordered.comments8,
       auth: state.firebase.auth,
   }
}


export default compose(
   connect(mapStateToProps),
   firestoreConnect([                       // when db changes this component hears that bcz we connect this comp
         { collection: 'comments8' }
   ])
)(Article8);