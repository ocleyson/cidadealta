import PenalCodeForm from '../../components/PenalCodeForm';
import { addPenalCode, IPenalCode } from '../../reducers/penalCode/penalCodeSlice';
import { useAppDispatch } from '../../app/reduxHooks';
import { useState } from 'react';
import { useFetch } from '../../app/reactHooks';
import { useNavigate } from 'react-router-dom';
import ContentContainer from '../../components/ContentContainer';
import Loading from '../../components/Loading';
import * as Interface from '../../interfaces';

function Create() {
    const [newPenalCode, setNewPenalCode] = useState<Omit<IPenalCode, 'id' | 'dataCriacao'>>({
        nome: '',
        descricao: '',
        status: 1,
        multa: 0,
        tempoPrisao: 0,
    });

    const { data: apiData, loading: apiLoading } = useFetch<Interface.IPenalCodeStatus[]>('/status');

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>, penalCode: Interface.IPenalCodeForm) => {
        event.preventDefault();

        const id = Math.floor(Math.random() * 100000);

        dispatch(addPenalCode({ ...penalCode, id, dataCriacao: new Date().toISOString(), }));

        navigate('/authenticated/home');
    }

    const handleChange = (value: string | number, key: keyof Omit<IPenalCode, 'id'>) => {
        setNewPenalCode({ ...newPenalCode, [key]: value });
    }

    if (apiLoading) {
        return <Loading />
    }

    return (
        <ContentContainer>
            <PenalCodeForm 
                penalCode={newPenalCode}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                status={apiData || []}
            />
        </ContentContainer>
    );
}

export default Create;
