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
  // constructor() {
  //   super();
  //   this.state = {
  //     showIndex: false,
  //     // showBullets: true,
  //     infinite: true,
  //     showThumbnails: true,
  //     showFullscreenButton: true,
  //     showGalleryFullscreenButton: true,
  //     // showPlayButton: true,
  //     // showGalleryPlayButton: true,
  //     showNav: true,
  //     isRTL: false,
  //     // slideDuration: 450,
  //     // slideInterval: 2000,
  //     // slideOnThumbnailOver: false,
  //     thumbnailPosition: 'bottom',
  //     showVideo: {},
  //   };
  // }

  render() {

    const images = [
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
