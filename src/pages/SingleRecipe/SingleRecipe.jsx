import React from 'react';
import { Link } from 'react-router-dom';

const SingleRecipe = ({data}) => {
    const {postId,chef_id,recipes_description,image_url,chefInfo} =data;
    return (
        <div>
            <img  className='img-fluid rounded' src={image_url} alt="" />
            <h4 className='mt-2'>{recipes_description.recipe_name}</h4>
            <p><span className='fw-bold'>Description :</span>{recipes_description.description.length > 150 && recipes_description.description.slice(0,150)}....<Link>read more</Link></p>
           <Link to={`/recipes/${postId}`} className='btn btn-secondary me-2'> Full Recipe</Link>
           <Link to={`/recipes/chef/${chef_id}`} className='btn btn-secondary'>{chefInfo.chef_name}'s Recipes</Link>
        </div>
    );
};

export default SingleRecipe;