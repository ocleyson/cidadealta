import { useCallback, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { useFetch } from '../../app/reactHooks';
import SignInView from './SignInView';

interface IUser {
    id: number;
    nome: string;
    senha: string;
}

export function SignInContainer() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const { data: apiData, loading: apiLoading } = useFetch<IUser[]>('/usuarios');

    const navigate = useNavigate();

    useEffect(() => {
        const userId = localStorage.getItem('@cidadealta/userId');

        if (userId) navigate('/authenticated/home');
    }, [navigate]);

    const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setLoading(true);

        const user = apiData.find(user => user.nome.toLowerCase() === name.toLowerCase().trim() && user.senha.toLowerCase() === password.toLowerCase());

        if (!user) {
            setError('Usuário ou senha inválidos');     
        } else {
            localStorage.setItem('@cidadealta/userId', user.id.toString());
            navigate('/authenticated/home');
        } 

        setLoading(false);
    }, [apiData, navigate, name, password]);

    return (
        <>
            <SignInView
                name={name}
                setName={setName}
                password={password}
                setPassword={setPassword}
                error={error}
                loading={loading || apiLoading}
                handleSubmit={handleSubmit}
            />
        </>
    );
}
