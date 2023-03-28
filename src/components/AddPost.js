import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PostsContext from '../contexts/PostsContext';
import PostForm from './PostForm';
import ClosePostButton from './ClosePostButton';

function AddPost() {
    const [postContent, setPostContent] = useState('');
    const { setUpdated } = useContext(PostsContext);
    const navigate = useNavigate();

    const handleFormChange = (evt) => {
        setPostContent(evt.target.value);

        localStorage.setItem('postContent', evt.target.value);

        if (evt.target.value === '') {
            localStorage.removeItem('postContent');
        }
    };

    const handleAddPost = (evt) => {
        evt.preventDefault();

        fetch(process.env.REACT_APP_POSTS_URL, {
            method: 'POST',
            body: JSON.stringify({ id: 0, content: postContent }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `${response.status}: ${response.statusText}`
                    );
                }
                setPostContent('');
                localStorage.removeItem('postContent');
                setUpdated(new Date().getTime());
                redirect();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const redirect = () => navigate(process.env.REACT_APP_INDEX_URL);

    useEffect(() => {
        const localStorageText = localStorage['postContent'];
        if (localStorageText) {
            setPostContent(localStorageText);
        }
    }, []);

    return (
        <>
            <ClosePostButton />
            <PostForm
                handleSubmit={handleAddPost}
                controlId={'newPost'}
                ariaLabel={'New post'}
                placeholder={'Что у вас нового'}
                value={postContent}
                handleChange={handleFormChange}
                buttonText={'Опубликовать'}
            />
        </>
    );
}

export default AddPost;
