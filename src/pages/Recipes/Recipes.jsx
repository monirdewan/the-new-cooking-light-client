import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleRecipe from '../SingleRecipe/SingleRecipe';
import { Col, Container, Row } from 'react-bootstrap';
import './Recipes.css'


const Recipes = () => {
    const recipesData = useLoaderData();
    return (
        <Container>
            <h2>Recipes</h2>
            {/* <Row>
                <Col lg={4}>{
                recipesData.map(data=><SingleRecipe key={data.postId} data={data}></SingleRecipe>)
            }</Col>
            </Row> */}
            <div className='row'>
                <div className='recipes'>
                    {recipesData.map(data=><SingleRecipe key={data.postId} data={data}></SingleRecipe>)}
                </div>
            </div>
        </Container>
    );
};

export default Recipes;