import React from 'react';

const Card = (props) => {

    console.log("HHHHHHHHHHHHIIIIIIIIIIIIII", props);
    return (
        <div className=' tc bg-light-green br3 dib pa3 ma2 grow bw2 shadow-5'>
            <h1>ID {props.id}</h1>
            <img src={`https://robohash.org/${props.id}?100x100`} alt='cool stuff'/>

        <div>
            <h2> Name: {props.name}</h2>
            <p> Email: {props.email} </p>
        </div>
        </div>
    );
}

export default Card;