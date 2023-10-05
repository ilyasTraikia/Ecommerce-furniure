import { useContext } from "react"
import PurchaseContext from "../context/PurchaseProvider"


const usePurchase = () => {
    return useContext(PurchaseContext)
}

export default usePurchase