import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import SingleRecipe from '../SingleRecipe/SingleRecipe';
import './ChefDetails.css'
import { FaHeart } from 'react-icons/fa';

const ChefDetails = () => {
    const chefData = useLoaderData();
    return (
        <Container>
            {
                chefData.map(data=>data.chefInfo.img && <div>
                    <img className='img-fluid' src={data.chefInfo.img} />
                    <div className='mt-5'>
                        <h4 className='fs-1'>{data.chefInfo.chef_name}</h4>
                        <p><span className='fw-bold'>Short Bio</span> :{data.chefInfo.vio}</p>
                        <div className='d-flex gap-2'>
                            <button className='btn btn-outline-info'>Like : {data.total_view}</button>
                            <button className='btn btn-outline-info'>Number of Recipes: {chefData.length}</button>
                            <button className='btn btn-outline-info'>Experience: {data.years_of_experience}</button>
                            <button className='btn btn-outline-info'><FaHeart></FaHeart></button>
                        </div>
                    </div>
                </div>)
            }
            <div className='single-rec'>
                {
                    chefData.map(data=><SingleRecipe key={data.postId} data={data}></SingleRecipe>)
                }
            </div>
        </Container>
    );
};

export default ChefDetails;