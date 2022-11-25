import blogFetch from '../axios/config';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
//digita RAFCE e cria o componente


const Home = () => {

  const[posts, setPosts] = useState([])

  const getPosts = async() => { /*responsavel por pegar os dados da API -- tipo fetch*/
    try {
      const response = await blogFetch.get('/posts')
      const data = response.data;
      setPosts(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPosts();
  }, [])

  useEffect

  return (
    <div className="home">
      <h1>Últimos posts</h1>
      {posts.lenght === 0 ? (<p>Carregando...</p>) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/Posts/${post.id}`} className="btn">Ler Mais</Link>
          </div>
        ))
      )}

    </div>
  )
}

export default Home;