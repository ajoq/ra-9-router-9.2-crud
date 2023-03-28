import React, { useState, useEffect } from 'react';
import PostsContext from '../contexts/PostsContext';

export default function PostsProvider(props) {
    const [posts, setPosts] = useState([]);
    const [updated, setUpdated] = useState(new Date().getTime());
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const loadData = () => {
        setLoading(true);
        fetch(process.env.REACT_APP_POSTS_URL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `${response.status}: ${response.statusText}`
                    );
                }

                return response.json();
            })
            .then((data) => {
                const reversedData = data.reverse();
                setPosts(reversedData);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    };

    useEffect(loadData, []);
    useEffect(loadData, [updated]);

    return (
        <PostsContext.Provider
            value={{
                posts,
                setPosts,
                updated,
                setUpdated,
                error,
                setError,
                loading,
                setLoading,
            }}
        >
            {props.children}
        </PostsContext.Provider>
    );
}
