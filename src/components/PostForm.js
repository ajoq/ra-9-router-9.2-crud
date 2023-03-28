import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function PostForm({
    handleSubmit,
    controlId,
    ariaLabel,
    placeholder,
    value,
    handleChange,
    buttonText,
}) {
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId={controlId}>
                <Form.Control
                    as="textarea"
                    aria-label={ariaLabel}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                {buttonText}
            </Button>
        </Form>
    );
}

export default PostForm;
