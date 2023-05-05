import React, { useContext } from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { Tooltip } from 'react-tooltip';


const NavigationBar = () => {
  const { user, logOutUser,loading } = useContext(AuthContext)
  const handleLogOut = () => {
    logOutUser()
  }
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home"><img style={{ height: '50px' }} src='logo.png' alt="" /></Navbar.Brand>
          <Nav className="me-auto d-flex gap-3">
            <Link className='text-decoration-none text-dark' to='/'>Home</Link>
            <Link className='text-decoration-none text-dark' to='/recipes'>Recipes</Link>
            <Link className='text-decoration-none text-dark' to='/chefs'>Chefs</Link>
          </Nav>
          <div>
            {
              user ? <div className='d-flex align-items-center gap-4'>
                <img
                  style={{ height: '40px', width: '40px' }}
                  className='rounded-circle border-5 border-dark'
                  src={user.photoURL}
                  data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName}
                 alt="" />
                 <Tooltip id="my-tooltip" />
                 
                <Link onClick={handleLogOut} className='text-decoration-none text-dark '>Log Out</Link>
              </div> :
                <div className='d-flex gap-4'>
                  <Link to='/login' className='text-decoration-none text-dark'>Login</Link>
                  <Link to='/register' className='text-decoration-none text-dark'>Register</Link>
                </div>
            }

          </div>
        </Container>

      </Navbar>
    </div>
  );
};

export default NavigationBar;