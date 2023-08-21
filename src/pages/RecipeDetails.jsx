import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    DetailsWrapper,
    Button,
    Info,
} from "../components/styled-components/styledComps";
import Error from "./Error";

const RecipeDetails = () => {
    const [recipeDetails, setRecipeDetails] = useState({});
    const [activeTab, setActiveTab] = useState("instructions");

    const params = useParams();
    useEffect(() => {
        getRecipeDetails(params.id);
        // console.log(recipeDetails)
    }, [params.id]);

    const getRecipeDetails = async (id) => {
        //using localStorage
        // const getRecipesDetails = localStorage.getItem("recipesDetails");
        // if (getRecipeDetails) {
        //     console.log(getRecipesDetails);
        //     setRecipeDetails(JSON.parse(getRecipesDetails));
        // } else {
        //     const res = await fetch(
        //         `https://api.spoonacular.com/recipes/${id}/information?apiKey=${import.meta.env.VITE_API_KEY
        //         }`
        //     );
        //     const data = await res.json();
        //     // setRecipeDetails(data) //this is not in an array
        //     localStorage.setItem("recipesDetails", JSON.stringify(data));
        //     setRecipeDetails(JSON.parse(getRecipesDetails));
        // }
        //using fetch
        const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${import.meta.env.VITE_API_KEY}`);
        const data = await res.json();
        console.log(data)
        setRecipeDetails(data)
        // console.log(recipeDetails)
    };

    return (
        <>
            {recipeDetails.id === Number(params.id) ?
                <DetailsWrapper>
                    <div className="recipe-main">
                        <h2>{recipeDetails.title}</h2>
                        <img src={recipeDetails.image} alt={recipeDetails.title} />
                    </div>
                    <Info className="recipe-info">
                        <div className="btns">
                            <Button
                                className={activeTab === "instructions" && "active"}
                                onClick={() => setActiveTab("instructions")}
                            >
                                Instructions
                            </Button>
                            <Button
                                className={activeTab === "ingredients" && "active"}
                                onClick={() => setActiveTab("ingredients")}
                            >
                                Ingredients
                            </Button>
                        </div>
                        <div className="recipe-summary">
                            {activeTab === "instructions" &&
                                <>
                                    <p dangerouslySetInnerHTML={{ __html: recipeDetails.summary }}></p>
                                    <h4>{`How to make ${recipeDetails.title}?`}</h4>
                                    <p dangerouslySetInnerHTML={{ __html: recipeDetails.instructions }}></p>
                                </>
                            }
                            {activeTab === "ingredients" &&
                                <>
                                    <h4>{`Ingredients of ${recipeDetails.title}`}</h4>
                                    <ul className="ingredients-list">
                                        {
                                            recipeDetails.extendedIngredients.map((ingredient) => (
                                                <li key={ingredient.id}>{ingredient.original}</li>
                                            ))
                                        }
                                    </ul>
                                </>
                            }
                        </div>
                    </Info>
                </DetailsWrapper>
                :
                <Error msg={`A recipe with the id ${params.id} does not exist.`} />
            }
        </>
    );
};

export default RecipeDetails;
