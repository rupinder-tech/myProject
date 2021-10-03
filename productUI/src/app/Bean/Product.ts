
export class Product {
    id: number;
    name:String;
    category:String;
    description:String;
    units:number;

    constructor(name:String, category:String,description:String,units:number){
        this.name = name;
        this.category = category;
        this.description = description;
        this.units = units;
    }
}