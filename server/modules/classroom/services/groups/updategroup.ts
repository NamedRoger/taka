import database from '../../../../database/database.ts';
import { Group } from '../../models/groups.ts';

const table = "grupos";
const query = ({name,code,idGroup}:Group) =>`
UPDATE ${table} SET nombre = '${name}', codigo = '${code}'
WHERE id_grupo = ${idGroup}
`;

export default async ({name,code,idGroup}:Group) => {
    const result = await database.execute(query({name,code,idGroup}));
    return result;
}
