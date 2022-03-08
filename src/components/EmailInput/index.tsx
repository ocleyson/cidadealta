import React from 'react';
import InputLabel from '../InputLabel';
import Input from '../Input';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    title?: string;
}

function EmailInput({
    title = 'Email', ...rest
}: Props) {
    return (
        <InputLabel labelId="email">
            <>
                {title}

                <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Ex.: exemplo@email.com"
                    autoComplete="email"
                    required
                    {...rest}
                />
            </>
        </InputLabel>
    );
}

export default EmailInput;
