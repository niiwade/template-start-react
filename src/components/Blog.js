import React from "react";
import "../blog.css"


const Blog = ({ updateAt, title, content, image, blogLink }) => {

    return (
        <div className="blog-post">

            <div className="blog-post-image"><img src={image} /></div>


            <div className="blog-post-details">
                <p>{updateAt}</p>
                <h1>{title}</h1>
                <p>{content}</p>
                <a href={blogLink}></a>
            </div>
        </div>


    )
}


export default Blog