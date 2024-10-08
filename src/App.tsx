import { useEffect, useState } from 'react';
import { mockListings } from './data';
import { ListingData } from './libs/types';
import ImageSlider from './components/ImageSlider';
import SkeletonListing from './components/SkeletonListing';

const App = () => {
  const [listings, setListings] = useState<ListingData[]>([]);
  const [loading, setLoading] = useState(true);

  // simulate an api call
  useEffect(() => {
    const fetchListings = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setListings(mockListings);
      setLoading(false);
    };

    fetchListings();
  }, []);

  return (
    <div className="container">
      <h1>Airbnb Experiences</h1>
      {/* show the listings */}
      {loading ? <SkeletonListing /> : <ImageSlider listings={listings} />}
    </div>
  );
};

export default App;
