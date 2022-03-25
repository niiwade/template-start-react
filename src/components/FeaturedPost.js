import React from "react";
import "../blog.css"


const FeaturedPost = ({ image, title, updateAt, content, blogLink, width, height }) => {
    return (
        <div className="blog-post-feature">
            <div className="blog-post-feature-image">
                <img src={image} alt="img" width={width} height={height} />
            </div>
            <div className="blog-post-details">
                <p>{updateAt}</p>
                <h1>{title}</h1>
                <p>{content}</p>
                <a href={blogLink}></a>
            </div>

        </div>
    )
}

export default FeaturedPost;