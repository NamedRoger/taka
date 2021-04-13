import database from '../../../../../database/database.ts';
const table = "horario";

const query = (idSchedule:number) => `
SELECT 
    h.id_horario as idSchedule,
    h.id_periodo as idPeriod,
    h.id_grupo as idGroup,
    g.nombre as groupName,
    g.codigo as codeGroup,
    p.nombre as periodName
FROM ${table} as h 
INNER JOIN grupos as g ON g.id_grupo = h.id_grupo
INNER JOIN periodos as p ON p.id_periodo = h.id_periodo
WHERE h.id_horario = ${idSchedule}
`;

export const getScheduleById = async (idSchedule:number) => {
    const result = await database.query(query(idSchedule));
    return result[0];
}

const queryGetbyGroup = (idGroup:number,idPeriod:number) => `
SELECT 
    h.id_horario as idSchedule,
    h.id_periodo as idPeriod,
    h.id_grupo as idGroup,
    g.nombre as groupName,
    g.codigo as codeGroup,
    p.nombre as periodName
FROM ${table} as h 
INNER JOIN grupos as g ON g.id_grupo = h.id_grupo
INNER JOIN periodos as p ON p.id_periodo = h.id_periodo
WHERE h.activo = ${true} AND h.id_grupo = ${idGroup} AND h.id_periodo = ${idPeriod}
ORDER BY h.id_horario DESC
`;

export default async (idGroup:number,idPeriod:number) => {
    const result = await database.query(queryGetbyGroup(idGroup,idPeriod));
    return result[0];
}

