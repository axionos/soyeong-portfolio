import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import Login from '../img/fund-run-screenshot/login.png';
import SignUp from '../img/fund-run-screenshot/signup.png'
import Profile from '../img/fund-run-screenshot/profile1.png'
import Marathon from '../img/fund-run-screenshot/marathon.png'
import MarathonDetail1 from '../img/fund-run-screenshot/marathon-detail-1.png'
import MarathonDetail2 from '../img/fund-run-screenshot/marathon-detail-2.png'
import Charity from '../img/fund-run-screenshot/charity.png'
import Alzheimer from '../img/fund-run-screenshot/alzheimer-association.png'
import Donation from '../img/fund-run-screenshot/donation.png'
import Autism from '../img/fund-run-screenshot/autism.png'
import Profile2 from '../img/fund-run-screenshot/profile2.png'
import Profile3 from '../img/fund-run-screenshot/profile3.png'

class FundRunSlider extends React.Component {
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
        original: Login,
        thumbnail: Login
      },
      {
        original: SignUp,
        thumbnail: SignUp
      },
      {
        original: Profile,
        thumbnail: Profile
      },
      {
        original: Marathon,
        thumbnail: Marathon
      },

      {
        original: MarathonDetail1,
        thumbnail: MarathonDetail1
      },
      {
        original: MarathonDetail2,
        thumbnail: MarathonDetail2
      },
      {
        original: Charity,
        thumbnail: Charity
      },
      {
        original: Alzheimer,
        thumbnail: Alzheimer
      },
      {
        original: Donation,
        thumbnail: Donation
      },
      {
        original: Autism,
        thumbnail: Autism
      },
      {
        original: Profile2,
        thumbnail: Profile2
      },
      {
        original: Profile3,
        thumbnail: Profile3
      },
    ]

    return (
      <ImageGallery items={images} />
    );
  }

}

export default FundRunSlider;
