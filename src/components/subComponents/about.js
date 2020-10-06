import React from 'react';
import f5 from '../../img/f5.jpeg';

class About extends React.Component{
    render(){
     
        return(
          <div>  
                
        <section>

        <div className="masthead image-masthead about no-blurb" style={{backgroundImage: `url(${f5})`}}>
        <img src='https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500.jpeg' 
        className="mobile-image"  />
        <div className="container">
        <div className="masthead-text">
        <div className="eyebrow heading -x-small caps" style={{color: 'white'}}>About Fitness Club</div>
        <h1 className="heading -huge" style={{color: 'white'}}>Our goal is to make health and fitness attainable, affordable and approachable.</h1>
        </div>
        <span className="scroll-down-icon iconfont-arrow-next"></span>
        </div>
        </div>

        <section className="info-panel text">
        <div className="container -medium">
        <h2 className="heading -huge -light">Created to help you live a better, happier, healthier life.</h2>
        <p className="nopad">We believe fitness should be accessible to everyone, everywhere, regardless of income level or access to a gym. That's why we offer hundreds of free, full-length workout videos, the most affordable and effective workout programs on the web, meal plans, and helpful health, nutrition and fitness information.</p>
        </div></section>

        <section className="info-panel text feature-list">
        <div className="container -medium">
        <h2 className="heading -huge -light">We believe in unbiased, gimmick-free, research-backed information</h2>
        <p>The only thing we endorse is eating unprocessed, whole foods, and working out for a strong, healthy body. As a business, we believe good things happen when you put people before profit.</p>
        </div>
        <div className="container -medium_large">
        <ul>
        <li className="powered">
        <i className="icon -about-smiley" aria-hidden="true"></i>
        <h6 className="caps-half demi">Powered by You</h6>
        <p className="no-pad -tight">Fitness Club has reached tens of millions around the globe, all from word of mouth; happy viewers sharing our content with friends and family.</p>
        </li>
        <li className="programs">
        <i className="icon -about-programs" aria-hidden="true"></i>
        <h6 className="caps-half demi">Programs that Work</h6>
        <p className="no-pad -tight">Our workout plans use our online fitness calendar to provide detailed, day-by-day plans, creating incredible, sustainable results.</p>
        </li>
        <li className="workouts">
        <i className="icon -about-workouts" aria-hidden="true"></i>
        <h6 className="caps-half demi">500+ Free Workouts</h6>
        <p className="no-pad -tight">Over 500 free workouts range from 10-85 minutes long, from beginner level to elite athlete, from HIIT to Pilates, and strength training to bodyweight.</p>
        </li>
        </ul>
        </div>
        </section>

        <section id="aboutCarouselPanel" className="info-panel text slideshow">
        <div className="VueCarousel">
        <div className="VueCarousel-wrapper">
        <div className="VueCarousel-inner" style={{transform: 'translateX(0px)', transition: 'transform 0.5s ease 0s', flexBasis: '1100px', visibility: 'visible'}}>
        <div className="VueCarousel-slide">
        <div className="container -medium">
        <h2 className="heading -huge -light">A little bit about who we are and how it all got started</h2> 
        <p className="no-pad">Fitness club was created by just three people; who thought fitness should be accessible to everyone, regardless of their income. 
        Too many people in the industry were more focused on monetary gain or 
        appearance than they were on good health.</p>
        </div></div> </div></div></div> 
        </section>
        </section>
        </div>
        )
    }
} 
export default About;