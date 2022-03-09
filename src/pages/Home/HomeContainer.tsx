import { useFetch } from '../../app/reactHooks';
import HomeView from './HomeView';
import { getPenalCodes } from '../../reducers/penalCode/penalCodeSlice';
import { useAppSelector } from '../../app/reduxHooks';
import { useEffect, useState } from 'react';

export interface IPenalCodeStatus {
    id: number;
    descricao: string;
}

export function HomeContainer() {
    const [status, setStatus] = useState<IPenalCodeStatus[]>([]);

    const penalCodes = useAppSelector(getPenalCodes);

    const { data: apiData } = useFetch<IPenalCodeStatus[]>('/status');
 
    useEffect(() => {
        if (apiData) {
            setStatus(apiData);
        }
    }, [apiData]);

    return (
        <>
            <HomeView
                status={status}
                penalCodes={penalCodes}
            />
        </>
    );
}
