import React, { Component } from 'react';
import YouTube from 'react-youtube';

class ReactYouTubeExample extends Component {
   
    video0nReady(event) {
        // access to player in all event handlers via event.target
        event.target.playVideoAt(50);
        console.log(event.target)
      }

    render(){
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 1,
            },
          };
          const {videoId} = this.props
          return <YouTube videoId={videoId} opts={opts} onReady={this.video0nReady} />;
        }
       
      
      }

export default ReactYouTubeExample


// https://youtu.be/alwTcipoHd4 -- share link

// https://www.youtube.com/watch?v=alwTcipoHd4 --> url

// https://www.youtube.com/watch?v=alwTcipoHd4&list=RDCMUC6yW44UGJJBvYTlfC7CRg2Q&start_radio=1