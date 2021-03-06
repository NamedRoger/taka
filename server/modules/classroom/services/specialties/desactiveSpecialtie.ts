import database from '../../../../database/database.ts';

const table = "especialidades";
const query = `
DESACTIVE id_especialidad, nombre, codigo, activo
FROM ${table}
WHERE active = ${true}
`;

export default async () => {
    const result = await database.query(query);
    return result;
}
