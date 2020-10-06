import React from 'react';
import f22 from '../../../img/f22.jpg';
import CommentList7 from '../../comments/comment7/commentList7'
import CreateComment7 from '../../comments/comment7/createComment7'
import { connect } from 'react-redux';
import * as ROUTES from '../../../constants/routes';
import { Link } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const Article7 = props => {
  const { auth, comments7 } = props;
  const page = auth.uid ? <div><Article /><CreateComment7 /><CommentList7 comments7={comments7} /></div> : 
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
        <h1 style={{fontSize: '40px'}}>Detox Water Health Benefits and Myths</h1>
          <div className="masthead image-masthead about no-blurb" style={{backgroundImage: `url(${f22})`}}></div>

                    <p>
                            There's a lot of hype about the supposed health benefits of "detox water."

                            Yes, staying hydrated is important for health.
                            
                            Therefore, it's often recommended that you drink eight glasses of water per day.
                            
                            However, some people think adding extra ingredients to water boosts its health benefits.
                            
                            The result, called detox water, is said to help your body get rid of toxins, improve your energy levels and help you lose weight.
                            
                            Here is a detailed look at detox water. It separates the true health benefits from the myths.</p>
                            
                            <h1 style={{fontSize: '30px'}}>What Is Detox Water?</h1>
                    <p> Detox water is water that has been infused with the flavors of fresh fruits, vegetables or herbs. It's sometimes referred to as fruit-infused water or fruit-flavored water.
                            
                            You can make detox water at home in lots of different ways, using any combination of fruits, vegetables and herbs that you like.
                            
                            Because it's made by infusing flavor, rather than juicing or blending, detox water contains very few calories. That makes it a popular drink for detox regimens like the "lemon detox" or "master cleanse."
                            
                            Detox water is also often recommended in weight loss plans, especially in place of high-sugar drinks like sugary soda and fruit juice.</p>
                            
                            <h1 style={{fontSize: '30px'}}>BOTTOM LINE:</h1>
                           <p> Detox water is made by infusing water with fruits, vegetables or herbs. You can make your own at home using a variety of flavors.
                            How to Make Detox Water
                            Making detox water at home is very simple. All you need is water and a selection of fruits, vegetables and herbs.
                            
                            Simply chop up your ingredients and add them to hot or cold water, depending on your preference. The more of an ingredient you use, the stronger the flavor will become.
                            
                            If you're making a cold drink, you can leave the detox water in the fridge for 1–12 hours to allow the flavors to infuse more deeply. Be sure to remove the ingredients after this time though, so they don't begin to decompose.
                            
                            If you're in a hurry, crushing or bruising your fruit and herbs before using them can help release the flavors more quickly.
                            
                            Here are some popular detox water recipe combinations:
                            <ul>
                           <li> Cucumber and mint.</li>
                            <li>Lemon and ginger.</li>
                            <li>Blackberry and orange.</li>
                            <li>Lemon and cayenne pepper.</li>
                            <li>Watermelon and mint.</li>
                            <li>Grapefruit and rosemary.</li>
                            <li>Orange and lemon.</li>
                            <li>Lemon and lime.</li>
                            <li>Strawberry and basil.</li>
                            <li>Apple and cinnamon.</li>
                        </ul>
                    </p>
    </section>
    
  </div>
    )
}
}
const mapStateToProps = (state) => {
  // console.log(state);
   return{
       comments7: state.firestore.ordered.comments7,
       auth: state.firebase.auth,
   }
}


export default compose(
   connect(mapStateToProps),
   firestoreConnect([                       // when db changes this component hears that bcz we connect this comp
         { collection: 'comments7' }
   ])
)(Article7);