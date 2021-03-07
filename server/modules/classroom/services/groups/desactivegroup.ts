import database from '../../../../database/database.ts';

const table = "grupos";
const query = (grupo:number) => `
UPDATE ${table} SET activo = ${false} WHERE id_grupo = ${grupo}
`;

export default async (grupo:number) => {
    const result = await database.execute(query(grupo));
    return result;
}
