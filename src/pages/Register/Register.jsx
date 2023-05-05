import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";



const Register = () => {
    const { registerUser,LoginInWithGoogle,loginWithGitHub,updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        setError('')
        setSuccess('')
        
        if(!/(?=.{6,})/.test(password)){
            setError('Your password should be 6 characters')
            return;
        }else if(!/(?=.*[a-zA-Z])/.test(password)){
            setError('You should enter letter small and capital')
            return;
        }else if(!/(?=.*\d)/.test(password)){
            setError('You should enter some digits')
            return;
        }else if(!/(?=.*[!@#$%&? "])/.test(password)){
            setError('You Should  enter a Special characters')
            return;
        }

        if(name,photo,email,password){
            registerUser(email, password)
            .then(result => {
                const registeredUser = result.user;
                updateProfeleData(registeredUser,name,photo)
                setSuccess('Your account Created')
                form.reset();
                
            })
            .catch(error => {
                setError(error.message)
            })

            const updateProfeleData=(user,name, photo)=>{
                updateUserProfile(user,name,photo)
                .then(()=>{
                    
                })
                .catch(error =>{
                    setError(error.message)
                })
            }
                }else{
                    setError('All field is required Input all data')
                }

            
    }
    
        
        

    const handleGoogleLogin =()=>{
        LoginInWithGoogle()
        .then(()=>{
            setSuccess('SuccesFully Login With Google')
        })
        .catch(error =>{
            setError(error.message)
        })
    }

    const handleGitHubLogin = ()=>{
        loginWithGitHub()
        .then(result =>{
            setSuccess('SuccesFully Login With GitHub')
        })
        .catch(error =>{
            setError(error.message)
        })
    }
    return (
        <Container className='w-25 my-5'>
            <h2>Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' required placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' required placeholder="Photo URL" />
                </Form.Group>
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
                    Register
                </Button>
            </Form>
            <p className='my-2'>If you have an Account Please <Link to='/login'>Login</Link></p>
            <p><small className='text-danger'>{error}</small></p>
            <p><small className='text-success'>{success}</small></p>
            <div className='d-flex flex-column gap-3 align-items-center mt-4 text-aligh-left'>
                <button onClick={handleGoogleLogin} type="button" className="btn btn-outline-primary"><FaGoogle></FaGoogle> Login With Google</button>
                <button onClick={handleGitHubLogin} type="button" className="btn btn-outline-secondary"><FaGithub/> Login With GitHub</button>
            </div>
        </Container>
    );
};

export default Register;