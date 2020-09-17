import { Resource } from '../../api/resource';

export class Tech implements Resource<string>{
    constructor(public id: string, public name: string) { }
}
