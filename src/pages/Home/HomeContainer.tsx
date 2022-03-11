import { useEffect, useState } from 'react';

import { useFetch } from '../../app/reactHooks';
import HomeView from './HomeView';
import { getPenalCodes } from '../../reducers/penalCode/penalCodeSlice';
import { useAppSelector } from '../../app/reduxHooks';
import * as Interface from '../../interfaces';

export function HomeContainer() {
    const [status, setStatus] = useState<Interface.IPenalCodeStatus[]>([]);

    const penalCodes = useAppSelector(getPenalCodes);

    const { data: apiData } = useFetch<Interface.IPenalCodeStatus[]>('/status');
 
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
