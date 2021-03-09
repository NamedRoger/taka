import { getClasses } from '../../services/getClasses/classService.ts';

export default async ({ response }: { response: any }) => {
    try{
        const classes = await getClasses();

        response.status = 200;
        response.body = classes;
    }catch(e){
        response.status = 400;
        response.body = {
            error:e.message
        };
    }
}