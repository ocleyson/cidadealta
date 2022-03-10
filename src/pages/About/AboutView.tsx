import { IPenalCode } from '../../reducers/penalCode/penalCodeSlice';
import ContentContainer from '../../components/ContentContainer';
import Spacer from '../../styles/spacer';
import { IPenalCodeStatus } from './AboutContainer';

type Props = {
    penalCode: IPenalCode | undefined;
    status: IPenalCodeStatus[];
}

function AboutView({
    penalCode, status
}: Props) {
    return (
        <ContentContainer>
            { penalCode ? (
                <>
                    <h2>Nome: {penalCode?.nome}</h2>

                    <Spacer axis='vertical' size={10} />

                    <h3>Descrição:</h3>
                    <p>{penalCode?.descricao}</p>

                    <Spacer axis='vertical' size={10} />

                    <h3>Data criação:</h3>
                    <p>{new Date(penalCode?.dataCriacao).toLocaleString()}</p>

                    <Spacer axis='vertical' size={10} />

                    <h3>Multa:</h3>
                    <p>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(penalCode?.multa)}</p>

                    <Spacer axis='vertical' size={10} />

                    <h3>Status:</h3>
                    <p>{status.find(s => s.id === penalCode?.status)?.descricao}</p>

                    <Spacer axis='vertical' size={10} />

                    <h3>Tempo prisão:</h3>
                    <p>{penalCode?.tempoPrisao}</p>
                </>
            ) : (
                <p>Nenhum código penal encontrado</p>
            )}
        </ContentContainer>
    );
}

export default AboutView;
