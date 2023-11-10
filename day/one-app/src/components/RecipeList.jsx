import React, { useState, useEffect } from 'react';

function RecipeList() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('/api/recipes')
            .then(response => response.json())
            .then(data => setRecipes(data));
    }, []);

    return (
        <div>
            {recipes.map(recipe => (
                <div key={recipe._id}>
                    <h2>{recipe.title}</h2>
                    <p>{recipe.ingredients.join(', ')}</p>
                    <p>{recipe.instructions}</p>
                </div>
            ))}
        </div>
    );
}

export default RecipeList;
