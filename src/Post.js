import React from "react";
import PropTypes from "prop-types"

function Post(props) {
    return (
        <>
            <article>
                <strong>
                    {props.post.read ? <s>{props.post.title}</s> : props.post.title}
                </strong>
                <button onClick={() => props.onRemove(props.post.id)}>Remover</button><br />                
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
        read: PropTypes.bool.isRequired
    }).isRequired
}

export default Post;