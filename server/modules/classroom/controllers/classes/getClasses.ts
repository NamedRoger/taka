import { getClass } from '../../services/classes/classServices.ts';

export default async ({ response }: { response: any }) => {
    try{
        const classes = await getClass();

        response.status = 200;
        response.body = classes;
    }catch(e){
        response.status = 400;
        response.body = {
            error:e.message
        };
    }
}