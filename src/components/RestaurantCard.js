import { IMG_CDN_URL } from "../utils/constants";

const styleCard = 
{
    backgroundColor : "#f0f0f0"
}

export function getImageUrl(cloudinaryImageId, width = 508, height = 320) {
    return `${IMG_CDN_URL}fl_lossy,f_auto,q_auto,w_${width},h_${height},c_fill/${cloudinaryImageId}`;
}

const RestaurantCard = ({resData}) => {
    //console.log(resData);
    return(

        <div className="res-card" style={styleCard}>
            <img 
            className="res-logo"
            
            alt="res-logo"

            
            src={getImageUrl(resData.info.cloudinaryImageId)}/>

            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.costForTwo}</h4>
            <h4>{resData.info.avgRating} starts</h4>
           <h5>{resData.info.deliveryTime}</h5>
        </div>
    )

}
export default RestaurantCard;