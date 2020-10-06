import React from 'react';
import f21 from '../../../img/f21.jpg'
import CommentList from '../../comments/comment/commentList'
import CreateComment from '../../comments/comment/createComment'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import * as ROUTES from '../../../constants/routes';
import { Link } from 'react-router-dom';

const Article1 = props => {
      const { auth, comments } = props;
      const page = auth.uid ? <div><Article /><CreateComment /><CommentList comments={comments} /></div>
       : <div><Article /><h2><div className="menu-id">
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

    <h1 style={{fontSize: '40px'}}>Healthy Snacks On the Go--</h1>
          <div className="masthead image-masthead about no-blurb" style={{backgroundImage: `url(${f21})`}}></div>

                <p>e're pretty big eaters in our house. People are always surprised by the amount and the frequency that we eat. 
                      We don't skip meals, and in fact we usually eat in between meals. 
                      For times when life gets really hectic, or while we're traveling,
                       healthy snacks on the go are really important. It's a convenience factor, 
                       and also a matter of proactively providing yourself a healthy alternative before you're starving and 
                       considering eating anything that can't outrun you (that might just be me, projecting). 



I don't know about you guys but I'm picky when it comes to commercially prepared healthy snacks. 
Packing fruits and veggies and even your own meals is smart and can even end up saving you money, 
but sometimes you just need to be able to grab something and go. 
But when it comes to health snacks and meal replacement bars, a lot of them have... 
a taste. Some kind of weird, awful taste that just lingers. 
Do you guys know what I'm talking about? As in, the snack almost tastes like the wrapper it came in?
 And it's not just the taste; I also care about what's in the food that I eat.
  And a lot of the meal bars and foods that pose as healthy snacks actually have a lot of ingredients that aren't at all healthy or natural.
   I like simple ingredients. Organic is ideal. Even better if it's made by a company operating with good ethos. 
   The snack should also be relatively filling, so you're not hungry again in 10 minutes. 

<h2>Long story short, as I said before - </h2>
I'm a bit picky when it comes to convenient healthy snacks. 
I want my food to taste good. Great actually. 
I like to enjoy what I'm eating. So after many years of desperately searching for flight 
snacks and in-between meal grabs and sometimes just general munchies, here's our list of 
favorite healthy on the go snacks that have passed a high standard for both taste and ingredients. 
Some of these are so tasty that we eat them for "dessert"!

<h2>FLAX4LIFE Blueberry Muffins -</h2>
 These are so delicious that I'm going to end up sounding like a spokesperson. 
 They're made local to us in Washington state but have recently started to pop up all over. 
 We've eaten them for years and they're great for mornings when you know you need a little substance but 
 don't have time to stop and make yourself breakfast. These also come in chocolate, 
 and a number of other flavors. They also make smaller chocolate brownie muffins 
 (the ones I've linked here are chocolate & cherry) that we eat as dessert around our house. 
 They're still made from simple ingredients but so dangerously delicious that you're going to want to taste at your own risk - 
 just don't eat the whole dozen all at once! They are soft and have a very doughy texture. 
 Plus, can you go wrong with chocolate? Now I'm hungry. 


                </p>
          </section>
    </div>
   )
}
}
const mapStateToProps = (state) => {
     // console.log(state);
      return{
          comments: state.firestore.ordered.comments,
          auth: state.firebase.auth,
      }
  }


export default compose(
      connect(mapStateToProps),
      firestoreConnect([                       // when db changes this component hears that bcz we connect this comp
            { collection: 'comments' }
      ])
)(Article1);