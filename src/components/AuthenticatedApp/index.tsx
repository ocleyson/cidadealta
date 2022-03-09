import NavBar from '../NavBar';
import { Main } from './styles';
import { useNavigate, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useFetch } from '../../app/reactHooks';
import { IPenalCode, setPenalCodes } from '../../reducers/penalCode/penalCodeSlice';
import { useAppDispatch } from '../../app/reduxHooks';
import Loading from '../../components/Loading';

function AuthenticatedApp() {
    const { data: apiData, loading: apiLoading } = useFetch<IPenalCode[]>('/codigopenal');

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const signOut = () => {
        localStorage.clear();
        navigate('/');
    }

    useEffect(() => {
        const userId = localStorage.getItem('@cidadealta/userId');

        if (!userId) navigate('/');
    }, [navigate])

    useEffect(() => {
        if (apiData) dispatch(setPenalCodes(apiData));
    }, [apiData, dispatch]);

    if(apiLoading) return <Loading />

    return (
        <>
            <NavBar signOut={signOut} />
            <Main>
                <Outlet />
            </Main>
        </>
    );
}

export default AuthenticatedApp;
