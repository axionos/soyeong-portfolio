import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import Login from '../img/city-guru-screenshot/login.png';
import MainMenu from '../img/city-guru-screenshot/mainmenu.png'
import Search from '../img/city-guru-screenshot/1-search.png'
import Salary from '../img/city-guru-screenshot/2-salary.png'
import Salary2 from '../img/city-guru-screenshot/3-salary-2.png'
import Save from '../img/city-guru-screenshot/4-savefavorite.png'
import Favorites from '../img/city-guru-screenshot/5-favorites.png'
import FunFacts from '../img/city-guru-screenshot/6-funfacts.png'
import Quality from '../img/city-guru-screenshot/7-qualityoflife.png'
import Safety from '../img/city-guru-screenshot/8-safest.png'
import MostFavorites from '../img/city-guru-screenshot/9-mostfavorites.png'
import QualityOfLife from '../img/city-guru-screenshot/10-qualityoflife2.png'
import Bye from '../img/city-guru-screenshot/11-bye.png'

class CityGuruSlider extends React.Component {
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
        original: MainMenu,
        thumbnail: MainMenu
      },
      {
        original: Search,
        thumbnail: Search
      },
      {
        original: Salary,
        thumbnail: Salary
      },

      {
        original: Salary2,
        thumbnail: Salary2
      },
      {
        original: Save,
        thumbnail: Save
      },
      {
        original: Favorites,
        thumbnail: Favorites
      },
      {
        original: FunFacts,
        thumbnail: FunFacts
      },
      {
        original: Quality,
        thumbnail: Quality
      },
      {
        original: Safety,
        thumbnail: Safety
      },
      {
        original: MostFavorites,
        thumbnail: MostFavorites
      },
      {
        original: QualityOfLife,
        thumbnail: QualityOfLife
      },
      {
        original: Bye,
        thumbnail: Bye
      }
    ]

    return (
      <ImageGallery items={images} />
    );
  }

}

export default CityGuruSlider;
