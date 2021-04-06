import {Router} from '../../../deps.ts';
import {
    getTopics,
    addTopic,
    updateTopic,
    getTopic,
    desactiveTopic
} from '../controllers/topicsController.ts';

export default  (router:Router) => {
    router.get('/topics',getTopics);

    router.get('/topics/:topic',getTopic);

    router.post('/topics',addTopic);

    router.put('/topics/:idTopic',updateTopic);

    router.delete('/topics/:idTopic',desactiveTopic);
}