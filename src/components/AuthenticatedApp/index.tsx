import { useEffect } from 'react';

import { useNavigate, Outlet } from 'react-router-dom';

import NavBar from '../NavBar';
import { Main } from './styles';
import { useFetch } from '../../app/reactHooks';
import { setPenalCodes } from '../../reducers/penalCode/penalCodeSlice';
import { useAppDispatch } from '../../app/reduxHooks';
import Loading from '../../components/Loading';
import * as Interface  from '../../interfaces';

function AuthenticatedApp() {
    const { data: apiData, loading: apiLoading } = useFetch<Interface.IPenalCode[]>('/codigopenal');

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
