import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const RcipeDetails = () => {
    const chefData = useLoaderData();
    const {image_url,recipes_description,rating} = chefData;
    return (
        <div>
            <img className='img-fluid mt-5' src={image_url} alt="" />
            <div>
            <h4>{recipes_description.recipe_name}</h4>
            <p><span className='fw-bold'>Recipes Description:</span> {recipes_description.description}</p>
            <p><span className='fw-bold'>Recipes Ingredients:</span> {recipes_description.ingredients}</p>
            <p><span className='fw-bold'>Recipes Directions:</span> {recipes_description.directions}</p>
            </div>
            <div>
                <button className='btn btn-outline-info'>Rating: {rating.number}</button>
                <button className='btn btn-outline-info'>Rating: <FaHeart></FaHeart></button>
            </div>
           
        </div>
    );
};

export default RcipeDetails;