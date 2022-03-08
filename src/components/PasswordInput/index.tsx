import React from 'react';
import InputLabel from '../InputLabel';
import Input from '../Input';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    title?: string;
}

function PasswordInput({
    title = 'Senha', ...rest
}: IProps) {
    return (
        <InputLabel labelId="password">
            <>
                {title}

                <Input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Sua senha"
                    autoComplete="password"
                    required
                    {...rest}
                />
            </>
        </InputLabel>
    );
}

export default PasswordInput;
