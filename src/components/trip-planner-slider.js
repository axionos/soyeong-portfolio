import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import Login from '../img/my-trip-planner-screenshot/login.png';
import MyTrip from '../img/my-trip-planner-screenshot/mytrip.png'
import EditTrip from '../img/my-trip-planner-screenshot/edittrip.png'
import Itineraries from '../img/my-trip-planner-screenshot/itinerarylist.png'
import AddItinerary from '../img/my-trip-planner-screenshot/additinerary.png'
import SignUp from '../img/my-trip-planner-screenshot/signup.png'

class TripPlannerSlider extends React.Component {
  constructor() {
    super();
    this.state = {
      showIndex: false,
      showBullets: false,
      infinite: true,
      showThumbnails: true,
      showFullscreenButton: true,
      showGalleryFullscreenButton: true,
      showPlayButton: false,
      showGalleryPlayButton: false,
      showNav: true,
      isRTL: false,
      slideDuration: 450,
      slideInterval: 2000,
      slideOnThumbnailOver: false,
      thumbnailPosition: 'bottom',
      showVideo: {},
    };
  }

  _toggleShowVideo(url) {
    this.state.showVideo[url] = !Boolean(this.state.showVideo[url]);
    this.setState({
      showVideo: this.state.showVideo
    });

    if (this.state.showVideo[url]) {
      if (this.state.showPlayButton) {
        this.setState({showGalleryPlayButton: false});
      }

      if (this.state.showFullscreenButton) {
        this.setState({showGalleryFullscreenButton: false});
      }
    }
  }

  _renderVideo(item) {
    return (
      <div className='image-gallery-image'>
        {
          this.state.showVideo[item.embedUrl] ?
            <div className='video-wrapper'>
              <a
                className='close-video'
                onClick={this._toggleShowVideo.bind(this, item.embedUrl)}
              >
              </a>
              <iframe
                title='my-trip-planner'
                className='demo-video'
                src={item.embedUrl}
                frameBorder='0'
                allowFullScreen
              >
              </iframe>
            </div>
          :
            <a onClick={this._toggleShowVideo.bind(this, item.embedUrl)}>
              <div className='play-button'></div>
              <img src={item.original}/>
              {
                item.description &&
                  <span
                    className='image-gallery-description'
                    style={{right: '0', left: 'initial'}}
                  >
                    {item.description}
                  </span>
              }
            </a>
        }
      </div>
    );
  }


  render() {

    const images = [
      {
        original:Login,
        thumbnail: Login,
        embedUrl: 'https://www.youtube.com/embed/j-LVemjrZx8?autoplay=1&showinfo=0',
        description: 'Click to play My Trip Planner demo video',
        renderItem: this._renderVideo.bind(this)
      },
      {
        original: Login,
        thumbnail: Login,
      },
      {
        original: MyTrip,
        thumbnail: MyTrip
      },
      {
        original: EditTrip,
        thumbnail: EditTrip
      },
      {
        original: Itineraries,
        thumbnail: Itineraries
      },
      {
        original: AddItinerary,
        thumbnail: AddItinerary
      },
      {
        original: SignUp,
        thumbnail: SignUp
      }
    ]

    return (
      <ImageGallery items={images} />
    );
  }

}

export default TripPlannerSlider;
