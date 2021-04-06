import database from '../../../../../database/database.ts';
import {Schedule} from '../../../models/schedule.ts';
const table = "horario";

const query = ({name,idGroup,idPeriod,active}:Schedule) => `
INSERT INTO ${table} (id_grupo,id_periodo,activo) 
VALUES (${idGroup},${idPeriod},${active})
`;

export default async (schedule:Schedule) => {
    const result = await database.execute(query(schedule));
    if(result.affectedRows === 0) throw Error("No se insertó ningun registro");
    return result;
}
