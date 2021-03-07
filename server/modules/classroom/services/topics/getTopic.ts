import database from '../../../../database/database.ts';
const table = 'materias';

const queryById = (idTopic:number) => `
SELECT
    id_materia as idTopic,
    nombre as name,
    codigo as code,
    activo as active
FROM ${table}
WHERE id_materia = ${idTopic}
`;

const queryByCode = (code:string) => `
SELECT
    id_materia as idTopic,
    nombre as name,
    codigo as code,
    activo as active
FROM ${table}
WHERE codigo = '${code}'
`;



export const getTopicById = async (idTopic:number) => {
    const period = await database.query(queryById(idTopic));
    return period[0];
}

export const getTopicByCode = async (code:string) => {
    const period = await database.query(queryByCode(code.toUpperCase()));
    return period[0];
}
