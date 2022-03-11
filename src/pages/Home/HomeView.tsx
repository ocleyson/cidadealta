import PenalCodeCard from '../../components/PenalCodeCard';
import Spacer from '../../styles/spacer';
import * as Interface from '../../interfaces';

type Props = {
    penalCodes: Interface.IPenalCode[];
    status: Interface.IPenalCodeStatus[];
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
