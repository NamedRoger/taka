import database from '../../../../database/database.ts';
import {Class} from '../../models/class.ts';
const table = "clase";

const query = ({name,materia, idTeacher, finishDate,initDate,schedule,active}:idClase) => `
INSERT INTO ${table} (nombre, id_materia, id_maestro, hora_inicio, hora_fin, activo, id_horario) 
VALUES (${name.nombre},${materia.id_materia},${idTeacher.id_materia},${initDate.hora_inicio},${finishDate.hora_fin},${schedule.id_horario}${active})
`;

export default async ({name,materia, idTeacher, finishDate,initDate,schedule,active}:idClase) => {
    const result = await database.execute(query({name,materia, idTeacher, finishDate,initDate,schedule,active}));
    if(result.affectedRows === 0) throw Error("No se insertó ningun registro");
    return result;
}

