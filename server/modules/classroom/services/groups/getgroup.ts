import database from '../../../../database/database.ts';
const table = 'grupos';

const queryById = (idGrupo:number) => `
SELECT
    id_grupo as idGroup,
    nombre as name,
    codigo as code,
    id_especialidad as idSpeciality,
    es.nombre as speciality
FROM ${table}
INNER JOINT especialidades as es ON es.id_especialidad = id_especialidad
WHERE id_grupo = ${idGrupo}
`;



export const getGrupoById = async (idGrupo:number) => {
    const grupo = await database.query(queryById(idGrupo));
    return grupo[0];
}
