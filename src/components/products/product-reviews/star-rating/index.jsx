
const StarRating = ({ rating }) => {
  return (
    <div className="flex ms-10">
      {[...Array(5)].map((_, index) => (
        <span key={index}>
          {index < rating ? (
            <i className="fa-solid fa-star text-orange-500"></i> 
          ) : (
            <i className="fa-regular fa-star text-light-orange"></i> 
          )}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
