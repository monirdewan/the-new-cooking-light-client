import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Container className='m-5 '>
            <div className='text-center'>
            <Link  className='text-decoration-none text-dark btn btn-outline-info' to='/recipes'>Recipes</Link>
            <Link className='text-decoration-none text-dark btn btn-outline-info' to='/chefs'>Chefs</Link>
            </div>
           <p className='text-center'>@copy; The new Cooking light All Right reseved</p>
        </Container>
    );
};

export default Footer;