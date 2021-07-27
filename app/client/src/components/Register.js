import React,{useState} from 'react';
import {Form,Button} from 'react-bootstrap';
import axios from "axios";
import {useHistory} from 'react-router-dom';


const Register = () => {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e) => {
        try{
            e.preventDefault();
            const userObject = {
                username:username,
                password:password
            }
            const user = await axios.post('/user/register',userObject)
            console.log(user.data)
            history.push('/login')
        } catch(e) {
            console.log(e);
        }
    }
    return (
        <div className="full-page-wrapper d-flex flex-column align-items-center justify-content-center mono-font">
            <Form onSubmit={handleSubmit} className="drop-shadow bg-main  col-6 d-flex flex-column py-5">
                <h2 className ="align-self-center my-3 mono-font"><span className="pink">&#123;</span>Create:Account<span className="pink" >&#125;</span></h2>
                <Form.Group className="p-4">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control value={username} onChange={(e)=>setUsername(e.target.value)} type='text' placeholder='enter username'></Form.Control>
                </Form.Group>
                <Form.Group className="p-4">
                    <Form.Label>Password</Form.Label>
                    <Form.Control  value={password} onChange={(e)=>setPassword(e.target.value)}type='password' placeholder='enter password'></Form.Control>
                </Form.Group>
                <Button type="submit" className="align-self-center my-3 btn-lg rounded-0" variant="outline-light">Submit</Button>
                
            </Form>
        </div>
    )
}
export default Register