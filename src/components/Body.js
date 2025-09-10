import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () =>{ 
    let [listOfrestaurant, setListOfrestaurant] = useState([]);
    let[filteredRestuarant , setfilteredRestuarant] = useState([]);
    useEffect(()=> {
        fetchData();
    }, []);
const [searchText, setsearchText ] = useState("");
    const fetchData = async () => 
    {
        const data = await fetch("https://raw.githubusercontent.com/BaratArghyadeep/Java-Script/refs/heads/main/apiresponse.json");
        const json = await data.json();
        setListOfrestaurant(json);
        setfilteredRestuarant(json);
    }
   
    console.log(listOfrestaurant);

    return listOfrestaurant.length === 0 ? <Shimmer/>:(
        

      
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=> {
                        setsearchText(e.target.value);

                    }}/>
                    <button onClick={()=> {
                        console.log(searchText);
                        const filteredres = listOfrestaurant.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setfilteredRestuarant(filteredres);


                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={()=> {
                   const filteredList = listOfrestaurant.filter((x)=> x.info.avgRating>4.2);
                    setListOfrestaurant(filteredList)

                }}>Top rated button</button>
            </div>
            <div className="res-container">
                {
                    filteredRestuarant.map((restaurant)=> 
                        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    )
                }

            </div>
        </div>


    );
}

export default Body;