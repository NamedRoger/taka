import database from '../../../../database/database.ts';
import {Class} from '../../models/class.ts';
const table = "clase";

const query = ({name,idSchecule,idTeacher,idTopic,active}:Class) => `
INSERT INTO ${table} (nombre, id_materia, id_maestro,activo, id_horario) 
VALUES ('${name}',${idTopic},${idTeacher},${active},${idSchecule})
`;

export default async (clase:Class) => {
    const result = await database.execute(query(clase));
    if(result.affectedRows === 0) throw Error("No se insertó ningun registro");
    return result;
}

