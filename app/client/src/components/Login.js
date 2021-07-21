import React from 'react';
import {Form,Button} from 'react-bootstrap'


const Login = () => {
    return (
        <>
        <div className="full-page-wrapper d-flex flex-column align-items-center justify-content-center mono-font">
            <Form className="drop-shadow bg-main  col-6 d-flex flex-column py-5">
                <h2 className ="align-self-center my-3 mono-font"><span className="pink">&#123;</span>Login<span className="pink" >&#125;</span></h2>
                <Form.Group className="p-4">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type='text' placeholder='enter userName'></Form.Control>
                </Form.Group>
                <Form.Group className="p-4">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='text' placeholder='enter password'></Form.Control>
                </Form.Group>
                <Button type="submit" className="align-self-center my-3 btn-lg rounded-0" variant="outline-dark">Submit</Button>
            </Form>
        </div>
        </>
    )
}

export default Login
