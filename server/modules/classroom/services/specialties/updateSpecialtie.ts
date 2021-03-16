import database from '../../../../database/database.ts';
import { Specialty } from '../../models/speciality.ts';

const table = "especialidades";
const query = ({name,code,idSpecialty}:Specialty) => `
UPDATE ${table} SET nombre = '${name}', codigo ='${code}'
WHERE id_especialidad = ${idSpecialty}
`;

export default async ({code,name,idSpecialty}:Specialty) => {
    const result = await database.execute(query({code,name,idSpecialty}));
    return result;
}

