import database from '../../../../../database/database.ts';
import {Schedule} from '../../../models/schedule.ts';
const table = "horario";

const query = ({group,period,idSchedule}:Schedule) => `
UPDATE ${table} SET id_periodo = ${period.idPeriod}, id_grupo = ${group.idGroup} WHERE id_horario = ${idSchedule}
`;

export default async (schedule:Schedule) => {
    const result = await database.execute(query(schedule));
    if(result.affectedRows === 0) throw new Error("no se puedo desactivar el registro");
    return result;
}
