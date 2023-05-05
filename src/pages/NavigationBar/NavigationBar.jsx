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
          <Navbar.Brand href="#home"><img style={{ height: '50px' }} src="https://scontent.fdac96-1.fna.fbcdn.net/v/t39.30808-6/345301165_932674414683548_5796678471629702719_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeE9NzCWs9u8NHiyCRTL4hjQ033rY06aT2TTfetjTppPZKT8aNiiuG7xiHWq7YLuO7jzvOVEFczxeMsB5_OPMpND&_nc_ohc=ruc-cN249dsAX8v1NKG&_nc_zt=23&_nc_ht=scontent.fdac96-1.fna&oh=00_AfDY1aTeU5WRllibLukY60jMfAuj-WZrN2VBdTAs-Yzwhw&oe=64596A37" alt="" /></Navbar.Brand>
          <Nav className="me-auto d-flex gap-3">
            <Link className='text-decoration-none text-dark' to='/'>Home</Link>
            <Link className='text-decoration-none text-dark' to='/recipes'>Recipes</Link>
            <Link className='text-decoration-none text-dark' to='/chefs'>Chefs</Link>
            <Link className='text-decoration-none text-dark' to='/blogs'>Blogs</Link>
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