
import React,{useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

const RequireAuth = (props) => {
    const history = useHistory();
    const auth = useSelector(state => state.users.auth);
    console.log(auth)
    useEffect(() => {
        if(!auth){
            history.push('/loginmessage')
        } 
    },[auth])
    
    return props.children;
}

export default RequireAuth;