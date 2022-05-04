import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from '../../assets/small/commercial/0.jpg';

function Gallery(props) {
    //impure function 
    const currentCategory = {
        name: "commerical",
        description: "Photos of grocery stores, food trucks, and other comercial projects",
    };

    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
            <div>
                <img src={photo} className="flex-row img-thumbnail mx-1" alt="Commerical Example"></img>
            </div>
        </section>
    );
}



export default Gallery;

