import { useEffect, useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import PenalCodeForm from '../../components/PenalCodeForm';
import { getPenalCodes, updatePenalCode, deletePenalCode } from '../../reducers/penalCode/penalCodeSlice';
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks';
import { useFetch } from '../../app/reactHooks';
import ContentContainer from '../../components/ContentContainer';
import Loading from '../../components/Loading';
import * as Interface from '../../interfaces';

function Update() {
    const [newPenalCode, setNewPenalCode] = useState<Interface.IPenalCode>({
        id: 0,
        nome: '',
        descricao: '',
        status: 1,
        multa: 0,
        tempoPrisao: 0,
        dataCriacao: new Date().toISOString(),
    });

    const penalCodeId = useParams<{ penalCodeId: string }>().penalCodeId || '';

    const penalCode = useAppSelector(getPenalCodes).find(penalCode => penalCode.id === parseInt(penalCodeId));

    useEffect(() => {
        if (penalCode) {
            setNewPenalCode(penalCode);
        }
    }, [penalCode]);

    const { data: apiData, loading: apiLoading } = useFetch<Interface.IPenalCodeStatus[]>('/status');

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>, penalCode: Interface.IPenalCodeForm) => {
        event.preventDefault();

        dispatch(updatePenalCode({ 
            id: newPenalCode.id,
            dataCriacao: newPenalCode.dataCriacao,
            descricao: penalCode.descricao,
            multa: penalCode.multa,
            nome: penalCode.nome,
            status: penalCode.status,
            tempoPrisao: penalCode.tempoPrisao,
         }));

        navigate('/authenticated/home');
    }

    const handleChange = (value: string | number, key: keyof Omit<Interface.IPenalCode, 'id'>) => {
        setNewPenalCode({ ...newPenalCode, [key]: value });
    }

    const handleDelete = (id: number) => {
        dispatch(deletePenalCode(id));
        navigate('/authenticated/home');
    }

    if (apiLoading) {
        return <Loading />
    }

    if (!penalCode) {
        return (
            <ContentContainer>
                <p>Código não encontrado</p>
            </ContentContainer> 
        )
    }

    return (
        <ContentContainer>
            <PenalCodeForm 
                penalCode={newPenalCode}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                status={apiData || []}
                handleDelete={handleDelete}
            />
        </ContentContainer>
    );
}

export default Update;
