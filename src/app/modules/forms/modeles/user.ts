import { Resource } from './../../api/resource';
import { Adress } from './adress';

export class User implements Resource<string>{
    constructor(public lastname?: string, public firstname?: string, adress?: Adress, public id?: string) { }
}
