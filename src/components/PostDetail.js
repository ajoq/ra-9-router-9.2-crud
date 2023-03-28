import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Post from './Post';
import PostsContext from '../contexts/PostsContext';
import PostForm from './PostForm';
import ClosePostButton from './ClosePostButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';

function PostDetail() {
    const { postId } = useParams();
    const { posts, setUpdated } = useContext(PostsContext);
    const [currentPost, setCurrentPost] = useState();
    const [edit, setEdit] = useState(false);
    const [formContent, setFormContent] = useState('');
    const navigate = useNavigate();

    const findCurrentPost = () => {
        const res = posts.find((post) => post.id === +postId);
        setCurrentPost(res);
    };

    useEffect(findCurrentPost, [posts]);

    const redirect = () => navigate(process.env.REACT_APP_INDEX_URL);

    const handleDeletePost = () => {
        fetch(`${process.env.REACT_APP_POSTS_URL}/${postId}`, {
            method: 'DELETE',
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `${response.status}: ${response.statusText}`
                    );
                }
                setUpdated(new Date().getTime());
                redirect();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleFormChange = (evt) => {
        setFormContent(evt.target.value);
    };

    const handleEditPost = (evt) => {
        evt.preventDefault();

        fetch(process.env.REACT_APP_POSTS_URL, {
            method: 'POST',
            body: JSON.stringify({ id: postId, content: formContent }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `${response.status}: ${response.statusText}`
                    );
                }
                setUpdated(new Date().getTime());
                setEdit(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            {currentPost && !edit && (
                <>
                    <ClosePostButton />
                    <Post post={currentPost} />
                    <Row className="mt-4 gx-2" xs="auto">
                        <Col>
                            <Button
                                variant="primary"
                                onClick={() => {
                                    setEdit(true);
                                    setFormContent(currentPost.content);
                                }}
                            >
                                Изменить
                            </Button>
                        </Col>
                        <Col>
                            <Button variant="danger" onClick={handleDeletePost}>
                                Удалить
                            </Button>
                        </Col>
                    </Row>
                </>
            )}
            {currentPost && edit && (
                <>
                    <ClosePostButton />
                    <PostForm
                        handleSubmit={handleEditPost}
                        controlId={'editPost'}
                        ariaLabel={'Edit post'}
                        placeholder={'Отредактируйте пост'}
                        value={formContent}
                        handleChange={handleFormChange}
                        buttonText={'Сохранить'}
                    />
                </>
            )}
        </>
    );
}

export default PostDetail;
