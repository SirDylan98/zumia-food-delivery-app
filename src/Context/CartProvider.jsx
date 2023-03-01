import React, { createContext, useContext, useState } from 'react'



const CartContext  = createContext()

export const CartContextProvider = ({children})=>{
    const prevCartItems = JSON.parse( localStorage.getItem("cartItems"))
    const [currentCart, setCurrentCart]= useState([]);

    console.log("My Persisted Data is here",prevCartItems)
    console.log("this is my current Cart",currentCart)
    
    localStorage.setItem("cartItems", JSON.stringify(currentCart))
    function addToCart(item){
        console.log("hey hey item recieved in the context", item)
        setCurrentCart([...currentCart,item])

    }
    function removeFromCart(id){
        const removed=currentCart.filter(item=>{return item.id!==id})
        setCurrentCart(removed)
        console.log("deleted successfully")
    }

    return <CartContext.Provider value={{currentCart,addToCart,removeFromCart}}>
        {children}
    </CartContext.Provider>

}
export const CartProvider = ()=>{
    return useContext(CartContext)
}
