const RestaurantCard=(props)=>{
    const {resData}=props;
    // Destructure properties directly from `resData`
    const { image, name, description, currency, price, rating, category, availability } = resData || {};
    return(
      <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
        <img className="res-logo" alt="reslogoo" src={image}></img>
        
        <h3>{name}</h3>
        <h4>{description}</h4>
        
        <h4>{rating?.aggregate_rating} star</h4> {/* Extract rating */}
        <h4>{category}</h4>
        <h4>{availability?.prep_time}</h4> {/* Access prep_time */}
        <h4>{currency}{price}</h4> {/* Display price */}
        
   </div>
    );
  };

  export default RestaurantCard;