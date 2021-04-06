import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  login
} from '../controllers/loginController.ts';

export default  (router:Router) => {
    router.post('/auth/login',login);
}