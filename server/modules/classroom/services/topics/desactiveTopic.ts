import database from '../../../../database/database.ts';

const table = "materias";
const query = (idTopic:number) => `
UPDATE ${table} SET activo = ${false} WHERE id_materia = ${idTopic}
`;

export default async (idTopic:number) => {
    const result = await database.execute(query(idTopic));
    return result;
}