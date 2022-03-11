import { useParams } from 'react-router-dom';

import { useFetch } from '../../app/reactHooks';
import AboutView from './AboutView';
import { getPenalCodes } from '../../reducers/penalCode/penalCodeSlice';
import { useAppSelector } from '../../app/reduxHooks';
import Loading from '../../components/Loading';
import * as Interface from '../../interfaces';

export function AboutContainer() {
    const penalCodeId = useParams<{ penalCodeId: string }>().penalCodeId || '';

    const penalCode = useAppSelector(getPenalCodes).find(penalCode => penalCode.id === parseInt(penalCodeId));

    const { data: apiStatusData, loading: apiStatusLoading } = useFetch<Interface.IPenalCodeStatus[]>('/status');

    if (apiStatusLoading) {
        return <Loading />;
    }

    return (
        <>
            <AboutView
                penalCode={penalCode}
                status={apiStatusData}
            />
        </>
    );
}
