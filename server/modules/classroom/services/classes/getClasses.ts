import database from '../../../../database/database.ts';

const table = "clase";
const query  = (idHorio:number) => `
SELECT
    c.id_clase as idClass,
    c.nombre as name,
    c.id_materia as idTopuc,
    c.id_maestro as idTeacher,
    c.id_horario as idSchedule,
    c.activo as active,
    c.hora_fin,
    c.hora_inicio
FROM ${table} as c
    INNER JOIN horario as h ON h.id_horario = c.id_horario
    INNER JOIN materias as m ON m.id_materia = c.id_materia
    INNER JOIN usuarios as ma ON ma.id_usuario = c.id_maestro
WHERE c.activo = ${true} 
    AND ma.activo = ${true} 
    AND m.activo = ${true} 
    AND h.activo = ${true} 
    AND h.id_horario = ${idHorio}
`;

export default async (idHorario:number) => {
    const result = await database.query(query(idHorario));
    return result;
}
