export class Recipe
{
    public id: number;
    public name: string;
    public category: string;
    public directions: string;
    public numberOfServings: string;
    public author: string;

    public ingredient: Ingredient[];
}

export class Ingredient
{
    public id : number;
    public name : string;
}