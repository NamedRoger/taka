import {Router} from '../../../deps.ts';

import {
    getGroup,
    getGroups,
    addGroup,
    desactiveGroup,
    updateGroup
} from '../controllers/groups/groupControllers.ts';

export default  (router:Router) => {
    router.get('/groups',getGroups);

    router.get('/groups/:group',getGroup);

    router.post('/groups',addGroup);

    router.put('/groups/:idGroup',updateGroup);

    router.delete('/gruops/:idGroup',desactiveGroup);
}