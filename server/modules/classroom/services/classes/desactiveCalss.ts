import database from '../../../../database/database.ts';

const table = "clase";
const query = (idClase:number) => `
UPDATE ${table} SET activo = ${false} WHERE id_clase = ${idClase}
`;

export default async (idClase:number) => {
    const result = await database.execute(query(idClase));
    return result;
}
