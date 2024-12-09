export class Todo{
    constructor(id,title,description,duedate,priority)
    {
        this.id=id;
        this.title=title;
        this.description=description;
        this.duedate=duedate;
        this.priority=priority;
    }
    
    toString(){
        return "id : "+this.id+"\ntitle : "+this.title+"\ndescription : "+this.description
        +"\nduedate : "+this.duedate+"\npriority : "+this.priority
        ;
    }
}