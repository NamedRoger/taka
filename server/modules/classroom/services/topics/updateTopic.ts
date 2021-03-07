import database from '../../../../database/database.ts';
import { Topic } from '../../models/topic.ts';

const table = "materias";
const query = ({name,code,idTopic}:Topic) =>`
UPDATE ${table} SET nombre = '${name}', codigo = '${code}'
WHERE id_materia = ${idTopic}
`;

export default async ({name,idTopic,code}:Topic) => {
    const result = await database.execute(query({name,code,idTopic}));
    return result;
}