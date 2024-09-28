import StarRating from "../star-rating";

const ReviewList = ({ reviews }) => {
  if (reviews.length === 0) {
    return <p className="text-dark-brown">No reviews yet.</p>;
  }

  return (
    <div className="mt-4  flex flex-col justify-start">
        
      {reviews.map((review) => (
        <div key={review.id} className="mt-4 ">

        <div className="flex items-center ">
            <p className="font-bold uppercase tracking-wide">{review.username}</p>
          </div>
          <div className="flex flex-row">
          <p className="text-smtext-dark-brown font-medium">{review.description}</p>
            <StarRating rating={review.rating} />
            </div>
          
     
        </div>
        
      ))}
             
     
    </div>
  );
};

export default ReviewList;
