import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/reduxStore';
import * as Interface from '../../interfaces';

export const penalCodeSlice = createSlice({
    name: 'penalCode',
    initialState: [] as Interface.IPenalCode[],
    reducers: {
        setPenalCodes: (state, action: PayloadAction<Interface.IPenalCode[]>) => {
            return action.payload;
        },
        addPenalCode: (state, action: PayloadAction<Interface.IPenalCode>) => {
            return [...state, action.payload];
        },
        deletePenalCode: (state, action: PayloadAction<number>) => {
            return state.filter(penalCode => penalCode.id !== action.payload);
        },
        updatePenalCode: (state, action: PayloadAction<Interface.IPenalCode>) => {
            return state.map(penalCode => {
                if (penalCode.id === action.payload.id) {
                    return action.payload;
                }
                return penalCode;
            });
        },
    },
});

export const { setPenalCodes, addPenalCode, deletePenalCode, updatePenalCode } = penalCodeSlice.actions;

export const getPenalCodes = (state: RootState) => state.penalCode;

export default penalCodeSlice.reducer;