import {Group} from './group.ts'
import {IPeriod} from './period.ts';
export interface Schedule {
    idSchedule?:number,
    name?:string, 
    period:IPeriod,
    group:Group
    active?:boolean
}