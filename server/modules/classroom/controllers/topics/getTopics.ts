import {getTopics} from '../../services/topics/topicsService.ts'

export default async ({ response }: { response: any }) => {
    try{
        const topics = await getTopics();

        response.status = 200;
        response.body = topics;
    }catch(e){
        response.status = 400;
        response.body = {
            error:e.message
        };
    }
}