import { StudentSchedule  } from '../../models/studentSchedule.ts';
import { addStudentToShchedule } from '../../services/students/addStudentToShchedule.ts';

export default async ({ request,response }: {request:any, response: any }) => {
    const body = await request.body({type:"json"});
    const newStudent:StudentSchedule = await body.value;
    newStudent.active = true;
    const res = await addStudentToShchedule(newStudent);
    response.body = res;
}
