import React from "react";
import Article from "./Article";

function ArticleList(props) {
    const postItems = props.posts.map(post => (
        <Article key={post.id} title={post.title}
            date={post.date || "January 1,1970"}
            preview={post.preview} />
    ));

    return (
        <main>
            {postItems}
        </main>
    )

}

export default ArticleList;