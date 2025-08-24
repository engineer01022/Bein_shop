import React from "react";
import './App.css'

function Topic(props){
    return(
        <div className="container topic">
        <h4>{props.name}</h4>
        </div>
    );
}
export default Topic;
