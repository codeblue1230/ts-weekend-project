// Internal Imports
import { User } from "./user";
import { Item } from "./item";

// External Imports
import { v4 as uuidv4 } from "uuid"

export class Shop {

    private _myUser: User | undefined; 

    public get myUser(): User | undefined {
        return this._myUser;
    }
    public set myUser(value: User | undefined) {
        this._myUser = value;
    }

    constructor (
        private _items: Item[]
    ) {}

    public get items(): Item[] {
        return this._items;
    }
    public set items(value: Item[]) {
        this._items = value;
    }

    defaultShopItems() {
        let shopItems:Item[] = []
        let oranges:Item = new Item(uuidv4(), "Oranges", 5, "A bag of sweet oranges")
        let strawberry:Item = new Item(uuidv4(), "Strawberries", 3, "A carton of bright red strawberries")
        let blueberry:Item = new Item(uuidv4(), "Blueberries", 2, "A carton of plump blueberries")
        let raspberry:Item = new Item(uuidv4(), "Raspberry", 4, "A carton of the best raspberries you've ever eaten")
        let mango:Item = new Item(uuidv4(), "Mangos", 1, "A mango, you should grab one")
        let apple:Item = new Item(uuidv4(), "Apples", 1, "A sweet apple, take on home")
        let cherry:Item = new Item(uuidv4(), "Cherries", 2, "A carton of plump cherries")
        let lemon:Item = new Item(uuidv4(), "Lemons", 1, "When life gives you lemons, go to Coding Temple")
        shopItems.push(oranges, strawberry, blueberry, raspberry, mango, apple, cherry, lemon)
        this.items = shopItems
        console.log(this.items)
        for (let i of this.items) {
            const newElement:any = document.getElementById("insert-shop")
            newElement.innerHTML += `<p>${i.name}: $${i.price}</p>`
        }
    }

}