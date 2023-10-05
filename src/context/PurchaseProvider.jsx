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


  // The function to Add the products to the cart
  const onAdd = (product,quantity) => {
    console.log(` pROduct id is ${product}`)
    const CheckProductInCart = cartItems.find((item)=> item.id === product.id)

    setTotalPrice((prev) => prev + product.price * quantity)
    setTotalQuantities((prev)=> prev + quantity)


    // If the product already exists in the cart
     if(CheckProductInCart) {
        const updatedCartItems = cartItems.map((cartProduct) => {
          if(cartProduct.id === product.id) return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity
          }
         }
    
         )
    
         setCartItems(updatedCartItems)
         // If the product does not already exist in the cart
     } else {

    

      setCartItems([...cartItems, {...product}])

     }
     product.quantity = product.quantity - quantity
     toast.success(`${qty} ${product.name} added to the cart.`)














    
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
        incQty,
        decQty,
        onAdd
      }} >
     {children}
   </PurchaseContext.Provider>
  )



}




export default PurchaseContext