import React from 'react';	
import f8 from '../../../img/f8.jpg';
import CommentList4 from '../../comments/comment4/commentList4'
import CreateComment4 from '../../comments/comment4/createComment4'
import { connect } from 'react-redux';
import * as ROUTES from '../../../constants/routes';
import { Link } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const Article4 = props => {
    const { auth, comments4 } = props;
    const page = auth.uid ? <div><Article /><CreateComment4 /><CommentList4 comments4={comments4} /></div> : 
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
       <h1 style={{fontSize: '40px'}}>Type 2 Diabetes and Exercise</h1>
                  <div className="masthead image-masthead about no-blurb" style={{backgroundImage: `url(${f8})`}}></div>

               <p>
                        When you have type 2 diabetes, physical activity is an important component of your treatment plan.  It’s also important to have a healthy meal plan and maintain your blood glucose level through medications or insulin, if necessary.

                        If you stay fit and active throughout your life, you’ll be able to better control your diabetes and keep your blood glucose level in the correct range. Controlling your blood glucose level is essential to preventing long-term complications, such as nerve pain and kidney disease.
                        
                        Exercise has so many benefits, but the biggest one is that it makes it easier to control your blood glucose (blood sugar) level. People with type 2 diabetes have too much glucose in their blood, either because their body doesn’t produce enough insulin to process it, or because their body doesn’t use insulin properly (insulin resistant).
                        
                        In either case, exercise can reduce the glucose in your blood. Muscles can use glucose without insulin when you’re exercising. In other words, it doesn’t matter if you’re insulin resistant or if you don’t have enough insulin: when you exercise, your muscles get the glucose they need, and in turn, your blood glucose level goes down.
                        
                        If you’re insulin resistant, exercise actually makes your insulin more effective. That is—your insulin resistance goes down when you exercise, and your cells can use the glucose more effectively.
                        
                        Exercise can also help people with type 2 diabetes avoid long-term complications, especially heart problems. People with diabetes are susceptible to developing blocked arteries (arteriosclerosis), which can lead to a heart attack. Exercise helps keep your heart healthy and strong. Plus, exercise helps you maintain good cholesterol—and that helps you avoid arteriosclerosis.
                        
                        Additionally, there are all the traditional benefits of exercise:
                        Lower blood pressure
                        Better control of weight
                        Increased level of good cholesterol (HDL)
                        Leaner, stronger muscles
                        Stronger bones
                        More energy
                        Improved mood
                        Better sleep
                        Stress management
                         
                        But Before You Begin Exercising…
                        When most people are diagnosed with type 2 diabetes, they are overweight, so the idea of exercising is particularly daunting. For your health, you have to get started on a good, reasonable exercise plan, but first,  you should talk to your doctor.
                         
                        Your doctor will be able to check your heart health, which is particularly important if you already have blocked arteries or high blood pressure. You also need to take into consideration any other diabetes-related complications—retinopathy or neuropathy, for example. As you begin an exercise program, your doctor can refer you to an exercise physiologist or diabetes educator to help you figure out the best exercise program that allows you to get in shape for your fitness level.
                         
                        Also before you begin exercising,  you need to set realistic goals. If you haven’t exercised much recently, you will want to start slow and gradually increase the amount and intensity of the activity.
                         
                        Remember to stay hydrated by drinking water and always have a treatment for low blood glucose handy (a 15 g carb snack is a good idea). It is smart to check your blood sugar with your glucose meter before and after exercise to make sure you are in a safe range.
                         
                        Being diagnosed with type 2 diabetes does change your life, but making small changes to your routine can help you incorporate more physical activity into your day. You need to do what works for your body and your lifestyle. See the suggestions below for what types of exercise to do.
                         
                        Allow yourself some time to build up to a steady, challenging exercise routine. And be okay with going slow—it’s better for your body in the long run.
                         
                         
                        What Kinds of Exercise to Do
                        There are three main kinds of exercise—aerobic, strength training, and flexibility work. You should aim to have a good balance of all three.
                         
                        Aerobic Exercises
                        Aerobic exercises include:
                        Walking
                        Jogging/Running
                        Tennis
                        Basketball
                        Swimming
                        Biking
                         
                        You should aim to get at least 30 minutes of aerobic exercise most days of the week. If you think that you can’t find 30 minutes, you can break up the exercise into chunks—10 minutes here and there. Build up to 30 minutes gradually.
                  </p>
              </section>

    </div>
    )
}
}
const mapStateToProps = (state) => {
    // console.log(state);
     return{
         comments4: state.firestore.ordered.comments4,
         auth: state.firebase.auth,
     }
 }


export default compose(
     connect(mapStateToProps),
     firestoreConnect([                       // when db changes this component hears that bcz we connect this comp
           { collection: 'comments4' }
     ])
)(Article4);