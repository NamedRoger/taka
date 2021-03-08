import database from '../../../../database/database.ts';
import { Student } from '../../models/student.ts';

const table = "clase_alumno";

const query = ({idCalss, idStudent,}:Student) => `
INSERT INTO ${table} (id_clase, id_alumno) 
VALUES (${idCalss},${idStudent})
`;

export default async (student:Student) => {
    const result = await database.execute(query(student));
    if(result.affectedRows === 0) throw Error("No se insertó ningun registro");
    return result;
}
