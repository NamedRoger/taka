import database from '../../../../database/database.ts';
import { Class } from '../../models/class.ts';

const table = "clase";
const query = ({idClass,idSchecule,name,idTopic,idTeacher,active}:Class) =>`
UPDATE ${table} SET nombre = '${name}', 
    id_materia = ${idTopic},
    id_maestro = ${idTeacher},
    id_horario = ${idSchecule}, 
    activo = ${true},
WHERE id_clase = ${idClass}
`;

export default async (clase:Class) => {
    const result = await database.execute(query(clase));
    return result;
}
