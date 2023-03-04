import React from 'react';

import Post from './Post';
import Header from './Header';

import posts from './mocks'

function App() {
    return (
        <>
            <Header>
                <h2>Posts da semana</h2>
            </Header>

            <hr />

            {posts.map(post => (
                <Post
                    
                    key={post.title}
                    developer={post.developer}
                    likes={post.likes}
                    post={{
                        title: post.title,
                        subtitle: post.subtitle,
                    }}
                />
            ))}

        </>
    )
}

export default App;
