import database from '../../../../database/database.ts';
import { StudentSchedule } from '../../models/studentSchedule.ts';
import { StudentCalss } from '../../models/studentClass.ts';
import addStudentToClass from './addStudentToClass.ts';
import { getClass } from '../classes/classServices.ts';


const table = "horario_alumno";

const query = ({idSchedule,idStudent}:StudentSchedule) => `
INSERT INTO ${table} (id_horario, id_alumno) 
VALUES (${idSchedule},${idStudent})
`;

export default async (student:StudentSchedule) => {
    const resultAddToSchedule = await database.execute(query(student));

    if(resultAddToSchedule.affectedRows === 0) throw Error("No se insertó ningun registro");

    const clases:any[] = await getClass(student.idSchedule);

    let studentClase:StudentCalss;
    
    const results = await Promise.all(clases.map(async (c) =>{
        studentClase.idCalss = c.idClass;
        studentClase.idStudent = student.idStudent;

        await addStudentToClass(studentClase);
    }));

    return resultAddToSchedule;
}
