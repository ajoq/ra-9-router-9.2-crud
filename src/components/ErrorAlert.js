import Alert from 'react-bootstrap/Alert';

function ErrorAlert({ text }) {
    return <Alert variant="danger">{text}</Alert>;
}

export default ErrorAlert;
