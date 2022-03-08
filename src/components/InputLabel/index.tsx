import { Label } from './styles';

type Props = {
    children: JSX.Element;
    labelId: string
}

function InputLabel({ children, labelId }: Props) {
    return (
        <Label htmlFor={labelId}>
            { children }
        </Label>
    );
}

export default InputLabel;
