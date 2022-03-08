import { Container, XCircle, Span } from './styles';

type Props = {
    message: string;
}

function Error({ message }: Props) {
    return (
        <Container>
            <XCircle />
            <Span role="alert">{message}</Span>
        </Container>
    );
}

export default Error;
