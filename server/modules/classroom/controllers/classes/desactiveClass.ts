import { desactiveClass } from '../../services/class/classService.ts';

export default async ({ response,params }: { response: any,params:any }) => {

    try{
        const Class = await desactiveClass(Number(params.idClass));
        response.status = 204;
    }catch(e){
        response.status = 400;
        response.body = {
            error:e.message
        };
    }
}
