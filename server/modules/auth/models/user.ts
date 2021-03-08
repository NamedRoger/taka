export interface User {
    idUser?:number,
    name:string,
    pLastname?:string,
    mLastname?:string,
    username:string,
    password?:string,
    email?:string,
    active?:boolean,
    idRole:number
    curp?:string,
    matricula?:string
}