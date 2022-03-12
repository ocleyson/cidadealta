import faker from '@faker-js/faker';

import * as Interface from '../../interfaces';

import penalCodeReducer, {
    addPenalCode,
    deletePenalCode,
    updatePenalCode,
    setPenalCodes,
  } from './penalCodeSlice';
  
  describe('penal code reducer', () => {
    const initialState: Interface.IPenalCode[] = [
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
        const penalCodeData: Interface.IPenalCode = {
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

    it('should update penal code', () => {
        const penalCodeData: Interface.IPenalCode = {
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
  