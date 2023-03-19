import React from "react";
import PropTypes from "prop-types";

import PostHeader from "./PostHeader";

function Post(props) {
    return (
        <>
            <article>
                <PostHeader
                    onRemove={props.onRemove}
                    post={{
                        id: props.post.id,
                        tilte: props.post.tilte,
                        read: props.post.read
                    }}
                />
                <small>{props.post.subtitle}</small><br />
                Media: {props.post.likes / 2}<br />
            </article>

            <br />
        </>
    )
}

Post.propTypes = {
    onRemove: PropTypes.func.isRequired,
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        read: PropTypes.bool.isRequired,
    }).isRequired
}

export default Post;