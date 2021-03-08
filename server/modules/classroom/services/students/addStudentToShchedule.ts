import database from '../../../../database/database.ts';
import { StudentSchedule } from '../../models/studentSchedule.ts';

const table = "horario_alumno";

const query = ({idSchedule,idStudent}:StudentSchedule) => `
INSERT INTO ${table} (id_horario, id_alumno) 
VALUES (${idSchedule},${idStudent})
`;

export default async (student:StudentSchedule) => {
    const result = await database.execute(query(student));
    if(result.affectedRows === 0) throw Error("No se insertó ningun registro");
    return result;
}
