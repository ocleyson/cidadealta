import { useState } from 'react';

import { useFetch } from '../../app/reactHooks';
import HomeView from './HomeView';
import { getPenalCodes } from '../../reducers/penalCode/penalCodeSlice';
import { useAppSelector } from '../../app/reduxHooks';
import * as Interface from '../../interfaces';
import Loading from '../../components/Loading';

export function HomeContainer() {
    const reduxPenalCodes = useAppSelector(getPenalCodes);

    const [penalCodes, setPenalCodes] = useState<Interface.IPenalCode[]>([...reduxPenalCodes]);
    const [statusId, setStatusId] = useState<number>(reduxPenalCodes[0]?.status || 0);

    const { data: apiStatusData, loading: apiStatusLoading } = useFetch<Interface.IPenalCodeStatus[]>('/status');

    function handleStatusChange(selectedStatus: number) {
        const sortedPenalCodes = penalCodes.sort((a, b) => {
            if (a.status === selectedStatus) {
                return -1;
            }
            if (b.status === selectedStatus) {
                return 1;
            }
            return 0;
        })

        setStatusId(selectedStatus);
        setPenalCodes(sortedPenalCodes);
    }

    if (apiStatusLoading) {
        return <Loading />
    }

    return (
        <>
            <HomeView
                status={apiStatusData}
                penalCodes={penalCodes}
                handleStatusChange={handleStatusChange}
                statusId={statusId}
            />
        </>
    );
}
