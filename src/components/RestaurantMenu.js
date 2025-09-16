import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {

    const[resInfo, setresInfo] = useState(null);

    useEffect(()=> {

        fetchMenu();


    }, []);

    const fetchMenu = async () => {

        const data = await fetch(
            "https://raw.githubusercontent.com/BaratArghyadeep/Java-Script/refs/heads/main/apiresponse.json");
        const json = await data.json();
       // console.log(json);
       setresInfo(json);
       console.log(json[0]);
    }
   

    return resInfo === null ? <Shimmer/> :( <div className="menu"> 

        <h1>{resInfo[0]?.name} </h1>
        <h2>{resInfo[0]?.info?.cuisines.join(",")}</h2>
        <h2>{resInfo[0]?.info?.costForTwo}</h2>
        <h2>{resInfo[0]?.info?.avgRating}</h2>
    </div>)
}
export default RestaurantMenu;