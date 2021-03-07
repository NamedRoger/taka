import database from '../../../../database/database.ts';

const table = "especialidades";
const query = (idSpecialty:number) => `
UPDATE FROM ${table}
SET activo = ${false}
WHERE id_especialidad = ${idSpecialty}
`;

export default async (idSpecialty:number) => {
    const result = await database.query(query(idSpecialty));
    return result;
}
