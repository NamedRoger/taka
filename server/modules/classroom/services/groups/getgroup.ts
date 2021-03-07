import database from '../../../../database/database.ts';
const table = 'grupos';

const queryById = (idGrupo:number) => `
SELECT
    id_grupo as idGrupo,
    nombre as name,
    codigo as code
FROM ${table}
WHERE id_grupo = ${idGrupo}
`;



export const getGrupoById = async (idGrupo:number) => {
    const grupo = await database.query(queryById(idGrupo));
    return grupo[0];
}
