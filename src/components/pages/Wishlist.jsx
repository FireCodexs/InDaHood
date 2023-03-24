import React, {useContext} from "react";
import { GlobalContext } from "./context/GlobalState";

export default function Wishlist(){
const {wishlist}= useContext(GlobalContext);
return(
    <div>
    {wishlist.map((product) =>(
        <h1>{product.title}</h1>
    ))}
    </div>
);
 
};