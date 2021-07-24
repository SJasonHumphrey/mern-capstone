import React,{useState} from 'react';
import {Form,Button,Modal} from 'react-bootstrap';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {useHistory,Link} from 'react-router-dom';
import {login} from '../actions'


const Login = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);

    const handleCloseModal = () => setShow(false);

    const handleSubmit = async (e) => {
        try{
            e.preventDefault();
            const userObject = {
                username:username,
                password:password
            }
            const user = await axios.post('/user/login',userObject)
            //console.log(user.data.token)

            //dispatch an action that stores token in global state
            
                dispatch(login(user.data.token))
                history.push('/home')
                


        } catch(e) {
            console.log('this is the error',e);
            setShow(true)
            
        }
    }

    return (
        <>
        <Modal show={show} onHide={handleCloseModal} className="d-flex flex-column align-items-center justify-content-center mono-font">
            <Modal.Body className="d-flex flex-column align-items-center justify-content-center m-4 text-center">
             Username or password incorrect. Please try again or create an account.
                <Button variant="outline-dark rounded-0 m-4" onClick={handleCloseModal}>Close</Button>
            </Modal.Body>

        </Modal>




        <div className="full-page-wrapper d-flex flex-column align-items-center justify-content-center mono-font">
            <Form onSubmit={handleSubmit} className="drop-shadow bg-main  col-6 d-flex flex-column py-5">
                <h2 className ="align-self-center my-3 mono-font"><span className="pink">&#123;</span>Login<span className="pink" >&#125;</span></h2>
                <Form.Group className="p-4">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type='text' placeholder='enter userName' value={username} onChange={(e)=>setUsername(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className="p-4">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='enter password' value={password} onChange={(e)=>setPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <Button type="submit" className="align-self-center my-3 btn-lg rounded-0" variant="outline-light">Submit</Button>
                <Form.Text className=" text-center text-white fs-5 pt-2">Don't have an account? Create one <Link to="/register" className="login-link">here</Link>.</Form.Text>
            </Form>
            </div>
            </>

    )
}

export default Login
