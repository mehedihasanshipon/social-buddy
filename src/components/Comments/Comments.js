import React from 'react';
import './Comments.css'

const Comments = (props) => {
    const {name,email,body} = props.comment;
    return (
        <div className ="col-md-10">
            
            <div className = "comment">
                <h6><strong>Name:</strong> {name} </h6>
                <h6><strong>Email:</strong> {email} </h6>
                <h6><strong>Body:</strong> {body} </h6>
            </div>
        </div>
    );
};

export default Comments;