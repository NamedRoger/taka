import database from '../../../../database/database.ts';
import { Topic } from '../../models/topic.ts';

const table = "materias";

const query = ({name,code,active}:Topic) => `
INSERT INTO ${table} (nombre,codigo,activo) 
VALUES ('${name}','${code}',${active})
`;

export default async ({code,name,active}:Topic) => {
    const result = await database.execute(query({name,code,active}));
    if(result.affectedRows === 0) throw Error("No se insertó ningun registro");
    return result;
}