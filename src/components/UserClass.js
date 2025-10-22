import React from "react"
class UserClass extends React.Component{

    constructor(props) {
        super(props);

        console.log(this.props.name + " child constructor called");
        
        this.state = {
            userInfo :{
                name : "Dummy",
                location: "Default",
           

            },
        }

    }

    async componentDidMount()
    {
        const data = await fetch("https://api.github.com/users/BaratArghyadeep");
        const json = await data.json();
        //console.log(this.props.name+ " Child component did mount");

        this.setState({
            userInfo : json,
        })

       this.timer =  setInterval(() => {

            console.log("Hello Arghyadeep");
            
        }, 1000);
    }

    componentDidUpdate()
    {
        console.log("Component did update");
    }

    componentWillUnmount()
    {
        clearInterval(this.timer);
        console.log("Compoenent will unmount");

    }
    
    render()
    {
        //console.log(this.props.name+ " Child component render");
        const {name , location , avatar_url} = this.state.userInfo;
        
        return(

            <div className="user-card">
                <img src= {avatar_url}/>
               
                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>
                <h2>Contact : barat.arghyadeep01@gmail.com</h2>
    
            </div>
        )
    }

}

export default UserClass;

/****
 * 
 * -- Mounting -----
 * 
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy>
 * Component Did mount
 *      <API Call>
 *      <this.setState> --> State Variable is updated 
 * 
 * -- UPDATE
 * 
 *      render (Api date)
 *      <HTML (new api data)>
 *      Component did update 
 */