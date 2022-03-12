import InputLabel from '../InputLabel';
import Input from '../Input';
import NameInput from '../NameInput';
import Spacer from '../../styles/spacer';
import PrimaryButton from '../PrimaryButton';
import * as Interface from '../../interfaces';

type Props = {
    penalCode: Interface.IPenalCodeForm;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>, penalCode: Interface.IPenalCodeForm) => void;
    handleDelete?: (id: number) => void;
    handleChange: (value: string | number, key: keyof Omit<Interface.IPenalCode, 'id'>) => void;
    status: Interface.IPenalCodeStatus[];
}

function PenalCodeForm({ penalCode, handleChange, handleSubmit, handleDelete, status }: Props) {
    return (
        <form onSubmit={(e) => handleSubmit(e, penalCode)}>
            <NameInput
                value={penalCode.nome}
                onChange={(e) => handleChange(e.target.value, 'nome')}
                autoComplete="off"
                placeholder='Nome do código'
            />

            <Spacer axis="vertical" size={10} />

            <InputLabel labelId="description">
                <>
                    Descrição

                    <Input
                        type="text"
                        id="description"
                        name="description"
                        autoComplete="text"
                        required
                        value={penalCode.descricao}
                        onChange={(e) => handleChange(e.target.value, 'descricao')}
                        placeholder="Descrição do código"
                    />
                </>
            </InputLabel>

            <Spacer axis="vertical" size={10} />

            <InputLabel labelId="multa">
                <>
                    Multa

                    <Input
                        type="number"
                        id="multa"
                        name="multa"
                        autoComplete="number"
                        required
                        value={penalCode.multa}
                        onChange={(e) => handleChange(Number(e.target.value), 'multa')}
                    />
                </>
            </InputLabel>

            <Spacer axis="vertical" size={10} />

            <InputLabel labelId="tempoPrisao">
                <>
                    Tempo de prisão

                    <Input
                        type="number"
                        id="tempoPrisao"
                        name="tempoPrisao"
                        autoComplete="number"
                        required
                        value={penalCode.tempoPrisao}
                        onChange={(e) => handleChange(Number(e.target.value), 'tempoPrisao')}
                    />
                </>
            </InputLabel>

            <Spacer axis="vertical" size={10} />

            <InputLabel labelId="status">
                <>
                    Status

                    <Spacer axis="vertical" size={1} />

                    <select
                        id="status"
                        name="status"
                        required
                        value={penalCode.status}
                        onChange={(e) => handleChange(Number(e.target.value), 'status')}
                    >
                        {status.map(({ id, descricao }) => (
                            <option key={id} value={id}>{descricao}</option>
                        ))}
                    </select>
                </>
            </InputLabel>

            <Spacer axis="vertical" size={10} />

            <PrimaryButton type='submit' buttonText='Salvar' loading={false} />

            <Spacer axis="vertical" size={10} />

            {handleDelete && (
                <PrimaryButton type='button' buttonText='Deletar' loading={false} onClick={() => { window.confirm('Tem certeza que deseja excluir esse código penal?') && handleDelete(penalCode?.id || 0 ) }} isDeleteButton />
            ) }

        </form>
    );
}

export default PenalCodeForm;
