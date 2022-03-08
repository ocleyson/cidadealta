import { Button } from './styles';
import Spinner from '../Spinner';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    buttonText: string;
    loading: boolean;
}

function SubmitButton({ buttonText, loading, ...props }: Props) {
    return (
        <Button type="submit" {...props}>
            {loading ? <Spinner /> : buttonText}
        </Button>
    );
}

export default SubmitButton;
