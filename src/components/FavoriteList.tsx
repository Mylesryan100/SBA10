import {useContext} from "react"
import {FavoriteContext} from '../context/FavoriteContext'



function FavoriteList() {
    const  {favorites} = useContext(FavoriteContext)
    console.log(favorites)
    return(
        <>
        <h2>FavoriteList</h2>
        
        </>
    )
}

export default FavoriteList