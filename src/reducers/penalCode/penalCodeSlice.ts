import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/reduxStore';

export interface IPenalCode {
    id: number,
    nome: string,
    descricao: string,
    dataCriacao: string,
    multa: number,
    tempoPrisao: number,
    status: number
}

export const penalCodeSlice = createSlice({
    name: 'penalCode',
    initialState: [] as IPenalCode[],
    reducers: {
        setPenalCodes: (state, action: PayloadAction<IPenalCode[]>) => {
            return action.payload;
        },
        addPenalCode: (state, action: PayloadAction<IPenalCode>) => {
            return [...state, action.payload];
        },
        deletePenalCode: (state, action: PayloadAction<number>) => {
            return state.filter(penalCode => penalCode.id !== action.payload);
        },
        updatePenalCode: (state, action: PayloadAction<IPenalCode>) => {
            return state.map(penalCode => {
                if (penalCode.id === action.payload.id) {
                    return action.payload;
                }
                return penalCode;
            });
        },
        orderPenalCodesByStatus: (state, action: PayloadAction<number>) => {
            return state.sort((a, b) => {
                if (a.status === action.payload) {
                    return -1;
                }
                return 0;
            });
        }
    },
});

export const { setPenalCodes, addPenalCode, deletePenalCode, orderPenalCodesByStatus, updatePenalCode } = penalCodeSlice.actions;

export const getPenalCodes = (state: RootState) => state.penalCode;

export default penalCodeSlice.reducer;