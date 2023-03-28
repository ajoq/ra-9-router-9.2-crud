import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Placeholder from 'react-bootstrap/Placeholder';
import Card from 'react-bootstrap/Card';

function MainPlaceholder() {
    return (
        <>
            <Row xs="auto">
                <Col className="d-flex align-items-center">
                    <Placeholder.Button
                        variant="primary"
                        xs={6}
                        style={{ width: '10rem' }}
                    />
                </Col>
            </Row>
            <Row className="mt-4">
                <Card>
                    <Card.Body>
                        <Placeholder as={Card.Subtitle} animation="glow">
                            <Placeholder xs={6} />
                        </Placeholder>
                        <Placeholder as={Card.Text} animation="glow">
                            <Placeholder xs={7} /> <Placeholder xs={4} />{' '}
                            <Placeholder xs={4} /> <Placeholder xs={6} />{' '}
                            <Placeholder xs={8} />
                        </Placeholder>
                    </Card.Body>
                </Card>
            </Row>
            <Row className="mt-4">
                <Card>
                    <Card.Body>
                        <Placeholder as={Card.Subtitle} animation="glow">
                            <Placeholder xs={6} />
                        </Placeholder>
                        <Placeholder as={Card.Text} animation="glow">
                            <Placeholder xs={7} /> <Placeholder xs={4} />{' '}
                            <Placeholder xs={4} /> <Placeholder xs={6} />{' '}
                            <Placeholder xs={8} />
                        </Placeholder>
                    </Card.Body>
                </Card>
            </Row>
            <Row className="mt-4">
                <Card>
                    <Card.Body>
                        <Placeholder as={Card.Subtitle} animation="glow">
                            <Placeholder xs={6} />
                        </Placeholder>
                        <Placeholder as={Card.Text} animation="glow">
                            <Placeholder xs={7} /> <Placeholder xs={4} />{' '}
                            <Placeholder xs={4} /> <Placeholder xs={6} />{' '}
                            <Placeholder xs={8} />
                        </Placeholder>
                    </Card.Body>
                </Card>
            </Row>
        </>
    );
}

export default MainPlaceholder;
