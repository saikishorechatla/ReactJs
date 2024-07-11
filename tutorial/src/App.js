import { useEffect, useState } from "react";
import "./App.css";

const RestaurantCards = (props) => {
  console.log(props);
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla = {} } = resData.info || {};

  return (
    <div className='res-cards' style={{ backgroundColor: "#f0f0f0", padding: "10px", margin: "10px" }}>
      <div className='res-logo'>
        <img className="logo" src={cloudinaryImageId ? `https://res.cloudinary.com/demo/image/upload/${cloudinaryImageId}` : ''} alt="Restaurant Logo" style={{ width: "100%" }} />
      </div>
      <h2>{name}</h2>
      <h4>Cuisines: {cuisines ? cuisines.join(", ") : "N/A"}</h4>
      <h4>Average Rating: {avgRating || "N/A"}</h4>
      <h4>Delivery Time: {sla.deliveryTime ? sla.deliveryTime + " mins" : "N/A"}</h4>
    </div>
  );
};

function App() {
  const [data, setData] = useState([]);  

  useEffect(() => {
    (async () => {
      try {
        let res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        res = await res.json();
        const restaurants = res.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
        setData(restaurants);  
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    })();
  }, []);

  return (
    <div className="container">
      <h1>Restaurant Cards</h1>
      {data.map((val, index) => (
        <RestaurantCards key={index} resData={val} />
      ))}
    </div>
  );
}

export default App;
