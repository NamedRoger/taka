import database from '../../../../../database/database.ts';
const table = "horario";

const query = (idGroup:number,idPeriod:number) => `
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
WHERE h.activo = ${true} AND p.activo = ${true} AND g.activo = ${true} AND g.id_grupo = '${idGroup}' AND P.id_periodo = '${idPeriod}'
ORDER BY h.id_horario DESC 
`;

export default async (idGroup:number,idPeriod:number) => {
    
    const result = await database.query(query(idGroup,idPeriod));
    return result;
}
