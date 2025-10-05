import React from "react"
class UserClass extends React.Component{

    constructor(props) {
        super(props);

        console.log("child constructor called");
        
        this.state = {
            count : 0,
        }

    }

    componentDidMount()
    {
        console.log("Child component did mount");
    }
    
    render()
    {
        const {name , place} = this.props;
        const {count} = this.state;
        return(

            <div className="user-card">
                <h1>Count : {count}</h1>
                <button onClick={() => {
                    // Never update state variable directly 
                    this.setState({
                        count: this.state.count + 1
                    })
                }}> Increase Count</button>
                <h2>Name: {name}</h2>
                <h2>Location: {place}</h2>
                <h2>Contact : barat.arghyadeep01@gmail.com</h2>
    
            </div>
        )
    }

}

export default UserClass;