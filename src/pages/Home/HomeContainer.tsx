import { useEffect, useState } from 'react';

import { useFetch } from '../../app/reactHooks';
import HomeView from './HomeView';
import { getPenalCodes } from '../../reducers/penalCode/penalCodeSlice';
import { useAppSelector } from '../../app/reduxHooks';
import * as Interface from '../../interfaces';
import Loading from '../../components/Loading';
import { useDebounce } from '../../app/reactHooks';

export function HomeContainer() {
    const reduxPenalCodes = useAppSelector(getPenalCodes);

    const [penalCodes, setPenalCodes] = useState<Interface.IPenalCode[]>([...reduxPenalCodes]);
    const [statusId, setStatusId] = useState<number>(1);
    const [searchName, setSearchName] = useState<string>('');

    const debauncedSearchTerm = useDebounce(searchName, 500);

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

    useEffect(() => {
        const filteredPenalCodes = reduxPenalCodes.filter(penalCode => penalCode.nome.toLowerCase().includes(debauncedSearchTerm.toLowerCase()));

        setPenalCodes(filteredPenalCodes);
    }, [debauncedSearchTerm, reduxPenalCodes]);

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
                setSearchName={setSearchName}
                searchName={searchName}
            />
        </>
    );
}
