import { Router } from "https://deno.land/x/oak/mod.ts";

export const periodsRoutes = (router:Router) => {
    router.get('/periods');

    router.get('/periods/:idPeriod');

    router.post('/periods');

    router.put('/periods/:idPeriod');

    router.delete('/periods/:idPeriod');
}