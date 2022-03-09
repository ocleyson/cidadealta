import ContentContainer from '../ContentContainer';
import { IPenalCode } from '../../reducers/penalCode/penalCodeSlice';
import Spacer from '../../styles/spacer';
import { Link } from './styles';

interface IProps extends Omit<IPenalCode, 'status'> {
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

                <Link to={`/edit/${penalCode.id}`}>
                    Editar
                </Link>

                {' '}

                &#8226;

                {' '}

                <Link to={`/about/${penalCode.id}`}>
                    Saiba Mais
                </Link>
            </>
        </ContentContainer>
    );
}

export default PenalCodeCard;
