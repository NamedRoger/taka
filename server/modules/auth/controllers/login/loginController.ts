import * as userService from '../../services/users/userServices.ts';
import {oak} from  '../../../../dep.ts';
import {Login} from '../../models/index.ts';

const login = async (ctx:any) => {
    const {response,request}:{response:any,request:any} = ctx;
    const body = await request.body({type:"json"});
    const loginModel:Login = await body.value;
}

const logut = async () => {

}

export {
    login,
    logut
}