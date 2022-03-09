import React from 'react';

import SubmitButton from '../../components/PrimaryButton';
import Error from '../../components/Error';
import PasswordInput from '../../components/PasswordInput';
import NameInput from '../../components/NameInput';
import { Container, FormContainer, Logo } from './styles';
import LogoImage from '../../assets/cidadealta-logo.jpg';
import Spacer from '../../styles/spacer';

type Props = {
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    error: string | null;
    loading: boolean;
    handleSubmit(event: React.FormEvent<HTMLFormElement>): void;
}

function SignInView({
    name, setName, password, setPassword, error, loading, handleSubmit,
}: Props) {
    return (
        <Container>
            <FormContainer>
                <Logo src={LogoImage} alt="Cidade Alta logo" />

                <Spacer axis='vertical' size={10} />

                <form onSubmit={handleSubmit}>
                    <NameInput
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nome do usuário"
                    />

                    <Spacer axis='vertical' size={10} />

                    <PasswordInput
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Spacer axis='vertical' size={10} />

                    {!!error && <Error message={error} />}

                    <SubmitButton type="submit" buttonText="Entrar" loading={loading} />
                </form>
            </FormContainer>
        </Container>
    );
}

export default SignInView;
