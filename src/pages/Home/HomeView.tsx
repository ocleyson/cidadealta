import React from 'react';

import PenalCodeCard from '../../components/PenalCodeCard';
import Spacer from '../../styles/spacer';
import * as Interface from '../../interfaces';
import ContentContainer from '../../components/ContentContainer';
import InputLabel from '../../components/InputLabel';
import Input from '../../components/Input';

type Props = {
    penalCodes: Interface.IPenalCode[];
    status: Interface.IPenalCodeStatus[];
    handleStatusChange: (selectedStatus: number) => void;
    statusId: number;
    searchName: string;
    setSearchName: React.Dispatch<React.SetStateAction<string>>;
}

function HomeView({
    penalCodes, status, handleStatusChange, statusId, searchName, setSearchName
}: Props) {
    return (
        <>
            <ContentContainer>
                <>
                    <InputLabel labelId="name">
                        <>
                            Pesquisar por Nome

                            <Input
                                type="text"
                                id="name"
                                name="name"
                                autoComplete="off"
                                placeholder='Digite o nome do código penal'
                                value={searchName}
                                onChange={(e) => setSearchName(e.target.value)}
                            />
                        </>
                    </InputLabel>

                    <Spacer axis='vertical' size={10} />

                    <InputLabel labelId="status">
                        <>
                            Ordenar por Status

                            <Spacer axis="vertical" size={1} />

                            <select
                                id="status"
                                name="status"
                                value={statusId}
                                onChange={(e) => handleStatusChange(parseInt(e.target.value))}
                            >
                                {status.map(({ id, descricao }) => (
                                    <option key={id} value={id}>{descricao}</option>
                                ))}
                            </select>
                        </>
                    </InputLabel>
                </>
            </ContentContainer>

            <Spacer axis='vertical' size={10} />

            <h2>Códigos Penais</h2>

            <Spacer axis='vertical' size={10} />

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
        </>
    );
}

export default HomeView;
