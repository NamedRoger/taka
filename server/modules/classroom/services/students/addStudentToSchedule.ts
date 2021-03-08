import database from '../../../../database/database.ts';
import { Students } from '../../models/Students.ts';

const table = "clase_alumno";

const query = ({idclase, idalumno, parcial1, parcial2, parcial3}:Students) => `
INSERT INTO ${table} (id_clase, id_alumno, parcial_1,parcial_2,parcial_3) 
VALUES ('${idclase}','${idalumno}','${parcial1}','${parcial2}','${parcial3}')
`;

export default async ({idclase,idalumno,parcial1,parcial2,parcial3}:Students) => {
    const result = await database.execute(query({idclase,idalumno,parcial1,parcial2,parcial3}));
    if(result.affectedRows === 0) throw Error("No se insertó ningun registro");
    return result;
}
