import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import Main from '../img/motor-impact-screenshot/main.png';
import Main2 from '../img/motor-impact-screenshot/maindown.png'
import About from '../img/motor-impact-screenshot/aboutus.png'
import Reasons from '../img/motor-impact-screenshot/fourreasons.png'
import Coverage from '../img/motor-impact-screenshot/coverage.png'
import Product from '../img/motor-impact-screenshot/products.png'
import ProductList from '../img/motor-impact-screenshot/productslist.png'
import Warranty from '../img/motor-impact-screenshot/warranty.png'
import Privacy from '../img/motor-impact-screenshot/privacy.png'
import Privacy2 from '../img/motor-impact-screenshot/privacydown.png'
import Contact from '../img/motor-impact-screenshot/contact.png'

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
        original:Main,
        thumbnail: Main
      },

      {
        original: Main2,
        thumbnail: Main2
      },
      {
        original: About,
        thumbnail: About
      },
      {
        original: Reasons,
        thumbnail: Reasons
      },
      {
        original: Coverage,
        thumbnail: Coverage
      },
      {
        original: Product,
        thumbnail: Product
      },
      {
        original: ProductList,
        thumbnail: ProductList
      },
      {
        original: Warranty,
        thumbnail: Warranty
      },
      {
        original: Privacy,
        thumbnail: Privacy
      },
      {
        original: Privacy2,
        thumbnail: Privacy2
      },
      {
        original: Contact,
        thumbnail: Contact
      }
    ]

    return (
      <ImageGallery items={images} />
    );
  }

}

export default TripPlannerSlider;
