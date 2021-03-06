import database from '../../../../database/database.ts';
import { Specialty } from '../../models/specialty.ts';
const table = 'especialidades';

const queryById = (idSpecialty:number) => `
SELECT
    id_especialidad as idSpecialty,
    nombre as name,
    codigo as code,
    activo as active
FROM ${table}
WHERE idSpecialty = ${idSpecialty}
`;

const queryByCode = (code:string) => `
SELECT
    id_especialidad as idSpecialty,
    nombre as name,
    codigo as code,
    activo as active
FROM ${table}
WHERE code = ${code}
`;

export const getSpecialtyById = async (idSpecialty:number) => {
    const specialty:Specialty = await database.query(queryById(idSpecialty));
    return specialty;
}

export const getSpecialtyByCode = async (code:string) => {
    const specialty:Specialty = await database.query(queryByCode(code));
    return specialty;
}

