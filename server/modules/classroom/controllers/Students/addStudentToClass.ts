import { StudentCalss  } from '../../models/studentClass.ts';
import { addStudentToClass } from '../../services/students/studentsServices.ts';

export default async ({ request,response }: {request:any, response: any }) => {
    const body = await request.body({type:"json"});
    const newClass:StudentCalss = await body.value;
    const res = await addStudentToClass(newClass);
    response.body = res;
}
