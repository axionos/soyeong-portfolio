import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import Welcome from '../img/cocktail-menu-screenshot/welcome.png';
import Mood from '../img/cocktail-menu-screenshot/mood.png'
import Cozy from '../img/cocktail-menu-screenshot/cozy.png'
import Sophisticated from '../img/cocktail-menu-screenshot/sophisticated.png'
import Fun from '../img/cocktail-menu-screenshot/fun.png'
import Classic from '../img/cocktail-menu-screenshot/classic.png'
import Recipe from '../img/cocktail-menu-screenshot/recipe.png'

class CocktailMenuSlider extends React.Component {
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
        original:Welcome,
        thumbnail: Welcome,
        embedUrl: 'https://www.youtube.com/embed/YVpJimVz3iE?autoplay=1&showinfo=0',
        description: 'Click to play Dope Cocktail Menu demo video',
        renderItem: this._renderVideo.bind(this)
      },

      {
        original: Mood,
        thumbnail: Mood
      },
      {
        original: Cozy,
        thumbnail: Cozy
      },
      {
        original: Sophisticated,
        thumbnail: Sophisticated
      },

      {
        original: Fun,
        thumbnail: Fun
      },
      {
        original: Classic,
        thumbnail: Classic
      },
      {
        original: Recipe,
        thumbnail: Recipe
      }
    ]

    return (
      <ImageGallery items={images} />
    );
  }

}

export default CocktailMenuSlider;
