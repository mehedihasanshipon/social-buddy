import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts,setPost] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPost(data))
    },[])
    return (
        <div className = "container">
            <h2>This is home</h2>
            <h4>Posts : {posts.length} </h4>
            <div className = "row">
                {
                    posts.map(post => <Post post={post} />)
                }
            </div>
        </div>
    );
};

export default Home;