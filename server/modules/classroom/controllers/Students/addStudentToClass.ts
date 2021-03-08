import { StudentClass  } from '../../models/StudentClass.ts';
import { addStudentToClass } from '../../services/students/addStudentToClass.ts';

export default async ({ request,response }: {request:any, response: any }) => {
    const body = await request.body({type:"json"});
    const newClass:StudentClass = await body.value;
    newClass.active = true;
    const res = await addStudentToClass(newClass);
    response.body = res;
}
