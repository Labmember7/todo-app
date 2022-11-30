export class Todo{
    id: number = -1;
    name: string = "";
    isDone: boolean = false;
    created: string = "";
    constructor(name: string, iscompleted: boolean) {
        this.name = name;
        this.isDone = iscompleted;
    }
}