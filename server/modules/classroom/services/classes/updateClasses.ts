import database from '../../../../database/database.ts';
import { Class } from '../../models/class.ts';

const table = "clase";
const query = ({name,materia, idTeacher, finishDate,initDate,schedule,active}:idClase) =>`
UPDATE ${table} SET nombre = '${name}', id_materia = '${materia}',
id_maestro = '${idTeacher}',
fecha_fin = '${finishDate}',
fecha_inicio = '${initDate}',
id_horario = '${schedule}', activo = '${active}',
WHERE id_clase = ${idClase}
`;

export default async ({name,materia, idTeacher, finishDate,initDate,schedule,active}:Class) => {
    const result = await database.execute(query({name,materia, idTeacher, finishDate,initDate,schedule,active,idClase}));
    return result;
}
