import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Post from './Post';

function PostsList({ posts }) {
    return posts.map((post) => (
        <Row className="mt-4" key={post.id}>
            <Link
                className="text-decoration-none text-reset"
                to={`/posts/${post.id}`}
            >
                <Post post={post} />
            </Link>
        </Row>
    ));
}

export default PostsList;
