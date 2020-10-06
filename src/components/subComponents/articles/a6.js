import React from 'react';
import f21 from '../../../img/f21.jpg';
import CommentList6 from '../../comments/comment6/commentList6'
import CreateComment6 from '../../comments/comment6/createComment6'
import { connect } from 'react-redux';
import * as ROUTES from '../../../constants/routes';
import { Link } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const Article6 = props => {
    const { auth, comments6 } = props;
    const page = auth.uid ? <div><Article /><CreateComment6 /><CommentList6 comments6={comments6} /></div> : 
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
<h1 style={{fontSize: '40px'}}>Top 5 lifestyle changes to improve your cholestrol</h1>
          <div className="masthead image-masthead about no-blurb" style={{backgroundImage: `url(${f21})`}}></div>

          <p>
           <span style={{fontSize: `30px`}}> 1. Eat heart-healthy foods</span>
            A few changes in your diet can reduce cholesterol and improve your heart health:
            
            Reduce saturated fats. Saturated fats, found primarily in red meat and full-fat dairy products, raise your total cholesterol. Decreasing your consumption of saturated fats can reduce your low-density lipoprotein (LDL) cholesterol — the "bad" cholesterol.
            Eliminate trans fats. Trans fats, sometimes listed on food labels as "partially hydrogenated vegetable oil," are often used in margarines and store-bought cookies, crackers and cakes. Trans fats raise overall cholesterol levels. The Food and Drug Administration has banned the use of partially hydrogenated vegetable oils by Jan. 1, 2021.
            Eat foods rich in omega-3 fatty acids. Omega-3 fatty acids don't affect LDL cholesterol. But they have other heart-healthy benefits, including reducing blood pressure. Foods with omega-3 fatty acids include salmon, mackerel, herring, walnuts and flaxseeds.
            Increase soluble fiber. Soluble fiber can reduce the absorption of cholesterol into your bloodstream. Soluble fiber is found in such foods as oatmeal, kidney beans, Brussels sprouts, apples and pears.
            Add whey protein. Whey protein, which is found in dairy products, may account for many of the health benefits attributed to dairy. 
            Studies have shown that whey protein given as a supplement lowers both LDL cholesterol
             and total cholesterol as well as blood pressure.<br />
            <span style={{fontSize: `30px`}}> 2. Exercise on most days of the week and increase your physical activity</span>
            Exercise can improve cholesterol. Moderate physical activity can help raise high-density lipoprotein (HDL) cholesterol, the "good" cholesterol. With your doctor's OK, 
            work up to at least 30 minutes of exercise five times a week or vigorous aerobic activity for 20 minutes three times a week.
            
            Adding physical activity, even in short intervals several times a day, can help you begin to lose weight. Consider:
            
            Taking a brisk daily walk during your lunch hour
            Riding your bike to work
            Playing a favorite sport
            To stay motivated, consider finding an exercise buddy or joining an exercise group.<br />
            
            <span style={{fontSize: `30px`}}> 3. Quit smoking</span>
            Quitting smoking improves your HDL cholesterol level. The benefits occur quickly:
            
            Within 20 minutes of quitting, your blood pressure and heart rate recover from the cigarette-induced spike
            Within three months of quitting, your blood circulation and lung function begin to improve
            Within a year of quitting, your risk of heart disease is half that of a smoker<br />
            <span style={{fontSize: `30px`}}>4. Lose weight</span>
            Carrying even a few extra pounds contributes to high cholesterol. Small changes add up. If you drink sugary beverages, switch to tap water. Snack on air-popped popcorn or pretzels — but keep track of the calories. If you crave something sweet, try sherbet or candies with little or no fat, such as jelly beans.
            
            Look for ways to incorporate more activity into your daily routine, such as using the stairs instead of taking the elevator or parking farther from your office. Take walks during breaks at work.
             Try to increase standing activities, such as cooking or doing yardwork.<br />
            
            <span style={{fontSize: `30px`}}>5. Drink alcohol only in moderation</span>
            Moderate use of alcohol has been linked with higher levels of HDL cholesterol — but the benefits aren't strong enough to recommend alcohol for anyone who doesn't already drink.
            
            If you drink alcohol, do so in moderation. For healthy adults, that means up to one drink a day for women of all ages and men older than age 65, and up to two drinks a day for men age 65 and younger.
            
            Too much alcohol can lead to serious health problems, including high blood pressure, heart failure and strokes.
            
            If lifestyle changes aren't enough …
            Sometimes healthy lifestyle changes aren't enough to lower cholesterol levels. If your doctor recommends medication to help lower your cholesterol, take it as prescribed while continuing your lifestyle changes. Lifestyle changes can help you keep your medication dose low.
            
            
    </p>
</section>
    </div>
    )
}
}
const mapStateToProps = (state) => {
    // console.log(state);
     return{
         comments6: state.firestore.ordered.comments6,
         auth: state.firebase.auth,
     }
 }


export default compose(
     connect(mapStateToProps),
     firestoreConnect([                       // when db changes this component hears that bcz we connect this comp
           { collection: 'comments6' }
     ])
)(Article6);