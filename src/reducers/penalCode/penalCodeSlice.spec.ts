import faker from '@faker-js/faker';

import penalCodeReducer, {
    IPenalCode,
    addPenalCode,
    deletePenalCode,
    orderPenalCodesByStatus,
    updatePenalCode,
    setPenalCodes,
  } from './penalCodeSlice';
  
  describe('penal code reducer', () => {
    const initialState: IPenalCode[] = [
        {
            id: 1,
            nome: faker.datatype.string(),
            descricao: faker.datatype.string(),
            dataCriacao: faker.datatype.string(),
            multa: faker.datatype.float(),
            tempoPrisao: faker.datatype.number(),
            status: 2,
        },
        {
            id: 2,
            nome: faker.datatype.string(),
            descricao: faker.datatype.string(),
            dataCriacao: faker.datatype.string(),
            multa: faker.datatype.float(),
            tempoPrisao: faker.datatype.number(),
            status: 1,
        }
    ];
  
    it('should add penal code', () => {
        const penalCodeData: IPenalCode = {
            id: faker.datatype.number(),
            nome: faker.datatype.string(),
            descricao: faker.datatype.string(),
            dataCriacao: faker.datatype.string(),
            multa: faker.datatype.float(),
            tempoPrisao: faker.datatype.number(),
            status: faker.datatype.number(),
        }

      const data = penalCodeReducer(undefined, addPenalCode(penalCodeData));

      expect(data).toEqual(expect.arrayContaining([penalCodeData]));
    });

    it('should delete penal code', () => {
        const penalCodeId: number = 1;

        const data = penalCodeReducer(initialState, deletePenalCode(penalCodeId));

        expect(data).toEqual(expect.arrayContaining([]));
    });
    
    it('should order penal codes by status', () => {
        const penalCodeStatus: number = 1;

        const data = penalCodeReducer(initialState, orderPenalCodesByStatus(penalCodeStatus));

        expect(data[0]).toEqual(expect.objectContaining({
            status: penalCodeStatus
        }));
    });

    it('should update penal code', () => {
        const penalCodeData: IPenalCode = {
            id: 1,
            nome: faker.datatype.string(),
            descricao: faker.datatype.string(),
            dataCriacao: faker.datatype.string(),
            multa: faker.datatype.float(),
            tempoPrisao: faker.datatype.number(),
            status: faker.datatype.number(),
        }

        const data = penalCodeReducer(initialState, updatePenalCode(penalCodeData));

        expect(data).toEqual(expect.arrayContaining([penalCodeData]));
    });

    it('should set penal codes', () => {
        const data = penalCodeReducer(undefined, setPenalCodes(initialState));

        expect(data).toEqual(expect.arrayContaining(initialState));
    });

    it('should return the initial state', () => {
        const data = penalCodeReducer(undefined, { type: 'DUMMY_ACTION' });

        expect(data).toEqual([]);
    });
  });
  