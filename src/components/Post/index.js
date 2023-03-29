import React from "react";
import PropTypes from "prop-types";

import PostHeader from "./PostHeader";

import { Container, Rate, Subtitle } from "./styles";

function Post(props) {
    return (
        <>
            <Container
                removed={props.post.removed}
                read={props.post.read}
            >
                <PostHeader
                    onRemove={props.onRemove}
                    post={{
                        id: props.post.id,
                        tilte: props.post.tilte,
                        read: props.post.read
                    }}
                />

                <Subtitle>{props.post.subtitle}</Subtitle>
                <Rate>Média: {props.post.likes / 2}</Rate>
            </Container>
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
        removed: PropTypes.bool.isRequired,
    }).isRequired
}

export default Post;