import Card from 'react-bootstrap/Card';
const dayjs = require('dayjs');
require('dayjs/locale/ru');
dayjs.locale('ru');
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

function Post({ post }) {
    return (
        <Card>
            <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                    {'Опубликовано: ' + dayjs(post.created).fromNow()}
                </Card.Subtitle>
                <Card.Text>{post.content}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Post;
