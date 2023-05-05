import React from 'react';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './ChefCard.css'

const ChefCard = ({data}) => {
    
    const {years_of_experience,chefInfo,chef_id,postId} = data;
    
   
    
    return (
        <div className='chefInfo'>
            <img className='img-fluid' src={chefInfo.img} alt="" />
            <h4>{chefInfo.chef_name}</h4>
            <small>Experience: {years_of_experience} years</small>
            <br></br>
            <small>Numbers of recipes : {chefInfo.chef_name.length}</small>
            <div>
                <Link to={`/recipes/chef/${chef_id}`}>View recipes</Link>
                <div>
                <FaHeart></FaHeart>
                <FaRegHeart></FaRegHeart>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;