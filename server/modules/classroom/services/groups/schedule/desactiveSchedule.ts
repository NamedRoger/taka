import database from '../../../../../database/database.ts';
const table = "horario";

const query = (idSchedule:number) => `
UPDATE ${table} SET activo = ${false} WHERE id_horario = ${idSchedule}
`;

export default async (idSchedule:number) => {
    const result = await database.execute(query(idSchedule));
    if(result.affectedRows === 0) throw new Error("no se puedo desactivar el registro");
    return result;
}
