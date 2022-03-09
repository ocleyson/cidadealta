import NavBar from '../NavBar';
import { Main } from './styles';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

type Props = {
    children: JSX.Element
}

function AuthenticatedApp({ children }: Props) {
    const navigate = useNavigate();

    const signOut = () => {
        localStorage.clear();
        navigate('/');
    }

    useEffect(() => {
        const userId = localStorage.getItem('@cidadealta/userId');

        if (!userId) navigate('/');
    }, [navigate])

    return (
        <>
            <NavBar signOut={signOut} />
            <Main>
                { children }
            </Main>
        </>
    );
}

export default AuthenticatedApp;
