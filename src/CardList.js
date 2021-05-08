import React from 'react';
import Card from './Card.js';
const CardList = ({robots}) => {

    const cardComponent = robots.map((robot,i) => {
        return <Card key={i} id={robot.id} name={robots.name} email={robots.email} />

    })
    return (
        <div>
        {cardComponent}
        </div>
        
    );
};

export default CardList;