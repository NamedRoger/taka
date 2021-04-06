import {Router} from '../../../deps.ts';
import { authetincation, authorization } from '../../../middlewares/mod.ts';
import {
    getTopics,
    addTopic,
    updateTopic,
    getTopic,
    desactiveTopic
} from '../controllers/topicsController.ts';

export default  (router:Router) => {
    router.get('/topics',authetincation,async (c,n) =>{ await authorization(c,n,"admin")} ,getTopics);

    router.get('/topics/:topic',authetincation,async (c,n) =>{ await authorization(c,n,"admin")} ,getTopic);

    router.post('/topics',authetincation,async (c,n) =>{ await authorization(c,n,"admin")} ,addTopic);

    router.put('/topics/:idTopic',authetincation,async (c,n) =>{ await authorization(c,n,"admin")} ,updateTopic);

    router.delete('/topics/:idTopic',authetincation,async (c,n) =>{ await authorization(c,n,"admin")} ,desactiveTopic);
}