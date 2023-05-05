import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from './ChesCard/ChefCard';
import './Chef.css'

const filterChef = [0];
const Chefs = () => {
    const chefData = useLoaderData();
    const [chef, setChef] = useState([])
    
    return (
        <div className='chef'>
           { chefData.map(data => data.chefInfo.img&& <ChefCard data={data} key={data.postId}></ChefCard>)}
           
        </div>
    );
};

export default Chefs;