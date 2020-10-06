import React, {Component} from 'react';
import '../../Shoping.css';

const API = 'AIzaSyBcD-EK2F3tlc_B81bvsRbAP_XQhgBXcRg';
// const channelID = 'UCXgGY0wkgOzynnHvSEVmE3A';
const channelID = 'UCiP6wD_tYlYLYh3agzbByWQ';
const result = 20;

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`

class Workout extends Component {

    constructor(props){
        super(props);

        this.state = {
            resultyt: []
        };
        this.clicked = this.clicked.bind(this);
    }
    clicked(){
        fetch(finalURL)
    .then((response) => response.json())
    .then((responseJson) => {
       console.log(responseJson);
       const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId);
       this.setState({resultyt});
       
    })
    .catch((error) => {
      console.error(error);
    });
    }

    render(){

        console.log(this.state.resultyt);

        return(
            <div>
            <br />
                <div className="action__group">
                <center><button onClick={this.clicked} type="submit" aria-live="polite" className="btn submitting-btn -main">Show Workout Videos</button>
           </center> </div><br /><br /><br /><br /><br />            
                {
                    this.state.resultyt.map((link, i) => {
                        console.log(link);
                        var frame = <div key={i} className='youtube'>
                            <iframe width="860" height="515" src={link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                            </iframe></div>
                         return frame;
                    })
                }
                {this.frame}

           
            </div>
        )
    }
}

export default Workout;





{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/5NgQVkcZ7Mg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}