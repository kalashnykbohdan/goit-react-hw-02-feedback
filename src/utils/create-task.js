import {uuid} from 'uuidv4';

const lorem = new LoremIpsum();

export default function createTask(){
    return{
        id: uuid(),

    }
}

