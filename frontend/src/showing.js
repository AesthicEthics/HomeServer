import React, { Component } from "react";
import pic from "./images/this.jpg"


class show extends Component{
    render(){
        return(
            <>
            <p>HELLO</p>
            <img src={pic} />
            </>
        )
    }
}

export default show;