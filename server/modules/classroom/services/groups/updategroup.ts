import database from '../../../../database/database.ts';
import { Group } from '../../models/groups.ts';

const table = "grupos";
const query = ({name,code,idGroup,idSpeciality}:Group) =>`
UPDATE ${table} SET nombre = '${name}', codigo = '${code}', id_especialidad = ${idSpeciality}
WHERE id_grupo = ${idGroup}
`;

export default async ({name,code,idGroup,idSpeciality}:Group) => {
    const result = await database.execute(query({name,code,idGroup,idSpeciality}));
    return result;
}
