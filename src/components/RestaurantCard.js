import { imageBaseUrl } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  // Safely destructure properties
  const {
    name,
    cloudinaryImageId,
    avgRating,
    cuisines,
    costForTwo,
    sla: { deliveryTime } = {},
  } = resData || {};

  const imageSrc = cloudinaryImageId
    ? `${imageBaseUrl}${cloudinaryImageId}`
    : "fallback_image_url_here"; // Add a fallback image URL

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" alt={`${name} logo`} src={imageSrc} />
      <div>
        <h3>{name || "Restaurant Name"}</h3>
        <em>{cuisines ? cuisines.join(", ") : "No cuisines available"}</em>
        <h4>{costForTwo>1000 ? `${costForTwo/100}` : `${costForTwo}`}</h4>
        <h4>{avgRating ? `${avgRating} stars` : "No rating available"}</h4>
        <h4>{deliveryTime ? `${deliveryTime} mins` : "Delivery time not available"}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
