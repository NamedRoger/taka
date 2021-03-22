import {Group} from './group.ts'
import {IPeriod} from './period.ts';
export interface Schedule {
    idSchedule?:number,
    name?:string, 
    idPeriod:number,
    period?:IPeriod,
    idGroup:number,
    group?:Group,
    active?:boolean
}