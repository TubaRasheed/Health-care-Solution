import React from 'react';
import f11 from '../../../img/f11.jpg'
import CommentList3 from '../../comments/comment3/commentList3'
import CreateComment3 from '../../comments/comment3/createComment3'
import { connect } from 'react-redux';
import * as ROUTES from '../../../constants/routes';
import { Link } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const Article3 = props => {
      const { auth, comments3 } = props;
      const page = auth.uid ? <div><Article /><CreateComment3 /><CommentList3 comments3={comments3} /></div> : 
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
          <h1 style={{fontSize: '40px'}}>Phytoestrogen-Containing Foods</h1>
          <div className="masthead image-masthead about no-blurb" style={{backgroundImage: `url(${f11})`}}></div>

                <p>Phytoestrogens are compounds in foods that act as weak estrogens in your body.
                
                While there has been some controversy on including these in the diet, the most recent research suggests they may benefit health — especially for women going through menopause (24Trusted Source).
                
                Foods that naturally contain phytoestrogens include soybeans, chickpeas, peanuts, flax seeds, barley, grapes, berries, plums, green and black tea and many more (24Trusted Source).
                
                In a review of 21 studies on soy, postmenopausal women who took soy isoflavone supplements for at least four weeks had 14% higher estradiol (estrogen) levels compared to those who took a placebo. However, results were not significant (25Trusted Source).
                
                In another review of 15 studies ranging from 3 to 12 months, phytoestrogens including soy, isoflavone supplements and red clover were found to lower incidences of hot flashes compared to control groups, with no serious side effects (26Trusted Source).
                
                Quality Protein
                The decline in estrogen from menopause is linked to decreased muscle mass and bone strength (27Trusted Source).
                
                For this reason, women going through menopause should eat more protein. Guidelines recommend that women over 50 eat 0.45–0.55 grams of protein per pound (1–1.2 grams per kg) of body weight daily — or 20–25 grams of high-quality protein per meal (28Trusted Source).
                
                In the US, the Recommended Dietary Allowance (RDA) for protein is 0.36 grams per pound (0.8 grams per kg) of body weight for all adults over age 18, which represents the minimum needed for health.
                
                The recommended macronutrient distribution range for protein is 10–35% of total daily calories (29Trusted Source).
                
                In a recent one-year study in 131 postmenopausal women, those taking 5 grams of collagen peptides daily had significantly better bone mineral density compared to those taking a placebo powder (30Trusted Source).
                
                Collagen is the most abundant protein in your body.
                
                In a large study in adults over 50, eating dairy protein was linked to an 8% lower risk of hip fracture, while eating plant protein was linked to a 12% reduction (31Trusted Source).
                
                Foods high in protein include eggs, meat, fish, legumes and dairy products. Additionally, you can add protein powders to smoothies or baked goods.
                
                SUMMARY
                Incorporating dairy products, healthy fats, whole grains, fruits, vegetables, foods high in phytoestrogens and quality sources of protein into your diet may help relieve some menopause symptoms.
                Foods to Avoid
                Avoiding certain foods may help reduce some of the symptoms linked to menopause, such as hot flashes, weight gain and poor sleep.
                
                Added Sugars and Processed Carbs
                High blood sugar, insulin resistance and metabolic syndrome have been linked to higher incidence of hot flashes in menopausal women (32Trusted Source, 33Trusted Source, 34Trusted Source).
                
                Processed foods and added sugars are known to raise blood sugar rapidly. The more processed a food is, the more pronounced its effect on blood sugar may be (35Trusted Source).
                
                Therefore, limiting your intake of added sugars and processed foods, such as white bread, crackers and baked goods, may help reduce hot flashes during menopause.
                
                US guidelines recommend keeping your added sugar intake to less than 10% of your daily calorie intake — so if you eat a 2,000-calorie diet, less than 200 calories, or 50 grams, should come from added sugars (36Trusted Source).
                
                Alcohol and Caffeine
                Studies have shown that caffeine and alcohol can trigger hot flashes in women going through menopause (37Trusted Source, 38Trusted Source).
                
                In one study in 196 menopausal women, caffeine and alcohol intake increased the severity of hot flashes but not their frequency (39).
                
                On the other hand, another study associated caffeine intake with a lower incidence of hot flashes (40Trusted Source).
                
                Therefore, it may be worth testing whether eliminating caffeine affects your hot flashes.
                
                Another factor to consider is that caffeine and alcohol are known sleep disruptors and that many women going through menopause have trouble sleeping. So, if this is the case for you, consider avoiding caffeine or alcohol near bedtime.
                
                Spicy Foods
                Avoiding spicy foods is a common recommendation for women going through menopause. However, evidence to support this is limited.
                
                One study in 896 women going through menopause in Spain and South America examined the association between lifestyle factors and incidences of hot flashes and associated spicy food intake with an increase in hot flashes (41Trusted Source).
                
                Another study in 717 perimenopausal women in India associated hot flashes with spicy food intake and anxiety levels. Researchers concluded that hot flashes were worse for women with overall poorer health (42Trusted Source).
                
                As your reaction to spicy foods may be individual, use your best judgment when it comes to including spicy foods in your diet and avoid them if they seem to worsen your symptoms.
                
                High-Salt Foods
                High salt intake has been linked to lower bone density in postmenopausal women.
                
                In a study in over 9,500 postmenopausal women, sodium intake of more than 2 grams per day was linked to a 28% higher risk of low bone mineral density (43Trusted Source).
                
                Additionally, after menopause, the decline in estrogen increases your risk of developing high blood pressure. Reducing your sodium intake may help lower this risk (44Trusted Source).
                
                Furthermore, in a randomized study in 95 postmenopausal women, those who followed a moderate-sodium diet experienced better overall mood, compared to women who followed a generally healthy diet with no salt restriction (45Trusted Source).
                
                SUMMARY
                Avoiding processed carbs, added sugars, alcohol, caffeine, spicy foods and foods high in salt may improve symptoms of menopause.
                The Bottom Line
                Menopause is linked to changes in metabolism, reduced bone density and increased risk of heart disease.
                
                Additionally, many women going through menopause experience unpleasant symptoms, such as hot flashes and poor sleep.
                
                A whole-foods diet high in fruits, vegetables, whole grains, high-quality protein and dairy products may reduce menopause symptoms. Phytoestrogens and healthy fats, such as omega-3 fatty acids from fish, may also help.
                
                You may want to limit added sugars, processed carbs, alcohol, caffeine and high-sodium or spicy foods as well.
                
                These simple changes to your diet may make this important transition in your life easiur
                
                Written by Melissa Groves on November 23, 2018
                related stories
                Menopause: 11 Things Every Woman Should Know
                11 Natural Ways to Reduce Symptoms of Menopause
                What Are the Symptoms and Signs of Menopause?
                A Healthy Diet May Help Delay Start of Menopause
                Self-Care for Menopause: 5 Women Share Their Experiences
                10 Exercises to Tone Every Inch of Your Body
                For a Longer Life and Happier Gut, Eat More Fiber
                How Collagen Can Boost Your Body’s Skin, Muscle, and Gut
                </p>
          </section>

    </div>
   )
}
}
const mapStateToProps = (state) => {
    // console.log(state);
     return{
         comments3: state.firestore.ordered.comments3,
         auth: state.firebase.auth,
     }
 }


export default compose(
     connect(mapStateToProps),
     firestoreConnect([                       // when db changes this component hears that bcz we connect this comp
           { collection: 'comments3' }
     ])
)(Article3);