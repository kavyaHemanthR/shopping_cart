import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import RecipeItem from "../../components/recipe-item/RecipeItem";

import "./Home.css";
const Home = () => {
  const { filteredRecipes } = useContext(GlobalContext);
  console.log(filteredRecipes);

  return (
    <div className="home-container">
      {filteredRecipes?.length > 0 &&
        filteredRecipes.map((recipeItem) => (
          <div key={recipeItem.id}>
            <RecipeItem recipeItem={recipeItem} />
          </div>
        ))}
    </div>
  );
};

export default Home;
