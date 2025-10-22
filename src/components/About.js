import React from "react";
import User from "./User";
import UserClass from "./UserClass";


class About extends React.Component
{
    constructor(props)
    {
        super(props);

       // console.log("Parent constructor");

    }
    componentDidMount()
    {
        //console.log("Parent component did mount");
        // API calls
    }
    

    render()
    {
      //  console.log("Parent render ");
        return(
            

            <div className="about">
                <h1> This is the about section</h1>
    
                <UserClass name = "Arghyadeep Barat" place = "Bangalore"/>
    
            </div>
        
        )

    }
}

export default About;  

/*

- Parent constructor
- Parent Render
    - Arghyadeep Constructor
    - Arghyadeep Render

    - Elon Constructor
    - Elon Render

    -- DOM update happens

    - Arghyadeep Component Did mount
    - Elon Component Did mount

- Parent Did Mount 

*/
