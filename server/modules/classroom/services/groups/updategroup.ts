import database from '../../../../database/database.ts';
import { Group } from '../../models/groups.ts';

const table = "grupos";
const query = ({name,code}:Group) =>`
UPDATE ${table} SET nombre = '${name}', codigo = '${code}'
WHERE id_grupo = ${query}
`;

export default async ({name,code}:Group) => {
    const result = await database.execute(query({name,code}));
    return result;
}
