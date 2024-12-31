import { useCallback, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import "./Details.css";

const Details = () => {
  const { recipeDetailsData, setRecipeDetailsData, handleAddToFavourites, favouritesList } = useContext(GlobalContext);

  const { id } = useParams();

  const fetchRecipeDetailsData = useCallback( async () => {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const data = await res.json();
    console.log(data);
    if (data?.data?.recipe) {
      setRecipeDetailsData(data.data.recipe);
    }
  },[id, setRecipeDetailsData])
  useEffect(() => {
    fetchRecipeDetailsData();
  }, [fetchRecipeDetailsData]);

  return (
    <div>
      {recipeDetailsData && (
        <div className="recipe-details-container">
          <div className="recipe-details-image-container">
            <img src={recipeDetailsData.image_url} alt="" />
          </div>
          <div className="recipe-details-info-container">
            <p>{recipeDetailsData.publisher}</p>
            <h2>{recipeDetailsData.title}</h2>
            <button onClick={()=>handleAddToFavourites(recipeDetailsData)}>{`${favouritesList.findIndex(item=> item.id === recipeDetailsData.id) === -1 ? 'add to' : 'remove from'}`} FAVOURITES</button>
            <div>
              {recipeDetailsData?.ingredients &&
                recipeDetailsData.ingredients.map((ingredient,index) => (
                  <li key={index}>
                    {ingredient.quantity} {ingredient.unit}{" "}
                    {ingredient.description}
                  </li>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
