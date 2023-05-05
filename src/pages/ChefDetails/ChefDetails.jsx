import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const chefData = useLoaderData();
    return (
        <div>
            <h2>This is chef details with recipes</h2>
            {
                chefData.map(data=>data.chefInfo.img && <img src={data.chefInfo.img} />)
            }
        </div>
    );
};

export default ChefDetails;