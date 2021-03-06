import database from '../../../../database/database.ts';
import { Specialty } from '../../models/specialty.ts';

const table = "especialidades";
const query = `
UPDATE ${table} SET nombre = ?, codigo =? 
WHERE idSpecialty = ?
`;

export default async ({code,name,idSpecialty}:Specialty) => {
    const result = await database.execute(query,[name,code,idSpecialty]);
}

