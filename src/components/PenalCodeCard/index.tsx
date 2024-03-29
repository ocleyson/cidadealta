import ContentContainer from '../ContentContainer';
import Spacer from '../../styles/spacer';
import { Link } from './styles';
import * as Interface from '../../interfaces';

interface IProps extends Omit<Interface.IPenalCode, 'status'> {
    status: string;
}

function PenalCodeCard(penalCode: IProps) {
    return (
        <ContentContainer>
            <>
                <h2>Nome: { penalCode.nome }</h2>
                <p>Data: { new Date(penalCode.dataCriacao).toLocaleString() }</p>
                <p>Multa: { new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(penalCode.multa) }</p>
                <p>Status: { penalCode.status }</p>

                <Spacer axis='vertical' size={10} />

                <Link to={`/authenticated/edit/${penalCode.id}`}>
                    Editar
                </Link>

                {' '}

                &#8226;

                {' '}

                <Link to={`/authenticated/about/${penalCode.id}`}>
                    Saiba Mais
                </Link>
            </>
        </ContentContainer>
    );
}

export default PenalCodeCard;
