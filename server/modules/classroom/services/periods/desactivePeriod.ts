import database from '../../../../database/database.ts';

const table = "periodos";
const query = `
UPDATE ${table} activo = ?
WHERE idPeriod = ?
`;

export default async (idPeriod:number) => {
    const result = await database.execute(query,[false,idPeriod]);
}