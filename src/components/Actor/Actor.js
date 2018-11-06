import React from 'react';

export default (props) => {
    const { row: actor } = props;
    
    return (
        <   div key = { `${actor.person.id} + ${actor.character.id}` } className = "t-person">
            <p>{ actor.person.name }</p>
            <img src = { actor.person.image.medium } alt = {actor.person.name} />
        </div>
    );                            
}