import React from "react";

function About(props) {
    const blogImage = props.blogImage ? props.blogImage : "https://via.placeholder.com/215";

    return (
        <aside>
            <img src={blogImage} alt="blog logo" />
            <p>{props.aboutText}</p>
        </aside>
    );
}

export default About;