import React from 'react'
import './Gallery.scss'
import ImageGallery from "react-image-grid-gallery";
const imagesArray = [
  {
    alt:"rooms-images",
    src:"./images/ca-creative-cdVqG9vnCVw-unsplash.jpg",
    caption:"about image"
  },
  {
    alt:"rooms-images",
    src:"./images/ca-creative-cdVqG9vnCVw-unsplash.jpg",
    caption:"about image"
  },
  {
    alt:"rooms-images",
    src:"./images/louis-hansel-1keEJmqm8vU-unsplash.jpg",
    caption:"about image"
  }
  ,
  {
    alt:"rooms-images",
    src:"./images/mario-raj-vsnAIYA9bms-unsplash.jpg",
    caption:"about image"
  }
  ,
  {
    alt:"rooms-images",
    src:"./images/pille-r-priske-maxIYJlFfxI-unsplash.jpg",
    caption:"about image"
  },
  {
    alt:"rooms-images",
    src:"./images/ca-creative-cdVqG9vnCVw-unsplash.jpg",
    caption:"about image"
  }
];
const Gallery = () => {
  return (
    <div id='gallery'>
    <div id='heading'>
      <p className='button-like'>GALLARY</p>
      <h2>Check our Food <span>Images</span></h2>
      <p>You can check some of the photos of our hotel of different rooms including lobby.</p>
      </div>
      <div id="list-ofImages">
      <ImageGallery imgArray={imagesArray} columnWidth={330} gapSize={60} />
      </div>
    </div>
  )
}

export default Gallery
