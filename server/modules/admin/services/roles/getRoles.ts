import database from '../../../../database/database.ts';


const query = () => `
SELECT 
    id_rol as idRole,
    nombre as name,
    codigo as code,
    activo as active
FROM roles
WHERE activo = ${true}
`;

export default  async () => {
    const res = await database.query(query());
    return res;
}