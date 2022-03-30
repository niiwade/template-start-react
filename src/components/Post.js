import React, { useState, useEffect } from "react";
import "../blog.css"


const Post = ({ post }) => {

    const [isSelected, setIsSelected] = useState({ selected: false })

    useEffect(() => {

    }), [isSelected]

    return (
        <div className="blog-post">
            <div className="blog-post-image">
                <img src={post.image} width="250" height="250" />
            </div>

            <div className="blog-post-details">
                <p>{post.updatedAt}</p>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
                <a href={post.blogLink} >Read More</a>
            </div>
            <button
                onClick={() => setIsSelected({ selected: false })}
                style={{ height: 40, bordereRadius: 6, backgroundColor: "yellowgreen" }}>
                {isSelected.selected ? "selected" : "select"}
            </button>
        </div>

    )
}


export default Post;