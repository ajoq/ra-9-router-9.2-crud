import { useContext } from 'react';
import { Link } from 'react-router-dom';
import PostsContext from '../contexts/PostsContext';
import PostsList from './PostsList';
import MainPlaceholder from './MainPlaceholder';
import ErrorAlert from './ErrorAlert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function MainPage() {
    const { posts, error, loading } = useContext(PostsContext);

    return (
        <>
            {loading && <MainPlaceholder />}
            {!loading && error && <ErrorAlert text={error.message} />}
            {!loading && !error && (
                <Row xs="auto">
                    <Col className="d-flex align-items-center">
                        <Link to="/posts/new">
                            <Button variant="primary">Создать пост</Button>
                        </Link>
                    </Col>
                </Row>
            )}
            {!loading && posts && <PostsList posts={posts} />}
        </>
    );
}

export default MainPage;
