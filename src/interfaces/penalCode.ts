export interface IPenalCode {
    id: number,
    nome: string,
    descricao: string,
    dataCriacao: string,
    multa: number,
    tempoPrisao: number,
    status: number
}

export interface IPenalCodeForm extends Omit<IPenalCode, 'id' | 'dataCriacao'> {
    id?: number;
    dataCriacao?: string;
}