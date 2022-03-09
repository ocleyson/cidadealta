import { Button } from './styles';
import Spinner from '../Spinner';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    buttonText: string;
    loading: boolean;
    isDeleteButton?: boolean;
}

function SubmitButton({ buttonText, loading, isDeleteButton = false,  ...props }: Props) {
    return (
        <Button isDeleteButton={isDeleteButton} {...props}>
            {loading ? <Spinner /> : buttonText}
        </Button>
    );
}

export default SubmitButton;
