import React,{useState,useEffect} from 'react';
import axios from 'axios';

function App() {
  const [serverMsg, setServerMsg] = useState('');

  useEffect(() => {
    
    const fetchFromServer = async () =>{
        let response = await axios.get('/api')
        //console.log(response.data.message)
        let message = response.data.message
        setServerMsg(message)
    }
    fetchFromServer();
  },[])


  return (
    <>
    <p>landing page - explain app here and provide link to login register</p>
    {serverMsg && <div>{serverMsg}</div>}
    </>
  );
}

export default App;
