import PenalCodeCard from '../../components/PenalCodeCard';
import Spacer from '../../styles/spacer';
import * as Interface from '../../interfaces';
import ContentContainer from '../../components/ContentContainer';
import InputLabel from '../../components/InputLabel';

type Props = {
    penalCodes: Interface.IPenalCode[];
    status: Interface.IPenalCodeStatus[];
    handleStatusChange: (selectedStatus: number) => void;
    statusId: number;
}

function HomeView({
    penalCodes, status, handleStatusChange, statusId
}: Props) {
    return (
        <>
            <ContentContainer>
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
            </ContentContainer>

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
