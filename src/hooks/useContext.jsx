import { createContext } from "react";
const DataCardContext = createContext()
import { productGoods } from '../data/productsData'
export default function ContextCard({ children }) {
const data = productGoods
const a = data.filter((e) => e.cardAdded == "yes" )
return (
        <DataCardContext.Provider>
            
            {children}
        </DataCardContext.Provider>
    )
}