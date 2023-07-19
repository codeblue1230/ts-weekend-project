// External Imports
import { v4 as uuidv4 } from "uuid"

// Internal Imports

import { User } from "./user"
import { Shop } from "./shop"
// import { Item } from "./item"
let user: User
// let item: Item
let shop: Shop

let userform:any = document.getElementById("userform-id")
userform.addEventListener("submit", (e:Event) => { e.preventDefault()
    const name = (document.getElementById("name") as HTMLInputElement).value
    const age = parseInt((document.getElementById("age") as HTMLInputElement).value)
    user = new User(uuidv4(), name, age ,[])
    console.log(user)
    shop = new Shop([])
    shop.myUser = user
    shop.defaultShopItems()})
    

let checkCart:any = document.getElementById("check-cart")
checkCart.addEventListener("click", (e:Event) => {
    if (!user) return 
    user.cartHTMLElement(e)
})

userform.addEventListener("submit", (e:Event) => { e.preventDefault()
    let cartDiv:any = document.getElementById("test-add-cart")
    cartDiv.style.display = "block"
})

let cartButton:any = (document.getElementById("add-button") as HTMLInputElement)
cartButton.addEventListener("click", (e:Event) => { e.preventDefault()
    const itemName = (document.getElementById("add-input") as HTMLInputElement).value
        console.log(itemName)
        for (let item of shop.items) {
            if (item.name === itemName) {
                user.addToCart(item)
                let addToCart:any = document.getElementById("add-to-cart")
                addToCart.innerHTML += `<p>${item.name} has been added to your cart</p>`
            }
        }
})

