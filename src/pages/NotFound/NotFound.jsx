import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Container className='w-100'>
           <div className='d-flex justify-content-center'>
           <img className='img-fluid' src="https://scontent.fdac96-1.fna.fbcdn.net/v/t39.30808-6/344572251_1194055611313101_6439087406205959265_n.jpg?stp=dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGZoFrPUQD26swFss0RKEJBcFgW7x2AUAlwWBbvHYBQCXlXOAfNMmMpLYI0U3X1pee2gSyiAQO7EjYNI-x1H7tK&_nc_ohc=RSbd8jhAagcAX8L2mhX&_nc_zt=23&_nc_ht=scontent.fdac96-1.fna&oh=00_AfDiRiqQBOwD1ZBKIdM8vRRMTC4Alw2zIbu68UGsEVfrmQ&oe=645996F3" alt="" />
           </div>
           <div className='text-center'>
           <h4>OPPS! PAGE NOTE FOUND</h4>
           <p>The page you are looking for might have been removed had its name changed or its temporarily unvaiable</p>
          <p>Back <Link to='/'>Home</Link></p>
           </div>
        </Container>
    );
};

export default NotFound;