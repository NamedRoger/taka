import database from '../../../../database/database.ts';

const table = "periodos";
const query = (idPeriod:number) => `
UPDATE ${table} SET activo = ${false} WHERE id_periodo = ${idPeriod}
`;

export default async (idPeriod:number) => {
    const result = await database.execute(query(idPeriod));
    return result;
}