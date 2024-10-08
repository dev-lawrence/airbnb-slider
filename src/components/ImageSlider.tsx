import { ListingData } from '../libs/types';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

interface ImageSliderProps {
  listings: ListingData[];
}

const ImageSlider = ({ listings }: ImageSliderProps) => {
  return (
    <div className="listings">
      {listings.map((listing) => (
        <div className="listing-card" key={listing.id}>
          <Splide
            options={{
              type: 'loop',
              perPage: 1,
              gap: '.2rem',
              speed: 700,
            }}
          >
            {listing.images.map((image, index) => (
              <SplideSlide key={index}>
                <div className="image-slider">
                  <img src={image} alt="" />

                  <button className="share-button">
                    <i className="fa-solid fa-share-nodes"></i>
                  </button>
                </div>
              </SplideSlide>
            ))}
          </Splide>

          <div className="listing-info">
            <h2 className="listing-title">{listing.title}</h2>
            <p className="listing-host">{listing.host}</p>
            <p className="listing-price">{listing.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
