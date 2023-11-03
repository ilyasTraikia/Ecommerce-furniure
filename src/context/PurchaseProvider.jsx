import { createContext, useState,useEffect } from "react";
import {toast} from 'react-hot-toast'


const PurchaseContext = createContext({})

export const PurchaseProvider = ({children}) => {






    // The state components
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(0);
    console.log(`Qte : ${qty}`)
 
    console.log(`cartItems are : ${JSON.stringify(cartItems)}`)


   const [OutOfStockProducts, setOutOfStockProducts] = useState([{id : 0,isOutOfStock :false}])
  // console.log(`out of Stock products Rn are : ${JSON.stringify(OutOfStockProducts)}`)




   let foundProduct;
   let foundOutOfStockProduct;
















  // Functions to update the quantity state variable   
  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  }

  const decQty = () => {
    setQty((prevQty) => {
      if(prevQty - 1 <= 0) return 0;
     
      return prevQty - 1;
    });
  }



















 // the function to update a cart item if it already exists in the cart
  function updateCartItem(id, itemAttributes) {
    var index = cartItems.findIndex(product=> product.id === id);
    if (index === -1)
       console.log("Error Here index id -1")
    else{
      setCartItems(
        [
           ...cartItems.slice(0,index),
           Object.assign({}, cartItems[index], itemAttributes),
           ...cartItems.slice(index+1)
        ]
      );
    }
  }






















  // The function to Add the products to the cart
  const onAdd = (product,quantity) => {
  
    const CheckProductInCart = cartItems.find((item)=> item.id === product.id)

    setTotalPrice((prev) => prev + product.price * quantity)
    setTotalQuantities((prev)=> prev + quantity)

    // If the product already exists in the cart
     if(CheckProductInCart) {
        // const updatedCartItems = cartItems.map((cartProduct) => {
        //   if(cartProduct.id === product.id) return {
        //     ...cartProduct,
        //     quantity: cartProduct.quantity + quantity
   
        //   }
        //  }
        //  )
        updateCartItem(product.id,{CartQuantity : CheckProductInCart.CartQuantity + quantity})
        // setCartItems([...cartItems,{...product}])
         // If the product does not already exist in the cart
     } else {

    

      setCartItems([...cartItems, {...product,quantity:qty,CartQuantity:qty,OriginalQuantity:product.quantity}])

     }
     product.quantity = product.quantity - quantity
     toast.success(`${qty} ${product.name} added to the cart.`)
  }




















  // The function to remove an item from the cart 
  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item.id === product.id);
    const newCartItems = cartItems.filter((item) => item.id !== product.id);
    
   
    const newOutOfStockItems = OutOfStockProducts.filter((item) => item.id !== product.id);
    setOutOfStockProducts(newOutOfStockItems)

    setTotalPrice((prevTotalPrice) => prevTotalPrice -foundProduct.price * foundProduct.CartQuantity);
    setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.CartQuantity);
    setCartItems(newCartItems);
  }














  return (
    <PurchaseContext.Provider 
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        setQty,
        incQty,
        decQty,
        OutOfStockProducts,
        setOutOfStockProducts,
        onAdd,
        onRemove
      }} >
     {children}
   </PurchaseContext.Provider>
  )



}




export default PurchaseContext