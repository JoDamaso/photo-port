import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
// import photo from '../../assets/small/commercial/0.jpg';
import PhotoList from '../PhotoList'

function Gallery({ currentCategory }) {
    //impure function 
    // const currentCategory = {
    //     name: "commerical",
    //     description: "Photos of grocery stores, food trucks, and other comercial projects",
    // };
    const { name, description } = currentCategory;

    return (
        <section>
            <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
            <p>{description}</p>
            <PhotoList category={currentCategory.name} />
        </section>
    );
}



export default Gallery;

