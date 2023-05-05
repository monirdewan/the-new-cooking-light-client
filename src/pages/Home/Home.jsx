import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './Home.css'
import ChefCard from '../Chefs/ChesCard/ChefCard';
import SingleRecipe from '../SingleRecipe/SingleRecipe';

const Home = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('https://the-new-cooking-light-server-monirdewan.vercel.app/recipes')
        .then(res => res.json())
        .then(data => setRecipes(data))
    }, []);
    const shortData = recipes.slice(0,6)
    return (
        <Container>
            <div className='home'>
                <div className="home-banner-img">
                <img className='rounded img-fluid' src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className="home-banner-text">
                    <h2>The New Cooking Light Resturant </h2>
                    <h4>Always Provide Delicious Foods</h4>
                    <p>Overall, a new cooking restaurant has the potential to become a beloved destination for food lovers and a valuable addition to the local culinary scene. With careful planning, attention to detail, and a passion for great food and hospitality, the restaurant can establish a loyal customer base and achieve long-term success.</p>
                </div>

                <div className='chef-head'>
                <h4 className='chef-title'>Our World Class Chefs</h4>
                <div className='our-chef'>
                {recipes.map(data=>data.chefInfo.img&& <ChefCard data={data} key={data.postId}></ChefCard>)}
                </div>
            </div>
                <div className='chef-head'>
                <h4 className='chef-title'>Our Recipes</h4>
                <div className='our-chef'>
                {shortData.map(data=><SingleRecipe key={data.postId} data={data}></SingleRecipe>)}
                </div>
            </div>

            </div>
           
        </Container>
    );
};

export default Home;