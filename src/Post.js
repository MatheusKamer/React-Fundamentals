import React from "react";
import PropTypes from "prop-types"

function Post(props) {
    return (
        <>
            <article>
                <strong>{props.post.title}</strong><br />
                <small>{props.post.subtitle}</small><br />
                Media: {props.likes / 2}
                <p>Desenvolvedor: {props.developer}</p>
            </article>

            <br />
        </>
    )
}

Post.propTypes = {
    likes: PropTypes.number.isRequired,
    post: PropTypes.shape().isRequired
}

export default Post;