import database from '../../../../database/database.ts';
const table = 'especialidades';

const queryById = (idSpecialty:number) => `
SELECT
    id_especialidad as idSpecialty,
    nombre as name,
    codigo as code,
    activo as active
FROM ${table}
WHERE id_especialidad = ${idSpecialty}
`;

const queryByCode = (code:string) => `
SELECT
    id_especialidad as idSpecialty,
    nombre as name,
    codigo as code,
    activo as active
FROM ${table}
WHERE codigo = ${code}
`;

export const getSpecialtyById = async (idSpecialty:number) => {
    const specialty = await database.query(queryById(idSpecialty));
    return specialty[0];
}

export const getSpecialtyByCode = async (code:string) => {
    const specialty = await database.query(queryByCode(code));
    return specialty[0];
}

