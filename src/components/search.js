import React from 'react';
import {Link, NavLink, withRouter } from 'react-router-dom';

const list = [
    {
    search:'Healthy Snacks',  
    title: 'Healthy Snacks On the Go: Convenient Clean Eating Snack Ideas',
    objectID: 0,
    url:'https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-o_625_healthy-snacks-on-the-go-convenient-clean-eating-snack-ideas.jpg',
    to: '/a1',
    },
    {
    search:'Impact of weight loss',
    title: 'The Impact of Weight Loss on Knee Osteoarthritis',
    objectID: 1,
    url:'https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-o_567_the-impact-of-weight-loss-on-knee-osteoarthritis.jpg',
    to: '/a2'
    },
    { 
    search:'Menopause Nutrition',
    title: 'Menopause Nutrition: What foods are good for menopause?',
    objectID: 2,
    url:'https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-o_586_menopause-nutrition-what-foods-are-good-for-menopause.jpg',
    to: '/a3',
    },
    {
    search:'type-2 diabeties',
    title: 'The how, what, and why of exercise and type-2 diabetes',
    objectID: 3,
    url:'https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-o_569_the-how-what-and-why-of-exercise-and-type-2-diabetes.jpg',
    to: '/a4',
    },
    {
    search:'Stress Relivieng Workouts',
    title: 'The Best Kinds of Exercise for Lowering Stress - Stress-Relieving Workouts',
    objectID: 4,
    url:'https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-o_543_the-best-kinds-of-exercise-for-lowering-your-stress-stress-relieving-workouts.jpg',
    to: '/a5',
    },
    {
    search:'Cholesterol',
    title: 'Foods To Help Lower Cholesterol Naturally',
    objectID: 5,
    url:'https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-o_578_foods-to-help-lower-cholesterol-naturally.jpg',
    to: '/a6',
    },
    {
    search:'detox water',
    title: 'Are there benefits to infused water or detox water or is it a gimmick?',
    objectID: 6,
    url:'https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-o_504_are-there-benefits-to-infused-water-or-detox-water-or-is-it-a-gimmick.jpg',
    to: '/a7',
    },
    {
    search:'crave salt',
    title: 'Why do I crave salt? How to curb salty cravings and what to eat instead',
    objectID: 7,
    url:'https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-o_497_why-do-i-crave-salt-how-to-curb-salty-cravings-and-what-to-eat-instead.jpg',
    to: '/a8',
    },
  ];

  class Search extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          list: list,
          searchTerm : ""
        }
        this.onSearch = this.onSearch.bind(this);
    }
    onSearch =  (event) => {
         this.setState({ searchTerm: event.target.value });
    }
    searchFilter(keyWord){
        return function(item) {
            return item.search.toLowerCase().includes(keyWord.toLowerCase())
        }
      }
    
      render(){
          return(
              <div>
             
              <form className="login-form" id="registration-form" role="form">
        
                <input type="hidden" name="_token" value="BYBUyaaR4EZACIV1AiuESP9QaydNgYDuMR4FFJCI" />
                <div id="vue-registration-form" className="registration"><div className="form__main">
                <div className="form__group is_text">
                <label htmlFor="comment" className="sr-only">Search</label> 
                <input id="comment" type="text" placeholder="Search Here" required="required" data-vv-as="Content" 
                data-vv-scope="__global__" aria-required="true" aria-invalid="false" onChange={this.onSearch}  /><br />
                </div></div></div>
                </form>

              {this.state.list.filter(this.searchFilter(this.state.searchTerm)).map((item) => {
                return(
                <div key={item.objectID} className="content-container grey-background listing-grid">
                <div className="content-holder grid-holder">
                <div className="content-item article-item no-actions">
                <div className="content-info">
                <div className="content-thumbnail">
                <div className="content-thumbnail-holder">
                <span>
                <Link to={item.to}>{item.title}</Link>
                </span>
                <img src={item.url} />
                </div></div>
                </div></div>
                </div></div>
                
                )
              })}
              </div>
          )
      }
  }


export default withRouter(Search);