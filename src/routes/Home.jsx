import axios from 'axios';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
//digita RAFCE e cria o componente


const Home = () => {

  const[posts, setPosts] = useState([])

  const getPosts = async() => { /*responsavel por pegar os dados da API -- tipo fetch*/
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      const data = response.data;
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPosts();
  }, [])

  useEffect

  return (
    <div>Home</div>
  )
}

export default Home;