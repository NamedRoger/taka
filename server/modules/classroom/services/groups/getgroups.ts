import database from '../../../../database/database.ts';

const table = "grupos";
const query = `
SELECT id_grupo as idGrupo, 
    nombre as name,
    codigo as code
FROM ${table}
WHERE activo = ${true}
`;

export default async () => {
    const result = await database.query(query);
    return result;
}
