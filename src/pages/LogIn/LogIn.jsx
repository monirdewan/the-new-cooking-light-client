import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';


const LogIn = () => {
    const {logInUser,LoginInWithGoogle,loginWithGitHub} = useContext(AuthContext);

    const [error, setError] = useState('')
    const [success, setSuccess]= useState('')
    const handleLogin= event =>{
        event.preventDefault();
        setError('')
        setSuccess('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();
        logInUser(email, password)
        .then(result =>{
            const loggedUser = result.user;
            setSuccess('Your Login Successfull')
        })
        .catch(error =>{
            setError(error.message)
        })
    }

    const handleGoogleLogin =()=>{
        LoginInWithGoogle()
        .then(()=>{
            setSuccess('SuccesFully Login With Google')
        })
        .catch(error =>{
            error(error.message)
        })
    }

    const handleGitHubLogin = ()=>{
        loginWithGitHub()
        .then(result =>{
            const loggedUser = result.user;
            setSuccess('SuccesFully Login With Github')
        })
        .catch(error =>{
            setError(error.message)
        })
    }
    
    return (
        <Container className='w-25 my-5'>
            <h2>Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' required placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' required placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p><small className='text-danger'>{error}</small></p>
            <p><small className='text-success'>{success}</small></p>
            <p className='my-2'>If you are a new User Please <Link to='/register'>Register</Link> </p>
            <div className='d-flex flex-column gap-3 align-items-center mt-4 text-aligh-left'>
                <button onClick={handleGoogleLogin} type="button" className="btn btn-outline-primary"><FaGoogle></FaGoogle> Login With Google</button>
                <button onClick={handleGitHubLogin} type="button" className="btn btn-outline-secondary"><FaGithub/> Login With GitHub</button>
            </div>
        </Container>
    );
};

export default LogIn;