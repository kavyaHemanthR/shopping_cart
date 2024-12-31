
import { Link } from "react-router-dom"
import "./RecipeItem.css"
const RecipeItem = ({recipeItem}) => {
  return (
    <div className="recipe-item-container">
        <div className="recipe-item-image-container">
            <img src={recipeItem.image_url} alt=""/>
        </div>
        <div className="recipe-item-info-container">
            <p>{recipeItem.publisher}</p>
            <h4>{recipeItem.title}</h4>
            <Link to={`/recipe-item/${recipeItem.id}`} className="recipe-item-link">RECIPE DETAILS</Link>
        </div>
        
    </div>
  )
}

export default RecipeItem
