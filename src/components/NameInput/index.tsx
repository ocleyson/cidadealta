import React from 'react';
import InputLabel from '../InputLabel';
import Input from '../Input';

function NameInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <InputLabel labelId="name">
            <>
                Nome

                <Input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="text"
                    required
                    {...props}
                />
            </>
        </InputLabel>
    );
}

export default NameInput;
