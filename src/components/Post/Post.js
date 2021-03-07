import React from 'react';
import { useHistory } from 'react-router';
import './Post.css'

const Post = (props) => {
    const history = useHistory();
    const {id,title} = props.post;
    const handleClick = (id) => {
        const url = `/post/${id}`;
        history.push(url);
    }
    return (
        <div className = "col-md-6 col-lg-4 col-xl-3 g-3">
            <div className ="post">
                <h4><strong>Post ID: {id} </strong></h4>
                <h6 className="pt-2">{title}</h6>
                <button onClick ={()=> handleClick(id)} className ="btn btn-danger my-3">Show Details</button>
            </div>
        </div>
    );
};

export default Post;