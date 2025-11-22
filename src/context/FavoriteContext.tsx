import { createContext, useState } from "react";

export const FavoriteContext = createContext()

export function FavoriteProvider({children}){
    const [favorites, setFavorites] = useState([])
    //add a favorite
    function addFavorite(recipe){
        setFavorites((prev) => [...prev,recipe])

    }
    // //remove a favorite
    // function removefavorite() {

    // }
    // //is it a faorite
    // function isFavorite(){

    // }


    return(
        <FavoriteContext.Provider value={{favorites, addFavorite}}>
            {children}
        </FavoriteContext.Provider>
    )
}