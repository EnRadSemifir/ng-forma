import { Resource } from './../../api/resource';

export class Adress implements Resource<string>{
    constructor(public num?: number, public street?: string, city?: string, public id?: string) { }
}
