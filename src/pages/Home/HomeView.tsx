import React from 'react';

import { IPenalCode } from '../../reducers/penalCode/penalCodeSlice';
import { IPenalCodeStatus } from './HomeContainer';
import PenalCodeCard from '../../components/PenalCodeCard';
import Spacer from '../../styles/spacer';

type Props = {
    penalCodes: IPenalCode[];
    status: IPenalCodeStatus[];
}

function HomeView({
    penalCodes, status
}: Props) {
    return (
        <ul>
            { penalCodes.map(penalCode => (
                <li key={penalCode.id}>
                    <PenalCodeCard
                        id={penalCode.id}
                        nome={penalCode.nome}
                        dataCriacao={penalCode.dataCriacao}
                        multa={penalCode.multa}
                        status={status.find(s => s.id === penalCode.status)?.descricao || 'Desconhecido'}
                        descricao={penalCode.descricao}
                        tempoPrisao={penalCode.tempoPrisao}
                    />
                    <Spacer axis='vertical' size={10} />
                </li>
            ))}
        </ul>
    );
}

export default HomeView;
