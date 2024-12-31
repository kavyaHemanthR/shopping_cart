import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favouritesList, setFavouritesList] = useState([]);
  const navigate = useNavigate();

  const fetchRecipeList = async () => {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
    );
    const data = await res.json();

    if (data?.data?.recipes?.length > 0) {
        setFilteredRecipes(data.data.recipes)
        setSearchParam('')
        navigate("/")
    };
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchRecipeList();
  };
  const handleAddToFavourites = (recipeItem) => {
    let cpyFavouritesList = [...favouritesList];
    let index = cpyFavouritesList.findIndex(
      (item) => item.id === recipeItem.id
    );
    if (index === -1) {
      cpyFavouritesList.push(recipeItem);
    } else {
      cpyFavouritesList.splice(index, 1);
    }

    setFavouritesList(cpyFavouritesList);
    console.log(favouritesList);
  };

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        filteredRecipes,
        recipeDetailsData,
        setRecipeDetailsData,
        favouritesList,
        setFavouritesList,
        handleAddToFavourites,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
