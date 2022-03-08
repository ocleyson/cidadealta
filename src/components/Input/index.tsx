import React from 'react';
import { Input as StyledInput } from './styles';

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <StyledInput {...props} />
    );
}

export default Input;
