import {users} from '../../consts.ts'

const query = (idUser: number, password:string ) => `
UPDATE ${users.table} SET password ='${password}' WHERE id_usuario = ${idUser}
`;

export default async (idUser: number, password: string) => {
    const res = await (query(idUser,password));
    return res;
}
 

