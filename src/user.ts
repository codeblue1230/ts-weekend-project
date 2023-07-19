// Internal Imports
import { Item } from "./item"
// import { Shop } from "./shop"

// External Imports
// import { v4 as uuidv4 } from "uuid"

// User Class

export class User {

    static theUser: User | undefined 

    constructor (
        private _id: string,
        private _name: string,
        private _age: number,
        private _cart: Item[]
    ) {}

    public get cart(): Item[] {
        return this._cart;
    }
    public set cart(value: Item[]) {
        this._cart = value;
    }
    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }

    addToCart(item:Item):void {
        this.cart.push(item)
        console.log(this.cart)
    }

    removeFromCart(item:Item):void {
        this.cart = this.cart.filter((test) => test !== item)
    }    
    
    removeQuantityFromCart(item:Item, quantity:number):void {
        let index = 0
        while (index < this.cart.length && quantity > 0) {
            if (this.cart[index].name === item.name) {
                this.cart.splice(index, 1)
                quantity -= 1
            } else {
                index += 1
            }
        }
    }

    cartTotal():number {
        let total = 0
        for (let i of this.cart) {
            total += i.price
        }
        return total
    }

    printCart():void {
        let itemList = []
        for (let item of this.cart) {
            itemList.push(item.name)
        }
        console.log(itemList)
    }

    cartHTMLElement(event:Event) {
        event.preventDefault()
        console.log(this.cart)
        let total:number = 0
        let displayedCart:string[] = []
        const cartContents:any = document.getElementById("insert-cart")
        if (this.cart.length == 0) {
            const emptyCart:any = document.getElementById("insert-cart")
            emptyCart.innerHTML += `<p>Your cart is Empty</p>`
        } else {
            for (let i of this.cart) {
                displayedCart.push(i.name)
                total += i.price
            }
            cartContents.innerHTML += `<p>Your cart contains: ${displayedCart}. This costs a total of $${total}.</p>`
        } 
    }    

} 