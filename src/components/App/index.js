import React, { useState } from 'react';

import Post from '../Post';
import Header from '../Header';
import { ThemeProvider } from '../../context/ThemeContext';

import {Title} from './styles';

function App() {

    const [posts, setPosts] = useState([
        { id: Math.random(), title: 'Title#01', subtitle: 'Subtitle#01', likes: 50, read: false, removed: false},
        { id: Math.random(), title: 'Title#02', subtitle: 'Subtitle#02', likes: 10, read: true, removed: false},
        { id: Math.random(), title: 'Title#03', subtitle: 'Subtitle#03', likes: 20, read: false, removed: false},
    ])

    function handleRefresh() {
        setPosts((prevState) => [
            ...prevState,
            {
                id: Math.random(),
                title: `Title#0${prevState.length + 1}`,
                subtitle: `Subtitle#0${prevState.length + 1}`,
                likes: 30,
            }
        ])
    }

    function handleRemovePost(postId) {
        setPosts((prevState) => prevState.map(
            post => (post.id === postId
                ? { ...post, removed: true}
                : post
            )
        ))
    }

    return (
        <ThemeProvider>
            <Header>
                <Title as="h2">Posts da semana</Title>
                <button onClick={handleRefresh}>Atualizar</button>
            </Header>

            <hr />

            {posts.map(post => (
                <Post
                    key={post.id}
                    post={post}
                    onRemove={handleRemovePost}
                />
            ))}

        </ThemeProvider>
    )
}

export default App;
