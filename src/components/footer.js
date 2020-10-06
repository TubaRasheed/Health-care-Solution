import React from 'react';
import * as ROUTES from '../constants/routes';
import {Link, NavLink, withRouter } from 'react-router-dom';

const Footer = () => {
    return(
        <div>
        <footer id="footer" className="site__footer" role="contentinfo">
        <div className="container">
            <h1 className="brand -dark footer-h">Fitness Club
                <p>WORKOUT COMPLETE<sup>™</sup></p>
            </h1>

            <nav className="footer__nav alt-nav">
                <ul>
                    <li><a className="demi" >Workout &amp; Programs</a></li>
                    <li><Link to={ROUTES.WORKOUT}>Workout Videos</Link></li>

                </ul>
                <ul>
                    <li><a className="demi" >Healthy Living</a></li>
                    <li><Link to={ROUTES.HEALTHY}>Fitness</Link></li>
                
                </ul>
                <ul>
                   
                    <li><Link className="demi" to={ROUTES.ABOUT}>About</Link></li>
                    <li><Link className="demi" to={ROUTES.SEARCH}>Search</Link></li>
                    
                </ul>
            </nav>
        </div>
        <div className="container">
            <div className="end">
                  <ul className="nav-smicons footer-smicons">
                  <li className="youtube-smi"><a href="#" target="_blank"><span className="iconfont-youtube-play"></span><span className="sr-only">YouTube</span></a></li>
                  <li className="pinterest-mi"><a href="#" target="_blank"><span className="iconfont-pinterest"></span><span className="sr-only">Pinterest</span></a></li>
                  <li className="facebook-smi"><a href="#" target="_blank"><span className="iconfont-facebook"></span><span className="sr-only">Facebook</span></a></li>
                  <li className="instagram-smi"><a href="#" target="_blank"><span className="iconfont-instagram"></span><span className="sr-only">Instagram</span></a></li>
                  <li className="twitter-smi"><a href="#" target="_blank"><span className="iconfont-twitter"></span><span className="sr-only">Twitter</span></a></li>
                </ul>
            </div>
        </div>
      </footer>

        </div>
    )
}


export default withRouter(Footer);