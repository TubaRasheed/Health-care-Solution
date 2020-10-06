import React from 'react';
import SecFooter from './subComponents/secFooter.js';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import AwsSliderStyles from 'react-awesome-slider/src/styles';
import f1 from '../img/f1.jpg';
import f2 from '../img/f2.jpg';
import f3 from '../img/f3.jpg';
import f4 from '../img/f4.jpg';

const slider = (
    <AwesomeSlider cssModule={AwsSliderStyles}>
      <div data-src={f1} />
    <div data-src={f2} />
    <div data-src={f3} />
    <div data-src={f4} />
    </AwesomeSlider>
  )
  class Section extends React.Component{
    state = {
        slider,
      }
    render(){
        return(
            <div>
            <section>
            {this.state.slider}
            <SecFooter />
           </section>
    
            </div>
        )
    }
}


export default Section;