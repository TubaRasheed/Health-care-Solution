import React from 'react';
import f24 from '../../../img/f24.jpg'
import CommentList2 from '../../comments/comment2/commentList2'
import CreateComment2 from '../../comments/comment2/createComment2'
import { connect } from 'react-redux';
import * as ROUTES from '../../../constants/routes';
import { Link } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const Article2 = props => {
    const { auth, comments2 } = props;
    const page = auth.uid ? <div><Article /><CreateComment2 /><CommentList2 comments2={comments2} /></div> : 
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
    <div class="l-content-wrapper">
    <div class="l-content" role="main">
    <a id="main-content"></a>
    <h1 class="heading -large">The Impact of Weight Loss on Knee Osteoarthritis</h1>
    <div className="masthead image-masthead about no-blurb" style={{backgroundImage: `url(${f24})`}}></div>
    <div class="article_body article__content">
        <p>Knee osteoarthritis is one of the most common causes of pain and disability in the older population in addition to hip osteoarthritis.
         Osteoarthritis or OA is a common disorder that affects many adults. &nbsp;It is the leading cause of functional limitations in older adults 
         which often includes difficulty with walking and managing stairs. &nbsp;OA is a major health problem and arthritis related conditions are one 
         of the most common reasons a person visits their doctor. &nbsp;OA can lead to functional decline and the likelihood of being diagnosed with OA 
         increases with age. Related:&nbsp;<a href="https://www.fitnessblender.com/articles/what-you-can-do-now-to-prevent-knee-problems-in-the-future">
        What you can do NOW to prevent knee problems in the future</a></p></div>
        <p><strong>What is knee osteoarthritis? Knee osteoarthritis symptoms and breakdown&nbsp;</strong><br />
The knee joint is made up of bones, cartilage, ligaments and tendons. &nbsp;Articular cartilage covers the end of the long bone of the thigh which is 
the femur and the end of the tibia which is the bone in the lower leg in addition to the undersurface of the patella or knee cap. &nbsp;This articular 
cartilage is a smooth substance that helps the knee bones glide smoothly across each other as the knee bends and straightens. &nbsp; &nbsp;In a normal 
joint, this cartilage can act as a shock absorber and allow for even movement of the joint without pain but when OA is present the cartilage degrades 
and becomes thinner, which leads to pain. &nbsp;The cartilage can disappear all together in the more advanced stages of the disease which leads to 
significant joint pain and difficulty moving the knee. &nbsp;The symptoms of knee OA include pain, stiffness and muscle weakness which can decrease 
functional activity tolerance such as walking and stair management and lead to a decreased quality of life.&nbsp;</p>

<p>OA is a degenerative, chronic and at times progressive joint disease that can be caused by cartilage breakdown or due to a secondary reason caused by 
    ther conditions or trauma. &nbsp;OA patients often complain of pain with movement and typically these people are in more pain with weight bearing 
    activities such as walking or managing stairs when there is the greatest amount of stress or pressure on the joints. &nbsp;</p>

<p><strong>Knee osteoarthritis treatment options&nbsp;</strong><br />
Patients will generally end up needing physical therapy and possibly various types of injections for pain control unless they are at the stage where 
surgery is indicated. &nbsp;If a patient is not in the end stages of knee OA, then more conservative treatment is usually recommended initially. &nbsp;
There are various studies on different types of interventions including multiple modes of exercise which in turn leads to weight loss, which is 
important in the management of knee OA because losing weight will help to decrease pressure on the joint. &nbsp;Hydrotherapy which may include water 
aerobics and swimming may help to reduce pain, improve strength and improve flexibility. &nbsp;Hydrotherapy can be performed and is often performed in 
warm water which has also been show to help alleviate pain and stiffness associated with knee OA. &nbsp;Appropriately paced (and potentially low impact) 
aerobic exercise can also reduce joint pain and increase a person&rsquo;s ability to perform daily tasks. &nbsp;</p>

<p>Related: <a href="https://www.fitnessblender.com/videos">Search over 500 workout videos</a> by length, difficulty, muscles used &amp; more 
(we even have a low impact category!)&nbsp;</p>
<p><strong>Losing weight while working around knee problems</strong><br />
It&#39;s hard enough to lose weight when your body is fully functioning; it&#39;s not hard to imagine that it would be especially difficult while
 dealing with knee or joint issues.</p>

<p>Hydrotherapy and exercise (again; pace, form and appropriate difficulty level are crucial here) can help aide in weight loss in this patient 
population; particularly because weight reduction is one intervention to help alleviate the symptoms of knee OA. &nbsp;A healthy diet can also have a 
significant impact on both bodyweight and <a href="https://www.fitnessblender.com/articles/nutrition-and-healing-how-to-eat-to-help-healing">your 
body&#39;s ability to heal itself</a>, so make sure that you&#39;re eating well.</p>

<p>It has been shown in the research, that people that are overweight experience higher rates of knee OA than those who are not overweight. The force 
    that occurs in the knee joint with weight bearing activities is 3-6 times a person&rsquo;s body weight. &nbsp;It makes sense then that if you are 
    overweight you are placing more force on the knee joint. &nbsp;The greater force on the knee joints over time can lead to the early onset or a 
    steady progression of knee OA. &nbsp;</p>

<p><strong>The good news</strong><br />
Pain reduction and improvements in walking speed have been shown in those with knee OA who are prescribed weight loss procedures and this occurred in
 people at various stages of the disease. &nbsp;People with knee OA should be encouraged to begin a 
 <a href="https://www.fitnessblender.com/plans"> weight loss program</a> and should seek recommendations from their healthcare provider to decrease their
  weight to alleviate symptoms. People with knee OA that are surgical candidates may not be able to have a total knee replacement until their BMI is 
  under a certain number which is another reason that this population needs to actively manage their weight. &nbsp;The main reasons that someone 
  with knee OA that is also overweight needs to begin a weight loss program are the following: reduce pain, reduce stress on the knee joint, slow
   or delay the disease process and be prepared for a possible surgery in the future should it be required.&nbsp;</p>

<p>To be safe; always make sure to talk to your doctor about any lifestyle changes you intend to make, to make sure that they are safe for you and your 
    personal health care scenario.</p>

<p>Written by L. Augustyn, Physical Therapist</p>

<p>References<br />
Bhatia D, Bejarano T &amp; Novo M. Current interventions in the management of knee osteoarthritis. J Pharm Bioallied Sci. 2013; 5(1):30-38.<br />
Fransen M, McConnell S &amp; Harmer AR, et al. Exercise for osteoarthritis of the knee: a Cochrane systematic review. Br J Sports Med. 2015; 49: 
1554-1557.&nbsp;<br />
Hauk, L. Treatment of knee osteoarthritis: a clinical practice guideline from the AAOS. Journal of the American Academy of Orthopaedic Surgeons. 
September 2013.<br />
Juhl C, Christensen R, Roos EM, Zhang W, Lund H. Impact of exercise type and dose on pain and disability in knee osteoarthritis. Arthritis &amp; 
Rheumatology. 2014; 66(3): 622-636.&nbsp;<br />
Michael JWP, Schluter-Brust KU, Eysel P. The epidemiology, etiology, diagnosis, and treatment of osteoarthritis of the knee. Dtsch Arztebl Int. 
2010; 107 (9): 152-162<br />
White DK, Neogi T, Nguyen UDT, Niu J, Zhang Y. Trajectories of functional decline in knee osteoarthritis: the osteoarthritis initiative.
 &nbsp;Rheumatology. 2016; 55:801-808.&nbsp;</p>
</div>
</div>    
</section>

    </div>
    )
}
}
const mapStateToProps = (state) => {
    // console.log(state);
     return{
         comments2: state.firestore.ordered.comments2,
         auth: state.firebase.auth,
     }
 }


export default compose(
     connect(mapStateToProps),
     firestoreConnect([                       // when db changes this component hears that bcz we connect this comp
           { collection: 'comments2' }
     ])
)(Article2);