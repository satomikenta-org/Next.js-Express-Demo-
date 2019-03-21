import { useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';


const Index = () => {
  const [ message, setMassage ] = useState("");
  const handleMakeRequest = async () => {
    try {
      const { data: { message } } = await axios.get('/api/users');
      setMassage(message);
    } catch(err) {
      console.log(err);
    }
  };
  return (
    <Layout>
      <h3>Home Page</h3>
      <button onClick={handleMakeRequest}>Make API Request</button>
      <div>{ message }</div>
    </Layout>
  )
};

export default Index;