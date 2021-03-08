import database from '../../../../database/database.ts';
import { StudentCalss } from '../../models/studentClass.ts';

const table = "clase_alumno";

const query = ({idCalss, idStudent,}:StudentCalss) => `
INSERT INTO ${table} (id_clase, id_alumno) 
VALUES (${idCalss},${idStudent})
`;

export default async (student:StudentCalss) => {
    const result = await database.execute(query(student));
    if(result.affectedRows === 0) throw Error("No se insertó ningun registro");
    return result;
}
