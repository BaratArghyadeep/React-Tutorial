import React from "react";
import User from "./User";
import UserClass from "./UserClass";


class About extends React.Component
{
    constructor(props)
    {
        super(props);

        console.log("Parent constructor");

    }
    componentDidMount()
    {
        console.log("Parent component did mount");
        // API calls
    }
    

    render()
    {
        return(

            <div className="about">
                <h1> This is the about section</h1>
    
                <UserClass name = "Arghyadeep Barat" place = "Bangalore"/>
    
            </div>
        
        )

    }
}

export default About;  