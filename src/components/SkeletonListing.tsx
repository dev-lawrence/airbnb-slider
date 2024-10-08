const SkeletonListing = () => {
  return (
    <div className="skeleton-loader">
      {[1, 2, 3, 4].map((item) => (
        <div key={item} className="skeleton-card">
          <div className="skeleton-image"></div>
          <div className="skeleton-info">
            <div className="skeleton-title"></div>
            <div className="skeleton-host"></div>
            <div className="skeleton-price"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonListing;
