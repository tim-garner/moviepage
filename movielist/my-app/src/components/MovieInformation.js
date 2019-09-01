import React from "react";

function MovieInformation(props) {
    return (
        <div className="text-center">
            <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "12px auto"}} />
            <h4>Directors: {props.director} </h4>
            <h4>Genre: {props.genre}</h4>
            <h4>REleased: {props.released}</h4>
            </div>


    );
}

export default MovieInformation;