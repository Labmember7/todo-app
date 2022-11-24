export class Todo{
    name: string = "";
    iscompleted: boolean = false;
    constructor (name: string, iscompleted: boolean){
        this.name = name;
        this.iscompleted = iscompleted;
    }
}