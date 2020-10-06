import React from 'react';
import {Link, withRouter } from 'react-router-dom';

const SecFooter = () =>{
    return(
        <div>
        <footer className="footer_cta pagination-wrapper">
                <div className="cta_content container -narrow">
                  <h3 className="heading -medium cta_caption no-margin">Ready to try a Fitness Club workout?</h3>
                  <div className="cta_button">
                    <Link to="/workout" className="btn -dark -large-medium-only no-margin" type="button">Get Started Today</Link>
                  </div>
                </div>
        </footer>
    </div>
    )

}

export default withRouter(SecFooter);