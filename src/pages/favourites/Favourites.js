import { useContext } from "react"
import "./Favourites.css"
import { GlobalContext } from "../../context/GlobalState"
import RecipeItem from "../../components/recipe-item/RecipeItem"

const Favourites = () => {
    const {favouritesList} = useContext(GlobalContext)
  return (
    <div className="favourites-container">
      {favouritesList?.length > 0 &&
        favouritesList.map((recipeItem) => (
          <div key={recipeItem.id}>
            <RecipeItem recipeItem={recipeItem} />
          </div>
        ))}
    </div>
  )
}

export default Favourites
