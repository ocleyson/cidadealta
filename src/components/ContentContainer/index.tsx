import { Container } from './styles';

type Props = {
    children: JSX.Element
}

function ContentContainer({ children }: Props) {
    return (
        <Container>
            { children }
        </Container>
    );
}

export default ContentContainer;
