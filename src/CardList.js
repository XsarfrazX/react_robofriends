import React from 'react';
import Card from './Card.js';
const CardList = ({robots}) => {

    const cardComponent = robots.map((robot,i) => {
        return <Card key={i} id={robot.id} name={robot.name} email={robot.email} />

    })
    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '500px'}}>
        {cardComponent}
        </div>
        
    );
};

export default CardList;