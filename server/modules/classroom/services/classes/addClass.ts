import database from '../../../../database/database.ts';
import {Schedule} from '../../models/schedule.ts';
const table = "clase";

const query = ({name,group,period,active}:Schedule) => `
INSERT INTO ${table} (nombre,id_materia,activo) 
VALUES (${group.idGroup},${period.idPeriod},${active})
`;

export default async ({group,period,active,name}:Schedule) => {
    const result = await database.execute(query({group,period,active,name}));
    if(result.affectedRows === 0) throw Error("No se insertó ningun registro");
    return result;
}

