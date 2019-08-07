import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import Login from '../img/boba-finder-screenshot/login.png';
import Main from '../img/boba-finder-screenshot/main.png'
import KFTea from '../img/boba-finder-screenshot/kftea.png'
import Gongcha from '../img/boba-finder-screenshot/gongcha.png'
import Profile from '../img/boba-finder-screenshot/profile.png'
import SignUp from '../img/boba-finder-screenshot/signup.png'

class BobaFinderSlider extends React.Component {
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
        embedUrl: 'https://www.youtube.com/embed/qr4X7a85PrA?autoplay=1&showinfo=0',
        description: 'Click to play Boba Finder demo video',
        renderItem: this._renderVideo.bind(this)
      },

      {
        original: Main,
        thumbnail: Main
      },
      {
        original: KFTea,
        thumbnail: KFTea
      },
      {
        original: Gongcha,
        thumbnail: Gongcha
      },

      {
        original: Profile,
        thumbnail: Profile
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

export default BobaFinderSlider;
